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
   CRITICAL MANDATORY REQUIREMENT FOR CODE COMMENTS:
   EVERY SINGLE LINE OF CODE MUST HAVE AN INLINE COMMENT (using # for Python, // for Java/C++/JS) that explains BOTH:
   a) How that exact function/method/operator works with a mini general example (e.g. 'w.split() # how split() works: text = "Python   is   fun" -> result = text.split() -> ["Python", "is", "fun"]').
   b) Exactly how that line evaluates and transforms variables for the problem's FIRST Input/Output Example.

   Example inline comment format for Python:
   'words = text.split() # how split() works: e.g. text = "Python   is   fun" -> text.split() -> ["Python", "is", "fun"] | Example 1 (text = "A man, a plan"): words = ["A", "man,", "a", "plan,"]'

   Example inline comment format for JavaScript/Java:
   'const map = new Map(); // how Map() works: stores key-value pairs e.g. map.set("a", 1) -> {"a": 1} | Example 1: map initialized as empty Map {}'

   Make sure EVERY SINGLE LINE of code in "rawCode" has this dual inline comment (how operation works with mini example + execution state on Example 1).

   Also include the top "RUN & DEBUG TRACE" comment block:
   // 🛠️ RUN & DEBUG TRACE (Hinglish Debugging Log):
   // Sample Input 1: [First Input Example]
   // --------------------------------------------------
   // 🔍 Iteration 1: [variable values] -> [condition check] -> [action/update]
   // 🔍 Iteration 2: [variable values] -> [condition check] -> [action/update]
   // 🔍 Iteration 3: [variable values] -> [condition check] -> [action/update]
   // --------------------------------------------------

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
