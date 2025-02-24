/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 

Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true 

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109 */

const containsDuplicate = (nums) => {
  const numsSet = new Set();

  for (let index = 0; index < nums.length; index++) {
    if (numsSet.has(nums[index])) {
      return true;
    }

    numsSet.add(nums[index]);
  }

  return false;
};

const case1 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const case2 = [1, 2, 3, 4];

const duplicates = containsDuplicate(case1);

console.log(duplicates, "duplicates");
