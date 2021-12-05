class MinStack{
    constructor(){
        this.stock =[]
    }
    // 入栈
    push(item){
        this.stock.push(item)
    }
    // 查看栈顶值
    top(){
        return this.stock[this.stock.length -1]
    }
    // 实现最小值功能
    min(){
        return Math.min.apply(null, this.stock)
    }
    // 出栈方法
    pop(){
        return this.stock.pop()
    }
}

const m = new MinStack()