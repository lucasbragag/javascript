function parimpar(n) { // (n) é parâmetro 
    if (n % 2 == 0) {  
        return `O número ${n} é par!`   // Ação
    }else {
        return `O número ${n} é ímpar!`
    }

}

let res = parimpar(11)  // Chamada 
console.log(res)
