"use strict";
const minCode = "a".charCodeAt(0);
const maxCode = "z".charCodeAt(0);
function shiftCipher(msg, shift = 1) {
    return msgProcessing(msg, shift);
}
function shiftDecipher(msg, shift = 1) {
    return msgProcessing(msg, -shift);
}
function msgProcessing(msg, shift) {
    shift = shift % (maxCode - minCode);
    const arrayOfSymbols = msg.split('');
    arrayOfSymbols.forEach((symbol, ind, array) => {
        symbolProcessing(array, ind, symbol.charCodeAt(0), shift);
    });
    return arrayOfSymbols.join('');
}
function symbolProcessing(arrayOfSymbols, ind, code, shift) {
    if (code >= minCode && code <= maxCode) {
        code = code + shift;
        if (code > maxCode) {
            code = minCode + (code - maxCode) - 1;
        }
        else if (code < minCode) {
            code = maxCode - (minCode - code) + 1;
        }
        arrayOfSymbols[ind] = String.fromCharCode(code);
    }
}
//# sourceMappingURL=app.js.map