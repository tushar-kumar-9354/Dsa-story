export const hackerrankDataset = [
  {
    id: "hr-solve-me-first",
    platform: "HackerRank",
    title: "HR. Solve Me First",
    difficulty: "Easy",
    approaches: ["Math", "Warmup"],
    problemDescription: `Complete the function solveMeFirst to compute the sum of two integers.

Function Description:
Complete the solveMeFirst function in the editor below.
solveMeFirst has the following parameters:
- int a: the first value
- int b: the second value

Returns:
- int: the sum of a and b

Example:
a = 2, b = 3
Output: 5`,
    mindfulStory: `Simplest warmup challenge: return a + b!`,
    unforgettableBottleneck: `Warmup sum problem.`,
    rawCode: `function solveMeFirst(a, b) {
  return a + b;
}`,
    codeLines: [],
    isDone: false
  },
  {
    id: "hr-simple-array-sum",
    platform: "HackerRank",
    title: "HR. Simple Array Sum",
    difficulty: "Easy",
    approaches: ["Array", "Warmup"],
    problemDescription: `Given an array of integers, find the sum of its elements.

Example:
ar = [1, 2, 3, 4, 10, 11]
Output: 31`,
    mindfulStory: `Iterate through array or use ar.reduce((a, b) => a + b, 0)!`,
    unforgettableBottleneck: `Array summation using reduce.`,
    rawCode: `function simpleArraySum(ar) {
  return ar.reduce((acc, curr) => acc + curr, 0);
}`,
    codeLines: [],
    isDone: false
  },
  {
    id: "hr-compare-the-triplets",
    platform: "HackerRank",
    title: "HR. Compare the Triplets",
    difficulty: "Easy",
    approaches: ["Array", "Warmup"],
    problemDescription: `Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and Bob's rating is b = (b[0], b[1], b[2]).
- If a[i] > b[i], Alice receives 1 point.
- If a[i] < b[i], Bob receives 1 point.
- If a[i] === b[i], neither person receives a point.

Return [aliceScore, bobScore].`,
    mindfulStory: `Compare a[i] and b[i] at indices 0, 1, 2 and increment respective score counters!`,
    unforgettableBottleneck: `Equal ratings grant 0 points to both.`,
    rawCode: `function compareTriplets(a, b) {
  let alice = 0, bob = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }
  return [alice, bob];
}`,
    codeLines: [],
    isDone: false
  },
  {
    id: "hr-diagonal-difference",
    platform: "HackerRank",
    title: "HR. Diagonal Difference",
    difficulty: "Easy",
    approaches: ["Matrix", "Math"],
    problemDescription: `Given a square matrix, calculate the absolute difference between the sums of its diagonals.

Example:
1 2 3
4 5 6
9 8 9

Primary diagonal = 1 + 5 + 9 = 15
Secondary diagonal = 3 + 5 + 9 = 17
Absolute difference = |15 - 17| = 2`,
    mindfulStory: `Primary diagonal elements: arr[i][i]. Secondary diagonal elements: arr[i][n - 1 - i].`,
    unforgettableBottleneck: `Return Math.abs(primarySum - secondarySum)!`,
    rawCode: `function diagonalDifference(arr) {
  const n = arr.length;
  let primary = 0, secondary = 0;
  for (let i = 0; i < n; i++) {
    primary += arr[i][i];
    secondary += arr[i][n - 1 - i];
  }
  return Math.abs(primary - secondary);
}`,
    codeLines: [],
    isDone: false
  },
  {
    id: "hr-time-conversion",
    platform: "HackerRank",
    title: "HR. Time Conversion",
    difficulty: "Easy",
    approaches: ["String", "Math"],
    problemDescription: `Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note:
- 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example:
s = '07:05:45PM' -> '19:05:45'
s = '12:40:22AM' -> '00:40:22'`,
    mindfulStory: `Extract AM/PM modifier. Handle 12AM -> 00 and PM hours (+12 for hours 1 to 11).`,
    unforgettableBottleneck: `Special edge cases: 12AM becomes 00, 12PM stays 12!`,
    rawCode: `function timeConversion(s) {
  const modifier = s.slice(-2);
  let hours = parseInt(s.slice(0, 2), 10);
  const minutesSeconds = s.slice(2, 8);

  if (modifier === 'AM') {
    if (hours === 12) hours = 0;
  } else {
    if (hours !== 12) hours += 12;
  }

  const formattedHours = hours.toString().padStart(2, '0');
  return formattedHours + minutesSeconds;
}`,
    codeLines: [],
    isDone: false
  }
];
