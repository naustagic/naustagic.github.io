// Obtém os valores dos campos de entrada
function getInputValues() {
    return {
      level: parseInt(document.getElementById('level').value),
      codex: parseInt(document.getElementById('codex').value),
      power: parseInt(document.getElementById('power').value),
      posture: parseInt(document.getElementById('posture').value)
    };
  }

  // Calcula o score usando a fórmula fornecida
  function calculateScore(level, codex, power, posture) {
    return level * 3 / 140 + codex * 4 / 900 + power * 2 / 250000 + posture * 1 / 6;
  }

  // Atualiza o elemento HTML com o resultado do cálculo
  function updateResult(score) {
    document.getElementById('result').innerHTML = `O score do personagem é: ${score.toFixed(2)}`;
  }

  // Adiciona um evento de clique ao botão de cálculo
  document.getElementById('calculate-button').addEventListener('click', () => {
if (validateInput()) {
  const inputValues = getInputValues();
  const score = calculateScore(inputValues.level, inputValues.codex, inputValues.power, inputValues.posture);
  updateResult(score);
} else {
  showErrorMessage();
}
});
