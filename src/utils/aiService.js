// Groq AI Integration Service for DSA Kahani
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || '';

export async function generateQuestionStoryAndCode(title, problemDescription, language = 'Python') {
  if (!GROQ_API_KEY) {
    throw new Error('Groq API Key missing! Please set VITE_GROQ_API_KEY in your .env file or Vercel Environment Variables.');
  }

  const prompt = `You are a World-Class Indian DSA Mentor who teaches computer science problems using UNIQUE real-life analogies, clean code, and dual-language explanations.

Problem Title: "${title}"
Problem Context: "${problemDescription || title}"
Target Code Language: "${language}"

Generate a JSON object containing complete learning content. Return EXACTLY valid JSON with these fields:

1. "approaches": Array of 2 to 4 algorithm/data-structure tags (e.g. ["Two Pointers", "Sorting"]).

2. "problemDescription": Clean English problem description including example inputs/outputs and constraints.

3. "hindiDescription": A clear, easy-to-understand Hindi/Hinglish translation of the problem description with example inputs/outputs.

4. "mindfulStory": A highly structured, step-by-step PURE HINGLISH story string using readable markdown:
   - 🎭 Asli Zindagi Ka Real Metaphor: A unique real-life story matching this problem context.
   - 📌 Step-by-Step Visual Story:
     - STEP 1 (Setup & Roles): Define initial variables & pointers as physical roles.
     - STEP 2 (Main Loop & Logic): Explain decision-making step by step.
     - STEP 3 (Final Answer): Explain returning the result.
   - 🔁 Step-by-Step Live Iteration Walkthrough (MANDATORY AT LEAST 3 ITERATIONS IN HINGLISH STORY MODE):
     - Give a concrete sample input (e.g. nums = [2, 7, 11, 15], target = 9).
     - Walkthrough AT LEAST 3 iterations step-by-step in Hinglish story format:
       - 🔁 Iteration 1: "Pehle iteration mein hum..." (Show initial values, character action, decisions & state changes).
       - 🔁 Iteration 2: "Dusre iteration mein hum..." (Show next element check, variable updates, decisions).
       - 🔁 Iteration 3: "Teesre iteration mein hum..." (Show third step execution, target hit or state update).
   - ⚠️ Khas Edge Cases: Boundary conditions in clear Hinglish.

5. "unforgettableBottleneck": Must be a SINGLE STRING formatted as:
   "⚡ #1 Critical Trap: [Describe the exact TLE/overflow/index trap]\n\n💡 Memory Trick: [1-sentence shortcut to remember the logic]"

6. "rawCode": Optimal solution code written STRICTLY in ${language}.
   Must include BOTH narrative step comments AND a detailed "RUN & DEBUG TRACE" comment block in Hinglish debugging style:
   - Include a top or inline comment block showing step-by-step execution for AT LEAST 3 ITERATIONS:
     // 🛠️ RUN & DEBUG TRACE (Hinglish Debugging Log):
     // Sample Input: [Provide sample input]
     // --------------------------------------------------
     // 🔍 Iteration 1: [variable values] -> [condition check in Hinglish] -> [action/update]
     // 🔍 Iteration 2: [variable values] -> [condition check in Hinglish] -> [action/update]
     // 🔍 Iteration 3: [variable values] -> [condition check in Hinglish] -> [action/update]
     // --------------------------------------------------
   - Also include line-by-line comments linking to story steps:
     // 📍 STEP 1 (Story se): [Variable setup in Hinglish]
     // 📍 STEP 2 (Story se): [Main loop decision in Hinglish]
     // 📍 STEP 3 (Story se): [Return value in Hinglish]

Respond ONLY with a valid JSON object matching this schema.`;

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.65,
        response_format: { type: 'json_object' }
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Groq API Error (${res.status}): ${errText}`);
    }

    const data = await res.json();
    const contentText = data.choices?.[0]?.message?.content;
    if (!contentText) {
      throw new Error('Received empty response from Groq AI.');
    }

    const parsed = JSON.parse(contentText);

    // Normalize bottleneck if returned as object to avoid [object Object] bug
    if (parsed.unforgettableBottleneck && typeof parsed.unforgettableBottleneck === 'object') {
      const b = parsed.unforgettableBottleneck;
      parsed.unforgettableBottleneck = `⚡ #1 Critical Trap: ${b.trap || b.bottleneck || b['#1 Critical Bottleneck Trap'] || ''}\n\n💡 Memory Trick: ${b.trick || b.shortcut || b['Unforgettable Memory Trick'] || ''}`;
    }

    return parsed;
  } catch (error) {
    console.error('Groq AI Generation Error:', error);
    throw error;
  }
}
