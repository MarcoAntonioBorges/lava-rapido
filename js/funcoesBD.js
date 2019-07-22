//Arquivo destinado para as funcoes do Banco de Dados

function fazerReserva(dados){
  firebase.database().ref().child('dados').push(dados);
}