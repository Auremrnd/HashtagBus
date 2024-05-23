// Recupera o elemento que exibirá o valor total da compra
const elementoPrecoTotalCompra = document.getElementById("valor-total-compra");
// Preço fixo da passagem
const precoPassagem = 140;
// Variável para armazenar o valor total da compra
let valorTotalCompra = 0;
// Lista de assentos selecionados
let assentosSelecionados = [];
// Função para selecionar ou desselecionar um assento
function selecionarCadeira(cadeira) {
  const cadeiraSelecionada = cadeira;
  // Verifica se a cadeira está desabilitada (provavelmente já vendida)
  if (cadeiraSelecionada.classList.contains("ocupado")) {
    return;
  }
  // Verifica se a cadeira já está selecionada
  if (cadeiraSelecionada.classList.contains("selecionado")) {
    // Se estiver selecionada, remove a seleção
    cadeiraSelecionada.classList.remove("selecionado");
    // Remove o assento desselecionado da lista de assentos selecionados
    assentosSelecionados = assentosSelecionados.filter(
      (id) => id !== cadeiraSelecionada.id
    );
    // Calcula o novo valor total da compra com base nos assentos selecionados
    valorTotalCompra = assentosSelecionados.length * precoPassagem;
    // Atualiza a visualização do preço total da compra
    atualizarVisualizacaoPreco();
    return;
  }
  // Se não estiver selecionada, adiciona a seleção
  cadeiraSelecionada.classList.add("selecionado");
  // Adiciona o assento selecionado à lista de assentos selecionados
  assentosSelecionados.push(cadeiraSelecionada.id);
  valorTotalCompra = assentosSelecionados.length * precoPassagem;
  atualizarVisualizacaoPreco();
}
// Função para atualizar a visualização do preço total da compra
function atualizarVisualizacaoPreco() {
  // Define o texto do elemento de preço total com o valor calculado
  elementoPrecoTotalCompra.innerText = `R$ ${valorTotalCompra}`;
}
// Função para finalizar a compra
function finalizarCompra() {
  // Verifica se não há assentos selecionados
  if (assentosSelecionados.length === 0) {
    return;
  }
  // Para cada assento selecionado, marca como vendido e desabilitado
  for (const id of assentosSelecionados) {
    const assentoComprado = document.getElementById(id);
    assentoComprado.classList.remove("selecionado");
    assentoComprado.classList.add("ocupado");
  }
  // Limpa a lista de assentos selecionados e reseta o valor total da compra
  assentosSelecionados = [];
  valorTotalCompra = 0;
  // Atualiza a visualização do preço total da compra
  atualizarVisualizacaoPreco();
}
