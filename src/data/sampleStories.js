export const initialStories = [
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    approaches: ['Sliding Window', 'Hash Map', 'Two Pointers'],
    problemDescription: 'Given a string s, find the length of the longest substring without repeating characters.',
    mindfulStory: `Imagine karo ek lamba Festive Mela Street (String s = "abcabcbb") jahan har dukan (character) pe unique gifts mil rahe hain.

📌 Step-by-Step Visual Story:
1. Left Pointer (left): Window ka start marker jo line ko hold karta hai.
2. Right Pointer (right): Explorer dost jo ek-ek step aage badhta hai.
3. Memory Diary (lastSeenMap): Pocket diary jisme dukan ka naam aur location note hoti hai.

🔁 Step-by-Step Live Iteration Walkthrough (3 Iterations in Story Mode):
- 🔁 Iteration 1: Pehle iteration mei right = 0 ('a') pe hai. Diary khaali hai. Hum 'a' ko map me { 'a': 0 } save karte hain aur window length = 1 set hoti hai.
- 🔁 Iteration 2: Dusre iteration mei right = 1 ('b') pe hai. 'b' pahaile se nahi hai. Map me { 'a': 0, 'b': 1 } record hua, window length = 2 bani.
- 🔁 Iteration 3: Teesre iteration mei right = 2 ('c') pe hai. 'c' bhi unique hai. Map me { 'a': 0, 'b': 1, 'c': 2 } add hua, maxLength ab 3 ban gaya!`,
    unforgettableBottleneck: `⚡ THE UNFORGETTABLE BOTTLENECK ⚡

❌ Where People Get Stuck:
Left pointer ko blind jump karwakar old duplicates ke peeche khiska dena.

💡 Breakthrough Logic:
left = Math.max(left, lastSeenMap.get(currentChar) + 1)`,
    rawCode: `// 🛠️ RUN & DEBUG TRACE (Hinglish Debugging Log):
// Sample Input: s = "abcabcbb"
// --------------------------------------------------
// 🔍 Iteration 1 (right = 0, char = 'a'):
//   -> left = 0, lastSeenMap = {} -> 'a' mila? Nahi!
//   -> Action: lastSeenMap['a'] = 0, maxLength = 1 - 0 = 1
// 🔍 Iteration 2 (right = 1, char = 'b'):
//   -> left = 0, lastSeenMap = {'a':0} -> 'b' mila? Nahi!
//   -> Action: lastSeenMap['b'] = 1, maxLength = max(1, 2) = 2
// 🔍 Iteration 3 (right = 2, char = 'c'):
//   -> left = 0, lastSeenMap = {'a':0, 'b':1} -> 'c' mila? Nahi!
//   -> Action: lastSeenMap['c'] = 2, maxLength = max(2, 3) = 3
// --------------------------------------------------

function lengthOfLongestSubstring(s) {
  let left = 0; // 📍 STEP 1 (Story se): 'left' pehla dost starting line pe khada hai
  let maxLength = 0; // Trophy cup for max length
  const lastSeenMap = new Map(); // Memory diary

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (lastSeenMap.has(currentChar)) {
      left = Math.max(left, lastSeenMap.get(currentChar) + 1); // 📍 STEP 2: BOTTLENECK FIX
    }
    lastSeenMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength; // 📍 STEP 3: Return max length window
}`,
    codeLines: [
      { line: 'function lengthOfLongestSubstring(s) {', comment: 'Function start' },
      { line: '  let left = 0;', comment: 'Left pointer starting position' },
      { line: '  let maxLength = 0;', comment: 'Record trophy cup' },
      { line: '  const lastSeenMap = new Map();', comment: 'Pocket memory diary' }
    ],
    isDone: true
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    approaches: ['Hash Map', 'Array'],
    problemDescription: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    mindfulStory: `Party Hall mei guests khade hain (nums = [2, 7, 11, 15], target = 9). Guard exact target amount wale pair ko entry dega. Matchmaker diary Mei missing amounts registered hain.

🔁 Step-by-Step Live Iteration Walkthrough (3 Iterations in Story Mode):
- 🔁 Iteration 1: Pehle iteration mei i = 0 (val = 2). Needed = 9 - 2 = 7. Map me 7 nahi hai. Guard map me { 2: 0 } note karta hai.
- 🔁 Iteration 2: Dusre iteration mei i = 1 (val = 7). Needed = 9 - 7 = 2. Map me check kiya -> 2 MIL GAYA index 0 par! Target HIT! Answer = [0, 1].
- 🔁 Iteration 3: Teesre iteration (hypothetical if target was 26): i = 2 (val = 11), needed = 15. Map me 15 nahi mila -> Map me { 11: 2 } enter hua.`,
    unforgettableBottleneck: `⚡ THE UNFORGETTABLE BOTTLENECK ⚡

❌ Double loops O(N^2) instead of O(N) single pass lookup in Hash Map.`,
    rawCode: `// 🛠️ RUN & DEBUG TRACE (Hinglish Debugging Log):
// Sample Input: nums = [2, 7, 11, 15], target = 9
// --------------------------------------------------
// 🔍 Iteration 1 (i = 0, num = 2):
//   -> complement = 9 - 2 = 7
//   -> map check: 7 hai? NAHI.
//   -> Action: map.set(2, 0) -> map state: {2: 0}
// 🔍 Iteration 2 (i = 1, num = 7):
//   -> complement = 9 - 7 = 2
//   -> map check: 2 hai? HAAN! Index = 0.
//   -> Action: Match found! Return [0, 1]
// 🔍 Iteration 3 (Demonstration / Dry-Run Step):
//   -> Agar loop next step jata toh map me current index save hoke aage badhta.
// --------------------------------------------------

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i]; // 📍 MATCH FOUND!
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    codeLines: [],
    isDone: false
  },
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    difficulty: 'Easy',
    approaches: ['DP', 'Array'],
    problemDescription: 'You are climbing a staircase. It takes n steps to reach the top.',
    mindfulStory: `Pahad ki Seedhi (n = 4 steps). Step N tak aane ke 2 raste: (N-1) se 1 jump ya (N-2) se 2 jump!

🔁 Step-by-Step Live Iteration Walkthrough (3 Iterations in Story Mode):
- 🔁 Iteration 1: Pehle iteration (i = 3) mei curr = prev1 (2) + prev2 (1) = 3. Variables shift hote hain: prev2 = 2, prev1 = 3.
- 🔁 Iteration 2: Dusre iteration (i = 4) mei curr = prev1 (3) + prev2 (2) = 5. Variables shift: prev2 = 3, prev1 = 5.
- 🔁 Iteration 3: Teesre iteration (i = 5 if n=5) mei curr = 5 + 3 = 8. Step 5 tak total 8 alag raste hain!`,
    unforgettableBottleneck: `⚡ THE UNFORGETTABLE BOTTLENECK ⚡

❌ TLE via recursion. Fix: DP memory with 2 variables.`,
    rawCode: `// 🛠️ RUN & DEBUG TRACE (Hinglish Debugging Log):
// Sample Input: n = 4
// --------------------------------------------------
// 🔍 Iteration 1 (i = 3):
//   -> current = prev1 (2) + prev2 (1) = 3
//   -> prev2 = 2, prev1 = 3
// 🔍 Iteration 2 (i = 4):
//   -> current = prev1 (3) + prev2 (2) = 5
//   -> prev2 = 3, prev1 = 5
// 🔍 Iteration 3 (i = 5, if n=5):
//   -> current = prev1 (5) + prev2 (3) = 8
//   -> prev2 = 5, prev1 = 8
// --------------------------------------------------

function climbStairs(n) {
  if (n <= 2) return n;
  let prev2 = 1, prev1 = 2;
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}`,
    codeLines: [],
    isDone: false
  }
];
