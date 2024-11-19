import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const query = async (prompt: string, chatId: string, model: string) => {
  openai.completions
    .create({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      return response.choices[0]?.text || null;
    })
    .catch(
      (error) => 
        `ChatGPT was unable to find an answer for that! (Error: ${error.message})`
    );
  return null;
};

export default query;
