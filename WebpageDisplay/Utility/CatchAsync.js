module.exports = func => {
    return(require, resolve, next) => {
        func(require, resolve, next).catch(next);
    }
}