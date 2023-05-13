import type { NextApiRequest, NextApiResponse } from "next";

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

    res.status(200).json({answer: 'Me'})
}