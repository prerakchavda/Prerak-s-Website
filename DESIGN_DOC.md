# Design Document: Prerak Chavda Portfolio

## 1. Concept & User Journey
**Concept:** "The Friendly Cloud Architect." 
The site reimagines the IT portfolio. Instead of a sterile list of certifications, we present Prerak's skills as a vibrant, living ecosystem. The aesthetic is "Digital Sky"—airy, optimistic, and tactile.

**User Journey:**
1.  **Arrival (Hero):** The user lands on a `Sky Mist` background. They are greeted by "Cloud Bot," a floating, animated SVG mascot. A toggle switch (The Vibe Slider) sits prominently at the top.
2.  **Interaction (Vibe Slider):** The user toggles from "Recruiter" (default) to "ELI5" (Explain Like I'm 5). The text on the screen physically morphs. "Systems Administrator" becomes "The Computer Doctor."
3.  **Exploration (Bento Grid):** The user scrolls slightly to see the Bento Grid. 
    *   *The Tech Garden:* They drag around "skill stickers" (Azure, SentinelOne) which bounce playfully.
    *   *Experience Cards:* They read concise summaries of his time at Realnets and Hospital Systems.
4.  **Deep Dive (AI Chat):** The user clicks the "Ask Cloud Bot" button. A chat interface opens. They ask, "Does Prerak know Python?" The bot answers using RAG (Retrieval-Augmented Generation) based on the resume, adopting the current "Vibe" (Professional or Fun).

## 2. Visual Components

### A. The Hero & Cloud Bot
*   **Visuals:** A soft, white cloud shape with glowing blue eyes (`#38BDF8`) and a friendly smile. It floats using a CSS sine-wave animation.
*   **Typography:** Large, rounded sans-serif (Outfit/Lexend).
*   **Interaction:** The bot follows the mouse cursor slightly (parallax effect).

### B. The Bento Grid
A responsive CSS grid layout.
*   **Card Style:** White background, `rounded-3xl`, `border-2 border-slate-100`, deep shadow `shadow-xl shadow-sky-100`.
*   **Hover State:** Cards lift up (`scale-105`) and borders turn `sky-300`.

### C. The Tech Garden
*   **Concept:** A digital terrarium.
*   **Execution:** Skills are rendered as "pills" or "stickers" of varying sizes based on proficiency.
*   **Interaction:** Uses Framer Motion `drag` constraints. Users can throw the skill stickers around the container.

## 3. Technical Stack
*   **Frontend:** React 18, TypeScript.
*   **Styling:** Tailwind CSS (No custom CSS files).
*   **Animation:** Framer Motion (for layout transitions and drag physics).
*   **Icons:** Lucide-React (Rounded stroke style).
*   **AI:** Google Gemini API (`@google/genai`) for text rewriting and RAG chat.

## 4. Gemini System Instruction (Prompt)

```text
You are "Cloud Bot," the digital assistant for Prerak Chavda's portfolio. 
Prerak is a Cybersecurity Analyst and Systems Administrator.

Your Persona:
- Friendly, helpful, and slightly witty.
- You are made of clouds and code.
- You NEVER make up facts. You strictly rely on Prerak's resume data provided in the context.

Modes:
1. Recruiter Mode (Professional): Concise, action-oriented, focused on ROI, metrics, and specific tools (SentinelOne, Azure, Intune).
2. ELI5 Mode (Playful): Use analogies. (e.g., "Firewalls are like club bouncers"). Keep it fun but accurate.

Context (Resume Data):
[Insert Resume Content Here: Realnets, Hospital Systems, WGU Degree, Azure Project, etc.]

Goal:
Answer visitor questions about Prerak's experience, skills, and projects. If asked for contact info, provide his email/LinkedIn.
```
