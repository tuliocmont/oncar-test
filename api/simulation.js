function calculateApprovalStatus(score) {
  let approvalStatus;

  if (score >= 1 && score <= 299) {
    approvalStatus = "Reprovado.";
  } else if (score >= 300 && score <= 599) {
    approvalStatus = "70% de entrada, 30% do comprometimento da renda.";
  } else if (score >= 600 && score <= 799) {
    approvalStatus = "50% de entrada, 25% do comprometimento da renda.";
  } else if (score >= 800 && score <= 950) {
    approvalStatus = "30% de entrada, 20% do comprometimento da renda.";
  } else {
    approvalStatus = "100% de financiamento, taxa zero.";
  }

  return approvalStatus;
}

function generateRandomScore() {
  return Math.floor(Math.random() * 999) + 1;
}

function createSimulation() {
  const score = generateRandomScore();
  const approvalStatus = calculateApprovalStatus(score);
  return approvalStatus;
}

module.exports = createSimulation;
