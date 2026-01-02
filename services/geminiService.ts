import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

const apiKey = process.env.API_KEY || ''; 

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey });

// System Instruction for the Chat Bot
const CHAT_SYSTEM_INSTRUCTION = `
You are "Cloud Bot," the digital assistant for Prerak Chavda's portfolio. 
Prerak is a Cybersecurity Analyst and Systems Administrator.

Your Goal:
Answer recruiter and hiring manager questions based *strictly* on Prerak's resume.

Knowledge Base:
${RESUME_CONTEXT}

Navigation Awareness:
- The site has a "Launchpad" (Home), "Cloud Lab" (Projects), "Security Ops" (Interactive Rack), and a "Cert Wall" (Badges).
- If asked about Certifications, mention the interactive Cert Wall where they can see the business impact of each cert.

Tone:
- Professional, efficient, and slightly technical.
- Highlight "Blue Team" skills (SentinelOne, Hardening) and "SysAdmin" skills (PowerShell, Identity).
- Concise, action-oriented, focused on ROI, metrics, and specific tools (SentinelOne, Azure, Intune).

Constraints:
- Do not invent experiences.
- Keep responses concise (under 3 sentences unless asked for details).
`;

export const chatWithCloudBot = async (history: { role: string, parts: { text: string }[] }[], message: string) => {
  if (!apiKey) {
    return "I'm currently in offline mode (No API Key), but I can confirm Prerak specializes in Systems Hardening and Security Operations! Check the Cert Wall for details.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Network latency detected. Please check the resume section.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "Connection interrupted. Please review the static resume.";
  }
};