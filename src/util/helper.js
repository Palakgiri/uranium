let printDate = function() {
    console.log ('the date is 7');
}
let printMonth = function(){
    console.log ('the mont is : april');
}
let  batchinfo = function(){
    console.log ('uranium , w2 D3 , the topic for today is npm ,localhost, etc.');
}

module.exports.date = printDate;
module.exports.month = printMonth;
module.exports.batch = batchinfo;