import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text).catch((err) => `Christian was unable to answer. (Error: ${err.message})`)
    console.log({res:res})
    return res
}

export default query