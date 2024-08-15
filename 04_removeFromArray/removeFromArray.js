const removeFromArray = function(...theArgs) {
    let array = theArgs[0];
    let args;
    if(theArgs.length == 1) {
        return array;
    } else {
        args = theArgs.slice(1, theArgs.length)
    }
    let newArray = array.filter((element) => !(args.indexOf(element) != -1));
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
