const dadosCadastrais =  []

const cadastrar = document.querySelector('.cadaster-user')

cadastrar.addEventListener("click", function(ev){
    ev.preventDefault()

    const nome = document.getElementById('name').value
    const birthData = document.getElementById('birth-data').value
    const contact = document.getElementById('tel').value

    const dataNascimento = birthData.split('-').reverse().join('/')

    const telFormatA = contact.split('')
    telFormatA.splice(0,0,'(')
    telFormatA.splice(3,0,')')
    telFormatA.splice(9,0,'-')

    const telefone = telFormatA.join('')

    dadosCadastrais.push({nome, dataNascimento, telefone})


    alert(`Parabéns ${nome}, seu cadastro foi realizado com sucesso!!`)

})
