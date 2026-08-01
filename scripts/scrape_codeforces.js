import fs from 'fs';
import path from 'path';

// Fetch top rated Codeforces problems using official Codeforces API
async function scrapeCodeforces() {
  console.log(`🚀 Fetching Codeforces Problemset from official API...`);
  try {
    const res = await fetch('https://codeforces.com/api/problemset.problems');
    const json = await res.json();
    
    if (json.status !== 'OK') {
      throw new Error(`Codeforces API error: ${json.comment}`);
    }

    const { problems, problemStatistics } = json.result;
    
    // Sort by solved count (most popular problems)
    const statsMap = new Map();
    problemStatistics.forEach(s => {
      statsMap.set(`${s.contestId}-${s.index}`, s.solvedCount);
    });

    const popularProblems = problems
      .filter(p => p.tags && p.tags.length > 0)
      .map(p => ({
        ...p,
        solvedCount: statsMap.get(`${p.contestId}-${p.index}`) || 0
      }))
      .sort((a, b) => b.solvedCount - a.solvedCount)
      .slice(0, 100);

    const formatted = popularProblems.map((p, idx) => {
      let diff = "Easy";
      if (p.rating) {
        if (p.rating >= 1600) diff = "Hard";
        else if (p.rating >= 1200) diff = "Medium";
      }

      return {
        id: `cf-${p.contestId}-${p.index}`,
        platform: "Codeforces",
        title: `${p.contestId}${p.index}. ${p.name}`,
        difficulty: diff,
        approaches: p.tags.map(t => t.charAt(0).toUpperCase() + t.slice(1)),
        problemDescription: `Codeforces Problem ${p.contestId}${p.index}: ${p.name}\n\nRating: ${p.rating || 'Unrated'}\nSolved by: ${p.solvedCount} programmers.\n\nContest Problem Link: https://codeforces.com/problemset/problem/${p.contestId}/${p.index}`,
        mindfulStory: `✨ Codeforces Story for ${p.contestId}${p.index} ${p.name}:\nAnalyze the competitive programming constraint pattern and formulate physical character metaphors!`,
        unforgettableBottleneck: `⚡ CODEFORCES BOTTLENECK:\nFast I/O, integer overflow (use 64-bit int / BigInt), or off-by-one boundary constraints!`,
        rawCode: `// Codeforces C++ / JavaScript Solution for ${p.name}\nfunction solve() {\n  // Implementation\n}`,
        codeLines: [],
        isDone: false
      };
    });

    console.log(`✅ Formatted ${formatted.length} Codeforces problems!`);
    const fileContent = `export const codeforcesDataset = ${JSON.stringify(formatted, null, 2)};\n`;
    const outputPath = path.join(process.cwd(), 'src', 'data', 'codeforces.js');
    fs.writeFileSync(outputPath, fileContent, 'utf-8');
    console.log(`📁 Saved to ${outputPath}`);
  } catch (err) {
    console.error(`Error scraping Codeforces:`, err.message);
  }
}

scrapeCodeforces();
