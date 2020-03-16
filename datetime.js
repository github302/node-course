function getCurrentTime() {
    const time = new Date();
    return time.toLocaleString();
}

// exports = module.exports // 即：exports 对象是指向 module.exports 的引用

// exports.getCurrentTime = getCurrentTime;  // 1
// module.exports.getCurrentTime = getCurrentTime; // 2 ，与1的导出是等价的 

// module.exports = getCurrentTime; // 3，直接将getCurrentTime赋值给module.exports对象

// 上面两种的区别在require的时候，区别很明显：
// 1，2两种导出方式，需要访问 getCurrentTime 属性获取到 getCurrentTime 函数
// const myModule = require('myModule');
// myModule.getCurrentTime();

// 3 这种导出方式，可以直接使用 getCurrentTime 函数
// const getCurrentTime = require('myModule')
// getCurrentTime();

// 直接写exports = getCurrentTime 是无法导出 getCurrentTime 函数的，因为exports本质上是向module的 exports属性的引用，直接对exports赋值只会改变exports本身，而对module.exports并无影响。
exports.getCurrentTime = getCurrentTime;
