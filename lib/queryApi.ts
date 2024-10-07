import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  try {
    const response = await openai.completions.create({
      model,
      prompt,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
    });

    return response.choices[0]?.text?.trim();
  } catch (err: any) {
    console.error(`Error fetching response from OpenAI: ${err.message}`);
    return `ChatGPT was unable to find an answer for that! (Error: ${err.message})`;
  }
};

export default query;
