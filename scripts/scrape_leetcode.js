import fs from 'fs';
import path from 'path';

// LeetCode Top Interview 150 Slugs
const top150Slugs = [
  "merge-sorted-array",
  "remove-element",
  "remove-duplicates-from-sorted-array",
  "remove-duplicates-from-sorted-array-ii",
  "majority-element",
  "rotate-array",
  "best-time-to-buy-and-sell-stock",
  "best-time-to-buy-and-sell-stock-ii",
  "jump-game",
  "jump-game-ii",
  "h-index",
  "insert-delete-getrandom-o1",
  "product-of-array-except-self",
  "gas-station",
  "candy",
  "trapping-rain-water",
  "roman-to-integer",
  "integer-to-roman",
  "length-of-last-word",
  "longest-common-prefix",
  "reverse-words-in-a-string",
  "zigzag-conversion",
  "find-the-index-of-the-first-occurrence-in-a-string",
  "text-justification",
  "valid-palindrome",
  "is-subsequence",
  "two-sum-ii-input-array-is-sorted",
  "container-with-most-water",
  "3sum",
  "minimum-size-subarray-sum",
  "longest-substring-without-repeating-characters",
  "substring-with-concatenation-of-all-words",
  "minimum-window-substring",
  "valid-sudoku",
  "spiral-matrix",
  "rotate-image",
  "set-matrix-zeroes",
  "game-of-life",
  "ransom-note",
  "isomorphic-strings",
  "word-pattern",
  "valid-anagram",
  "group-anagrams",
  "two-sum",
  "happy-number",
  "contains-duplicate-ii",
  "longest-consecutive-sequence",
  "summary-ranges",
  "merge-intervals",
  "insert-interval",
  "minimum-number-of-arrows-to-burst-balloons",
  "valid-parentheses",
  "simplify-path",
  "min-stack",
  "evaluate-reverse-polish-notation",
  "basic-calculator",
  "linked-list-cycle",
  "add-two-numbers",
  "merge-two-sorted-lists",
  "copy-list-with-random-pointer",
  "reverse-linked-list-ii",
  "reverse-nodes-in-k-group",
  "remove-nth-node-from-end-of-list",
  "remove-duplicates-from-sorted-list-ii",
  "rotate-list",
  "partition-list",
  "lru-cache",
  "maximum-depth-of-binary-tree",
  "same-tree",
  "invert-binary-tree",
  "symmetric-tree",
  "construct-binary-tree-from-preorder-and-inorder-traversal",
  "construct-binary-tree-from-inorder-and-postorder-traversal",
  "flatten-binary-tree-to-linked-list",
  "path-sum",
  "sum-root-to-leaf-numbers",
  "binary-tree-maximum-path-sum",
  "binary-tree-right-side-view",
  "average-of-levels-in-binary-tree",
  "binary-tree-level-order-traversal",
  "binary-tree-zigzag-level-order-traversal",
  "minimum-absolute-difference-in-bst",
  "kth-smallest-element-in-a-bst",
  "validate-binary-search-tree",
  "number-of-islands",
  "surrounded-regions",
  "clone-graph",
  "evaluate-division",
  "course-schedule",
  "course-schedule-ii",
  "word-ladder",
  "minimum-genetic-mutation",
  "implement-trie-prefix-tree",
  "design-add-and-search-words-data-structure",
  "word-search-ii",
  "letter-combinations-of-a-phone-number",
  "combinations",
  "permutations",
  "combination-sum",
  "n-queens-ii",
  "word-search",
  "convert-sorted-array-to-binary-search-tree",
  "sort-list",
  "construct-quad-tree",
  "merge-k-sorted-lists",
  "maximum-subarray",
  "maximum-sum-circular-subarray",
  "search-insert-position",
  "search-a-2d-matrix",
  "find-peak-element",
  "search-in-rotated-sorted-array",
  "find-first-and-last-position-of-element-in-sorted-array",
  "find-minimum-in-rotated-sorted-array",
  "median-of-two-sorted-arrays",
  "kth-largest-element-in-an-array",
  "ipo",
  "find-k-pairs-with-smallest-sums",
  "find-median-from-data-stream",
  "single-number",
  "single-number-ii",
  "bitwise-and-of-numbers-range",
  "number-of-1-bits",
  "reverse-bits",
  "palindrome-number",
  "plus-one",
  "factorial-trailing-zeroes",
  "sqrtx",
  "powx-n",
  "max-points-on-a-line",
  "climbing-stairs",
  "house-robber",
  "word-break",
  "coin-change",
  "longest-increasing-subsequence",
  "triangle",
  "minimum-path-sum",
  "unique-paths-ii",
  "longest-palindromic-substring",
  "interleaving-string",
  "edit-distance",
  "maximal-square"
];

// Clean HTML to Markdown / plain text
function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<pre>/gi, '\n```\n')
    .replace(/<\/pre>/gi, '\n```\n')
    .replace(/<code>/gi, '`')
    .replace(/<\/code>/gi, '`')
    .replace(/<strong>/gi, '**')
    .replace(/<\/strong>/gi, '**')
    .replace(/<em>/gi, '*')
    .replace(/<\/em>/gi, '*')
    .replace(/<p>/gi, '\n')
    .replace(/<\/p>/gi, '')
    .replace(/<ul>/gi, '\n')
    .replace(/<\/ul>/gi, '')
    .replace(/<li>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

async function scrapeQuestion(slug) {
  const query = `
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        questionFrontendId
        title
        titleSlug
        difficulty
        content
        topicTags {
          name
        }
        codeSnippets {
          lang
          code
        }
      }
    }
  `;

  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: JSON.stringify({
        query,
        variables: { titleSlug: slug }
      })
    });

    const json = await res.json();
    const q = json.data?.question;
    if (!q) return null;

    const frontendId = q.questionFrontendId || q.questionId;
    const title = `${frontendId}. ${q.title}`;
    const approaches = q.topicTags ? q.topicTags.map(t => t.name) : ['Array'];
    const problemDescription = cleanHtml(q.content);
    const jsSnippet = q.codeSnippets ? q.codeSnippets.find(s => s.lang === 'JavaScript' || s.lang === 'TypeScript')?.code : '';

    return {
      id: `top150-${frontendId}`,
      title,
      difficulty: q.difficulty || 'Medium',
      approaches,
      problemDescription,
      mindfulStory: `✨ Mindful Story for ${title}:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.`,
      unforgettableBottleneck: `⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in ${title} (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!`,
      rawCode: jsSnippet || `// Solution for ${title}\nfunction solve() {\n  // Code implementation\n}`,
      codeLines: [],
      isDone: false
    };
  } catch (err) {
    console.error(`Failed to scrape ${slug}:`, err.message);
    return null;
  }
}

async function runScraper() {
  console.log(`🚀 Starting LeetCode Scraper for Top 150 Questions...`);
  const results = [];

  for (let i = 0; i < top150Slugs.length; i++) {
    const slug = top150Slugs[i];
    console.log(`[${i + 1}/${top150Slugs.length}] Scraping: ${slug}...`);
    const q = await scrapeQuestion(slug);
    if (q) {
      results.push(q);
    }
    // Small delay to respect rate limits
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\n✅ Scraped ${results.length} questions successfully!`);

  const fileContent = `export const leetcode150Dataset = ${JSON.stringify(results, null, 2)};\n`;
  const outputPath = path.join(process.cwd(), 'src', 'data', 'leetcode150.js');
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`📁 Saved dataset to ${outputPath}`);
}

runScraper();
