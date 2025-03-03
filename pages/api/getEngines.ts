import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[]; 
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await openai.models.list();
    const models = response.data;

    const modelOptions = models.map((model: {id: string}) => ({
      value: model.id,
      label: model.id,
    }));

    res.status(200).json({ modelOptions }); 
  } catch (error) {
    console.error("Error fetching models:", error);
    res.status(500).json({ modelOptions: [] });
  }
}
