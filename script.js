//array global para guardar as escolas
//cadastro.escola e cadastro.cidade
var cadastro = [];

//inicializar o array com 3 escolas e respectivas cidades
function inicializaArray()
{
  var i;
  for (i=0; i<3; i++)
  {
    cadastro[i] = {escola: "escola " + (i+1), cidade: "cidade " + (i+1)};
  }
}

//mostrar todas as escolas cadastradas em uma ul
function listarEscolas()
{
  limparLista();
  for (var i = 0; i < cadastro.length; i++)
  {
    var lista = document.getElementById("lista");
    var item = document.createElement('li');
    item.innerText = cadastro[i].escola;
    lista.appendChild(item);
  }
}

//carregar cbb de escola e cidade para pesquisa
function carregaCombo()
{
  //limpa os combos
  document.getElementById("cbbEscola").innerHTML = "";
  document.getElementById("cbbCidade").innerHTML = "";
  //adiciona itens nos combos
  var cbbEscola = document.getElementById('cbbEscola');
  var cbbCidade = document.getElementById('cbbCidade');
  for (var i = 0; i < cadastro.length; i++)
  {
    var opE = document.createElement('option');
	var opC = document.createElement('option');
    opE.innerHTML = cadastro[i].escola;
	opC.innerHTML = cadastro[i].cidade;
    opE.value = i;
	opC.value = i;
    cbbEscola.appendChild(opE);
	cbbCidade.appendChild(opC);
  }
}

//cadastrar escola e cidade 
function adicionar()
{
  //salva no array
  cadastro[cadastro.length] = {escola: document.getElementById("escola").value, cidade: document.getElementById("cidade").value}
  carregaCombo();
  document.getElementById("escola").value = "";
  document.getElementById("cidade").value = "";
}

function limparLista()
{
  var lista = document.getElementById("lista");
  while(lista.firstChild)
  {
    lista.removeChild(lista.firstChild);
  }
}


inicializaArray();
carregaCombo();


