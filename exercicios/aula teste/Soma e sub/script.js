function verificar () { //função verificar 
  var um = document.getElementById('txtn1') // chamando os elementos para as variáveis.... 
  var dois = document.getElementById('txtn2')
  //var soma = document.getElementById('som')
  //var sub = document.getElementById('sub')
  var res = document.getElementById('res')

  if (um.value.length == 0 || dois.value.length == 0) { // Teste caso não informe um número
    res.innerHTML = 'Erro! Dados inválidos'
  } else { // Tudo ok
    var op = document.getElementsByName('radnum') // chamando a opção
    var u = Number(um.value) // Número um
    var d = Number(dois.value) // Número dois 
  } if (op[0].checked) { // Se a opção for SOMA
      var soma = u + d // Soma recebe u + d 
      res.innerHTML = `A soma entre ${u} e ${d} é ${soma}` // Mostra o resultado da soma
      
  } else { // Se não for soma, é subtração
      var sub = u - d
      res.innerHTML = `A subtração entre ${u} e ${d} é ${sub}` // Resultado
    }
      
    
  }
  

