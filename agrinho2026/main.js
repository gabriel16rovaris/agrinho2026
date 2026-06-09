// Função que calcula o adubo orgânico necessário
function calcularAdubo() {
    // 1. Pegar o valor digitado no input
    let area = document.getElementById('areaHorta').value;

    // 2. Validação simples
    if (area === "" || area <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, digite uma área válida (maior que 0)!";
        return;
    }

    // 3. Lógica: Em média, para uma horta orgânica forte, precisa de 2kg de composto por metro quadrado
    // Mas se o solo for muito pobre, usa-se 5kg. Vamos dar uma média boa:
    let quantidadeIdeal = area * 2.5; // kg por m2

    // 4. Mostrar o resultado na tela
    let texto = `Para uma horta de <strong>${area}m²</strong>, você precisa de aproximadamente <strong>${quantidadeIdeal}kg</strong> de adubo orgánico (composto).`;
    
    document.getElementById('resultado').innerHTML = texto;
}

// Suavização do Scroll (opcional, para dar feel de site profissional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});