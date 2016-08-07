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

function limparLista()
{
  var lista = document.getElementById("lista");
  while(lista.firstChild)
  {
    lista.removeChild(lista.firstChild);
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
  //adiciona itens nos combos
  var cbbEscola = document.getElementById("cbbEscola");
  //opção de busca vazia
  var opVaziaEscola = document.createElement('option');
  
  opVaziaEscola.innerHTML = "-";
  opVaziaEscola.value = -1;
  cbbEscola.appendChild(opVaziaEscola);

  //preenche combos
  for (var i = 0; i < cadastro.length; i++)
  {
    var opE = document.createElement('option');
	
    opE.innerHTML = cadastro[i].escola;
	
    opE.value = i;
	
    cbbEscola.appendChild(opE);
	
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

function buscar()
{
	limparLista();
	var valorE = document.getElementById("cbbEscola").value;
	if(valorE == -1)
	{
		alert("Selecione uma escola");
	}
	else
	{
		var lista = document.getElementById("lista");
		var item = document.createElement('li');
		item.innerText = cadastro[valorE].escola;
		lista.appendChild(item);
	}
}
inicializaArray();
carregaCombo();


