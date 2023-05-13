'use client'

import { db } from "@component/firebase"
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useState, FormEvent } from "react"
import { toast } from "react-hot-toast"

type Props = {
    chatId: string
  }

function ChatInput({ chatId }: Props) {
    const [prompt, setPrompt] = useState<string>('')
    const { data: session } = useSession()

    const model = 'text-davinci-003'

    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!prompt) return

        const input = prompt.trim()
        setPrompt('')
        
        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name!}`,
            }
        }

        await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), message)

        // loading toast notification
        const notification = toast.loading('Christian is thinking...')


        await fetch('/api/askQuestion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt:input, chatId, model, session
            })
        }).then(() => {
            //success toast notification
            toast.success('Christian has responded!', {
                id: notification
            })
        })
    }

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
        <form 
        onSubmit={sendMessage}
        className="p-5 space-x-5 flex">
            <input
            className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
            disabled={!session}
            onChange={(e) => setPrompt(e.target.value)} 
            value={prompt}
            type="text"
            placeholder="Enter prompt...">
            </input>
            <button 
            className="bg-[#11a37f] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
            disabled={!prompt || !session}
            type="submit">
                <PaperAirplaneIcon 
                className="h-4 w-4 -rotate-45"/>
            </button>
        </form>
        <div>
            {/* ModelSelect */}
        </div>
    </div>
  )
}

export default ChatInput