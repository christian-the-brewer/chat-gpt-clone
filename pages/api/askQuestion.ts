import type { NextApiRequest, NextApiResponse } from "next";
import query from "@component/lib/queryApi";
import admin from 'firebase-admin'
import { adminDb } from "@component/firebaseAdmin";


type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    const { prompt, chatId, model, session } = req.body

    if (!prompt) {
        res.status(400).json({answer: 'Please enter a prompt.'})
        return
    }

    if (!chatId) {
        res.status(400).json({answer: 'Please enter a chat ID.'})
        return
    }

    const response = await query(prompt, chatId, model)

    const message: Message = {
        text: response || 'Christian does not know!',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id:'ChristianGPT',
            name: 'ChristianGPT',
            avatar: 'https://links.papareact.com/89k'
        }

    }

    await adminDb
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message)

    res.status(200).json({ answer: message.text })
}