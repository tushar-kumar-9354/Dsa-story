export const mustDo4050LpaDataset = [
  {
    id: "lpa-509",
    title: "509. Fibonacci Number",
    platform: "LeetCode",
    difficulty: "Easy",
    tags: ["DP", "Recursion", "Math"],
    problemDescription: "The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is:\nF(0) = 0, F(1) = 1\nF(n) = F(n - 1) + F(n - 2), for n > 1.\n\nExample 1:\nInput: n = 2 -> Output: 1 (F(2) = F(1) + F(0) = 1 + 0 = 1)\n\nExample 2:\nInput: n = 4 -> Output: 3 (F(4) = F(3) + F(2) = 2 + 1 = 3)\n\nConstraints: 0 <= n <= 30",
    hindiDescription: "Fibonacci sequence ek aisi ginti hai jisme har naya nambar pichle do nambaro ka jod (sum) hota hai. F(0) = 0 aur F(1) = 1 se shuru hota hai. Aapko F(n) nikalna hai.",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: Ek **Bache ka Gakullak / Staircase Jump** game jisme har naye din ka pocket money pichle 2 dino ke pocket money ka total hota hai.\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1 (Base Cases)**: Agar n 0 hai toh 0 return karo, n 1 hai toh 1 return karo.\n- **STEP 2 (Iterative DP)**: Pointers **prev2 = 0** aur **prev1 = 1** rakho. Loop chalao 2 se n tak aur har baar **curr = prev1 + prev2** karke aage badho.\n- **STEP 3 (Return)**: Loop ke baad **prev1** hi aapka final F(n) answer hai.\n\n⚠️ **Khas Edge Cases**: n = 0 aur n = 1 ke liye recursive stack overflow avoid karo iteration use karke (O(1) space).",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: Plain recursion `fib(n-1) + fib(n-2)` O(2^n) TLE deta hai! Hamesha O(N) Iterative DP ya Memoization use karo.\n\n💡 **Memory Trick**: Do pichle dino ka kharcha jod kar naya din calculate karo!",
    rawCode: `class Solution:
    def fib(self, n: int) -> int:
        # 📍 STEP 1 (Story se): Base cases 0 aur 1 handle karo
        if n <= 1:
            return n
        
        # 📍 STEP 2 (Story se): Pichle 2 dino ka record variables me rakho
        prev2, prev1 = 0, 1
        for i in range(2, n + 1):
            curr = prev1 + prev2
            prev2 = prev1
            prev1 = curr
            
        # 📍 STEP 3 (Story se): Final F(n) return karo
        return prev1`,
    isDone: false
  },
  {
    id: "lpa-70",
    title: "70. Climbing Stairs",
    platform: "LeetCode",
    difficulty: "Easy",
    tags: ["DP", "Math"],
    problemDescription: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\nExample 1:\nInput: n = 2 -> Output: 2 (1 step + 1 step, OR 2 steps)\n\nExample 2:\nInput: n = 3 -> Output: 3 (1+1+1, 1+2, 2+1)\n\nConstraints: 1 <= n <= 45",
    hindiDescription: "Aap CD (Staircase) chadh rahe ho. Har baar aap ya toh 1 step chadh sakte ho ya 2 steps. n steps tak pahunchne ke kitne alag alag raste hain?",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: Ek **Bacha CD par chhlang laga raha hai**. Har step pe khade hoke wo sochta hai: 'main yahan pichle step (i-1) se 1 step leke aaya hu YA (i-2) step se 2 step ki chhalang mar ke aaya hu!'\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1 (Base Case)**: n = 1 -> 1 way, n = 2 -> 2 ways.\n- **STEP 2 (DP State)**: ways(i) = ways(i-1) + ways(i-2).\n- **STEP 3 (Space Optimization)**: Sirf 2 variables rakho space O(1) ke liye.\n\n⚠️ **Khas Edge Cases**: n = 1 ke liye fast exit exit hander.",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: Ye problem bilkul Fibonacci sequence jaisi hai bas shuruat n=1 pe 1 aur n=2 pe 2 se hoti hai!\n\n💡 **Memory Trick**: Har step = pichle step tak pahunchne ke raste + usse ek pehle wale tak ke raste!",
    rawCode: `class Solution:
    def climbStairs(self, n: int) -> int:
        # 📍 STEP 1 (Story se): Base cases setup
        if n <= 2:
            return n
        
        # 📍 STEP 2 (Story se): Fibonacci approach O(1) space
        one_step_behind = 2
        two_steps_behind = 1
        
        for i in range(3, n + 1):
            current = one_step_behind + two_steps_behind
            two_steps_behind = one_step_behind
            one_step_behind = current
            
        # 📍 STEP 3 (Story se): Return top step total ways
        return one_step_behind`,
    isDone: false
  },
  {
    id: "lpa-198",
    title: "198. House Robber",
    platform: "LeetCode",
    difficulty: "Medium",
    tags: ["DP", "Array"],
    problemDescription: "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected — it will automatically contact the police if two adjacent houses were broken into on the same night. Return the maximum amount of money you can rob tonight without alerting the police.\n\nExample 1:\nInput: nums = [1,2,3,1] -> Output: 4 (Rob house 1 ($1) and house 3 ($3) -> total $4)\n\nConstraints: 1 <= nums.length <= 100",
    hindiDescription: "Aap ek chor (robber) ho jo ek raste ke makano me chori kar raha hai. Shart ye hai ki do lagatar (adjacent) makano me chori karoge toh alarm baj jayega. Max kitna paisa chura sakte ho?",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: **Smart Chor ka Hisab**: Har makan pe khade hoke chor 2 option dekhta hai: Option A (Is makan me chori karu + pichle ko chhod kar uske pehle tak ka profit) VS Option B (Is makan ko chhod du aur pichle makan tak ka total profit le lu).\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1**: `rob1 = 0`, `rob2 = 0` (Dono pichle best profits tracking).\n- **STEP 2**: Har makan `n` ke liye `max(n + rob1, rob2)` calculate karo.\n- **STEP 3**: Update karo `rob1 = rob2` aur `rob2 = temp`.\n\n⚠️ **Khas Edge Cases**: Jab array me 1 hi makan ho.",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: Do adjacent houses ko robbing se roko! DP transition: `max(curr + prev2, prev1)`.\n\n💡 **Memory Trick**: Ya toh aaj loot aur parson tak ka le, ya aaj chhod aur kal tak ka le!",
    rawCode: `class Solution:
    def rob(self, nums: list[int]) -> int:
        # 📍 STEP 1 (Story se): Pichle 2 makano ke max profit trackers
        rob1, rob2 = 0, 0
        
        # 📍 STEP 2 (Story se): Har makan pe best decision
        for n in nums:
            temp = max(n + rob1, rob2)
            rob1 = rob2
            rob2 = temp
            
        # 📍 STEP 3 (Story se): Maximum robbed amount return karo
        return rob2`,
    isDone: false
  },
  {
    id: "lpa-322",
    title: "322. Coin Change",
    platform: "LeetCode",
    difficulty: "Medium",
    tags: ["DP", "BFS"],
    problemDescription: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\nExample 1:\nInput: coins = [1,2,5], amount = 11 -> Output: 3 (11 = 5 + 5 + 1)\n\nConstraints: 1 <= coins.length <= 12, 1 <= amount <= 10^4",
    hindiDescription: "Aapke paas alag alag sikke hain (coins). Aapko target amount banane ke liye kam se kam (minimum) kitne sikke chahiye? Agar amount banana namumkin hai toh -1 return karo.",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: **Dukaan pe Chhutta (Change) Dena**: Dukandar 1 se leke target amount tak har chote amount ke liye minimum sikke nikalta hai aur ek diary (`dp` table) me likhta jata hai.\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1**: `dp` array size `amount + 1` banao base value `inf` ke sath. `dp[0] = 0`.\n- **STEP 2**: Loop `i` from 1 to `amount`. Subloop for each `c` in `coins`.\n- **STEP 3**: Agar `i - c >= 0` toh `dp[i] = min(dp[i], 1 + dp[i - c])`.\n\n⚠️ **Khas Edge Cases**: Agar `dp[amount]` infinity hi raha toh `-1` return karo.",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: Greedy approach `[1, 3, 4]` for amount `6` fail hoti hai! DP tabulate karna zaroori hai.\n\n💡 **Memory Trick**: 1 se leke Target tak har amount ke liye minimum sikke diary me calculate karo!",
    rawCode: `class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        # 📍 STEP 1 (Story se): Infinity se initialize ki hui DP table
        dp = [float('inf')] * (amount + 1)
        dp[0] = 0
        
        # 📍 STEP 2 (Story se): Har amount ke liye min coins dhoondo
        for a in range(1, amount + 1):
            for c in coins:
                if a - c >= 0:
                    dp[a] = min(dp[a], 1 + dp[a - c])
                    
        # 📍 STEP 3 (Story se): Result return karo ya -1 agar impossible ho
        return dp[amount] if dp[amount] != float('inf') else -1`,
    isDone: false
  },
  {
    id: "lpa-42",
    title: "42. Trapping Rain Water",
    platform: "LeetCode",
    difficulty: "Hard",
    tags: ["Two Pointers", "Stack", "Array"],
    problemDescription: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.\n\nExample 1:\nInput: height = [0,1,0,2,1,0,1,3,2,1,2,1] -> Output: 6\n\nConstraints: n == height.length, 1 <= n <= 2 * 10^4",
    hindiDescription: "Aapko alag alag uanchai ki deewarein di hain. Baarish hone ke baad deewaron ke beech me kul kitna paani (water) jama (trap) hoga?",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: **Pahadon ke beech ki Jheel**: Kisi bhi spot par kitna paani rukega wo uske left ki sabse uanchi deewar aur right ki sabse uanchi deewar ke MINIMUM height par depend karta hai!\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1**: `left = 0`, `right = len - 1`. Track `leftMax` and `rightMax`.\n- **STEP 2**: Jab tak `left < right`: agar `leftMax < rightMax`, toh left wall boundary master hai. `water += max(0, leftMax - height[left])`.\n- **STEP 3**: Pointers move karo matching boundary side se.\n\n⚠️ **Khas Edge Cases**: Increasing/decreasing slope me 0 water trap hota hai.",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: O(N^2) time limit exceeded hoti hai. Two Pointers O(N) time O(1) space best fit hai.\n\n💡 **Memory Trick**: Paani utna hi rukega jitna dono taraf ki deewaron me se CHOTI deewar allow karegi!",
    rawCode: `class Solution:
    def trap(self, height: list[int]) -> int:
        if not height:
            return 0
            
        # 📍 STEP 1 (Story se): Left aur Right boundaries setup
        l, r = 0, len(height) - 1
        leftMax, rightMax = height[l], height[r]
        water = 0
        
        # 📍 STEP 2 (Story se): Choti boundary ki taraf se paani calculate karo
        while l < r:
            if leftMax < rightMax:
                l += 1
                leftMax = max(leftMax, height[l])
                water += leftMax - height[l]
            else:
                r -= 1
                rightMax = max(rightMax, height[r])
                water += rightMax - height[r]
                
        # 📍 STEP 3 (Story se): Total trapped water return karo
        return water`,
    isDone: false
  },
  {
    id: "lpa-146",
    title: "146. LRU Cache",
    platform: "LeetCode",
    difficulty: "Medium",
    tags: ["Hash Table", "Linked List", "Design"],
    problemDescription: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\nImplement LRUCache class:\n- LRUCache(capacity)\n- get(key): Return value if exists else -1.\n- put(key, value): Update or insert key-value. If capacity exceeded, evict the least recently used key.\nBoth get and put must run in O(1) average time complexity.",
    hindiDescription: "LRU Cache design karo jisme `get` aur `put` dono O(1) time me chalein. Jab cache full ho jaye toh sabse purane (least recently used) element ko nikalna hai.",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: **Table par rakhi Books का stack + Index Register**: HashMap O(1) lookup ke liye aur Doubly Linked List order maintain karne ke liye (Most recent at HEAD, oldest at TAIL).\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1**: Dummy Head aur Tail nodes se Doubly Linked List initialize karo.\n- **STEP 2**: `get(key)` pe node ko remove karke Head ke just baad insert karo (make it most recent).\n- **STEP 3**: `put(key, val)` pe agar full hai toh Tail se pehle wala node (LRU) delete karo.\n\n⚠️ **Khas Edge Cases**: Existing key updates par capacity exceed nahi hoti.",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: Single Linked List se deletion O(N) leta hai. O(1) deletion ke liye Doubly Linked List hi chahiye!\n\n💡 **Memory Trick**: HashMap for instant lookup + Doubly Linked List for instant re-ordering!",
    rawCode: `class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {} # Map key -> Node
        self.left, self.right = Node(0, 0), Node(0, 0)
        self.left.next, self.right.prev = self.right, self.left

    # 📍 Helper: Node ko Head ke paas insert karo (Most Recent)
    def _insert(self, node):
        nxt, prv = self.left.next, self.left
        prv.next = nxt.prev = node
        node.next, node.prev = nxt, prv

    # 📍 Helper: Node ko Doubly Linked List se hatao
    def _remove(self, node):
        prv, nxt = node.prev, node.next
        prv.next, nxt.prev = nxt, prv

    def get(self, key: int) -> int:
        if key in self.cache:
            self._remove(self.cache[key])
            self._insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self._insert(self.cache[key])
        
        if len(self.cache) > self.cap:
            lru = self.right.prev
            self._remove(lru)
            del self.cache[lru.key]`,
    isDone: false
  },
  {
    id: "lpa-200",
    title: "200. Number of Islands",
    platform: "LeetCode",
    difficulty: "Medium",
    tags: ["Graph", "BFS", "DFS", "Union Find"],
    problemDescription: "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.\n\nExample 1:\nInput: grid = [\n  [\"1\",\"1\",\"1\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"1\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"0\",\"0\"]\n]\nOutput: 1",
    hindiDescription: "Aapko '1' (Zameen) aur '0' (Paani) ka 2D Map diya hai. Kul kitne alag alag Tapoo (Islands) hain unka count batao.",
    mindfulStory: "🎭 **Asli Zindagi Ka Real Metaphor**: **Parcham / Flag Sinking Game**: Har baar jab aapko ek Naya '1' milta hai, aap island count +1 karte ho aur poore connected island ki zameen ko paani ('0') bana dete ho (DFS/BFS traversal se) taaki dubara count na ho!\n\n📌 **Step-by-Step Visual Story**:\n- **STEP 1**: Grid me 0,0 se M,N tak loop chalao.\n- **STEP 2**: Jab bhi `grid[r][c] == '1'` mile -> `islands += 1` aur `dfs(r, c)` trigger karo.\n- **STEP 3**: DFS function 4 directions (Up, Down, Left, Right) me go through karke saare '1's ko '0' mark karta hai.\n\n⚠️ **Khas Edge Cases**: Matrix bounds check `0 <= r < M` and `0 <= c < N`.",
    unforgettableBottleneck: "⚡ **#1 Critical Trap**: Visited nodes ko '0' mark karna bhool gaye toh infinite loop/recursion stack overflow hoga!\n\n💡 **Memory Trick**: Naya island milte hi count +1 karo aur poore island ko paani me dooba do ('0' kar do)!",
    rawCode: `class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        if not grid:
            return 0
            
        rows, cols = len(grid), len(grid[0])
        islands = 0
        
        def dfs(r, c):
            if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != '1':
                return
            # 📍 STEP 1 (Story se): Visited land ko '0' banao
            grid[r][c] = '0'
            # 📍 STEP 2 (Story se): 4 direction me phel jao
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == '1':
                    islands += 1
                    dfs(r, c)
                    
        return islands`,
    isDone: false
  }
];
