const minCode: number = "a".charCodeAt(0);
const maxCode: number = "z".charCodeAt(0);

function shiftCipher(msg: string, shift: number = 1): string 
{
  return msgProcessing(msg, shift);
}

function shiftDecipher(msg: string, shift: number = 1): string 
{
    return msgProcessing(msg, -shift);
}

function msgProcessing(msg: string, shift: number): string 
{
    shift = shift % (maxCode-minCode);
    const arrayOfSymbols = msg.split('');
    arrayOfSymbols.forEach( (symbol: string, ind:number, array: string[])=> {
        symbolProcessing(array, ind, symbol.charCodeAt(0), shift);
    })
    return arrayOfSymbols.join('');
}

function symbolProcessing(arrayOfSymbols: string[], ind: number, code: number, shift:number): void {
    if(code >= minCode && code <= maxCode) 
    {
        code = code + shift;
        if(code > maxCode) {
            code = minCode + (code - maxCode) - 1;
        } else if(code < minCode) {
            code = maxCode - (minCode - code) + 1;
        }
        arrayOfSymbols[ind] = String.fromCharCode(code);
    }
}

