import { DocumentData } from "firebase/firestore"

type Props = {
    message: DocumentData
}


function Message({ message }: Props) {

    const isChristianGPT = (message.user.name === 'ChristianGPT')

  return (
    <div className={`py-5 text-white ${isChristianGPT && 'bg-[#434654]'}`}>
        <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
            <img src={message.user.avatar}
            alt={`${message.user.name} profile picture`}
            className="h-8 w-8"
            />
            <p className="pt-1 text-sm">
                {message.text}
            </p>
        </div>
    </div>
  )
}

export default Message