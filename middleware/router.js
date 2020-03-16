function addReq(req, res, next) {
    console.log(req.header);
    next(); 
}
module.exports = addReq;