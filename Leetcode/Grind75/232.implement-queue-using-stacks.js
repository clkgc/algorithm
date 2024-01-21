/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
    this.queue = []; // Initialize an empty array for the queue
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x); // Add the element to the end of the queue
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.queue.shift(); // Remove and return the first element of the queue
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0]; // Return the first element without removing it
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0; // Return true if the queue is empty
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

