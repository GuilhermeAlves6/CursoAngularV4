var minhaVar = 'minha variavel';

function minhaFunc(x: number, y: number){
    return x + y;
}

//ES 6 ou ES 2015
let num = 2;
const PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor*2;
});
numeros.map(function (valor) { return valor * 2}); //ES 2015

class Matematica {
    soma(x: number , y: number) {
        return x + y;
    }
}

var n1: any = 'Guilherme';
n1 = 4;

