export const repeatedString = (str = '', rep = 1) => {
    let newStr = '';
    while (newStr.length < str.length * rep) {
        newStr += str;
    }
    return newStr;
};

console.log(repeatedString('test', 2));
