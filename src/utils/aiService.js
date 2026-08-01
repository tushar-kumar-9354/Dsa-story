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
   - ⚠️ Khas Edge Cases: Boundary conditions in clear Hinglish.

5. "unforgettableBottleneck": Must be a SINGLE STRING formatted as:
   "⚡ #1 Critical Trap: [Describe the exact TLE/overflow/index trap]\n\n💡 Memory Trick: [1-sentence shortcut to remember the logic]"

6. "rawCode": Optimal solution code written STRICTLY in ${language}.
   Include line comments that EXPLICITLY link back to the story steps:
   // 📍 STEP 1 (Story se): [Describe variable setup in Hinglish]
   // 📍 STEP 2 (Story se): [Describe main loop decision in Hinglish]
   // 📍 STEP 3 (Story se): [Describe return value in Hinglish]

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
