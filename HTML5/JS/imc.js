function imc () {

    var inNome = document.getElementById('inNome')
    var rbMasculino = document.getElementById('rbMasculino')
    var rbFeminino = document.getElementById('rbFeminino')
    var inAltura = document.getElementById('inAltura')
    var outResposta = document.getElementById('outResposta')

    // obtém os valores de entrada
    var nome = inNome.value 
    var masculino = rbMasculino.checked
    var feminino = rbFeminino.checked
    var altura = Number(inAltura.value)

    // verificando se o nome foi preenchido e o sexo selecionado
    if (nome == '' || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo...')
        inNome.focus()
        return
    }

    // verificando se a altura foi preenchida corretamente
    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, informe a altura...')
        inAltura.focus
        return
    }

    // se masculino (significa se masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2) // Math.pow eleva ao quadro
        outResposta.textContent = `${nome} : seu peso ideal é ${peso.toFixed(3)} kg`
        return
    }

    // se for feminino 
    if (feminino) {
        var peso = 21 * Math.pow(altura, 2)
        outResposta.textContent = `${nome} : seu peso ideal é ${peso.toFixed(3)} kg`
        return
    }
}

    // criar botão referência a função
    
    var btCalcular = document.getElementById('btCalcular')
    btCalcular.addEventListener('click', imc)

    // criar referência ao botão para limpar os campos 

    function limpar () {
        location.reload()
        document.getElementById('inNome').focus
    }

    var btLimparCampos = document.getElementById('btLimparCampos')
    btLimparCampos.addEventListener('click', limpar)

