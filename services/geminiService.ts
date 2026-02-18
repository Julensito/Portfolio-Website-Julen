
import { GoogleGenAI } from "@google/genai";

export const askGemini = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userPrompt,
    config: {
      systemInstruction: `You are an AI assistant for a professional creative portfolio. 
      The portfolio belongs to a specialist in 3D Modeling (Blender, Substance), Development (Unreal Engine, Unity), 
      and Design (Photoshop, Premiere). 
      Be professional, minimalist, and helpful. 
      Answer questions about the creator's skills and experience.`,
      temperature: 0.7,
    },
  });
  
  const response = await model;
  return response.text || "Lo siento, no he podido procesar tu solicitud.";
};
