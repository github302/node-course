module.exports = function() {
    return async function(ctx, next) {
        console.log('check-login');
        await next();
    }
};