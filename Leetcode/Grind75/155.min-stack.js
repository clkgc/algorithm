/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Medium (53.68%)
 * Likes:    13674
 * Dislikes: 841
 * Total Accepted:    1.6M
 * Total Submissions: 2.9M
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n' +
  '[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * Implement the MinStack class:
 * 
 * 
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 * 
 * 
 * You must implement a solution with O(1) time complexity for each
 * function.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * 
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * -2^31 <= val <= 2^31 - 1
 * Methods pop, top and getMin operations will always be called on non-empty
 * stacks.
 * At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
 * 
 * 
 */

// @lc code=start

var MinStack = function() {
    this.stack = []; // This will store all the elements
    this.minStack = []; // This will store the minimum elements
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // Push the value into the main stack
    this.stack.push(val);
    
    // If the minStack is empty or the current value is less than or equal to the top
    // of the minStack, push it into the minStack as well
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // Pop the top element from the main stack
    const val = this.stack.pop();
    
    // If the popped value is the same as the top of the minStack, pop it from the minStack as well
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return the top element of the main stack
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // The top of the minStack is the minimum element in the stack
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

