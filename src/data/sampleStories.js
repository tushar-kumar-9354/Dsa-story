export const initialStories = [
  {
    id: 'longest-substring-without-repeating-characters',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    approaches: ['Sliding Window', 'Hash Map', 'Two Pointers'],
    problemDescription: 'Given a string s, find the length of the longest substring without repeating characters.',
    mindfulStory: `Imagine karo ek lamba Festive Mela Street (String s) jahan har dukan (character) pe unique gifts mil rahe hain. 

1. Left Pointer (left): Window ka start marker jo line ko hold karta hai.
2. Right Pointer (right): Explorer dost jo ek-ek step aage badhta hai.
3. Memory Diary (lastSeenMap): Pocket diary jisme dukan ka naam aur location note hoti hai.`,
    unforgettableBottleneck: `⚡ THE UNFORGETTABLE BOTTLENECK ⚡

❌ Where People Get Stuck:
Left pointer ko blind jump karwakar old duplicates ke peeche khiska dena.

💡 Breakthrough Logic:
left = Math.max(left, lastSeenMap.get(currentChar) + 1)`,
    rawCode: `function lengthOfLongestSubstring(s) {
  let left = 0; // Story mei 'left' humara pehla dost hai jo starting line pe khada hai
  let maxLength = 0; // Trophy cup for max length
  const lastSeenMap = new Map(); // Memory diary

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (lastSeenMap.has(currentChar)) {
      left = Math.max(left, lastSeenMap.get(currentChar) + 1); // BOTTLENECK FIX
    }
    lastSeenMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
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
    mindfulStory: `Party Hall mei guests khade hain. Guard exact target amount wale pair ko entry dega. Matchmaker diary Mei missing amounts registered hain.`,
    unforgettableBottleneck: `⚡ THE UNFORGETTABLE BOTTLENECK ⚡

❌ Double loops O(N^2) instead of O(N) single pass lookup in Hash Map.`,
    rawCode: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
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
    mindfulStory: `Pahad ki Seedhi. Step N tak aane ke 2 raste: (N-1) se 1 jump ya (N-2) se 2 jump!`,
    unforgettableBottleneck: `⚡ THE UNFORGETTABLE BOTTLENECK ⚡

❌ TLE via recursion. Fix: DP memory with 2 variables.`,
    rawCode: `function climbStairs(n) {
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
