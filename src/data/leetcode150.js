export const leetcode150Dataset = [
  {
    "id": "top150-88",
    "title": "88. Merge Sorted Array",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "problemDescription": "You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\n\n**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.\n\nThe final sorted array should not be returned by the function, but instead be *stored inside the array *`nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.\n\nExample 1:**\n\n```\n\n**Input:** nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\n**Output:** [1,2,2,3,5,6]\n**Explanation:** The arrays we are merging are [1,2,3] and [2,5,6].\nThe result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums1 = [1], m = 1, nums2 = [], n = 0\n**Output:** [1]\n**Explanation:** The arrays we are merging are [1] and [].\nThe result of the merge is [1].\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums1 = [0], m = 0, nums2 = [1], n = 1\n**Output:** [1]\n**Explanation:** The arrays we are merging are [] and [1].\nThe result of the merge is [1].\nNote that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.\n\n```\n\n**Constraints:**\n\n\t- `nums1.length == m + n`\n\n\t- `nums2.length == n`\n\n\t- `0 9 9`\n\n**Follow up: **Can you come up with an algorithm that runs in `O(m + n)` time?",
    "mindfulStory": "✨ Mindful Story for 88. Merge Sorted Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 88. Merge Sorted Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums1\n * @param {number} m\n * @param {number[]} nums2\n * @param {number} n\n * @return {void} Do not return anything, modify nums1 in-place instead.\n */\nvar merge = function(nums1, m, nums2, n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-27",
    "title": "27. Remove Element",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Two Pointers"
    ],
    "problemDescription": "Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return *the number of elements in *`nums`* which are not equal to *`val`.\n\nConsider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:\n\n\t- Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`. The remaining elements of `nums` are not important as well as the size of `nums`.\n\n\t- Return `k`.\n\n**Custom Judge:**\n\nThe judge will test your solution with the following code:\n\n```\n\nint[] nums = [...]; // Input array\nint val = ...; // Value to remove\nint[] expectedNums = [...]; // The expected answer with correct length.\n                            // It is sorted with no values equaling val.\n\nint k = removeElement(nums, val); // Calls your implementation\n\nassert k == expectedNums.length;\nsort(nums, 0, k); // Sort the first k elements of nums\nfor (int i = 0; i Example 1:**\n\n```\n\n**Input:** nums = [3,2,2,3], val = 3\n**Output:** 2, nums = [2,2,_,_]\n**Explanation:** Your function should return k = 2, with the first two elements of nums being 2.\nIt does not matter what you leave beyond the returned k (hence they are underscores).\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,1,2,2,3,0,4,2], val = 2\n**Output:** 5, nums = [0,1,4,0,3,_,_,_]\n**Explanation:** Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.\nNote that the five elements can be returned in any order.\nIt does not matter what you leave beyond the returned k (hence they are underscores).\n\n```\n\n**Constraints:**\n\n\t- `0 <= nums.length <= 100`\n\n\t- `0 <= nums[i] <= 50`\n\n\t- `0 <= val <= 100`",
    "mindfulStory": "✨ Mindful Story for 27. Remove Element:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 27. Remove Element (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */\nvar removeElement = function(nums, val) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-26",
    "title": "26. Remove Duplicates from Sorted Array",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Two Pointers"
    ],
    "problemDescription": "Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.\n\nConsider the number of *unique elements* in `nums` to be `k**​​​​​​​**`​​​​​​​. After removing duplicates, return the number of unique elements `k`.\n\nThe first `k` elements of `nums` should contain the unique numbers in **sorted order**. The remaining elements beyond index `k - 1` can be ignored.\n\n**Custom Judge:**\n\nThe judge will test your solution with the following code:\n\n```\n\nint[] nums = [...]; // Input array\nint[] expectedNums = [...]; // The expected answer with correct length\n\nint k = removeDuplicates(nums); // Calls your implementation\n\nassert k == expectedNums.length;\nfor (int i = 0; i Example 1:**\n\n```\n\n**Input:** nums = [1,1,2]\n**Output:** 2, nums = [1,2,_]\n**Explanation:** Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.\nIt does not matter what you leave beyond the returned k (hence they are underscores).\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,0,1,1,1,2,2,3,3,4]\n**Output:** 5, nums = [0,1,2,3,4,_,_,_,_,_]\n**Explanation:** Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.\nIt does not matter what you leave beyond the returned k (hence they are underscores).\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `-100 <= nums[i] <= 100`\n\n\t- `nums` is sorted in **non-decreasing** order.",
    "mindfulStory": "✨ Mindful Story for 26. Remove Duplicates from Sorted Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 26. Remove Duplicates from Sorted Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar removeDuplicates = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-80",
    "title": "80. Remove Duplicates from Sorted Array II",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Two Pointers"
    ],
    "problemDescription": "Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.\n\nSince it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.\n\nReturn `k`* after placing the final result in the first *`k`* slots of *`nums`.\n\nDo **not** allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.\n\n**Custom Judge:**\n\nThe judge will test your solution with the following code:\n\n```\n\nint[] nums = [...]; // Input array\nint[] expectedNums = [...]; // The expected answer with correct length\n\nint k = removeDuplicates(nums); // Calls your implementation\n\nassert k == expectedNums.length;\nfor (int i = 0; i Example 1:**\n\n```\n\n**Input:** nums = [1,1,1,2,2,3]\n**Output:** 5, nums = [1,1,2,2,3,_]\n**Explanation:** Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.\nIt does not matter what you leave beyond the returned k (hence they are underscores).\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,0,1,1,1,1,2,3,3]\n**Output:** 7, nums = [0,0,1,1,2,3,3,_,_]\n**Explanation:** Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.\nIt does not matter what you leave beyond the returned k (hence they are underscores).\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `-104 4`\n\n\t- `nums` is sorted in **non-decreasing** order.",
    "mindfulStory": "✨ Mindful Story for 80. Remove Duplicates from Sorted Array II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 80. Remove Duplicates from Sorted Array II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar removeDuplicates = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-169",
    "title": "169. Majority Element",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Sorting",
      "Counting"
    ],
    "problemDescription": "Given an array `nums` of size `n`, return *the majority element*.\n\nThe majority element is the element that appears more than `&lfloor;n / 2&rfloor;` times. You may assume that the majority element always exists in the array.\n\nExample 1:**\n\n```\n**Input:** nums = [3,2,3]\n**Output:** 3\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [2,2,1,1,1,2,2]\n**Output:** 2\n\n```\n\n**Constraints:**\n\n\t- `n == nums.length`\n\n\t- `1 4`\n\n\t- `-109 9`\n\n\t- The input is generated such that a majority element will exist in the array.\n\n**Follow-up:** Could you solve the problem in linear time and in `O(1)` space?",
    "mindfulStory": "✨ Mindful Story for 169. Majority Element:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 169. Majority Element (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar majorityElement = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-189",
    "title": "189. Rotate Array",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Math",
      "Two Pointers"
    ],
    "problemDescription": "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.\n\nExample 1:**\n\n```\n\n**Input:** nums = [1,2,3,4,5,6,7], k = 3\n**Output:** [5,6,7,1,2,3,4]\n**Explanation:**\nrotate 1 steps to the right: [7,1,2,3,4,5,6]\nrotate 2 steps to the right: [6,7,1,2,3,4,5]\nrotate 3 steps to the right: [5,6,7,1,2,3,4]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [-1,-100,3,99], k = 2\n**Output:** [3,99,-1,-100]\n**Explanation:** \nrotate 1 steps to the right: [99,-1,-100,3]\nrotate 2 steps to the right: [3,99,-1,-100]\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `-231 31 - 1`\n\n\t- `0 5`\n\n**Follow up:**\n\n\t- Try to come up with as many solutions as you can. There are at least **three** different ways to solve this problem.\n\n\t- Could you do it in-place with `O(1)` extra space?",
    "mindfulStory": "✨ Mindful Story for 189. Rotate Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 189. Rotate Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar rotate = function(nums, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-121",
    "title": "121. Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Dynamic Programming"
    ],
    "problemDescription": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nYou want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.\n\nReturn *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.\n\nExample 1:**\n\n```\n\n**Input:** prices = [7,1,5,3,6,4]\n**Output:** 5\n**Explanation:** Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\nNote that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** prices = [7,6,4,3,1]\n**Output:** 0\n**Explanation:** In this case, no transactions are done and the max profit = 0.\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `0 4`",
    "mindfulStory": "✨ Mindful Story for 121. Best Time to Buy and Sell Stock:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 121. Best Time to Buy and Sell Stock (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-122",
    "title": "122. Best Time to Buy and Sell Stock II",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "problemDescription": "You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day.\n\nOn each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can sell and buy the stock multiple times on the **same day**, ensuring you never hold more than one share of the stock.\n\nFind and return *the **maximum** profit you can achieve*.\n\nExample 1:**\n\n```\n\n**Input:** prices = [7,1,5,3,6,4]\n**Output:** 7\n**Explanation:** Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.\nThen buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.\nTotal profit is 4 + 3 = 7.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** prices = [1,2,3,4,5]\n**Output:** 4\n**Explanation:** Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.\nTotal profit is 4.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** prices = [7,6,4,3,1]\n**Output:** 0\n**Explanation:** There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `0 4`",
    "mindfulStory": "✨ Mindful Story for 122. Best Time to Buy and Sell Stock II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 122. Best Time to Buy and Sell Stock II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-55",
    "title": "55. Jump Game",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "problemDescription": "You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.\n\nReturn `true`* if you can reach the last index, or *`false`* otherwise*.\n\nExample 1:**\n\n```\n\n**Input:** nums = [2,3,1,1,4]\n**Output:** true\n**Explanation:** Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [3,2,1,0,4]\n**Output:** false\n**Explanation:** You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `0 5`",
    "mindfulStory": "✨ Mindful Story for 55. Jump Game:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 55. Jump Game (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar canJump = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-45",
    "title": "45. Jump Game II",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "problemDescription": "You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at index 0.\n\nEach element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:\n\n\t- `0 Example 1:**\n\n```\n\n**Input:** nums = [2,3,1,1,4]\n**Output:** 2\n**Explanation:** The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [2,3,0,1,4]\n**Output:** 2\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `0 <= nums[i] <= 1000`\n\n\t- It's guaranteed that you can reach `nums[n - 1]`.",
    "mindfulStory": "✨ Mindful Story for 45. Jump Game II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 45. Jump Game II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar jump = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-274",
    "title": "274. H-Index",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Sorting",
      "Counting Sort"
    ],
    "problemDescription": "Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `ith` paper, return *the researcher's h-index*.\n\nAccording to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.\n\nExample 1:**\n\n```\n\n**Input:** citations = [3,0,6,1,5]\n**Output:** 3\n**Explanation:** [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.\nSince the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** citations = [1,3,1]\n**Output:** 1\n\n```\n\n**Constraints:**\n\n\t- `n == citations.length`\n\n\t- `1 <= n <= 5000`\n\n\t- `0 <= citations[i] <= 1000`",
    "mindfulStory": "✨ Mindful Story for 274. H-Index:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 274. H-Index (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} citations\n * @return {number}\n */\nvar hIndex = function(citations) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-380",
    "title": "380. Insert Delete GetRandom O(1)",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "Math",
      "Design",
      "Randomized"
    ],
    "problemDescription": "Implement the `RandomizedSet` class:\n\n\t- `RandomizedSet()` Initializes the `RandomizedSet` object.\n\n\t- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.\n\n\t- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.\n\n\t- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.\n\nYou must implement the functions of the class such that each function works in **average** `O(1)` time complexity.\n\nExample 1:**\n\n```\n\n**Input**\n[\"RandomizedSet\", \"insert\", \"remove\", \"insert\", \"getRandom\", \"remove\", \"insert\", \"getRandom\"]\n[[], [1], [2], [2], [], [1], [2], []]\n**Output**\n[null, true, false, true, 2, true, false, 2]\n\n**Explanation**\nRandomizedSet randomizedSet = new RandomizedSet();\nrandomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.\nrandomizedSet.remove(2); // Returns false as 2 does not exist in the set.\nrandomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].\nrandomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.\nrandomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].\nrandomizedSet.insert(2); // 2 was already in the set, so return false.\nrandomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.\n\n```\n\n**Constraints:**\n\n\t- `-231 31 - 1`\n\n\t- At most `2 * ``105` calls will be made to `insert`, `remove`, and `getRandom`.\n\n\t- There will be **at least one** element in the data structure when `getRandom` is called.",
    "mindfulStory": "✨ Mindful Story for 380. Insert Delete GetRandom O(1):\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 380. Insert Delete GetRandom O(1) (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "\nvar RandomizedSet = function() {\n    \n};\n\n/** \n * @param {number} val\n * @return {boolean}\n */\nRandomizedSet.prototype.insert = function(val) {\n    \n};\n\n/** \n * @param {number} val\n * @return {boolean}\n */\nRandomizedSet.prototype.remove = function(val) {\n    \n};\n\n/**\n * @return {number}\n */\nRandomizedSet.prototype.getRandom = function() {\n    \n};\n\n/** \n * Your RandomizedSet object will be instantiated and called as such:\n * var obj = new RandomizedSet()\n * var param_1 = obj.insert(val)\n * var param_2 = obj.remove(val)\n * var param_3 = obj.getRandom()\n */",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-238",
    "title": "238. Product of Array Except Self",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Prefix Sum"
    ],
    "problemDescription": "Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.\n\nThe product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.\n\nYou must write an algorithm that runs in `O(n)` time and without using the division operation.\n\nExample 1:**\n\n```\n**Input:** nums = [1,2,3,4]\n**Output:** [24,12,8,6]\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [-1,1,0,-3,3]\n**Output:** [0,0,9,0,0]\n\n```\n\n**Constraints:**\n\n\t- `2 5`\n\n\t- `-30 <= nums[i] <= 30`\n\n\t- The input is generated such that `answer[i]` is **guaranteed** to fit in a **32-bit** integer.\n\n**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)",
    "mindfulStory": "✨ Mindful Story for 238. Product of Array Except Self:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 238. Product of Array Except Self (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar productExceptSelf = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-134",
    "title": "134. Gas Station",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Greedy"
    ],
    "problemDescription": "There are `n` gas stations along a circular route, where the amount of gas at the `ith` station is `gas[i]`.\n\nYou have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `ith` station to its next `(i + 1)th` station. You begin the journey with an empty tank at one of the gas stations.\n\nGiven two integer arrays `gas` and `cost`, return *the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return* `-1`. If there exists a solution, it is **guaranteed** to be **unique**.\n\nExample 1:**\n\n```\n\n**Input:** gas = [1,2,3,4,5], cost = [3,4,5,1,2]\n**Output:** 3\n**Explanation:**\nStart at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 4. Your tank = 4 - 1 + 5 = 8\nTravel to station 0. Your tank = 8 - 2 + 1 = 7\nTravel to station 1. Your tank = 7 - 3 + 2 = 6\nTravel to station 2. Your tank = 6 - 4 + 3 = 5\nTravel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.\nTherefore, return 3 as the starting index.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** gas = [2,3,4], cost = [3,4,3]\n**Output:** -1\n**Explanation:**\nYou can't start at station 0 or 1, as there is not enough gas to travel to the next station.\nLet's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4\nTravel to station 0. Your tank = 4 - 3 + 2 = 3\nTravel to station 1. Your tank = 3 - 3 + 3 = 3\nYou cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.\nTherefore, you can't travel around the circuit once no matter where you start.\n\n```\n\n**Constraints:**\n\n\t- `n == gas.length == cost.length`\n\n\t- `1 5`\n\n\t- `0 4`\n\n\t- The input is generated such that the answer is unique.",
    "mindfulStory": "✨ Mindful Story for 134. Gas Station:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 134. Gas Station (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} gas\n * @param {number[]} cost\n * @return {number}\n */\nvar canCompleteCircuit = function(gas, cost) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-135",
    "title": "135. Candy",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "Greedy"
    ],
    "problemDescription": "There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`.\n\nYou are giving candies to these children subjected to the following requirements:\n\n\t- Each child must have at least one candy.\n\n\t- Children with a higher rating get more candies than their neighbors.\n\nReturn *the minimum number of candies you need to have to distribute the candies to the children*.\n\nExample 1:**\n\n```\n\n**Input:** ratings = [1,0,2]\n**Output:** 5\n**Explanation:** You can allocate to the first, second and third child with 2, 1, 2 candies respectively.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** ratings = [1,2,2]\n**Output:** 4\n**Explanation:** You can allocate to the first, second and third child with 1, 2, 1 candies respectively.\nThe third child gets 1 candy because it satisfies the above two conditions.\n\n```\n\n**Constraints:**\n\n\t- `n == ratings.length`\n\n\t- `1 4`\n\n\t- `0 4`",
    "mindfulStory": "✨ Mindful Story for 135. Candy:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 135. Candy (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} ratings\n * @return {number}\n */\nvar candy = function(ratings) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-42",
    "title": "42. Trapping Rain Water",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "Two Pointers",
      "Dynamic Programming",
      "Stack",
      "Monotonic Stack"
    ],
    "problemDescription": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.\n\nExample 1:**\n\n```\n\n**Input:** height = [0,1,0,2,1,0,1,3,2,1,2,1]\n**Output:** 6\n**Explanation:** The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** height = [4,2,0,3,2,5]\n**Output:** 9\n\n```\n\n**Constraints:**\n\n\t- `n == height.length`\n\n\t- `1 4`\n\n\t- `0 5`",
    "mindfulStory": "✨ Mindful Story for 42. Trapping Rain Water:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 42. Trapping Rain Water (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} height\n * @return {number}\n */\nvar trap = function(height) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-13",
    "title": "13. Roman to Integer",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "Math",
      "String"
    ],
    "problemDescription": "Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.\n\n```\n\n**Symbol**       **Value**\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n```\n\nFor example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:\n\n\t- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9. \n\n\t- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90. \n\n\t- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.\n\nGiven a roman numeral, convert it to an integer.\n\nExample 1:**\n\n```\n\n**Input:** s = \"III\"\n**Output:** 3\n**Explanation:** III = 3.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"LVIII\"\n**Output:** 58\n**Explanation:** L = 50, V= 5, III = 3.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"MCMXCIV\"\n**Output:** 1994\n**Explanation:** M = 1000, CM = 900, XC = 90 and IV = 4.\n\n```\n\n**Constraints:**\n\n\t- `1 <= s.length <= 15`\n\n\t- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.\n\n\t- It is **guaranteed** that `s` is a valid roman numeral in the range `[1, 3999]`.",
    "mindfulStory": "✨ Mindful Story for 13. Roman to Integer:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 13. Roman to Integer (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {number}\n */\nvar romanToInt = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-12",
    "title": "12. Integer to Roman",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "Math",
      "String"
    ],
    "problemDescription": "Seven different symbols represent Roman numerals with the following values:\n\n\t\t\tSymbol\n\t\t\tValue\n\n\t\t\tI\n\t\t\t1\n\n\t\t\tV\n\t\t\t5\n\n\t\t\tX\n\t\t\t10\n\n\t\t\tL\n\t\t\t50\n\n\t\t\tC\n\t\t\t100\n\n\t\t\tD\n\t\t\t500\n\n\t\t\tM\n\t\t\t1000\n\nRoman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:\n\n\t- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.\n\n\t- If the value starts with 4 or 9 use the **subtractive form** representing one symbol subtracted from the following symbol, for example, 4 is 1 (`I`) less than 5 (`V`): `IV` and 9 is 1 (`I`) less than 10 (`X`): `IX`. Only the following subtractive forms are used: 4 (`IV`), 9 (`IX`), 40 (`XL`), 90 (`XC`), 400 (`CD`) and 900 (`CM`).\n\n\t- Only powers of 10 (`I`, `X`, `C`, `M`) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (`V`), 50 (`L`), or 500 (`D`) multiple times. If you need to append a symbol 4 times use the **subtractive form**.\n\nGiven an integer, convert it to a Roman numeral.\n\nExample 1:**\n\n**Input:** num = 3749\n\n**Output:** \"MMMDCCXLIX\"\n\n**Explanation:**\n\n```\n\n3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)\n 700 = DCC as 500 (D) + 100 (C) + 100 (C)\n  40 = XL as 10 (X) less of 50 (L)\n   9 = IX as 1 (I) less of 10 (X)\nNote: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places\n\n```\n\nExample 2:**\n\n**Input:** num = 58\n\n**Output:** \"LVIII\"\n\n**Explanation:**\n\n```\n\n50 = L\n 8 = VIII\n\n```\n\nExample 3:**\n\n**Input:** num = 1994\n\n**Output:** \"MCMXCIV\"\n\n**Explanation:**\n\n```\n\n1000 = M\n 900 = CM\n  90 = XC\n   4 = IV\n\n```\n\n**Constraints:**\n\n\t- `1 <= num <= 3999`",
    "mindfulStory": "✨ Mindful Story for 12. Integer to Roman:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 12. Integer to Roman (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} num\n * @return {string}\n */\nvar intToRoman = function(num) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-58",
    "title": "58. Length of Last Word",
    "difficulty": "Easy",
    "approaches": [
      "String"
    ],
    "problemDescription": "Given a string `s` consisting of words and spaces, return *the length of the **last** word in the string.*\n\nA **word** is a maximal substring consisting of non-space characters only.\n\nExample 1:**\n\n```\n\n**Input:** s = \"Hello World\"\n**Output:** 5\n**Explanation:** The last word is \"World\" with length 5.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"   fly me   to   the moon  \"\n**Output:** 4\n**Explanation:** The last word is \"moon\" with length 4.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"luffy is still joyboy\"\n**Output:** 6\n**Explanation:** The last word is \"joyboy\" with length 6.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `s` consists of only English letters and spaces `' '`.\n\n\t- There will be at least one word in `s`.",
    "mindfulStory": "✨ Mindful Story for 58. Length of Last Word:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 58. Length of Last Word (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLastWord = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-14",
    "title": "14. Longest Common Prefix",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "String",
      "Trie"
    ],
    "problemDescription": "Write a function to find the longest common prefix string amongst an array of strings.\n\nIf there is no common prefix, return an empty string `\"\"`.\n\nExample 1:**\n\n```\n\n**Input:** strs = [\"flower\",\"flow\",\"flight\"]\n**Output:** \"fl\"\n\n```\n\nExample 2:**\n\n```\n\n**Input:** strs = [\"dog\",\"racecar\",\"car\"]\n**Output:** \"\"\n**Explanation:** There is no common prefix among the input strings.\n\n```\n\n**Constraints:**\n\n\t- `1 <= strs.length <= 200`\n\n\t- `0 <= strs[i].length <= 200`\n\n\t- `strs[i]` consists of only lowercase English letters if it is non-empty.",
    "mindfulStory": "✨ Mindful Story for 14. Longest Common Prefix:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 14. Longest Common Prefix (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string[]} strs\n * @return {string}\n */\nvar longestCommonPrefix = function(strs) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-151",
    "title": "151. Reverse Words in a String",
    "difficulty": "Medium",
    "approaches": [
      "Two Pointers",
      "String"
    ],
    "problemDescription": "Given an input string `s`, reverse the order of the **words**.\n\nA **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.\n\nReturn *a string of the words in reverse order concatenated by a single space.*\n\nNote that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.\n\nExample 1:**\n\n```\n\n**Input:** s = \"the sky is blue\"\n**Output:** \"blue is sky the\"\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"  hello world  \"\n**Output:** \"world hello\"\n**Explanation:** Your reversed string should not contain leading or trailing spaces.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"a good   example\"\n**Output:** \"example good a\"\n**Explanation:** You need to reduce multiple spaces between two words to a single space in the reversed string.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.\n\n\t- There is **at least one** word in `s`.\n\nFollow-up: If the string data type is mutable in your language, can you solve it in-place with O(1)` extra space?",
    "mindfulStory": "✨ Mindful Story for 151. Reverse Words in a String:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 151. Reverse Words in a String (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {string}\n */\nvar reverseWords = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-6",
    "title": "6. Zigzag Conversion",
    "difficulty": "Medium",
    "approaches": [
      "String"
    ],
    "problemDescription": "The string `\"PAYPALISHIRING\"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\n\n```\n\nP   A   H   N\nA P L S I I G\nY   I   R\n\n```\n\nAnd then read line by line: `\"PAHNAPLSIIGYIR\"`\n\nWrite the code that will take a string and make this conversion given a number of rows:\n\n```\n\nstring convert(string s, int numRows);\n\n```\n\nExample 1:**\n\n```\n\n**Input:** s = \"PAYPALISHIRING\", numRows = 3\n**Output:** \"PAHNAPLSIIGYIR\"\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"PAYPALISHIRING\", numRows = 4\n**Output:** \"PINALSIGYAHRPI\"\n**Explanation:**\nP     I    N\nA   L S  I G\nY A   H R\nP     I\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"A\", numRows = 1\n**Output:** \"A\"\n\n```\n\n**Constraints:**\n\n\t- `1 <= s.length <= 1000`\n\n\t- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.\n\n\t- `1 <= numRows <= 1000`",
    "mindfulStory": "✨ Mindful Story for 6. Zigzag Conversion:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 6. Zigzag Conversion (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {number} numRows\n * @return {string}\n */\nvar convert = function(s, numRows) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-28",
    "title": "28. Find the Index of the First Occurrence in a String",
    "difficulty": "Easy",
    "approaches": [
      "Two Pointers",
      "String",
      "String Matching"
    ],
    "problemDescription": "Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.\n\nExample 1:**\n\n```\n\n**Input:** haystack = \"sadbutsad\", needle = \"sad\"\n**Output:** 0\n**Explanation:** \"sad\" occurs at index 0 and 6.\nThe first occurrence is at index 0, so we return 0.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** haystack = \"leetcode\", needle = \"leeto\"\n**Output:** -1\n**Explanation:** \"leeto\" did not occur in \"leetcode\", so we return -1.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `haystack` and `needle` consist of only lowercase English characters.",
    "mindfulStory": "✨ Mindful Story for 28. Find the Index of the First Occurrence in a String:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 28. Find the Index of the First Occurrence in a String (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} haystack\n * @param {string} needle\n * @return {number}\n */\nvar strStr = function(haystack, needle) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-68",
    "title": "68. Text Justification",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "String",
      "Simulation"
    ],
    "problemDescription": "Given an array of strings `words` and a width `maxWidth`, format the text such that each line has exactly `maxWidth` characters and is fully (left and right) justified.\n\nYou should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces `' '` when necessary so that each line has exactly `maxWidth` characters.\n\nExtra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.\n\nFor the last line of text, it should be left-justified, and no extra space is inserted between words.\n\n**Note:**\n\n\t- A word is defined as a character sequence consisting of non-space characters only.\n\n\t- Each word's length is guaranteed to be greater than `0` and not exceed `maxWidth`.\n\n\t- The input array `words` contains at least one word.\n\nExample 1:**\n\n```\n\n**Input:** words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16\n**Output:**\n[\n   \"This    is    an\",\n   \"example  of text\",\n   \"justification.  \"\n]\n```\n\nExample 2:**\n\n```\n\n**Input:** words = [\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"], maxWidth = 16\n**Output:**\n[\n  \"What   must   be\",\n  \"acknowledgment  \",\n  \"shall be        \"\n]\n**Explanation:** Note that the last line is \"shall be    \" instead of \"shall     be\", because the last line must be left-justified instead of fully-justified.\nNote that the second line is also left-justified because it contains only one word.\n```\n\nExample 3:**\n\n```\n\n**Input:** words = [\"Science\",\"is\",\"what\",\"we\",\"understand\",\"well\",\"enough\",\"to\",\"explain\",\"to\",\"a\",\"computer.\",\"Art\",\"is\",\"everything\",\"else\",\"we\",\"do\"], maxWidth = 20\n**Output:**\n[\n  \"Science  is  what we\",\n  \"understand      well\",\n  \"enough to explain to\",\n  \"a  computer.  Art is\",\n  \"everything  else  we\",\n  \"do                  \"\n]\n```\n\n**Constraints:**\n\n\t- `1 <= words.length <= 300`\n\n\t- `1 <= words[i].length <= 20`\n\n\t- `words[i]` consists of only English letters and symbols.\n\n\t- `1 <= maxWidth <= 100`\n\n\t- `words[i].length <= maxWidth`",
    "mindfulStory": "✨ Mindful Story for 68. Text Justification:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 68. Text Justification (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string[]} words\n * @param {number} maxWidth\n * @return {string[]}\n */\nvar fullJustify = function(words, maxWidth) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-125",
    "title": "125. Valid Palindrome",
    "difficulty": "Easy",
    "approaches": [
      "Two Pointers",
      "String"
    ],
    "problemDescription": "A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.\n\nGiven a string `s`, return `true`* if it is a **palindrome**, or *`false`* otherwise*.\n\nExample 1:**\n\n```\n\n**Input:** s = \"A man, a plan, a canal: Panama\"\n**Output:** true\n**Explanation:** \"amanaplanacanalpanama\" is a palindrome.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"race a car\"\n**Output:** false\n**Explanation:** \"raceacar\" is not a palindrome.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \" \"\n**Output:** true\n**Explanation:** s is an empty string \"\" after removing non-alphanumeric characters.\nSince an empty string reads the same forward and backward, it is a palindrome.\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `s` consists only of printable ASCII characters.",
    "mindfulStory": "✨ Mindful Story for 125. Valid Palindrome:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 125. Valid Palindrome (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {boolean}\n */\nvar isPalindrome = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-392",
    "title": "392. Is Subsequence",
    "difficulty": "Easy",
    "approaches": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "problemDescription": "Given two strings `s` and `t`, return `true`* if *`s`* is a **subsequence** of *`t`*, or *`false`* otherwise*.\n\nA **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `\"ace\"` is a subsequence of `\"abcde\"` while `\"aec\"` is not).\n\nExample 1:**\n\n```\n**Input:** s = \"abc\", t = \"ahbgdc\"\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n**Input:** s = \"axc\", t = \"ahbgdc\"\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- `0 4`\n\n\t- `s` and `t` consist only of lowercase English letters.\n\n**Follow up:** Suppose there are lots of incoming `s`, say `s1, s2, ..., sk` where `k >= 109`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?",
    "mindfulStory": "✨ Mindful Story for 392. Is Subsequence:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 392. Is Subsequence (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isSubsequence = function(s, t) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-167",
    "title": "167. Two Sum II - Input Array Is Sorted",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Two Pointers",
      "Binary Search"
    ],
    "problemDescription": "Given a **1-indexed** array of integers `numbers` that is already ***sorted in non-decreasing order***, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 1 2 1`* and *`index2`*, **each incremented by one,** as an integer array *`[index1, index2]`* of length 2.*\n\nThe tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.\n\nYour solution must use only constant extra space.\n\nExample 1:**\n\n```\n\n**Input:** numbers = [2,7,11,15], target = 9\n**Output:** [1,2]\n**Explanation:** The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** numbers = [2,3,4], target = 6\n**Output:** [1,3]\n**Explanation:** The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].\n\n```\n\nExample 3:**\n\n```\n\n**Input:** numbers = [-1,0], target = -1\n**Output:** [1,2]\n**Explanation:** The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].\n\n```\n\n**Constraints:**\n\n\t- `2 4`\n\n\t- `-1000 <= numbers[i] <= 1000`\n\n\t- `numbers` is sorted in **non-decreasing order**.\n\n\t- `-1000 <= target <= 1000`\n\n\t- The tests are generated such that there is **exactly one solution**.",
    "mindfulStory": "✨ Mindful Story for 167. Two Sum II - Input Array Is Sorted:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 167. Two Sum II - Input Array Is Sorted (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} numbers\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(numbers, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-11",
    "title": "11. Container With Most Water",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Two Pointers",
      "Greedy"
    ],
    "problemDescription": "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `ith` line are `(i, 0)` and `(i, height[i])`.\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn *the maximum amount of water a container can store*.\n\n**Notice** that you may not slant the container.\n\nExample 1:**\n\n```\n\n**Input:** height = [1,8,6,2,5,4,8,3,7]\n**Output:** 49\n**Explanation:** The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** height = [1,1]\n**Output:** 1\n\n```\n\n**Constraints:**\n\n\t- `n == height.length`\n\n\t- `2 5`\n\n\t- `0 4`",
    "mindfulStory": "✨ Mindful Story for 11. Container With Most Water:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 11. Container With Most Water (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} height\n * @return {number}\n */\nvar maxArea = function(height) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-15",
    "title": "15. 3Sum",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "problemDescription": "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.\n\nExample 1:**\n\n```\n\n**Input:** nums = [-1,0,1,2,-1,-4]\n**Output:** [[-1,-1,2],[-1,0,1]]\n**Explanation:** \nnums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.\nnums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.\nnums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.\nThe distinct triplets are [-1,0,1] and [-1,-1,2].\nNotice that the order of the output and the order of the triplets does not matter.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,1,1]\n**Output:** []\n**Explanation:** The only possible triplet does not sum up to 0.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [0,0,0]\n**Output:** [[0,0,0]]\n**Explanation:** The only possible triplet sums up to 0.\n\n```\n\n**Constraints:**\n\n\t- `3 5 5`",
    "mindfulStory": "✨ Mindful Story for 15. 3Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 15. 3Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar threeSum = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-209",
    "title": "209. Minimum Size Subarray Sum",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search",
      "Sliding Window",
      "Prefix Sum"
    ],
    "problemDescription": "Given an array of positive integers `nums` and a positive integer `target`, return *the **minimal length** of a **subarray** whose sum is greater than or equal to* `target`. If there is no such subarray, return `0` instead.\n\nExample 1:**\n\n```\n\n**Input:** target = 7, nums = [2,3,1,2,4,3]\n**Output:** 2\n**Explanation:** The subarray [4,3] has the minimal length under the problem constraint.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** target = 4, nums = [1,4,4]\n**Output:** 1\n\n```\n\nExample 3:**\n\n```\n\n**Input:** target = 11, nums = [1,1,1,1,1,1,1,1]\n**Output:** 0\n\n```\n\n**Constraints:**\n\n\t- `1 9`\n\n\t- `1 5`\n\n\t- `1 4`\n\n**Follow up:** If you have figured out the `O(n)` solution, try coding another solution of which the time complexity is `O(n log(n))`.",
    "mindfulStory": "✨ Mindful Story for 209. Minimum Size Subarray Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 209. Minimum Size Subarray Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} target\n * @param {number[]} nums\n * @return {number}\n */\nvar minSubArrayLen = function(target, nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-3",
    "title": "3. Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "problemDescription": "Given a string `s`, find the length of the **longest** **substring** without duplicate characters.\n\nExample 1:**\n\n```\n\n**Input:** s = \"abcabcbb\"\n**Output:** 3\n**Explanation:** The answer is \"abc\", with the length of 3. Note that `\"bca\"` and `\"cab\"` are also correct answers.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"bbbbb\"\n**Output:** 1\n**Explanation:** The answer is \"b\", with the length of 1.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"pwwkew\"\n**Output:** 3\n**Explanation:** The answer is \"wke\", with the length of 3.\nNotice that the answer must be a substring, \"pwke\" is a subsequence and not a substring.\n\n```\n\n**Constraints:**\n\n\t- `0 5`\n\n\t- `s` consists of English letters, digits, symbols and spaces.",
    "mindfulStory": "✨ Mindful Story for 3. Longest Substring Without Repeating Characters:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 3. Longest Substring Without Repeating Characters (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {number}\n */\nvar lengthOfLongestSubstring = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-30",
    "title": "30. Substring with Concatenation of All Words",
    "difficulty": "Hard",
    "approaches": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "problemDescription": "You are given a string `s` and an array of strings `words`. All the strings of `words` are of **the same length**.\n\nA **concatenated string** is a string that exactly contains all the strings of any permutation of `words` concatenated.\n\n\t- For example, if `words = [\"ab\",\"cd\",\"ef\"]`, then `\"abcdef\"`, `\"abefcd\"`, `\"cdabef\"`, `\"cdefab\"`, `\"efabcd\"`, and `\"efcdab\"` are all concatenated strings. `\"acdbef\"` is not a concatenated string because it is not the concatenation of any permutation of `words`.\n\nReturn an array of *the starting indices* of all the concatenated substrings in `s`. You can return the answer in **any order**.\n\nExample 1:**\n\n**Input:** s = \"barfoothefoobarman\", words = [\"foo\",\"bar\"]\n\n**Output:** [0,9]\n\n**Explanation:**\n\nThe substring starting at 0 is `\"barfoo\"`. It is the concatenation of `[\"bar\",\"foo\"]` which is a permutation of `words`.\nThe substring starting at 9 is `\"foobar\"`. It is the concatenation of `[\"foo\",\"bar\"]` which is a permutation of `words`.\n\nExample 2:**\n\n**Input:** s = \"wordgoodgoodgoodbestword\", words = [\"word\",\"good\",\"best\",\"word\"]\n\n**Output:** []\n\n**Explanation:**\n\nThere is no concatenated substring.\n\nExample 3:**\n\n**Input:** s = \"barfoofoobarthefoobarman\", words = [\"bar\",\"foo\",\"the\"]\n\n**Output:** [6,9,12]\n\n**Explanation:**\n\nThe substring starting at 6 is `\"foobarthe\"`. It is the concatenation of `[\"foo\",\"bar\",\"the\"]`.\nThe substring starting at 9 is `\"barthefoo\"`. It is the concatenation of `[\"bar\",\"the\",\"foo\"]`.\nThe substring starting at 12 is `\"thefoobar\"`. It is the concatenation of `[\"the\",\"foo\",\"bar\"]`.\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `1 <= words.length <= 5000`\n\n\t- `1 <= words[i].length <= 30`\n\n\t- `s` and `words[i]` consist of lowercase English letters.",
    "mindfulStory": "✨ Mindful Story for 30. Substring with Concatenation of All Words:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 30. Substring with Concatenation of All Words (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {string[]} words\n * @return {number[]}\n */\nvar findSubstring = function(s, words) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-76",
    "title": "76. Minimum Window Substring",
    "difficulty": "Hard",
    "approaches": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "problemDescription": "Given two strings `s` and `t` of lengths `m` and `n` respectively, return *the **minimum window*** ***substring**** of *`s`* such that every character in *`t`* (**including duplicates**) is included in the window*. If there is no such substring, return *the empty string *`\"\"`.\n\nThe testcases will be generated such that the answer is **unique**.\n\nExample 1:**\n\n```\n\n**Input:** s = \"ADOBECODEBANC\", t = \"ABC\"\n**Output:** \"BANC\"\n**Explanation:** The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"a\", t = \"a\"\n**Output:** \"a\"\n**Explanation:** The entire string s is the minimum window.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"a\", t = \"aa\"\n**Output:** \"\"\n**Explanation:** Both 'a's from t must be included in the window.\nSince the largest window of s only has one 'a', return empty string.\n\n```\n\n**Constraints:**\n\n\t- `m == s.length`\n\n\t- `n == t.length`\n\n\t- `1 5`\n\n\t- `s` and `t` consist of uppercase and lowercase English letters.\n\n**Follow up:** Could you find an algorithm that runs in `O(m + n)` time?",
    "mindfulStory": "✨ Mindful Story for 76. Minimum Window Substring:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 76. Minimum Window Substring (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {string} t\n * @return {string}\n */\nvar minWindow = function(s, t) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-36",
    "title": "36. Valid Sudoku",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "problemDescription": "Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:\n\n\t- Each row must contain the digits `1-9` without repetition.\n\n\t- Each column must contain the digits `1-9` without repetition.\n\n\t- Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.\n\n**Note:**\n\n\t- A Sudoku board (partially filled) could be valid but is not necessarily solvable.\n\n\t- Only the filled cells need to be validated according to the mentioned rules.\n\nExample 1:**\n\n```\n\n**Input:** board = \n[[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"]\n,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]\n,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"]\n,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"]\n,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"]\n,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"]\n,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"]\n,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"]\n,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** board = \n[[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"]\n,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"]\n,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"]\n,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"]\n,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"]\n,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"]\n,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"]\n,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"]\n,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]\n**Output:** false\n**Explanation:** Same as Example 1, except with the **5** in the top left corner being modified to **8**. Since there are two 8's in the top left 3x3 sub-box, it is invalid.\n\n```\n\n**Constraints:**\n\n\t- `board.length == 9`\n\n\t- `board[i].length == 9`\n\n\t- `board[i][j]` is a digit `1-9` or `'.'`.",
    "mindfulStory": "✨ Mindful Story for 36. Valid Sudoku:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 36. Valid Sudoku (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {character[][]} board\n * @return {boolean}\n */\nvar isValidSudoku = function(board) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-54",
    "title": "54. Spiral Matrix",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "problemDescription": "Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*.\n\nExample 1:**\n\n```\n\n**Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]\n**Output:** [1,2,3,6,9,8,7,4,5]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n**Output:** [1,2,3,4,8,12,11,10,9,5,6,7]\n\n```\n\n**Constraints:**\n\n\t- `m == matrix.length`\n\n\t- `n == matrix[i].length`\n\n\t- `1 <= m, n <= 10`\n\n\t- `-100 <= matrix[i][j] <= 100`",
    "mindfulStory": "✨ Mindful Story for 54. Spiral Matrix:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 54. Spiral Matrix (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} matrix\n * @return {number[]}\n */\nvar spiralOrder = function(matrix) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-48",
    "title": "48. Rotate Image",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Math",
      "Matrix"
    ],
    "problemDescription": "You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).\n\nYou have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.\n\nExample 1:**\n\n```\n\n**Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]\n**Output:** [[7,4,1],[8,5,2],[9,6,3]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]\n**Output:** [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]\n\n```\n\n**Constraints:**\n\n\t- `n == matrix.length == matrix[i].length`\n\n\t- `1 <= n <= 20`\n\n\t- `-1000 <= matrix[i][j] <= 1000`",
    "mindfulStory": "✨ Mindful Story for 48. Rotate Image:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 48. Rotate Image (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function(matrix) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-73",
    "title": "73. Set Matrix Zeroes",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "problemDescription": "Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`'s.\n\nYou must do it in place.\n\nExample 1:**\n\n```\n\n**Input:** matrix = [[1,1,1],[1,0,1],[1,1,1]]\n**Output:** [[1,0,1],[0,0,0],[1,0,1]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]\n**Output:** [[0,0,0,0],[0,4,5,0],[0,3,1,0]]\n\n```\n\n**Constraints:**\n\n\t- `m == matrix.length`\n\n\t- `n == matrix[0].length`\n\n\t- `1 31 31 - 1`\n\n**Follow up:**\n\n\t- A straightforward solution using `O(mn)` space is probably a bad idea.\n\n\t- A simple improvement uses `O(m + n)` space, but still not the best solution.\n\n\t- Could you devise a constant space solution?",
    "mindfulStory": "✨ Mindful Story for 73. Set Matrix Zeroes:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 73. Set Matrix Zeroes (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar setZeroes = function(matrix) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-289",
    "title": "289. Game of Life",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "problemDescription": "According to Wikipedia's article: \"The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.\"\n\nThe board is made up of an `m x n` grid of cells, where each cell has an initial state: live (represented by a `1`) or dead (represented by a `0`). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):\n\n\t- Any live cell with fewer than two live neighbors dies as if caused by under-population.\n\n\t- Any live cell with two or three live neighbors lives on to the next generation.\n\n\t- Any live cell with more than three live neighbors dies, as if by over-population.\n\n\t- Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.\n\nThe next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the `m x n` grid `board`. In this process, births and deaths occur **simultaneously**.\n\nGiven the current state of the `board`, **update** the `board` to reflect its next state.\n\n**Note** that you do not need to return anything.\n\nExample 1:**\n\n```\n\n**Input:** board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]\n**Output:** [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** board = [[1,1],[1,0]]\n**Output:** [[1,1],[1,1]]\n\n```\n\n**Constraints:**\n\n\t- `m == board.length`\n\n\t- `n == board[i].length`\n\n\t- `1 <= m, n <= 25`\n\n\t- `board[i][j]` is `0` or `1`.\n\n**Follow up:**\n\n\t- Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.\n\n\t- In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?",
    "mindfulStory": "✨ Mindful Story for 289. Game of Life:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 289. Game of Life (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} board\n * @return {void} Do not return anything, modify board in-place instead.\n */\nvar gameOfLife = function(board) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-383",
    "title": "383. Ransom Note",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "String",
      "Counting"
    ],
    "problemDescription": "Given two strings `ransomNote` and `magazine`, return `true`* if *`ransomNote`* can be constructed by using the letters from *`magazine`* and *`false`* otherwise*.\n\nEach letter in `magazine` can only be used once in `ransomNote`.\n\nExample 1:**\n\n```\n**Input:** ransomNote = \"a\", magazine = \"b\"\n**Output:** false\n\n```\n\nExample 2:**\n\n```\n**Input:** ransomNote = \"aa\", magazine = \"ab\"\n**Output:** false\n\n```\n\nExample 3:**\n\n```\n**Input:** ransomNote = \"aa\", magazine = \"aab\"\n**Output:** true\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `ransomNote` and `magazine` consist of lowercase English letters.",
    "mindfulStory": "✨ Mindful Story for 383. Ransom Note:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 383. Ransom Note (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} ransomNote\n * @param {string} magazine\n * @return {boolean}\n */\nvar canConstruct = function(ransomNote, magazine) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-205",
    "title": "205. Isomorphic Strings",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "String"
    ],
    "problemDescription": "Given two strings `s` and `t`, *determine if they are isomorphic*.\n\nTwo strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.\n\nAll occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.\n\nExample 1:**\n\n**Input:** s = \"egg\", t = \"add\"\n\n**Output:** true\n\n**Explanation:**\n\nThe strings `s` and `t` can be made identical by:\n\n\t- Mapping `'e'` to `'a'`.\n\n\t- Mapping `'g'` to `'d'`.\n\nExample 2:**\n\n**Input:** s = \"f11\", t = \"b23\"\n\n**Output:** false\n\n**Explanation:**\n\nThe strings `s` and `t` can not be made identical as `'1'` needs to be mapped to both `'2'` and `'3'`.\n\nExample 3:**\n\n**Input:** s = \"paper\", t = \"title\"\n\n**Output:** true\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `t.length == s.length`\n\n\t- `s` and `t` consist of any valid ascii character.",
    "mindfulStory": "✨ Mindful Story for 205. Isomorphic Strings:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 205. Isomorphic Strings (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isIsomorphic = function(s, t) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-290",
    "title": "290. Word Pattern",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "String"
    ],
    "problemDescription": "Given a `pattern` and a string `s`, find if `s` follows the same pattern.\n\nHere follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`. Specifically:\n\n\t- Each letter in `pattern` maps to **exactly** one unique word in `s`.\n\n\t- Each unique word in `s` maps to **exactly** one letter in `pattern`.\n\n\t- No two letters map to the same word, and no two words map to the same letter.\n\nExample 1:**\n\n**Input:** pattern = \"abba\", s = \"dog cat cat dog\"\n\n**Output:** true\n\n**Explanation:**\n\nThe bijection can be established as:\n\n\t- `'a'` maps to `\"dog\"`.\n\n\t- `'b'` maps to `\"cat\"`.\n\nExample 2:**\n\n**Input:** pattern = \"abba\", s = \"dog cat cat fish\"\n\n**Output:** false\n\nExample 3:**\n\n**Input:** pattern = \"aaaa\", s = \"dog cat cat dog\"\n\n**Output:** false\n\n**Constraints:**\n\n\t- `1 <= pattern.length <= 300`\n\n\t- `pattern` contains only lower-case English letters.\n\n\t- `1 <= s.length <= 3000`\n\n\t- `s` contains only lowercase English letters and spaces `' '`.\n\n\t- `s` **does not contain** any leading or trailing spaces.\n\n\t- All the words in `s` are separated by a **single space**.",
    "mindfulStory": "✨ Mindful Story for 290. Word Pattern:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 290. Word Pattern (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} pattern\n * @param {string} s\n * @return {boolean}\n */\nvar wordPattern = function(pattern, s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-242",
    "title": "242. Valid Anagram",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "problemDescription": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.\n\nExample 1:**\n\n**Input:** s = \"anagram\", t = \"nagaram\"\n\n**Output:** true\n\nExample 2:**\n\n**Input:** s = \"rat\", t = \"car\"\n\n**Output:** false\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `s` and `t` consist of lowercase English letters.\n\n**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?",
    "mindfulStory": "✨ Mindful Story for 242. Valid Anagram:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 242. Valid Anagram (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {string} t\n * @return {boolean}\n */\nvar isAnagram = function(s, t) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-49",
    "title": "49. Group Anagrams",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "problemDescription": "Given an array of strings `strs`, group the anagrams together. You can return the answer in **any order**.\n\nExample 1:**\n\n**Input:** strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\n\n**Output:** [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]\n\n**Explanation:**\n\n\t- There is no string in strs that can be rearranged to form `\"bat\"`.\n\n\t- The strings `\"nat\"` and `\"tan\"` are anagrams as they can be rearranged to form each other.\n\n\t- The strings `\"ate\"`, `\"eat\"`, and `\"tea\"` are anagrams as they can be rearranged to form each other.\n\nExample 2:**\n\n**Input:** strs = [\"\"]\n\n**Output:** [[\"\"]]\n\nExample 3:**\n\n**Input:** strs = [\"a\"]\n\n**Output:** [[\"a\"]]\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `0 <= strs[i].length <= 100`\n\n\t- `strs[i]` consists of lowercase English letters.",
    "mindfulStory": "✨ Mindful Story for 49. Group Anagrams:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 49. Group Anagrams (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string[]} strs\n * @return {string[][]}\n */\nvar groupAnagrams = function(strs) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-1",
    "title": "1. Two Sum",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Hash Table"
    ],
    "problemDescription": "You are given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.\n\nYou may assume that each input would have ***exactly* one solution**, and you may not use the *same* element twice.\n\nYou can return the answer in any order.\n\nExample 1:**\n\n```\n\n**Input:** nums = [2,7,11,15], target = 9\n**Output:** [0,1]\n**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [3,2,4], target = 6\n**Output:** [1,2]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [3,3], target = 6\n**Output:** [0,1]\n\n```\n\n**Constraints:**\n\n\t- `2 4`\n\n\t- `-109 9`\n\n\t- `-109 9`\n\n\t- **Only one valid answer exists.**\n\n**Follow-up: **Can you come up with an algorithm that is less than `O(n2)` time complexity?",
    "mindfulStory": "✨ Mindful Story for 1. Two Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 1. Two Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar twoSum = function(nums, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-202",
    "title": "202. Happy Number",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "Math",
      "Two Pointers"
    ],
    "problemDescription": "Write an algorithm to determine if a number `n` is happy.\n\nA **happy number** is a number defined by the following process:\n\n\t- Starting with any positive integer, replace the number by the sum of the squares of its digits.\n\n\t- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.\n\n\t- Those numbers for which this process **ends in 1** are happy.\n\nReturn `true` *if* `n` *is a happy number, and* `false` *if not*.\n\nExample 1:**\n\n```\n\n**Input:** n = 19\n**Output:** true\n**Explanation:**\n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1\n\n```\n\nExample 2:**\n\n```\n\n**Input:** n = 2\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- `1 31 - 1`",
    "mindfulStory": "✨ Mindful Story for 202. Happy Number:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 202. Happy Number (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @return {boolean}\n */\nvar isHappy = function(n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-219",
    "title": "219. Contains Duplicate II",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Hash Table",
      "Sliding Window"
    ],
    "problemDescription": "Given an integer array `nums` and an integer `k`, return `true` *if there are two **distinct indices** *`i`* and *`j`* in the array such that *`nums[i] == nums[j]`* and *`abs(i - j) Example 1:**\n\n```\n\n**Input:** nums = [1,2,3,1], k = 3\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [1,0,1,1], k = 1\n**Output:** true\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [1,2,3,1,2,3], k = 2\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `-109 9`\n\n\t- `0 5`",
    "mindfulStory": "✨ Mindful Story for 219. Contains Duplicate II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 219. Contains Duplicate II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {boolean}\n */\nvar containsNearbyDuplicate = function(nums, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-128",
    "title": "128. Longest Consecutive Sequence",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "Union-Find"
    ],
    "problemDescription": "Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence.*\n\nYou must write an algorithm that runs in `O(n)` time.\n\nExample 1:**\n\n```\n\n**Input:** nums = [100,4,200,1,3,2]\n**Output:** 4\n**Explanation:** The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,3,7,2,5,8,4,6,0,1]\n**Output:** 9\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [1,0,1,2]\n**Output:** 3\n\n```\n\n**Constraints:**\n\n\t- `0 5`\n\n\t- `-109 9`",
    "mindfulStory": "✨ Mindful Story for 128. Longest Consecutive Sequence:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 128. Longest Consecutive Sequence (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar longestConsecutive = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-228",
    "title": "228. Summary Ranges",
    "difficulty": "Easy",
    "approaches": [
      "Array"
    ],
    "problemDescription": "You are given a **sorted unique** integer array `nums`.\n\nA **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).\n\nReturn *the **smallest sorted** list of ranges that **cover all the numbers in the array exactly***. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.\n\nEach range `[a,b]` in the list should be output as:\n\n\t- `\"a->b\"` if `a != b`\n\n\t- `\"a\"` if `a == b`\n\nExample 1:**\n\n```\n\n**Input:** nums = [0,1,2,4,5,7]\n**Output:** [\"0->2\",\"4->5\",\"7\"]\n**Explanation:** The ranges are:\n[0,2] --> \"0->2\"\n[4,5] --> \"4->5\"\n[7,7] --> \"7\"\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,2,3,4,6,8,9]\n**Output:** [\"0\",\"2->4\",\"6\",\"8->9\"]\n**Explanation:** The ranges are:\n[0,0] --> \"0\"\n[2,4] --> \"2->4\"\n[6,6] --> \"6\"\n[8,9] --> \"8->9\"\n\n```\n\n**Constraints:**\n\n\t- `0 31 31 - 1`\n\n\t- All the values of `nums` are **unique**.\n\n\t- `nums` is sorted in ascending order.",
    "mindfulStory": "✨ Mindful Story for 228. Summary Ranges:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 228. Summary Ranges (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {string[]}\n */\nvar summaryRanges = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-56",
    "title": "56. Merge Intervals",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Sorting"
    ],
    "problemDescription": "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.\n\nExample 1:**\n\n```\n\n**Input:** intervals = [[1,3],[2,6],[8,10],[15,18]]\n**Output:** [[1,6],[8,10],[15,18]]\n**Explanation:** Since intervals [1,3] and [2,6] overlap, merge them into [1,6].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** intervals = [[1,4],[4,5]]\n**Output:** [[1,5]]\n**Explanation:** Intervals [1,4] and [4,5] are considered overlapping.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** intervals = [[4,7],[1,4]]\n**Output:** [[1,7]]\n**Explanation:** Intervals [1,4] and [4,7] are considered overlapping.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `intervals[i].length == 2`\n\n\t- `0 i i 4`",
    "mindfulStory": "✨ Mindful Story for 56. Merge Intervals:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 56. Merge Intervals (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nvar merge = function(intervals) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-57",
    "title": "57. Insert Interval",
    "difficulty": "Medium",
    "approaches": [
      "Array"
    ],
    "problemDescription": "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `ith` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.\n\nTwo intervals are considered overlapping if they share **at least** one point.\n\nInsert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).\n\nReturn `intervals`* after the insertion*.\n\n**Note** that you don't need to modify `intervals` in-place. You can make a new array and return it.\n\nExample 1:**\n\n```\n\n**Input:** intervals = [[1,3],[6,9]], newInterval = [2,5]\n**Output:** [[1,5],[6,9]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]\n**Output:** [[1,2],[3,10],[12,16]]\n**Explanation:** Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].\n\n```\n\n**Constraints:**\n\n\t- `0 4`\n\n\t- `intervals[i].length == 2`\n\n\t- `0 i i 5`\n\n\t- `intervals` is sorted by `starti` in **ascending** order.\n\n\t- `newInterval.length == 2`\n\n\t- `0 5`",
    "mindfulStory": "✨ Mindful Story for 57. Insert Interval:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 57. Insert Interval (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} intervals\n * @param {number[]} newInterval\n * @return {number[][]}\n */\nvar insert = function(intervals, newInterval) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-452",
    "title": "452. Minimum Number of Arrows to Burst Balloons",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "problemDescription": "There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [xstart, xend]` denotes a balloon whose **horizontal diameter** stretches between `xstart` and `xend`. You do not know the exact y-coordinates of the balloons.\n\nArrows can be shot up **directly vertically** (in the positive y-direction) from different points along the x-axis. A balloon with `xstart` and `xend` is **burst** by an arrow shot at `x` if `xstart end`. There is **no limit** to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.\n\nGiven the array `points`, return *the **minimum** number of arrows that must be shot to burst all balloons*.\n\nExample 1:**\n\n```\n\n**Input:** points = [[10,16],[2,8],[1,6],[7,12]]\n**Output:** 2\n**Explanation:** The balloons can be burst by 2 arrows:\n- Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].\n- Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** points = [[1,2],[3,4],[5,6],[7,8]]\n**Output:** 4\n**Explanation:** One arrow needs to be shot for each balloon for a total of 4 arrows.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** points = [[1,2],[2,3],[3,4],[4,5]]\n**Output:** 2\n**Explanation:** The balloons can be burst by 2 arrows:\n- Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].\n- Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `points[i].length == 2`\n\n\t- `-231 start end 31 - 1`",
    "mindfulStory": "✨ Mindful Story for 452. Minimum Number of Arrows to Burst Balloons:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 452. Minimum Number of Arrows to Burst Balloons (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} points\n * @return {number}\n */\nvar findMinArrowShots = function(points) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-20",
    "title": "20. Valid Parentheses",
    "difficulty": "Easy",
    "approaches": [
      "String",
      "Stack"
    ],
    "problemDescription": "Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.\n\nAn input string is valid if:\n\n\t- Open brackets must be closed by the same type of brackets.\n\n\t- Open brackets must be closed in the correct order.\n\n\t- Every close bracket has a corresponding open bracket of the same type.\n\nExample 1:**\n\n**Input:** s = \"()\"\n\n**Output:** true\n\nExample 2:**\n\n**Input:** s = \"()[]{}\"\n\n**Output:** true\n\nExample 3:**\n\n**Input:** s = \"(]\"\n\n**Output:** false\n\nExample 4:**\n\n**Input:** s = \"([])\"\n\n**Output:** true\n\nExample 5:**\n\n**Input:** s = \"([)]\"\n\n**Output:** false\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `s` consists of parentheses only `'()[]{}'`.",
    "mindfulStory": "✨ Mindful Story for 20. Valid Parentheses:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 20. Valid Parentheses (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {boolean}\n */\nvar isValid = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-71",
    "title": "71. Simplify Path",
    "difficulty": "Medium",
    "approaches": [
      "String",
      "Stack"
    ],
    "problemDescription": "You are given an *absolute* path for a Unix-style file system, which always begins with a slash `'/'`. Your task is to transform this absolute path into its **simplified canonical path**.\n\nThe *rules* of a Unix-style file system are as follows:\n\n\t- A single period `'.'` represents the current directory.\n\n\t- A double period `'..'` represents the previous/parent directory.\n\n\t- Multiple consecutive slashes such as `'//'` and `'///'` are treated as a single slash `'/'`.\n\n\t- Any sequence of periods that does **not match** the rules above should be treated as a **valid directory or** **file ****name**. For example, `'...' `and `'....'` are valid directory or file names.\n\nThe simplified canonical path should follow these *rules*:\n\n\t- The path must start with a single slash `'/'`.\n\n\t- Directories within the path must be separated by exactly one slash `'/'`.\n\n\t- The path must not end with a slash `'/'`, unless it is the root directory.\n\n\t- The path must not have any single or double periods (`'.'` and `'..'`) used to denote current or parent directories.\n\nReturn the **simplified canonical path**.\n\nExample 1:**\n\n**Input:** path = \"/home/\"\n\n**Output:** \"/home\"\n\n**Explanation:**\n\nThe trailing slash should be removed.\n\nExample 2:**\n\n**Input:** path = \"/home//foo/\"\n\n**Output:** \"/home/foo\"\n\n**Explanation:**\n\nMultiple consecutive slashes are replaced by a single one.\n\nExample 3:**\n\n**Input:** path = \"/home/user/Documents/../Pictures\"\n\n**Output:** \"/home/user/Pictures\"\n\n**Explanation:**\n\nA double period `\"..\"` refers to the directory up a level (the parent directory).\n\nExample 4:**\n\n**Input:** path = \"/../\"\n\n**Output:** \"/\"\n\n**Explanation:**\n\nGoing one level up from the root directory is not possible.\n\nExample 5:**\n\n**Input:** path = \"/.../a/../b/c/../d/./\"\n\n**Output:** \"/.../b/d\"\n\n**Explanation:**\n\n`\"...\"` is a valid name for a directory in this problem.\n\n**Constraints:**\n\n\t- `1 <= path.length <= 3000`\n\n\t- `path` consists of English letters, digits, period `'.'`, slash `'/'` or `'_'`.\n\n\t- `path` is a valid absolute Unix path.",
    "mindfulStory": "✨ Mindful Story for 71. Simplify Path:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 71. Simplify Path (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} path\n * @return {string}\n */\nvar simplifyPath = function(path) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-155",
    "title": "155. Min Stack",
    "difficulty": "Medium",
    "approaches": [
      "Stack",
      "Design"
    ],
    "problemDescription": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n\nImplement the `MinStack` class:\n\n\t- `MinStack()` initializes the stack object.\n\n\t- `void push(int value)` pushes the element `value` onto the stack.\n\n\t- `void pop()` removes the element on the top of the stack.\n\n\t- `int top()` gets the top element of the stack.\n\n\t- `int getMin()` retrieves the minimum element in the stack.\n\nYou must implement a solution with `O(1)` time complexity for each function.\n\nExample 1:**\n\n```\n\n**Input**\n[\"MinStack\",\"push\",\"push\",\"push\",\"getMin\",\"pop\",\"top\",\"getMin\"]\n[[],[-2],[0],[-3],[],[],[],[]]\n\n**Output**\n[null,null,null,null,-3,null,0,-2]\n\n**Explanation**\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin(); // return -3\nminStack.pop();\nminStack.top();    // return 0\nminStack.getMin(); // return -2\n\n```\n\n**Constraints:**\n\n\t- `-231 31 - 1`\n\n\t- Methods `pop`, `top` and `getMin` operations will always be called on **non-empty** stacks.\n\n\t- At most `3 * 104` calls will be made to `push`, `pop`, `top`, and `getMin`.",
    "mindfulStory": "✨ Mindful Story for 155. Min Stack:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 155. Min Stack (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "\nvar MinStack = function() {\n    \n};\n\n/** \n * @param {number} value\n * @return {void}\n */\nMinStack.prototype.push = function(value) {\n    \n};\n\n/**\n * @return {void}\n */\nMinStack.prototype.pop = function() {\n    \n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.top = function() {\n    \n};\n\n/**\n * @return {number}\n */\nMinStack.prototype.getMin = function() {\n    \n};\n\n/** \n * Your MinStack object will be instantiated and called as such:\n * var obj = new MinStack()\n * obj.push(value)\n * obj.pop()\n * var param_3 = obj.top()\n * var param_4 = obj.getMin()\n */",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-150",
    "title": "150. Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Math",
      "Stack"
    ],
    "problemDescription": "You are given an array of strings `tokens` that represents an arithmetic expression in a Reverse Polish Notation.\n\nEvaluate the expression. Return *an integer that represents the value of the expression*.\n\n**Note** that:\n\n\t- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.\n\n\t- Each operand may be an integer or another expression.\n\n\t- The division between two integers always **truncates toward zero**.\n\n\t- There will not be any division by zero.\n\n\t- The input represents a valid arithmetic expression in a reverse polish notation.\n\n\t- The answer and all the intermediate calculations can be represented in a **32-bit** integer.\n\nExample 1:**\n\n```\n\n**Input:** tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]\n**Output:** 9\n**Explanation:** ((2 + 1) * 3) = 9\n\n```\n\nExample 2:**\n\n```\n\n**Input:** tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]\n**Output:** 6\n**Explanation:** (4 + (13 / 5)) = 6\n\n```\n\nExample 3:**\n\n```\n\n**Input:** tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]\n**Output:** 22\n**Explanation:** ((10 * (6 / ((9 + 3) * -11))) + 17) + 5\n= ((10 * (6 / (12 * -11))) + 17) + 5\n= ((10 * (6 / -132)) + 17) + 5\n= ((10 * 0) + 17) + 5\n= (0 + 17) + 5\n= 17 + 5\n= 22\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `tokens[i]` is either an operator: `\"+\"`, `\"-\"`, `\"*\"`, or `\"/\"`, or an integer in the range `[-200, 200]`.",
    "mindfulStory": "✨ Mindful Story for 150. Evaluate Reverse Polish Notation:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 150. Evaluate Reverse Polish Notation (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string[]} tokens\n * @return {number}\n */\nvar evalRPN = function(tokens) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-224",
    "title": "224. Basic Calculator",
    "difficulty": "Hard",
    "approaches": [
      "Math",
      "String",
      "Stack",
      "Recursion"
    ],
    "problemDescription": "Given a string `s` representing a valid expression, implement a basic calculator to evaluate it, and return *the result of the evaluation*.\n\n**Note:** You are **not** allowed to use any built-in function which evaluates strings as mathematical expressions, such as `eval()`.\n\nExample 1:**\n\n```\n\n**Input:** s = \"1 + 1\"\n**Output:** 2\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \" 2-1 + 2 \"\n**Output:** 3\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"(1+(4+5+2)-3)+(6+8)\"\n**Output:** 23\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `s` consists of digits, `'+'`, `'-'`, `'('`, `')'`, and `' '`.\n\n\t- `s` represents a valid expression.\n\n\t- `'+'` is **not** used as a unary operation (i.e., `\"+1\"` and `\"+(2 + 3)\"` is invalid).\n\n\t- `'-'` could be used as a unary operation (i.e., `\"-1\"` and `\"-(2 + 3)\"` is valid).\n\n\t- There will be no two consecutive operators in the input.\n\n\t- Every number and running calculation will fit in a signed 32-bit integer.",
    "mindfulStory": "✨ Mindful Story for 224. Basic Calculator:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 224. Basic Calculator (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {number}\n */\nvar calculate = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-141",
    "title": "141. Linked List Cycle",
    "difficulty": "Easy",
    "approaches": [
      "Hash Table",
      "Linked List",
      "Two Pointers"
    ],
    "problemDescription": "Given `head`, the head of a linked list, determine if the linked list has a cycle in it.\n\nThere is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.\n\nReturn `true`* if there is a cycle in the linked list*. Otherwise, return `false`.\n\nExample 1:**\n\n```\n\n**Input:** head = [3,2,0,-4], pos = 1\n**Output:** true\n**Explanation:** There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [1,2], pos = 0\n**Output:** true\n**Explanation:** There is a cycle in the linked list, where the tail connects to the 0th node.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** head = [1], pos = -1\n**Output:** false\n**Explanation:** There is no cycle in the linked list.\n\n```\n\n**Constraints:**\n\n\t- The number of the nodes in the list is in the range `[0, 104]`.\n\n\t- `-105 5`\n\n\t- `pos` is `-1` or a **valid index** in the linked-list.\n\n**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?",
    "mindfulStory": "✨ Mindful Story for 141. Linked List Cycle:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 141. Linked List Cycle (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val) {\n *     this.val = val;\n *     this.next = null;\n * }\n */\n\n/**\n * @param {ListNode} head\n * @return {boolean}\n */\nvar hasCycle = function(head) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-2",
    "title": "2. Add Two Numbers",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Math",
      "Recursion"
    ],
    "problemDescription": "You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\nExample 1:**\n\n```\n\n**Input:** l1 = [2,4,3], l2 = [5,6,4]\n**Output:** [7,0,8]\n**Explanation:** 342 + 465 = 807.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** l1 = [0], l2 = [0]\n**Output:** [0]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]\n**Output:** [8,9,9,9,0,0,0,1]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in each linked list is in the range `[1, 100]`.\n\n\t- `0 <= Node.val <= 9`\n\n\t- It is guaranteed that the list represents a number that does not have leading zeros.",
    "mindfulStory": "✨ Mindful Story for 2. Add Two Numbers:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 2. Add Two Numbers (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} l1\n * @param {ListNode} l2\n * @return {ListNode}\n */\nvar addTwoNumbers = function(l1, l2) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-21",
    "title": "21. Merge Two Sorted Lists",
    "difficulty": "Easy",
    "approaches": [
      "Linked List",
      "Recursion"
    ],
    "problemDescription": "You are given the heads of two sorted linked lists `list1` and `list2`.\n\nMerge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn *the head of the merged linked list*.\n\nExample 1:**\n\n```\n\n**Input:** list1 = [1,2,4], list2 = [1,3,4]\n**Output:** [1,1,2,3,4,4]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** list1 = [], list2 = []\n**Output:** []\n\n```\n\nExample 3:**\n\n```\n\n**Input:** list1 = [], list2 = [0]\n**Output:** [0]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in both lists is in the range `[0, 50]`.\n\n\t- `-100 <= Node.val <= 100`\n\n\t- Both `list1` and `list2` are sorted in **non-decreasing** order.",
    "mindfulStory": "✨ Mindful Story for 21. Merge Two Sorted Lists:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 21. Merge Two Sorted Lists (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} list1\n * @param {ListNode} list2\n * @return {ListNode}\n */\nvar mergeTwoLists = function(list1, list2) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-138",
    "title": "138. Copy List with Random Pointer",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "Linked List"
    ],
    "problemDescription": "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.\n\nConstruct a **deep copy** of the list. The deep copy should consist of exactly `n` **brand new** nodes, where each new node has its value set to the value of its corresponding original node. Both the `next` and `random` pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. **None of the pointers in the new list should point to nodes in the original list**.\n\nFor example, if there are two nodes `X` and `Y` in the original list, where `X.random --> Y`, then for the corresponding two nodes `x` and `y` in the copied list, `x.random --> y`.\n\nReturn *the head of the copied linked list*.\n\nThe linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:\n\n\t- `val`: an integer representing `Node.val`\n\n\t- `random_index`: the index of the node (range from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.\n\nYour code will **only** be given the `head` of the original linked list.\n\nExample 1:**\n\n```\n\n**Input:** head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\n**Output:** [[7,null],[13,0],[11,4],[10,2],[1,0]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [[1,1],[2,1]]\n**Output:** [[1,1],[2,1]]\n\n```\n\nExample 3:**\n\n****\n\n```\n\n**Input:** head = [[3,null],[3,0],[3,null]]\n**Output:** [[3,null],[3,0],[3,null]]\n\n```\n\n**Constraints:**\n\n\t- `0 4 4`\n\n\t- `Node.random` is `null` or is pointing to some node in the linked list.",
    "mindfulStory": "✨ Mindful Story for 138. Copy List with Random Pointer:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 138. Copy List with Random Pointer (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * // Definition for a _Node.\n * function _Node(val, next, random) {\n *    this.val = val;\n *    this.next = next;\n *    this.random = random;\n * };\n */\n\n/**\n * @param {_Node} head\n * @return {_Node}\n */\nvar copyRandomList = function(head) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-92",
    "title": "92. Reverse Linked List II",
    "difficulty": "Medium",
    "approaches": [
      "Linked List"
    ],
    "problemDescription": "Given the `head` of a singly linked list and two integers `left` and `right` where `left Example 1:**\n\n```\n\n**Input:** head = [1,2,3,4,5], left = 2, right = 4\n**Output:** [1,4,3,2,5]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [5], left = 1, right = 1\n**Output:** [5]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is `n`.\n\n\t- `1 <= n <= 500`\n\n\t- `-500 <= Node.val <= 500`\n\n\t- `1 <= left <= right <= n`\n\n**Follow up:** Could you do it in one pass?",
    "mindfulStory": "✨ Mindful Story for 92. Reverse Linked List II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 92. Reverse Linked List II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} left\n * @param {number} right\n * @return {ListNode}\n */\nvar reverseBetween = function(head, left, right) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-25",
    "title": "25. Reverse Nodes in k-Group",
    "difficulty": "Hard",
    "approaches": [
      "Linked List",
      "Recursion"
    ],
    "problemDescription": "Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return *the modified list*.\n\n`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.\n\nYou may not alter the values in the list's nodes, only nodes themselves may be changed.\n\nExample 1:**\n\n```\n\n**Input:** head = [1,2,3,4,5], k = 2\n**Output:** [2,1,4,3,5]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [1,2,3,4,5], k = 3\n**Output:** [3,2,1,4,5]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is `n`.\n\n\t- `1 <= k <= n <= 5000`\n\n\t- `0 <= Node.val <= 1000`\n\n**Follow-up:** Can you solve the problem in `O(1)` extra memory space?",
    "mindfulStory": "✨ Mindful Story for 25. Reverse Nodes in k-Group:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 25. Reverse Nodes in k-Group (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar reverseKGroup = function(head, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-19",
    "title": "19. Remove Nth Node From End of List",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Two Pointers"
    ],
    "problemDescription": "Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.\n\nExample 1:**\n\n```\n\n**Input:** head = [1,2,3,4,5], n = 2\n**Output:** [1,2,3,5]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [1], n = 1\n**Output:** []\n\n```\n\nExample 3:**\n\n```\n\n**Input:** head = [1,2], n = 1\n**Output:** [1]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is `sz`.\n\n\t- `1 <= sz <= 30`\n\n\t- `0 <= Node.val <= 100`\n\n\t- `1 <= n <= sz`\n\n**Follow up:** Could you do this in one pass?",
    "mindfulStory": "✨ Mindful Story for 19. Remove Nth Node From End of List:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 19. Remove Nth Node From End of List (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} n\n * @return {ListNode}\n */\nvar removeNthFromEnd = function(head, n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-82",
    "title": "82. Remove Duplicates from Sorted List II",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Two Pointers"
    ],
    "problemDescription": "Given the `head` of a sorted linked list, *delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list*. Return *the linked list **sorted** as well*.\n\nExample 1:**\n\n```\n\n**Input:** head = [1,2,3,3,4,4,5]\n**Output:** [1,2,5]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [1,1,1,2,3]\n**Output:** [2,3]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is in the range `[0, 300]`.\n\n\t- `-100 <= Node.val <= 100`\n\n\t- The list is guaranteed to be **sorted** in ascending order.",
    "mindfulStory": "✨ Mindful Story for 82. Remove Duplicates from Sorted List II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 82. Remove Duplicates from Sorted List II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar deleteDuplicates = function(head) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-61",
    "title": "61. Rotate List",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Two Pointers"
    ],
    "problemDescription": "Given the `head` of a linked list, rotate the list to the right by `k` places.\n\nExample 1:**\n\n```\n\n**Input:** head = [1,2,3,4,5], k = 2\n**Output:** [4,5,1,2,3]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [0,1,2], k = 4\n**Output:** [2,0,1]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is in the range `[0, 500]`.\n\n\t- `-100 9`",
    "mindfulStory": "✨ Mindful Story for 61. Rotate List:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 61. Rotate List (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} k\n * @return {ListNode}\n */\nvar rotateRight = function(head, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-86",
    "title": "86. Partition List",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Two Pointers"
    ],
    "problemDescription": "Given the `head` of a linked list and a value `x`, partition it such that all nodes **less than** `x` come before nodes **greater than or equal** to `x`.\n\nYou should **preserve** the original relative order of the nodes in each of the two partitions.\n\nExample 1:**\n\n```\n\n**Input:** head = [1,4,3,2,5,2], x = 3\n**Output:** [1,2,2,4,3,5]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [2,1], x = 2\n**Output:** [1,2]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is in the range `[0, 200]`.\n\n\t- `-100 <= Node.val <= 100`\n\n\t- `-200 <= x <= 200`",
    "mindfulStory": "✨ Mindful Story for 86. Partition List:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 86. Partition List (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @param {number} x\n * @return {ListNode}\n */\nvar partition = function(head, x) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-146",
    "title": "146. LRU Cache",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "Linked List",
      "Design",
      "Doubly-Linked List"
    ],
    "problemDescription": "Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.\n\nImplement the `LRUCache` class:\n\n\t- `LRUCache(int capacity)` Initialize the LRU cache with **positive** size `capacity`.\n\n\t- `int get(int key)` Return the value of the `key` if the key exists, otherwise return `-1`.\n\n\t- `void put(int key, int value)` Update the value of the `key` if the `key` exists. Otherwise, add the `key-value` pair to the cache. If the number of keys exceeds the `capacity` from this operation, **evict** the least recently used key.\n\nThe functions `get` and `put` must each run in `O(1)` average time complexity.\n\nExample 1:**\n\n```\n\n**Input**\n[\"LRUCache\", \"put\", \"put\", \"get\", \"put\", \"get\", \"put\", \"get\", \"get\", \"get\"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]\n**Output**\n[null, null, null, 1, null, -1, null, -1, 3, 4]\n\n**Explanation**\nLRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `0 5`\n\n\t- At most `2 * 105` calls will be made to `get` and `put`.",
    "mindfulStory": "✨ Mindful Story for 146. LRU Cache:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 146. LRU Cache (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} capacity\n */\nvar LRUCache = function(capacity) {\n    \n};\n\n/** \n * @param {number} key\n * @return {number}\n */\nLRUCache.prototype.get = function(key) {\n    \n};\n\n/** \n * @param {number} key \n * @param {number} value\n * @return {void}\n */\nLRUCache.prototype.put = function(key, value) {\n    \n};\n\n/** \n * Your LRUCache object will be instantiated and called as such:\n * var obj = new LRUCache(capacity)\n * var param_1 = obj.get(key)\n * obj.put(key,value)\n */",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-104",
    "title": "104. Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, return *its maximum depth*.\n\nA binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\nExample 1:**\n\n```\n\n**Input:** root = [3,9,20,null,null,15,7]\n**Output:** 3\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [1,null,2]\n**Output:** 2\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 104]`.\n\n\t- `-100 <= Node.val <= 100`",
    "mindfulStory": "✨ Mindful Story for 104. Maximum Depth of Binary Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 104. Maximum Depth of Binary Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-100",
    "title": "100. Same Tree",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.\n\nTwo binary trees are considered the same if they are structurally identical, and the nodes have the same value.\n\nExample 1:**\n\n```\n\n**Input:** p = [1,2,3], q = [1,2,3]\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** p = [1,2], q = [1,null,2]\n**Output:** false\n\n```\n\nExample 3:**\n\n```\n\n**Input:** p = [1,2,1], q = [1,1,2]\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in both trees is in the range `[0, 100]`.\n\n\t- `-104 4`",
    "mindfulStory": "✨ Mindful Story for 100. Same Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 100. Same Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {boolean}\n */\nvar isSameTree = function(p, q) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-226",
    "title": "226. Invert Binary Tree",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, invert the tree, and return *its root*.\n\nExample 1:**\n\n```\n\n**Input:** root = [4,2,7,1,3,6,9]\n**Output:** [4,7,2,9,6,3,1]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [2,1,3]\n**Output:** [2,3,1]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** root = []\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 100]`.\n\n\t- `-100 <= Node.val <= 100`",
    "mindfulStory": "✨ Mindful Story for 226. Invert Binary Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 226. Invert Binary Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {TreeNode}\n */\nvar invertTree = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-101",
    "title": "101. Symmetric Tree",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).\n\nExample 1:**\n\n```\n\n**Input:** root = [1,2,2,3,4,4,3]\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [1,2,2,null,3,null,3]\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[1, 1000]`.\n\n\t- `-100 <= Node.val <= 100`\n\n**Follow up:** Could you solve it both recursively and iteratively?",
    "mindfulStory": "✨ Mindful Story for 101. Symmetric Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 101. Symmetric Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isSymmetric = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-105",
    "title": "105. Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Tree",
      "Binary Tree"
    ],
    "problemDescription": "Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.\n\nExample 1:**\n\n```\n\n**Input:** preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\n**Output:** [3,9,20,null,null,15,7]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** preorder = [-1], inorder = [-1]\n**Output:** [-1]\n\n```\n\n**Constraints:**\n\n\t- `1 <= preorder.length <= 3000`\n\n\t- `inorder.length == preorder.length`\n\n\t- `-3000 <= preorder[i], inorder[i] <= 3000`\n\n\t- `preorder` and `inorder` consist of **unique** values.\n\n\t- Each value of `inorder` also appears in `preorder`.\n\n\t- `preorder` is **guaranteed** to be the preorder traversal of the tree.\n\n\t- `inorder` is **guaranteed** to be the inorder traversal of the tree.",
    "mindfulStory": "✨ Mindful Story for 105. Construct Binary Tree from Preorder and Inorder Traversal:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 105. Construct Binary Tree from Preorder and Inorder Traversal (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {number[]} preorder\n * @param {number[]} inorder\n * @return {TreeNode}\n */\nvar buildTree = function(preorder, inorder) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-106",
    "title": "106. Construct Binary Tree from Inorder and Postorder Traversal",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "Divide and Conquer",
      "Tree",
      "Binary Tree"
    ],
    "problemDescription": "Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.\n\nExample 1:**\n\n```\n\n**Input:** inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]\n**Output:** [3,9,20,null,null,15,7]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** inorder = [-1], postorder = [-1]\n**Output:** [-1]\n\n```\n\n**Constraints:**\n\n\t- `1 <= inorder.length <= 3000`\n\n\t- `postorder.length == inorder.length`\n\n\t- `-3000 <= inorder[i], postorder[i] <= 3000`\n\n\t- `inorder` and `postorder` consist of **unique** values.\n\n\t- Each value of `postorder` also appears in `inorder`.\n\n\t- `inorder` is **guaranteed** to be the inorder traversal of the tree.\n\n\t- `postorder` is **guaranteed** to be the postorder traversal of the tree.",
    "mindfulStory": "✨ Mindful Story for 106. Construct Binary Tree from Inorder and Postorder Traversal:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 106. Construct Binary Tree from Inorder and Postorder Traversal (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {number[]} inorder\n * @param {number[]} postorder\n * @return {TreeNode}\n */\nvar buildTree = function(inorder, postorder) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-114",
    "title": "114. Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Stack",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, flatten the tree into a \"linked list\":\n\n\t- The \"linked list\" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.\n\n\t- The \"linked list\" should be in the same order as a **pre-order**** traversal** of the binary tree.\n\nExample 1:**\n\n```\n\n**Input:** root = [1,2,5,3,4,null,6]\n**Output:** [1,null,2,null,3,null,4,null,5,null,6]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = []\n**Output:** []\n\n```\n\nExample 3:**\n\n```\n\n**Input:** root = [0]\n**Output:** [0]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 2000]`.\n\n\t- `-100 <= Node.val <= 100`\n\n**Follow up:** Can you flatten the tree in-place (with `O(1)` extra space)?",
    "mindfulStory": "✨ Mindful Story for 114. Flatten Binary Tree to Linked List:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 114. Flatten Binary Tree to Linked List (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {void} Do not return anything, modify root in-place instead.\n */\nvar flatten = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-112",
    "title": "112. Path Sum",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.\n\nA **leaf** is a node with no children.\n\nExample 1:**\n\n```\n\n**Input:** root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22\n**Output:** true\n**Explanation:** The root-to-leaf path with the target sum is shown.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [1,2,3], targetSum = 5\n**Output:** false\n**Explanation:** There are two root-to-leaf paths in the tree:\n(1 --> 2): The sum is 3.\n(1 --> 3): The sum is 4.\nThere is no root-to-leaf path with sum = 5.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** root = [], targetSum = 0\n**Output:** false\n**Explanation:** Since the tree is empty, there are no root-to-leaf paths.\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 5000]`.\n\n\t- `-1000 <= Node.val <= 1000`\n\n\t- `-1000 <= targetSum <= 1000`",
    "mindfulStory": "✨ Mindful Story for 112. Path Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 112. Path Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} targetSum\n * @return {boolean}\n */\nvar hasPathSum = function(root, targetSum) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-129",
    "title": "129. Sum Root to Leaf Numbers",
    "difficulty": "Medium",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "You are given the `root` of a binary tree containing digits from `0` to `9` only.\n\nEach root-to-leaf path in the tree represents a number.\n\n\t- For example, the root-to-leaf path `1 -> 2 -> 3` represents the number `123`.\n\nReturn *the total sum of all root-to-leaf numbers*. Test cases are generated so that the answer will fit in a **32-bit** integer.\n\nA **leaf** node is a node with no children.\n\nExample 1:**\n\n```\n\n**Input:** root = [1,2,3]\n**Output:** 25\n**Explanation:**\nThe root-to-leaf path `1->2` represents the number `12`.\nThe root-to-leaf path `1->3` represents the number `13`.\nTherefore, sum = 12 + 13 = `25`.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [4,9,0,5,1]\n**Output:** 1026\n**Explanation:**\nThe root-to-leaf path `4->9->5` represents the number 495.\nThe root-to-leaf path `4->9->1` represents the number 491.\nThe root-to-leaf path `4->0` represents the number 40.\nTherefore, sum = 495 + 491 + 40 = `1026`.\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[1, 1000]`.\n\n\t- `0 <= Node.val <= 9`\n\n\t- The depth of the tree will not exceed `10`.",
    "mindfulStory": "✨ Mindful Story for 129. Sum Root to Leaf Numbers:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 129. Sum Root to Leaf Numbers (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar sumNumbers = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-124",
    "title": "124. Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "approaches": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.\n\nThe **path sum** of a path is the sum of the node's values in the path.\n\nGiven the `root` of a binary tree, return *the maximum **path sum** of any **non-empty** path*.\n\nExample 1:**\n\n```\n\n**Input:** root = [1,2,3]\n**Output:** 6\n**Explanation:** The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [-10,9,20,null,null,15,7]\n**Output:** 42\n**Explanation:** The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[1, 3 * 104]`.\n\n\t- `-1000 <= Node.val <= 1000`",
    "mindfulStory": "✨ Mindful Story for 124. Binary Tree Maximum Path Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 124. Binary Tree Maximum Path Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxPathSum = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-199",
    "title": "199. Binary Tree Right Side View",
    "difficulty": "Medium",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return *the values of the nodes you can see ordered from top to bottom*.\n\nExample 1:**\n\n**Input:** root = [1,2,3,null,5,null,4]\n\n**Output:** [1,3,4]\n\n**Explanation:**\n\nExample 2:**\n\n**Input:** root = [1,2,3,4,null,null,null,5]\n\n**Output:** [1,3,4,5]\n\n**Explanation:**\n\nExample 3:**\n\n**Input:** root = [1,null,3]\n\n**Output:** [1,3]\n\nExample 4:**\n\n**Input:** root = []\n\n**Output:** []\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 100]`.\n\n\t- `-100 <= Node.val <= 100`",
    "mindfulStory": "✨ Mindful Story for 199. Binary Tree Right Side View:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 199. Binary Tree Right Side View (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar rightSideView = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-637",
    "title": "637. Average of Levels in Binary Tree",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, return *the average value of the nodes on each level in the form of an array*. Answers within `10-5` of the actual answer will be accepted.\n\nExample 1:**\n\n```\n\n**Input:** root = [3,9,20,null,null,15,7]\n**Output:** [3.00000,14.50000,11.00000]\nExplanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.\nHence return [3, 14.5, 11].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [3,9,20,15,7]\n**Output:** [3.00000,14.50000,11.00000]\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[1, 104]`.\n\n\t- `-231 31 - 1`",
    "mindfulStory": "✨ Mindful Story for 637. Average of Levels in Binary Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 637. Average of Levels in Binary Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[]}\n */\nvar averageOfLevels = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-102",
    "title": "102. Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "approaches": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, return *the level order traversal of its nodes' values*. (i.e., from left to right, level by level).\n\nExample 1:**\n\n```\n\n**Input:** root = [3,9,20,null,null,15,7]\n**Output:** [[3],[9,20],[15,7]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [1]\n**Output:** [[1]]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** root = []\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 2000]`.\n\n\t- `-1000 <= Node.val <= 1000`",
    "mindfulStory": "✨ Mindful Story for 102. Binary Tree Level Order Traversal:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 102. Binary Tree Level Order Traversal (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar levelOrder = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-103",
    "title": "103. Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "approaches": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, return *the zigzag level order traversal of its nodes' values*. (i.e., from left to right, then right to left for the next level and alternate between).\n\nExample 1:**\n\n```\n\n**Input:** root = [3,9,20,null,null,15,7]\n**Output:** [[3],[20,9],[15,7]]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [1]\n**Output:** [[1]]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** root = []\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[0, 2000]`.\n\n\t- `-100 <= Node.val <= 100`",
    "mindfulStory": "✨ Mindful Story for 103. Binary Tree Zigzag Level Order Traversal:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 103. Binary Tree Zigzag Level Order Traversal (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number[][]}\n */\nvar zigzagLevelOrder = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-530",
    "title": "530. Minimum Absolute Difference in BST",
    "difficulty": "Easy",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a Binary Search Tree (BST), return *the minimum absolute difference between the values of any two different nodes in the tree*.\n\nExample 1:**\n\n```\n\n**Input:** root = [4,2,6,1,3]\n**Output:** 1\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [1,0,48,null,null,12,49]\n**Output:** 1\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[2, 104]`.\n\n\t- `0 5`\n\n**Note:** This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/",
    "mindfulStory": "✨ Mindful Story for 530. Minimum Absolute Difference in BST:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 530. Minimum Absolute Difference in BST (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar getMinimumDifference = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-230",
    "title": "230. Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary search tree, and an integer `k`, return *the* `kth` *smallest value (**1-indexed**) of all the values of the nodes in the tree*.\n\nExample 1:**\n\n```\n\n**Input:** root = [3,1,4,null,2], k = 1\n**Output:** 1\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [5,3,6,2,4,null,null,1], k = 3\n**Output:** 3\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is `n`.\n\n\t- `1 4`\n\n\t- `0 4`\n\n**Follow up:** If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?",
    "mindfulStory": "✨ Mindful Story for 230. Kth Smallest Element in a BST:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 230. Kth Smallest Element in a BST (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @param {number} k\n * @return {number}\n */\nvar kthSmallest = function(root, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-98",
    "title": "98. Validate Binary Search Tree",
    "difficulty": "Medium",
    "approaches": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "problemDescription": "Given the `root` of a binary tree, *determine if it is a valid binary search tree (BST)*.\n\nA **valid BST** is defined as follows:\n\n\t- The left subtree of a node contains only nodes with keys **strictly less than** the node's key.\n\n\t- The right subtree of a node contains only nodes with keys **strictly greater than** the node's key.\n\n\t- Both the left and right subtrees must also be binary search trees.\n\nExample 1:**\n\n```\n\n**Input:** root = [2,1,3]\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** root = [5,1,4,null,null,3,6]\n**Output:** false\n**Explanation:** The root node's value is 5 but its right child's value is 4.\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the tree is in the range `[1, 104]`.\n\n\t- `-231 31 - 1`",
    "mindfulStory": "✨ Mindful Story for 98. Validate Binary Search Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 98. Validate Binary Search Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {boolean}\n */\nvar isValidBST = function(root) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-200",
    "title": "200. Number of Islands",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix"
    ],
    "problemDescription": "Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.\n\nAn **island** is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\nExample 1:**\n\n```\n\n**Input:** grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]\n**Output:** 1\n\n```\n\nExample 2:**\n\n```\n\n**Input:** grid = [\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"1\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"1\",\"1\"]\n]\n**Output:** 3\n\n```\n\n**Constraints:**\n\n\t- `m == grid.length`\n\n\t- `n == grid[i].length`\n\n\t- `1 <= m, n <= 300`\n\n\t- `grid[i][j]` is `'0'` or `'1'`.",
    "mindfulStory": "✨ Mindful Story for 200. Number of Islands:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 200. Number of Islands (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {character[][]} grid\n * @return {number}\n */\nvar numIslands = function(grid) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-130",
    "title": "130. Surrounded Regions",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Matrix"
    ],
    "problemDescription": "You are given an `m x n` matrix `board` containing **letters** `'X'` and `'O'`, **capture regions** that are **surrounded**:\n\n\t- **Connect**: A cell is connected to adjacent cells horizontally or vertically.\n\n\t- **Region**: To form a region **connect every** `'O'` cell.\n\n\t- **Surround**: A region is surrounded if none of the `'O'` cells in that region are on the edge of the board. Such regions are **completely enclosed **by `'X'` cells.\n\nTo capture a **surrounded region**, replace all `'O'`s with `'X'`s **in-place** within the original board. You do not need to return anything.\n\nExample 1:**\n\n**Input:** board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\n\n**Output:** [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]\n\n**Explanation:**\n\nIn the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.\n\nExample 2:**\n\n**Input:** board = [[\"X\"]]\n\n**Output:** [[\"X\"]]\n\n**Constraints:**\n\n\t- `m == board.length`\n\n\t- `n == board[i].length`\n\n\t- `1 <= m, n <= 200`\n\n\t- `board[i][j]` is `'X'` or `'O'`.",
    "mindfulStory": "✨ Mindful Story for 130. Surrounded Regions:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 130. Surrounded Regions (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {character[][]} board\n * @return {void} Do not return anything, modify board in-place instead.\n */\nvar solve = function(board) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-133",
    "title": "133. Clone Graph",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory"
    ],
    "problemDescription": "Given a reference of a node in a **connected** undirected graph.\n\nReturn a **deep copy** (clone) of the graph.\n\nEach node in the graph contains a value (`int`) and a list (`List[Node]`) of its neighbors.\n\n```\n\nclass Node {\n    public int val;\n    public List neighbors;\n}\n\n```\n\n**Test case format:**\n\nFor simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with `val == 1`, the second node with `val == 2`, and so on. The graph is represented in the test case using an adjacency list.\n\nAn adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.\n\nThe given node will always be the first node with `val = 1`. You must return the **copy of the given node** as a reference to the cloned graph.\n\nExample 1:**\n\n```\n\n**Input:** adjList = [[2,4],[1,3],[2,4],[1,3]]\n**Output:** [[2,4],[1,3],[2,4],[1,3]]\n**Explanation:** There are 4 nodes in the graph.\n1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).\n4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).\n\n```\n\nExample 2:**\n\n```\n\n**Input:** adjList = [[]]\n**Output:** [[]]\n**Explanation:** Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** adjList = []\n**Output:** []\n**Explanation:** This an empty graph, it does not have any nodes.\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the graph is in the range `[0, 100]`.\n\n\t- `1 <= Node.val <= 100`\n\n\t- `Node.val` is unique for each node.\n\n\t- There are no repeated edges and no self-loops in the graph.\n\n\t- The Graph is connected and all nodes can be visited starting from the given node.",
    "mindfulStory": "✨ Mindful Story for 133. Clone Graph:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 133. Clone Graph (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * // Definition for a _Node.\n * function _Node(val, neighbors) {\n *    this.val = val === undefined ? 0 : val;\n *    this.neighbors = neighbors === undefined ? [] : neighbors;\n * };\n */\n\n/**\n * @param {_Node} node\n * @return {_Node}\n */\nvar cloneGraph = function(node) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-399",
    "title": "399. Evaluate Division",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "String",
      "Depth-First Search",
      "Breadth-First Search",
      "Union-Find",
      "Graph Theory",
      "Shortest Path"
    ],
    "problemDescription": "You are given an array of variable pairs `equations` and an array of real numbers `values`, where `equations[i] = [Ai, Bi]` and `values[i]` represent the equation `Ai / Bi = values[i]`. Each `Ai` or `Bi` is a string that represents a single variable.\n\nYou are also given some `queries`, where `queries[j] = [Cj, Dj]` represents the `jth` query where you must find the answer for `Cj / Dj = ?`.\n\nReturn *the answers to all queries*. If a single answer cannot be determined, return `-1.0`.\n\n**Note:** The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.\n\n**Note: **The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.\n\nExample 1:**\n\n```\n\n**Input:** equations = [[\"a\",\"b\"],[\"b\",\"c\"]], values = [2.0,3.0], queries = [[\"a\",\"c\"],[\"b\",\"a\"],[\"a\",\"e\"],[\"a\",\"a\"],[\"x\",\"x\"]]\n**Output:** [6.00000,0.50000,-1.00000,1.00000,-1.00000]\n**Explanation:** \nGiven: *a / b = 2.0*, *b / c = 3.0*\nqueries are: *a / c = ?*, *b / a = ?*, *a / e = ?*, *a / a = ?*, *x / x = ? *\nreturn: [6.0, 0.5, -1.0, 1.0, -1.0 ]\nnote: x is undefined => -1.0\n```\n\nExample 2:**\n\n```\n\n**Input:** equations = [[\"a\",\"b\"],[\"b\",\"c\"],[\"bc\",\"cd\"]], values = [1.5,2.5,5.0], queries = [[\"a\",\"c\"],[\"c\",\"b\"],[\"bc\",\"cd\"],[\"cd\",\"bc\"]]\n**Output:** [3.75000,0.40000,5.00000,0.20000]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** equations = [[\"a\",\"b\"]], values = [0.5], queries = [[\"a\",\"b\"],[\"b\",\"a\"],[\"a\",\"c\"],[\"x\",\"y\"]]\n**Output:** [0.50000,2.00000,-1.00000,-1.00000]\n\n```\n\n**Constraints:**\n\n\t- `1 i.length, Bi.length j.length, Dj.length i, Bi, Cj, Dj` consist of lower case English letters and digits.",
    "mindfulStory": "✨ Mindful Story for 399. Evaluate Division:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 399. Evaluate Division (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string[][]} equations\n * @param {number[]} values\n * @param {string[][]} queries\n * @return {number[]}\n */\nvar calcEquation = function(equations, values, queries) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-207",
    "title": "207. Course Schedule",
    "difficulty": "Medium",
    "approaches": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Topological Sort"
    ],
    "problemDescription": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.\n\n\t- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.\n\nExample 1:**\n\n```\n\n**Input:** numCourses = 2, prerequisites = [[1,0]]\n**Output:** true\n**Explanation:** There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0. So it is possible.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** numCourses = 2, prerequisites = [[1,0],[0,1]]\n**Output:** false\n**Explanation:** There are a total of 2 courses to take. \nTo take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.\n\n```\n\n**Constraints:**\n\n\t- `1 i, bi < numCourses`\n\n\t- All the pairs prerequisites[i] are **unique**.",
    "mindfulStory": "✨ Mindful Story for 207. Course Schedule:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 207. Course Schedule (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {boolean}\n */\nvar canFinish = function(numCourses, prerequisites) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-210",
    "title": "210. Course Schedule II",
    "difficulty": "Medium",
    "approaches": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph Theory",
      "Topological Sort"
    ],
    "problemDescription": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you **must** take course `bi` first if you want to take course `ai`.\n\n\t- For example, the pair `[0, 1]`, indicates that to take course `0` you have to first take course `1`.\n\nReturn *the ordering of courses you should take to finish all courses*. If there are many valid answers, return **any** of them. If it is impossible to finish all courses, return **an empty array**.\n\nExample 1:**\n\n```\n\n**Input:** numCourses = 2, prerequisites = [[1,0]]\n**Output:** [0,1]\n**Explanation:** There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\n**Output:** [0,2,1,3]\n**Explanation:** There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.\nSo one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].\n\n```\n\nExample 3:**\n\n```\n\n**Input:** numCourses = 1, prerequisites = []\n**Output:** [0]\n\n```\n\n**Constraints:**\n\n\t- `1 i, bi i != bi`\n\n\t- All the pairs `[ai, bi]` are **distinct**.",
    "mindfulStory": "✨ Mindful Story for 210. Course Schedule II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 210. Course Schedule II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} numCourses\n * @param {number[][]} prerequisites\n * @return {number[]}\n */\nvar findOrder = function(numCourses, prerequisites) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-127",
    "title": "127. Word Ladder",
    "difficulty": "Hard",
    "approaches": [
      "Hash Table",
      "String",
      "Breadth-First Search"
    ],
    "problemDescription": "A **transformation sequence** from word `beginWord` to word `endWord` using a dictionary `wordList` is a sequence of words `beginWord -> s1 -> s2 -> ... -> sk` such that:\n\n\t- Every adjacent pair of words differs by a single letter.\n\n\t- Every `si` for `1 k == endWord`\n\nGiven two words, `beginWord` and `endWord`, and a dictionary `wordList`, return *the **number of words** in the **shortest transformation sequence** from* `beginWord` *to* `endWord`*, or *`0`* if no such sequence exists.*\n\nExample 1:**\n\n```\n\n**Input:** beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\n**Output:** 5\n**Explanation:** One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> cog\", which is 5 words long.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]\n**Output:** 0\n**Explanation:** The endWord \"cog\" is not in wordList, therefore there is no valid transformation sequence.\n\n```\n\n**Constraints:**\n\n\t- `1 <= beginWord.length <= 10`\n\n\t- `endWord.length == beginWord.length`\n\n\t- `1 <= wordList.length <= 5000`\n\n\t- `wordList[i].length == beginWord.length`\n\n\t- `beginWord`, `endWord`, and `wordList[i]` consist of lowercase English letters.\n\n\t- `beginWord != endWord`\n\n\t- All the words in `wordList` are **unique**.",
    "mindfulStory": "✨ Mindful Story for 127. Word Ladder:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 127. Word Ladder (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} beginWord\n * @param {string} endWord\n * @param {string[]} wordList\n * @return {number}\n */\nvar ladderLength = function(beginWord, endWord, wordList) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-433",
    "title": "433. Minimum Genetic Mutation",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "String",
      "Breadth-First Search"
    ],
    "problemDescription": "A gene string can be represented by an 8-character long string, with choices from `'A'`, `'C'`, `'G'`, and `'T'`.\n\nSuppose we need to investigate a mutation from a gene string `startGene` to a gene string `endGene` where one mutation is defined as one single character changed in the gene string.\n\n\t- For example, `\"AACCGGTT\" --> \"AACCGGTA\"` is one mutation.\n\nThere is also a gene bank `bank` that records all the valid gene mutations. A gene must be in `bank` to make it a valid gene string.\n\nGiven the two gene strings `startGene` and `endGene` and the gene bank `bank`, return *the minimum number of mutations needed to mutate from *`startGene`* to *`endGene`. If there is no such a mutation, return `-1`.\n\nNote that the starting point is assumed to be valid, so it might not be included in the bank.\n\nExample 1:**\n\n```\n\n**Input:** startGene = \"AACCGGTT\", endGene = \"AACCGGTA\", bank = [\"AACCGGTA\"]\n**Output:** 1\n\n```\n\nExample 2:**\n\n```\n\n**Input:** startGene = \"AACCGGTT\", endGene = \"AAACGGTA\", bank = [\"AACCGGTA\",\"AACCGCTA\",\"AAACGGTA\"]\n**Output:** 2\n\n```\n\n**Constraints:**\n\n\t- `0 <= bank.length <= 10`\n\n\t- `startGene.length == endGene.length == bank[i].length == 8`\n\n\t- `startGene`, `endGene`, and `bank[i]` consist of only the characters `['A', 'C', 'G', 'T']`.",
    "mindfulStory": "✨ Mindful Story for 433. Minimum Genetic Mutation:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 433. Minimum Genetic Mutation (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} startGene\n * @param {string} endGene\n * @param {string[]} bank\n * @return {number}\n */\nvar minMutation = function(startGene, endGene, bank) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-208",
    "title": "208. Implement Trie (Prefix Tree)",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "String",
      "Design",
      "Trie"
    ],
    "problemDescription": "A **trie** (pronounced as \"try\") or **prefix tree** is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.\n\nImplement the Trie class:\n\n\t- `Trie()` Initializes the trie object.\n\n\t- `void insert(String word)` Inserts the string `word` into the trie.\n\n\t- `boolean search(String word)` Returns `true` if the string `word` is in the trie (i.e., was inserted before), and `false` otherwise.\n\n\t- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string `word` that has the prefix `prefix`, and `false` otherwise.\n\nExample 1:**\n\n```\n\n**Input**\n[\"Trie\", \"insert\", \"search\", \"search\", \"startsWith\", \"insert\", \"search\"]\n[[], [\"apple\"], [\"apple\"], [\"app\"], [\"app\"], [\"app\"], [\"app\"]]\n**Output**\n[null, null, true, false, true, null, true]\n\n**Explanation**\nTrie trie = new Trie();\ntrie.insert(\"apple\");\ntrie.search(\"apple\");   // return True\ntrie.search(\"app\");     // return False\ntrie.startsWith(\"app\"); // return True\ntrie.insert(\"app\");\ntrie.search(\"app\");     // return True\n\n```\n\n**Constraints:**\n\n\t- `1 4` calls **in total** will be made to `insert`, `search`, and `startsWith`.",
    "mindfulStory": "✨ Mindful Story for 208. Implement Trie (Prefix Tree):\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 208. Implement Trie (Prefix Tree) (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "\nvar Trie = function() {\n    \n};\n\n/** \n * @param {string} word\n * @return {void}\n */\nTrie.prototype.insert = function(word) {\n    \n};\n\n/** \n * @param {string} word\n * @return {boolean}\n */\nTrie.prototype.search = function(word) {\n    \n};\n\n/** \n * @param {string} prefix\n * @return {boolean}\n */\nTrie.prototype.startsWith = function(prefix) {\n    \n};\n\n/** \n * Your Trie object will be instantiated and called as such:\n * var obj = new Trie()\n * obj.insert(word)\n * var param_2 = obj.search(word)\n * var param_3 = obj.startsWith(prefix)\n */",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-211",
    "title": "211. Design Add and Search Words Data Structure",
    "difficulty": "Medium",
    "approaches": [
      "String",
      "Depth-First Search",
      "Design",
      "Trie"
    ],
    "problemDescription": "Design a data structure that supports adding new words and finding if a string matches any previously added string.\n\nImplement the `WordDictionary` class:\n\n\t- `WordDictionary()` Initializes the object.\n\n\t- `void addWord(word)` Adds `word` to the data structure, it can be matched later.\n\n\t- `bool search(word)` Returns `true` if there is any string in the data structure that matches `word` or `false` otherwise. `word` may contain dots `'.'` where dots can be matched with any letter.\n\nExample:**\n\n```\n\n**Input**\n[\"WordDictionary\",\"addWord\",\"addWord\",\"addWord\",\"search\",\"search\",\"search\",\"search\"]\n[[],[\"bad\"],[\"dad\"],[\"mad\"],[\"pad\"],[\"bad\"],[\".ad\"],[\"b..\"]]\n**Output**\n[null,null,null,null,false,true,true,true]\n\n**Explanation**\nWordDictionary wordDictionary = new WordDictionary();\nwordDictionary.addWord(\"bad\");\nwordDictionary.addWord(\"dad\");\nwordDictionary.addWord(\"mad\");\nwordDictionary.search(\"pad\"); // return False\nwordDictionary.search(\"bad\"); // return True\nwordDictionary.search(\".ad\"); // return True\nwordDictionary.search(\"b..\"); // return True\n\n```\n\n**Constraints:**\n\n\t- `1 4` calls will be made to `addWord` and `search`.",
    "mindfulStory": "✨ Mindful Story for 211. Design Add and Search Words Data Structure:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 211. Design Add and Search Words Data Structure (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "\nvar WordDictionary = function() {\n    \n};\n\n/** \n * @param {string} word\n * @return {void}\n */\nWordDictionary.prototype.addWord = function(word) {\n    \n};\n\n/** \n * @param {string} word\n * @return {boolean}\n */\nWordDictionary.prototype.search = function(word) {\n    \n};\n\n/** \n * Your WordDictionary object will be instantiated and called as such:\n * var obj = new WordDictionary()\n * obj.addWord(word)\n * var param_2 = obj.search(word)\n */",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-212",
    "title": "212. Word Search II",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "String",
      "Backtracking",
      "Trie",
      "Matrix"
    ],
    "problemDescription": "Given an `m x n` `board` of characters and a list of strings `words`, return *all words on the board*.\n\nEach word must be constructed from letters of sequentially adjacent cells, where **adjacent cells** are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.\n\nExample 1:**\n\n```\n\n**Input:** board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]\n**Output:** [\"eat\",\"oath\"]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** board = [[\"a\",\"b\"],[\"c\",\"d\"]], words = [\"abcb\"]\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- `m == board.length`\n\n\t- `n == board[i].length`\n\n\t- `1 4`\n\n\t- `1 <= words[i].length <= 10`\n\n\t- `words[i]` consists of lowercase English letters.\n\n\t- All the strings of `words` are unique.",
    "mindfulStory": "✨ Mindful Story for 212. Word Search II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 212. Word Search II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {character[][]} board\n * @param {string[]} words\n * @return {string[]}\n */\nvar findWords = function(board, words) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-17",
    "title": "17. Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "approaches": [
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "problemDescription": "Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.\n\nA mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.\n\nExample 1:**\n\n```\n\n**Input:** digits = \"23\"\n**Output:** [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** digits = \"2\"\n**Output:** [\"a\",\"b\",\"c\"]\n\n```\n\n**Constraints:**\n\n\t- `1 <= digits.length <= 4`\n\n\t- `digits[i]` is a digit in the range `['2', '9']`.",
    "mindfulStory": "✨ Mindful Story for 17. Letter Combinations of a Phone Number:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 17. Letter Combinations of a Phone Number (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} digits\n * @return {string[]}\n */\nvar letterCombinations = function(digits) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-77",
    "title": "77. Combinations",
    "difficulty": "Medium",
    "approaches": [
      "Backtracking"
    ],
    "problemDescription": "Given two integers `n` and `k`, return *all possible combinations of* `k` *numbers chosen from the range* `[1, n]`.\n\nYou may return the answer in **any order**.\n\nExample 1:**\n\n```\n\n**Input:** n = 4, k = 2\n**Output:** [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]\n**Explanation:** There are 4 choose 2 = 6 total combinations.\nNote that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** n = 1, k = 1\n**Output:** [[1]]\n**Explanation:** There is 1 choose 1 = 1 total combination.\n\n```\n\n**Constraints:**\n\n\t- `1 <= n <= 20`\n\n\t- `1 <= k <= n`",
    "mindfulStory": "✨ Mindful Story for 77. Combinations:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 77. Combinations (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @param {number} k\n * @return {number[][]}\n */\nvar combine = function(n, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-46",
    "title": "46. Permutations",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Backtracking"
    ],
    "problemDescription": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in **any order**.\n\nExample 1:**\n\n```\n**Input:** nums = [1,2,3]\n**Output:** [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [0,1]\n**Output:** [[0,1],[1,0]]\n\n```\n\nExample 3:**\n\n```\n**Input:** nums = [1]\n**Output:** [[1]]\n\n```\n\n**Constraints:**\n\n\t- `1 <= nums.length <= 6`\n\n\t- `-10 <= nums[i] <= 10`\n\n\t- All the integers of `nums` are **unique**.",
    "mindfulStory": "✨ Mindful Story for 46. Permutations:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 46. Permutations (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number[][]}\n */\nvar permute = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-39",
    "title": "39. Combination Sum",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Backtracking"
    ],
    "problemDescription": "Given an array of **distinct** integers `candidates` and a target integer `target`, return *a list of all **unique combinations** of *`candidates`* where the chosen numbers sum to *`target`*.* You may return the combinations in **any order**.\n\nThe **same** number may be chosen from `candidates` an **unlimited number of times**. Two combinations are unique if the frequency of at least one of the chosen numbers is different.\n\nThe test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.\n\nExample 1:**\n\n```\n\n**Input:** candidates = [2,3,6,7], target = 7\n**Output:** [[2,2,3],[7]]\n**Explanation:**\n2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.\n7 is a candidate, and 7 = 7.\nThese are the only two combinations.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** candidates = [2,3,5], target = 8\n**Output:** [[2,2,2,2],[2,3,3],[3,5]]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** candidates = [2], target = 1\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- `1 <= candidates.length <= 30`\n\n\t- `2 <= candidates[i] <= 40`\n\n\t- All elements of `candidates` are **distinct**.\n\n\t- `1 <= target <= 40`",
    "mindfulStory": "✨ Mindful Story for 39. Combination Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 39. Combination Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} candidates\n * @param {number} target\n * @return {number[][]}\n */\nvar combinationSum = function(candidates, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-52",
    "title": "52. N-Queens II",
    "difficulty": "Hard",
    "approaches": [
      "Backtracking"
    ],
    "problemDescription": "The **n-queens** puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.\n\nGiven an integer `n`, return *the number of distinct solutions to the **n-queens puzzle***.\n\nExample 1:**\n\n```\n\n**Input:** n = 4\n**Output:** 2\n**Explanation:** There are two distinct solutions to the 4-queens puzzle as shown.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** n = 1\n**Output:** 1\n\n```\n\n**Constraints:**\n\n\t- `1 <= n <= 9`",
    "mindfulStory": "✨ Mindful Story for 52. N-Queens II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 52. N-Queens II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @return {number}\n */\nvar totalNQueens = function(n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-79",
    "title": "79. Word Search",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "String",
      "Backtracking",
      "Depth-First Search",
      "Matrix"
    ],
    "problemDescription": "Given an `m x n` grid of characters `board` and a string `word`, return `true` *if* `word` *exists in the grid*.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.\n\nExample 1:**\n\n```\n\n**Input:** board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"\n**Output:** true\n\n```\n\nExample 3:**\n\n```\n\n**Input:** board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- `m == board.length`\n\n\t- `n = board[i].length`\n\n\t- `1 <= m, n <= 6`\n\n\t- `1 <= word.length <= 15`\n\n\t- `board` and `word` consists of only lowercase and uppercase English letters.\n\n**Follow up:** Could you use search pruning to make your solution faster with a larger `board`?",
    "mindfulStory": "✨ Mindful Story for 79. Word Search:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 79. Word Search (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {character[][]} board\n * @param {string} word\n * @return {boolean}\n */\nvar exist = function(board, word) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-108",
    "title": "108. Convert Sorted Array to Binary Search Tree",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Divide and Conquer",
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "problemDescription": "Given an integer array `nums` where the elements are sorted in **ascending order**, convert *it to a ****height-balanced*** *binary search tree*.\n\nExample 1:**\n\n```\n\n**Input:** nums = [-10,-3,0,5,9]\n**Output:** [0,-3,9,-10,null,5]\n**Explanation:** [0,-10,5,null,-3,null,9] is also accepted:\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [1,3]\n**Output:** [3,1]\n**Explanation:** [1,null,3] and [3,1] are both height-balanced BSTs.\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `-104 4`\n\n\t- `nums` is sorted in a **strictly increasing** order.",
    "mindfulStory": "✨ Mindful Story for 108. Convert Sorted Array to Binary Search Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 108. Convert Sorted Array to Binary Search Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */\n/**\n * @param {number[]} nums\n * @return {TreeNode}\n */\nvar sortedArrayToBST = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-148",
    "title": "148. Sort List",
    "difficulty": "Medium",
    "approaches": [
      "Linked List",
      "Two Pointers",
      "Divide and Conquer",
      "Sorting",
      "Merge Sort"
    ],
    "problemDescription": "Given the `head` of a linked list, return *the list after sorting it in **ascending order***.\n\nExample 1:**\n\n```\n\n**Input:** head = [4,2,1,3]\n**Output:** [1,2,3,4]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** head = [-1,5,3,4,0]\n**Output:** [-1,0,3,4,5]\n\n```\n\nExample 3:**\n\n```\n\n**Input:** head = []\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- The number of nodes in the list is in the range `[0, 5 * 104]`.\n\n\t- `-105 5`\n\n**Follow up:** Can you sort the linked list in `O(n logn)` time and `O(1)` memory (i.e. constant space)?",
    "mindfulStory": "✨ Mindful Story for 148. Sort List:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 148. Sort List (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode} head\n * @return {ListNode}\n */\nvar sortList = function(head) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-427",
    "title": "427. Construct Quad Tree",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Divide and Conquer",
      "Tree",
      "Matrix"
    ],
    "problemDescription": "Given a `n * n` matrix `grid` of `0's` and `1's` only. We want to represent `grid` with a Quad-Tree.\n\nReturn *the root of the Quad-Tree representing *`grid`.\n\nA Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:\n\n\t- `val`: True if the node represents a grid of 1's or False if the node represents a grid of 0's. Notice that you can assign the `val` to True or False when `isLeaf` is False, and both are accepted in the answer.\n\n\t- `isLeaf`: True if the node is a leaf node on the tree or False if the node has four children.\n\n```\n\nclass Node {\n    public boolean val;\n    public boolean isLeaf;\n    public Node topLeft;\n    public Node topRight;\n    public Node bottomLeft;\n    public Node bottomRight;\n}\n```\n\nWe can construct a Quad-Tree from a two-dimensional area using the following steps:\n\n\t- If the current grid has the same value (i.e all `1's` or all `0's`) set `isLeaf` True and set `val` to the value of the grid and set the four children to Null and stop.\n\n\t- If the current grid has different values, set `isLeaf` to False and set `val` to any value and divide the current grid into four sub-grids as shown in the photo.\n\n\t- Recurse for each of the children with the proper sub-grid.\n\nIf you want to know more about the Quad-Tree, you can refer to the wiki.\n\n**Quad-Tree format:**\n\nYou don't need to read this section for solving the problem. This is only if you want to understand the output format here. The output represents the serialized format of a Quad-Tree using level order traversal, where `null` signifies a path terminator where no node exists below.\n\nIt is very similar to the serialization of the binary tree. The only difference is that the node is represented as a list `[isLeaf, val]`.\n\nIf the value of `isLeaf` or `val` is True we represent it as **1** in the list `[isLeaf, val]` and if the value of `isLeaf` or `val` is False we represent it as **0**.\n\nExample 1:**\n\n```\n\n**Input:** grid = [[0,1],[1,0]]\n**Output:** [[0,1],[1,0],[1,1],[1,1],[1,0]]\n**Explanation:** The explanation of this example is shown below:\nNotice that 0 represents False and 1 represents True in the photo representing the Quad-Tree.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]\n**Output:** [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]]\n**Explanation:** All values in the grid are not the same. We divide the grid into four sub-grids.\nThe topLeft, bottomLeft and bottomRight each has the same value.\nThe topRight have different values so we divide it into 4 sub-grids where each has the same value.\nExplanation is shown in the photo below:\n\n```\n\n**Constraints:**\n\n\t- `n == grid.length == grid[i].length`\n\n\t- `n == 2x` where `0 <= x <= 6`",
    "mindfulStory": "✨ Mindful Story for 427. Construct Quad Tree:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 427. Construct Quad Tree (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * // Definition for a QuadTree node.\n * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {\n *    this.val = val;\n *    this.isLeaf = isLeaf;\n *    this.topLeft = topLeft;\n *    this.topRight = topRight;\n *    this.bottomLeft = bottomLeft;\n *    this.bottomRight = bottomRight;\n * };\n */\n\n/**\n * @param {number[][]} grid\n * @return {_Node}\n */\nvar construct = function(grid) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-23",
    "title": "23. Merge k Sorted Lists",
    "difficulty": "Hard",
    "approaches": [
      "Linked List",
      "Divide and Conquer",
      "Heap (Priority Queue)",
      "Merge Sort"
    ],
    "problemDescription": "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.\n\n*Merge all the linked-lists into one sorted linked-list and return it.*\n\nExample 1:**\n\n```\n\n**Input:** lists = [[1,4,5],[1,3,4],[2,6]]\n**Output:** [1,1,2,3,4,4,5,6]\n**Explanation:** The linked-lists are:\n[\n  1->4->5,\n  1->3->4,\n  2->6\n]\nmerging them into one sorted linked list:\n1->1->2->3->4->4->5->6\n\n```\n\nExample 2:**\n\n```\n\n**Input:** lists = []\n**Output:** []\n\n```\n\nExample 3:**\n\n```\n\n**Input:** lists = [[]]\n**Output:** []\n\n```\n\n**Constraints:**\n\n\t- `k == lists.length`\n\n\t- `0 4`\n\n\t- `0 4 4`\n\n\t- `lists[i]` is sorted in **ascending order**.\n\n\t- The sum of `lists[i].length` will not exceed `104`.",
    "mindfulStory": "✨ Mindful Story for 23. Merge k Sorted Lists:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 23. Merge k Sorted Lists (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * Definition for singly-linked list.\n * function ListNode(val, next) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.next = (next===undefined ? null : next)\n * }\n */\n/**\n * @param {ListNode[]} lists\n * @return {ListNode}\n */\nvar mergeKLists = function(lists) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-53",
    "title": "53. Maximum Subarray",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Divide and Conquer",
      "Dynamic Programming"
    ],
    "problemDescription": "Given an integer array `nums`, find the subarray with the largest sum, and return *its sum*.\n\nExample 1:**\n\n```\n\n**Input:** nums = [-2,1,-3,4,-1,2,1,-5,4]\n**Output:** 6\n**Explanation:** The subarray [4,-1,2,1] has the largest sum 6.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [1]\n**Output:** 1\n**Explanation:** The subarray [1] has the largest sum 1.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [5,4,-1,7,8]\n**Output:** 23\n**Explanation:** The subarray [5,4,-1,7,8] has the largest sum 23.\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `-104 4`\n\n**Follow up:** If you have figured out the `O(n)` solution, try coding another solution using the **divide and conquer** approach, which is more subtle.",
    "mindfulStory": "✨ Mindful Story for 53. Maximum Subarray:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 53. Maximum Subarray (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-918",
    "title": "918. Maximum Sum Circular Subarray",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Divide and Conquer",
      "Dynamic Programming",
      "Queue",
      "Monotonic Queue"
    ],
    "problemDescription": "Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of *`nums`.\n\nA **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.\n\nA **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i Example 1:**\n\n```\n\n**Input:** nums = [1,-2,3,-2]\n**Output:** 3\n**Explanation:** Subarray [3] has maximum sum 3.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [5,-3,5]\n**Output:** 10\n**Explanation:** Subarray [5,5] has maximum sum 5 + 5 = 10.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [-3,-2,-3]\n**Output:** -2\n**Explanation:** Subarray [-2] has maximum sum -2.\n\n```\n\n**Constraints:**\n\n\t- `n == nums.length`\n\n\t- `1 4`\n\n\t- `-3 * 104 4`",
    "mindfulStory": "✨ Mindful Story for 918. Maximum Sum Circular Subarray:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 918. Maximum Sum Circular Subarray (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubarraySumCircular = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-35",
    "title": "35. Search Insert Position",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Binary Search"
    ],
    "problemDescription": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.\n\nYou must write an algorithm with `O(log n)` runtime complexity.\n\nExample 1:**\n\n```\n\n**Input:** nums = [1,3,5,6], target = 5\n**Output:** 2\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [1,3,5,6], target = 2\n**Output:** 1\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [1,3,5,6], target = 7\n**Output:** 4\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `-104 4`\n\n\t- `nums` contains **distinct** values sorted in **ascending** order.\n\n\t- `-104 4`",
    "mindfulStory": "✨ Mindful Story for 35. Search Insert Position:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 35. Search Insert Position (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar searchInsert = function(nums, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-74",
    "title": "74. Search a 2D Matrix",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "problemDescription": "You are given an `m x n` integer matrix `matrix` with the following two properties:\n\n\t- Each row is sorted in non-decreasing order.\n\n\t- The first integer of each row is greater than the last integer of the previous row.\n\nGiven an integer `target`, return `true` *if* `target` *is in* `matrix` *or* `false` *otherwise*.\n\nYou must write a solution in `O(log(m * n))` time complexity.\n\nExample 1:**\n\n```\n\n**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\n**Output:** true\n\n```\n\nExample 2:**\n\n```\n\n**Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- `m == matrix.length`\n\n\t- `n == matrix[i].length`\n\n\t- `1 4 4`",
    "mindfulStory": "✨ Mindful Story for 74. Search a 2D Matrix:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 74. Search a 2D Matrix (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-162",
    "title": "162. Find Peak Element",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search"
    ],
    "problemDescription": "A peak element is an element that is strictly greater than its neighbors.\n\nGiven a **0-indexed** integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to **any of the peaks**.\n\nYou may imagine that `nums[-1] = nums[n] = -&infin;`. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.\n\nYou must write an algorithm that runs in `O(log n)` time.\n\nExample 1:**\n\n```\n\n**Input:** nums = [1,2,3,1]\n**Output:** 2\n**Explanation:** 3 is a peak element and your function should return the index number 2.\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [1,2,1,3,5,6,4]\n**Output:** 5\n**Explanation:** Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.\n```\n\n**Constraints:**\n\n\t- `1 31 31 - 1`\n\n\t- `nums[i] != nums[i + 1]` for all valid `i`.",
    "mindfulStory": "✨ Mindful Story for 162. Find Peak Element:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 162. Find Peak Element (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findPeakElement = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-33",
    "title": "33. Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search"
    ],
    "problemDescription": "There is an integer array `nums` sorted in ascending order (with **distinct** values).\n\nPrior to being passed to your function, `nums` is **possibly left rotated** at an unknown index `k` (`1 Example 1:**\n\n```\n**Input:** nums = [4,5,6,7,0,1,2], target = 0\n**Output:** 4\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [4,5,6,7,0,1,2], target = 3\n**Output:** -1\n\n```\n\nExample 3:**\n\n```\n**Input:** nums = [1], target = 0\n**Output:** -1\n\n```\n\n**Constraints:**\n\n\t- `1 4 4`\n\n\t- All values of `nums` are **unique**.\n\n\t- `nums` is an ascending array that is possibly rotated.\n\n\t- `-104 4`",
    "mindfulStory": "✨ Mindful Story for 33. Search in Rotated Sorted Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 33. Search in Rotated Sorted Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-34",
    "title": "34. Find First and Last Position of Element in Sorted Array",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search"
    ],
    "problemDescription": "Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.\n\nIf `target` is not found in the array, return `[-1, -1]`.\n\nYou must write an algorithm with `O(log n)` runtime complexity.\n\nExample 1:**\n\n```\n**Input:** nums = [5,7,7,8,8,10], target = 8\n**Output:** [3,4]\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [5,7,7,8,8,10], target = 6\n**Output:** [-1,-1]\n\n```\n\nExample 3:**\n\n```\n**Input:** nums = [], target = 0\n**Output:** [-1,-1]\n\n```\n\n**Constraints:**\n\n\t- `0 5`\n\n\t- `-109 9`\n\n\t- `nums` is a non-decreasing array.\n\n\t- `-109 9`",
    "mindfulStory": "✨ Mindful Story for 34. Find First and Last Position of Element in Sorted Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 34. Find First and Last Position of Element in Sorted Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar searchRange = function(nums, target) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-153",
    "title": "153. Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search"
    ],
    "problemDescription": "Suppose an array of length `n` sorted in ascending order is **rotated** between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:\n\n\t- `[4,5,6,7,0,1,2]` if it was rotated `4` times.\n\n\t- `[0,1,2,4,5,6,7]` if it was rotated `7` times.\n\nNotice that **rotating** an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.\n\nGiven the sorted rotated array `nums` of **unique** elements, return *the minimum element of this array*.\n\nYou must write an algorithm that runs in `O(log n) time`.\n\nExample 1:**\n\n```\n\n**Input:** nums = [3,4,5,1,2]\n**Output:** 1\n**Explanation:** The original array was [1,2,3,4,5] rotated 3 times.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [4,5,6,7,0,1,2]\n**Output:** 0\n**Explanation:** The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [11,13,15,17]\n**Output:** 11\n**Explanation:** The original array was [11,13,15,17] and it was rotated 4 times. \n\n```\n\n**Constraints:**\n\n\t- `n == nums.length`\n\n\t- `1 <= n <= 5000`\n\n\t- `-5000 <= nums[i] <= 5000`\n\n\t- All the integers of `nums` are **unique**.\n\n\t- `nums` is sorted and rotated between `1` and `n` times.",
    "mindfulStory": "✨ Mindful Story for 153. Find Minimum in Rotated Sorted Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 153. Find Minimum in Rotated Sorted Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMin = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-4",
    "title": "4. Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "Binary Search",
      "Divide and Conquer"
    ],
    "problemDescription": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return **the median** of the two sorted arrays.\n\nThe overall run time complexity should be `O(log (m+n))`.\n\nExample 1:**\n\n```\n\n**Input:** nums1 = [1,3], nums2 = [2]\n**Output:** 2.00000\n**Explanation:** merged array = [1,2,3] and median is 2.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums1 = [1,2], nums2 = [3,4]\n**Output:** 2.50000\n**Explanation:** merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.\n\n```\n\n**Constraints:**\n\n\t- `nums1.length == m`\n\n\t- `nums2.length == n`\n\n\t- `0 6 6`",
    "mindfulStory": "✨ Mindful Story for 4. Median of Two Sorted Arrays:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 4. Median of Two Sorted Arrays (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function(nums1, nums2) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-215",
    "title": "215. Kth Largest Element in an Array",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Divide and Conquer",
      "Sorting",
      "Heap (Priority Queue)",
      "Quickselect"
    ],
    "problemDescription": "Given an integer array `nums` and an integer `k`, return *the* `kth` *largest element in the array*.\n\nNote that it is the `kth` largest element in the sorted order, not the `kth` distinct element.\n\nCan you solve it without sorting?\n\nExample 1:**\n\n```\n**Input:** nums = [3,2,1,5,6,4], k = 2\n**Output:** 5\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [3,2,3,1,2,4,5,5,6], k = 4\n**Output:** 4\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `-104 4`",
    "mindfulStory": "✨ Mindful Story for 215. Kth Largest Element in an Array:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 215. Kth Largest Element in an Array (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */\nvar findKthLargest = function(nums, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-502",
    "title": "502. IPO",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "Greedy",
      "Sorting",
      "Heap (Priority Queue)"
    ],
    "problemDescription": "Suppose LeetCode will start its **IPO** soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the **IPO**. Since it has limited resources, it can only finish at most `k` distinct projects before the **IPO**. Help LeetCode design the best way to maximize its total capital after finishing at most `k` distinct projects.\n\nYou are given `n` projects where the `ith` project has a pure profit `profits[i]` and a minimum capital of `capital[i]` is needed to start it.\n\nInitially, you have `w` capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.\n\nPick a list of **at most** `k` distinct projects from given projects to **maximize your final capital**, and return *the final maximized capital*.\n\nThe answer is guaranteed to fit in a 32-bit signed integer.\n\nExample 1:**\n\n```\n\n**Input:** k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]\n**Output:** 4\n**Explanation:** Since your initial capital is 0, you can only start the project indexed 0.\nAfter finishing it you will obtain profit 1 and your capital becomes 1.\nWith capital 1, you can either start the project indexed 1 or the project indexed 2.\nSince you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.\nTherefore, output the final maximized capital, which is 0 + 1 + 3 = 4.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]\n**Output:** 6\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `0 9`\n\n\t- `n == profits.length`\n\n\t- `n == capital.length`\n\n\t- `1 5`\n\n\t- `0 4`\n\n\t- `0 9`",
    "mindfulStory": "✨ Mindful Story for 502. IPO:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 502. IPO (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} k\n * @param {number} w\n * @param {number[]} profits\n * @param {number[]} capital\n * @return {number}\n */\nvar findMaximizedCapital = function(k, w, profits, capital) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-373",
    "title": "373. Find K Pairs with Smallest Sums",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Heap (Priority Queue)"
    ],
    "problemDescription": "You are given two integer arrays `nums1` and `nums2` sorted in **non-decreasing order** and an integer `k`.\n\nDefine a pair `(u, v)` which consists of one element from the first array and one element from the second array.\n\nReturn *the* `k` *pairs* `(u1, v1), (u2, v2), ..., (uk, vk)` *with the smallest sums*.\n\nExample 1:**\n\n```\n\n**Input:** nums1 = [1,7,11], nums2 = [2,4,6], k = 3\n**Output:** [[1,2],[1,4],[1,6]]\n**Explanation:** The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums1 = [1,1,2], nums2 = [1,2,3], k = 2\n**Output:** [[1,1],[1,1]]\n**Explanation:** The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]\n\n```\n\n**Constraints:**\n\n\t- `1 5`\n\n\t- `-109 9`\n\n\t- `nums1` and `nums2` both are sorted in **non-decreasing order**.\n\n\t- `1 4`\n\n\t- `k <= nums1.length * nums2.length`",
    "mindfulStory": "✨ Mindful Story for 373. Find K Pairs with Smallest Sums:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 373. Find K Pairs with Smallest Sums (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @param {number} k\n * @return {number[][]}\n */\nvar kSmallestPairs = function(nums1, nums2, k) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-295",
    "title": "295. Find Median from Data Stream",
    "difficulty": "Hard",
    "approaches": [
      "Two Pointers",
      "Design",
      "Sorting",
      "Heap (Priority Queue)",
      "Data Stream"
    ],
    "problemDescription": "The **median** is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.\n\n\t- For example, for `arr = [2,3,4]`, the median is `3`.\n\n\t- For example, for `arr = [2,3]`, the median is `(2 + 3) / 2 = 2.5`.\n\nImplement the MedianFinder class:\n\n\t- `MedianFinder()` initializes the `MedianFinder` object.\n\n\t- `void addNum(int num)` adds the integer `num` from the data stream to the data structure.\n\n\t- `double findMedian()` returns the median of all elements so far. Answers within `10-5` of the actual answer will be accepted.\n\nExample 1:**\n\n```\n\n**Input**\n[\"MedianFinder\", \"addNum\", \"addNum\", \"findMedian\", \"addNum\", \"findMedian\"]\n[[], [1], [2], [], [3], []]\n**Output**\n[null, null, null, 1.5, null, 2.0]\n\n**Explanation**\nMedianFinder medianFinder = new MedianFinder();\nmedianFinder.addNum(1);    // arr = [1]\nmedianFinder.addNum(2);    // arr = [1, 2]\nmedianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)\nmedianFinder.addNum(3);    // arr[1, 2, 3]\nmedianFinder.findMedian(); // return 2.0\n\n```\n\n**Constraints:**\n\n\t- `-105 5`\n\n\t- There will be at least one element in the data structure before calling `findMedian`.\n\n\t- At most `5 * 104` calls will be made to `addNum` and `findMedian`.\n\n**Follow up:**\n\n\t- If all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?\n\n\t- If `99%` of all integer numbers from the stream are in the range `[0, 100]`, how would you optimize your solution?",
    "mindfulStory": "✨ Mindful Story for 295. Find Median from Data Stream:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 295. Find Median from Data Stream (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "\nvar MedianFinder = function() {\n    \n};\n\n/** \n * @param {number} num\n * @return {void}\n */\nMedianFinder.prototype.addNum = function(num) {\n    \n};\n\n/**\n * @return {number}\n */\nMedianFinder.prototype.findMedian = function() {\n    \n};\n\n/** \n * Your MedianFinder object will be instantiated and called as such:\n * var obj = new MedianFinder()\n * obj.addNum(num)\n * var param_2 = obj.findMedian()\n */",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-136",
    "title": "136. Single Number",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Bit Manipulation"
    ],
    "problemDescription": "Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.\n\nExample 1:**\n\n**Input:** nums = [2,2,1]\n\n**Output:** 1\n\nExample 2:**\n\n**Input:** nums = [4,1,2,1,2]\n\n**Output:** 4\n\nExample 3:**\n\n**Input:** nums = [1]\n\n**Output:** 1\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `-3 * 104 4`\n\n\t- Each element in the array appears twice except for one element which appears only once.",
    "mindfulStory": "✨ Mindful Story for 136. Single Number:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 136. Single Number (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar singleNumber = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-137",
    "title": "137. Single Number II",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Bit Manipulation"
    ],
    "problemDescription": "Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. *Find the single element and return it*.\n\nYou must implement a solution with a linear runtime complexity and use only constant extra space.\n\nExample 1:**\n\n```\n**Input:** nums = [2,2,3,2]\n**Output:** 3\n\n```\n\nExample 2:**\n\n```\n**Input:** nums = [0,1,0,1,0,1,99]\n**Output:** 99\n\n```\n\n**Constraints:**\n\n\t- `1 4`\n\n\t- `-231 31 - 1`\n\n\t- Each element in `nums` appears exactly **three times** except for one element which appears **once**.",
    "mindfulStory": "✨ Mindful Story for 137. Single Number II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 137. Single Number II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar singleNumber = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-201",
    "title": "201. Bitwise AND of Numbers Range",
    "difficulty": "Medium",
    "approaches": [
      "Bit Manipulation"
    ],
    "problemDescription": "Given two integers `left` and `right` that represent the range `[left, right]`, return *the bitwise AND of all numbers in this range, inclusive*.\n\nExample 1:**\n\n```\n\n**Input:** left = 5, right = 7\n**Output:** 4\n\n```\n\nExample 2:**\n\n```\n\n**Input:** left = 0, right = 0\n**Output:** 0\n\n```\n\nExample 3:**\n\n```\n\n**Input:** left = 1, right = 2147483647\n**Output:** 0\n\n```\n\n**Constraints:**\n\n\t- `0 31 - 1`",
    "mindfulStory": "✨ Mindful Story for 201. Bitwise AND of Numbers Range:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 201. Bitwise AND of Numbers Range (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} left\n * @param {number} right\n * @return {number}\n */\nvar rangeBitwiseAnd = function(left, right) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-191",
    "title": "191. Number of 1 Bits",
    "difficulty": "Easy",
    "approaches": [
      "Divide and Conquer",
      "Bit Manipulation"
    ],
    "problemDescription": "Given a positive integer `n`, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).\n\nExample 1:**\n\n**Input:** n = 11\n\n**Output:** 3\n\n**Explanation:**\n\nThe input binary string **1011** has a total of three set bits.\n\nExample 2:**\n\n**Input:** n = 128\n\n**Output:** 1\n\n**Explanation:**\n\nThe input binary string **10000000** has a total of one set bit.\n\nExample 3:**\n\n**Input:** n = 2147483645\n\n**Output:** 30\n\n**Explanation:**\n\nThe input binary string **1111111111111111111111111111101** has a total of thirty set bits.\n\n**Constraints:**\n\n\t- `1 31 - 1`\n\n**Follow up:** If this function is called many times, how would you optimize it?",
    "mindfulStory": "✨ Mindful Story for 191. Number of 1 Bits:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 191. Number of 1 Bits (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @return {number}\n */\nvar hammingWeight = function(n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-190",
    "title": "190. Reverse Bits",
    "difficulty": "Easy",
    "approaches": [
      "Divide and Conquer",
      "Bit Manipulation"
    ],
    "problemDescription": "Reverse bits of a given 32 bits signed integer.\n\nExample 1:**\n\n**Input:** n = 43261596\n\n**Output:** 964176192\n\n**Explanation:**\n\n\t\t\tInteger\n\t\t\tBinary\n\n\t\t\t43261596\n\t\t\t00000010100101000001111010011100\n\n\t\t\t964176192\n\t\t\t00111001011110000010100101000000\n\nExample 2:**\n\n**Input:** n = 2147483644\n\n**Output:** 1073741822\n\n**Explanation:**\n\n\t\t\tInteger\n\t\t\tBinary\n\n\t\t\t2147483644\n\t\t\t01111111111111111111111111111100\n\n\t\t\t1073741822\n\t\t\t00111111111111111111111111111110\n\n**Constraints:**\n\n\t- `0 31 - 2`\n\n\t- `n` is even.\n\n**Follow up:** If this function is called many times, how would you optimize it?",
    "mindfulStory": "✨ Mindful Story for 190. Reverse Bits:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 190. Reverse Bits (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @return {number}\n */\nvar reverseBits = function(n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-9",
    "title": "9. Palindrome Number",
    "difficulty": "Easy",
    "approaches": [
      "Math"
    ],
    "problemDescription": "Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.\n\nExample 1:**\n\n```\n\n**Input:** x = 121\n**Output:** true\n**Explanation:** 121 reads as 121 from left to right and from right to left.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** x = -121\n**Output:** false\n**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** x = 10\n**Output:** false\n**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.\n\n```\n\n**Constraints:**\n\n\t- `-231 31 - 1`\n\n**Follow up:** Could you solve it without converting the integer to a string?",
    "mindfulStory": "✨ Mindful Story for 9. Palindrome Number:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 9. Palindrome Number (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} x\n * @return {boolean}\n */\nvar isPalindrome = function(x) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-66",
    "title": "66. Plus One",
    "difficulty": "Easy",
    "approaches": [
      "Array",
      "Math"
    ],
    "problemDescription": "You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.\n\nIncrement the large integer by one and return *the resulting array of digits*.\n\nExample 1:**\n\n```\n\n**Input:** digits = [1,2,3]\n**Output:** [1,2,4]\n**Explanation:** The array represents the integer 123.\nIncrementing by one gives 123 + 1 = 124.\nThus, the result should be [1,2,4].\n\n```\n\nExample 2:**\n\n```\n\n**Input:** digits = [4,3,2,1]\n**Output:** [4,3,2,2]\n**Explanation:** The array represents the integer 4321.\nIncrementing by one gives 4321 + 1 = 4322.\nThus, the result should be [4,3,2,2].\n\n```\n\nExample 3:**\n\n```\n\n**Input:** digits = [9]\n**Output:** [1,0]\n**Explanation:** The array represents the integer 9.\nIncrementing by one gives 9 + 1 = 10.\nThus, the result should be [1,0].\n\n```\n\n**Constraints:**\n\n\t- `1 <= digits.length <= 100`\n\n\t- `0 <= digits[i] <= 9`\n\n\t- `digits` does not contain any leading `0`'s.",
    "mindfulStory": "✨ Mindful Story for 66. Plus One:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 66. Plus One (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} digits\n * @return {number[]}\n */\nvar plusOne = function(digits) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-172",
    "title": "172. Factorial Trailing Zeroes",
    "difficulty": "Medium",
    "approaches": [
      "Math"
    ],
    "problemDescription": "Given an integer `n`, return *the number of trailing zeroes in *`n!`.\n\nNote that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.\n\nExample 1:**\n\n```\n\n**Input:** n = 3\n**Output:** 0\n**Explanation:** 3! = 6, no trailing zero.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** n = 5\n**Output:** 1\n**Explanation:** 5! = 120, one trailing zero.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** n = 0\n**Output:** 0\n\n```\n\n**Constraints:**\n\n\t- `0 4`\n\n**Follow up:** Could you write a solution that works in logarithmic time complexity?",
    "mindfulStory": "✨ Mindful Story for 172. Factorial Trailing Zeroes:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 172. Factorial Trailing Zeroes (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @return {number}\n */\nvar trailingZeroes = function(n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-69",
    "title": "69. Sqrt(x)",
    "difficulty": "Easy",
    "approaches": [
      "Math",
      "Binary Search"
    ],
    "problemDescription": "Given a non-negative integer `x`, return *the square root of *`x`* rounded down to the nearest integer*. The returned integer should be **non-negative** as well.\n\nYou **must not use** any built-in exponent function or operator.\n\n\t- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.\n\nExample 1:**\n\n```\n\n**Input:** x = 4\n**Output:** 2\n**Explanation:** The square root of 4 is 2, so we return 2.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** x = 8\n**Output:** 2\n**Explanation:** The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.\n\n```\n\n**Constraints:**\n\n\t- `0 31 - 1`",
    "mindfulStory": "✨ Mindful Story for 69. Sqrt(x):\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 69. Sqrt(x) (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} x\n * @return {number}\n */\nvar mySqrt = function(x) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-50",
    "title": "50. Pow(x, n)",
    "difficulty": "Medium",
    "approaches": [
      "Math",
      "Recursion"
    ],
    "problemDescription": "Implement pow(x, n), which calculates `x` raised to the power `n` (i.e., `xn`).\n\nExample 1:**\n\n```\n\n**Input:** x = 2.00000, n = 10\n**Output:** 1024.00000\n\n```\n\nExample 2:**\n\n```\n\n**Input:** x = 2.10000, n = 3\n**Output:** 9.26100\n\n```\n\nExample 3:**\n\n```\n\n**Input:** x = 2.00000, n = -2\n**Output:** 0.25000\n**Explanation:** 2-2 = 1/22 = 1/4 = 0.25\n\n```\n\n**Constraints:**\n\n\t- `-100.0 31 31-1`\n\n\t- `n` is an integer.\n\n\t- Either `x` is not zero or `n > 0`.\n\n\t- `-104 n 4`",
    "mindfulStory": "✨ Mindful Story for 50. Pow(x, n):\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 50. Pow(x, n) (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} x\n * @param {number} n\n * @return {number}\n */\nvar myPow = function(x, n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-149",
    "title": "149. Max Points on a Line",
    "difficulty": "Hard",
    "approaches": [
      "Array",
      "Hash Table",
      "Math",
      "Geometry"
    ],
    "problemDescription": "Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane, return *the maximum number of points that lie on the same straight line*.\n\nExample 1:**\n\n```\n\n**Input:** points = [[1,1],[2,2],[3,3]]\n**Output:** 3\n\n```\n\nExample 2:**\n\n```\n\n**Input:** points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]\n**Output:** 4\n\n```\n\n**Constraints:**\n\n\t- `1 4 i, yi 4`\n\n\t- All the `points` are **unique**.",
    "mindfulStory": "✨ Mindful Story for 149. Max Points on a Line:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 149. Max Points on a Line (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} points\n * @return {number}\n */\nvar maxPoints = function(points) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-70",
    "title": "70. Climbing Stairs",
    "difficulty": "Easy",
    "approaches": [
      "Math",
      "Dynamic Programming",
      "Memoization"
    ],
    "problemDescription": "You are climbing a staircase. It takes `n` steps to reach the top.\n\nEach time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?\n\nExample 1:**\n\n```\n\n**Input:** n = 2\n**Output:** 2\n**Explanation:** There are two ways to climb to the top.\n1. 1 step + 1 step\n2. 2 steps\n\n```\n\nExample 2:**\n\n```\n\n**Input:** n = 3\n**Output:** 3\n**Explanation:** There are three ways to climb to the top.\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n\n```\n\n**Constraints:**\n\n\t- `1 <= n <= 45`",
    "mindfulStory": "✨ Mindful Story for 70. Climbing Stairs:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 70. Climbing Stairs (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number} n\n * @return {number}\n */\nvar climbStairs = function(n) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-198",
    "title": "198. House Robber",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming"
    ],
    "problemDescription": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\nGiven an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight without alerting the police*.\n\nExample 1:**\n\n```\n\n**Input:** nums = [1,2,3,1]\n**Output:** 4\n**Explanation:** Rob house 1 (money = 1) and then rob house 3 (money = 3).\nTotal amount you can rob = 1 + 3 = 4.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [2,7,9,3,1]\n**Output:** 12\n**Explanation:** Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).\nTotal amount you can rob = 2 + 9 + 1 = 12.\n\n```\n\n**Constraints:**\n\n\t- `1 <= nums.length <= 100`\n\n\t- `0 <= nums[i] <= 400`",
    "mindfulStory": "✨ Mindful Story for 198. House Robber:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 198. House Robber (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar rob = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-139",
    "title": "139. Word Break",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Trie",
      "Memoization"
    ],
    "problemDescription": "Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.\n\n**Note** that the same word in the dictionary may be reused multiple times in the segmentation.\n\nExample 1:**\n\n```\n\n**Input:** s = \"leetcode\", wordDict = [\"leet\",\"code\"]\n**Output:** true\n**Explanation:** Return true because \"leetcode\" can be segmented as \"leet code\".\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]\n**Output:** true\n**Explanation:** Return true because \"applepenapple\" can be segmented as \"apple pen apple\".\nNote that you are allowed to reuse a dictionary word.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]\n**Output:** false\n\n```\n\n**Constraints:**\n\n\t- `1 <= s.length <= 300`\n\n\t- `1 <= wordDict.length <= 1000`\n\n\t- `1 <= wordDict[i].length <= 20`\n\n\t- `s` and `wordDict[i]` consist of only lowercase English letters.\n\n\t- All the strings of `wordDict` are **unique**.",
    "mindfulStory": "✨ Mindful Story for 139. Word Break:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 139. Word Break (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @param {string[]} wordDict\n * @return {boolean}\n */\nvar wordBreak = function(s, wordDict) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-322",
    "title": "322. Coin Change",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Breadth-First Search"
    ],
    "problemDescription": "You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.\n\nReturn *the fewest number of coins that you need to make up that amount*. If that amount of money cannot be made up by any combination of the coins, return `-1`.\n\nYou may assume that you have an infinite number of each kind of coin.\n\nExample 1:**\n\n```\n\n**Input:** coins = [1,2,5], amount = 11\n**Output:** 3\n**Explanation:** 11 = 5 + 5 + 1\n\n```\n\nExample 2:**\n\n```\n\n**Input:** coins = [2], amount = 3\n**Output:** -1\n\n```\n\nExample 3:**\n\n```\n\n**Input:** coins = [1], amount = 0\n**Output:** 0\n\n```\n\n**Constraints:**\n\n\t- `1 31 - 1`\n\n\t- `0 4`",
    "mindfulStory": "✨ Mindful Story for 322. Coin Change:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 322. Coin Change (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} coins\n * @param {number} amount\n * @return {number}\n */\nvar coinChange = function(coins, amount) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-300",
    "title": "300. Longest Increasing Subsequence",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Binary Search",
      "Dynamic Programming"
    ],
    "problemDescription": "Given an integer array `nums`, return *the length of the longest **strictly increasing ******subsequence***.\n\nExample 1:**\n\n```\n\n**Input:** nums = [10,9,2,5,3,7,101,18]\n**Output:** 4\n**Explanation:** The longest increasing subsequence is [2,3,7,101], therefore the length is 4.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** nums = [0,1,0,3,2,3]\n**Output:** 4\n\n```\n\nExample 3:**\n\n```\n\n**Input:** nums = [7,7,7,7,7,7,7]\n**Output:** 1\n\n```\n\n**Constraints:**\n\n\t- `1 4 4`\n\nFollow up: Can you come up with an algorithm that runs in `O(n log(n))` time complexity?",
    "mindfulStory": "✨ Mindful Story for 300. Longest Increasing Subsequence:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 300. Longest Increasing Subsequence (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[]} nums\n * @return {number}\n */\nvar lengthOfLIS = function(nums) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-120",
    "title": "120. Triangle",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming"
    ],
    "problemDescription": "Given a `triangle` array, return *the minimum path sum from top to bottom*.\n\nFor each step, you may move to an adjacent number of the row below. More formally, if you are on index `i` on the current row, you may move to either index `i` or index `i + 1` on the next row.\n\nExample 1:**\n\n```\n\n**Input:** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]\n**Output:** 11\n**Explanation:** The triangle looks like:\n   2\n  3 4\n 6 5 7\n4 1 8 3\nThe minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).\n\n```\n\nExample 2:**\n\n```\n\n**Input:** triangle = [[-10]]\n**Output:** -10\n\n```\n\n**Constraints:**\n\n\t- `1 4 4`\n\n**Follow up:** Could you do this using only `O(n)` extra space, where `n` is the total number of rows in the triangle?",
    "mindfulStory": "✨ Mindful Story for 120. Triangle:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 120. Triangle (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} triangle\n * @return {number}\n */\nvar minimumTotal = function(triangle) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-64",
    "title": "64. Minimum Path Sum",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "problemDescription": "Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.\n\n**Note:** You can only move either down or right at any point in time.\n\nExample 1:**\n\n```\n\n**Input:** grid = [[1,3,1],[1,5,1],[4,2,1]]\n**Output:** 7\n**Explanation:** Because the path 1 &rarr; 3 &rarr; 1 &rarr; 1 &rarr; 1 minimizes the sum.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** grid = [[1,2,3],[4,5,6]]\n**Output:** 12\n\n```\n\n**Constraints:**\n\n\t- `m == grid.length`\n\n\t- `n == grid[i].length`\n\n\t- `1 <= m, n <= 200`\n\n\t- `0 <= grid[i][j] <= 200`",
    "mindfulStory": "✨ Mindful Story for 64. Minimum Path Sum:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 64. Minimum Path Sum (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} grid\n * @return {number}\n */\nvar minPathSum = function(grid) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-63",
    "title": "63. Unique Paths II",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "problemDescription": "You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the **bottom-right corner** (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.\n\nAn obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include **any** square that is an obstacle.\n\nReturn *the number of possible unique paths that the robot can take to reach the bottom-right corner*.\n\nThe testcases are generated so that the answer will be less than or equal to `2 * 109`.\n\nExample 1:**\n\n```\n\n**Input:** obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]\n**Output:** 2\n**Explanation:** There is one obstacle in the middle of the 3x3 grid above.\nThere are two ways to reach the bottom-right corner:\n1. Right -> Right -> Down -> Down\n2. Down -> Down -> Right -> Right\n\n```\n\nExample 2:**\n\n```\n\n**Input:** obstacleGrid = [[0,1],[0,0]]\n**Output:** 1\n\n```\n\n**Constraints:**\n\n\t- `m == obstacleGrid.length`\n\n\t- `n == obstacleGrid[i].length`\n\n\t- `1 <= m, n <= 100`\n\n\t- `obstacleGrid[i][j]` is `0` or `1`.",
    "mindfulStory": "✨ Mindful Story for 63. Unique Paths II:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 63. Unique Paths II (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {number[][]} obstacleGrid\n * @return {number}\n */\nvar uniquePathsWithObstacles = function(obstacleGrid) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-5",
    "title": "5. Longest Palindromic Substring",
    "difficulty": "Medium",
    "approaches": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "problemDescription": "Given a string `s`, return *the longest* *palindromic* *substring* in `s`.\n\nExample 1:**\n\n```\n\n**Input:** s = \"babad\"\n**Output:** \"bab\"\n**Explanation:** \"aba\" is also a valid answer.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s = \"cbbd\"\n**Output:** \"bb\"\n\n```\n\n**Constraints:**\n\n\t- `1 <= s.length <= 1000`\n\n\t- `s` consist of only digits and English letters.",
    "mindfulStory": "✨ Mindful Story for 5. Longest Palindromic Substring:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 5. Longest Palindromic Substring (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s\n * @return {string}\n */\nvar longestPalindrome = function(s) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-97",
    "title": "97. Interleaving String",
    "difficulty": "Medium",
    "approaches": [
      "String",
      "Dynamic Programming"
    ],
    "problemDescription": "Given strings `s1`, `s2`, and `s3`, find whether `s3` is formed by an **interleaving** of `s1` and `s2`.\n\nAn **interleaving** of two strings `s` and `t` is a configuration where `s` and `t` are divided into `n` and `m` substrings respectively, such that:\n\n\t- `s = s1 + s2 + ... + sn`\n\n\t- `t = t1 + t2 + ... + tm`\n\n\t- `|n - m| 1 + t1 + s2 + t2 + s3 + t3 + ...` or `t1 + s1 + t2 + s2 + t3 + s3 + ...`\n\n**Note:** `a + b` is the concatenation of strings `a` and `b`.\n\nExample 1:**\n\n```\n\n**Input:** s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"\n**Output:** true\n**Explanation:** One way to obtain s3 is:\nSplit s1 into s1 = \"aa\" + \"bc\" + \"c\", and s2 into s2 = \"dbbc\" + \"a\".\nInterleaving the two splits, we get \"aa\" + \"dbbc\" + \"bc\" + \"a\" + \"c\" = \"aadbbcbcac\".\nSince s3 can be obtained by interleaving s1 and s2, we return true.\n\n```\n\nExample 2:**\n\n```\n\n**Input:** s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"\n**Output:** false\n**Explanation:** Notice how it is impossible to interleave s2 with any other string to obtain s3.\n\n```\n\nExample 3:**\n\n```\n\n**Input:** s1 = \"\", s2 = \"\", s3 = \"\"\n**Output:** true\n\n```\n\n**Constraints:**\n\n\t- `0 <= s1.length, s2.length <= 100`\n\n\t- `0 <= s3.length <= 200`\n\n\t- `s1`, `s2`, and `s3` consist of lowercase English letters.\n\n**Follow up:** Could you solve it using only `O(s2.length)` additional memory space?",
    "mindfulStory": "✨ Mindful Story for 97. Interleaving String:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 97. Interleaving String (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} s1\n * @param {string} s2\n * @param {string} s3\n * @return {boolean}\n */\nvar isInterleave = function(s1, s2, s3) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-72",
    "title": "72. Edit Distance",
    "difficulty": "Medium",
    "approaches": [
      "String",
      "Dynamic Programming"
    ],
    "problemDescription": "Given two strings `word1` and `word2`, return *the minimum number of operations required to convert `word1` to `word2`*.\n\nYou have the following three operations permitted on a word:\n\n\t- Insert a character\n\n\t- Delete a character\n\n\t- Replace a character\n\nExample 1:**\n\n```\n\n**Input:** word1 = \"horse\", word2 = \"ros\"\n**Output:** 3\n**Explanation:** \nhorse -> rorse (replace 'h' with 'r')\nrorse -> rose (remove 'r')\nrose -> ros (remove 'e')\n\n```\n\nExample 2:**\n\n```\n\n**Input:** word1 = \"intention\", word2 = \"execution\"\n**Output:** 5\n**Explanation:** \nintention -> inention (remove 't')\ninention -> enention (replace 'i' with 'e')\nenention -> exention (replace 'n' with 'x')\nexention -> exection (replace 'n' with 'c')\nexection -> execution (insert 'u')\n\n```\n\n**Constraints:**\n\n\t- `0 <= word1.length, word2.length <= 500`\n\n\t- `word1` and `word2` consist of lowercase English letters.",
    "mindfulStory": "✨ Mindful Story for 72. Edit Distance:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 72. Edit Distance (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {string} word1\n * @param {string} word2\n * @return {number}\n */\nvar minDistance = function(word1, word2) {\n    \n};",
    "codeLines": [],
    "isDone": false
  },
  {
    "id": "top150-221",
    "title": "221. Maximal Square",
    "difficulty": "Medium",
    "approaches": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "problemDescription": "Given an `m x n` binary `matrix` filled with `0`'s and `1`'s, *find the largest square containing only* `1`'s *and return its area*.\n\nExample 1:**\n\n```\n\n**Input:** matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\n**Output:** 4\n\n```\n\nExample 2:**\n\n```\n\n**Input:** matrix = [[\"0\",\"1\"],[\"1\",\"0\"]]\n**Output:** 1\n\n```\n\nExample 3:**\n\n```\n\n**Input:** matrix = [[\"0\"]]\n**Output:** 0\n\n```\n\n**Constraints:**\n\n\t- `m == matrix.length`\n\n\t- `n == matrix[i].length`\n\n\t- `1 <= m, n <= 300`\n\n\t- `matrix[i][j]` is `'0'` or `'1'`.",
    "mindfulStory": "✨ Mindful Story for 221. Maximal Square:\n\nBreak this problem into physical metaphors and character roles!\n\n1. Character A: Primary pointer or state tracker.\n2. Character B: Explorer or window boundary.\n3. Memory Diary: Hash map for fast lookups.",
    "unforgettableBottleneck": "⚡ UNFORGETTABLE BOTTLENECK:\nHighlight the tricky pitfall in 221. Maximal Square (e.g. edge cases, off-by-one errors) and the O(1) / O(N) breakthrough logic!",
    "rawCode": "/**\n * @param {character[][]} matrix\n * @return {number}\n */\nvar maximalSquare = function(matrix) {\n    \n};",
    "codeLines": [],
    "isDone": false
  }
];
