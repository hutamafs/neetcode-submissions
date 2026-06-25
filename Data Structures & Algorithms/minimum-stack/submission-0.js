class MinStack {
    constructor() {
        this.data = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.data.push(val);
        if (this.min.length == 0) {
            this.min.push(val);
        } else {
            this.min.push(Math.min(val, this.min[this.min.length-1]))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.data.pop();
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.data[this.data.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1];
    }
}
