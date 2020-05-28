var cep = document.getElementById('cadastrar');
var cep_real = document.getElementById('nome');
var endereco = document.getElementById('endereco');
var cidade = document.getElementById('cidade');
var bairro = document.getElementById('bairro');
var estado = document.getElementById('estado');
var httpReq = new XMLHttpRequest();


cep.onclick = function apiCEP() {
    httpReq.open('GET', `https://api.postmon.com.br/v1/cep/${cep_real.value}`, false);
    httpReq.send();

    var obj = httpReq.responseText;
    var jsonOk = JSON.parse(obj);

    endereco.value = jsonOk.logradouro;
    cidade.value = jsonOk.cidade;
    bairro.value = jsonOk.bairro;
    estado.value = jsonOk.estado;
    cep_real.value = jsonOk.cep_real;

    console.log(jsonOk);

}