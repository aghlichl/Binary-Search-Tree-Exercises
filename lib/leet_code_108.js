// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
    var sortedArrayToBST = function (nums) {
        if (!nums.length) {
            return null;
        }
        let right = nums.slice(mid + 1)
        
        let left = nums.slice(0, mid)
        
        let mid = Math.floor(nums.length / 2);
        
        
        let head = new TreeNode(nums[mid]);
        
        head.left = sortedArrayToBST(left);
        head.right = sortedArrayToBST(right);
        
        return head;

    };
}