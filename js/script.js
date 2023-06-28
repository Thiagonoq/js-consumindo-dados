async function consultaCEP(CEP) {
    var erroCEP = document.getElementById('erro');
    erroCEP.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não encontrado!')
        }

        var logradouro = document.getElementById('endereco');
        var bairro = document.getElementById('bairro');
        var cidade = document.getElementById('cidade');
        var estado = document.getElementById('estado');

        logradouro.value = consultaCEPConvertida.logradouro;
        bairro.value = consultaCEPConvertida.bairro;
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf;        

    } catch(erro) {
        erroCEP.innerHTML = `<p>CEP inválido! Tente novamente.</p>`;
        //console.log(erro);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => consultaCEP(cep.value))

