class Tekstas {
    static firstSymbol(str) {
        return str[0] ?? '';
    }

    static lastSymbol(str) {
        return str.at(-1) ?? '';
    }
}





console.log(Tekstas.firstSymbol('Labas'));
console.log(Tekstas.lastSymbol('Labas'));