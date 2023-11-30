// // Obtém referências para o contêiner e o botão
// const container = document.querySelector('.container.description');
// const botaoLeiaMais = document.getElementById('leiaMais');

// // Define a altura inicial para 50% do contêiner
// const alturaInicial = container.scrollHeight * 0.5;
// container.style.height = `${alturaInicial}px`;
// container.style.overflow = 'hidden';

// // Adiciona um evento de clique ao botão
// botaoLeiaMais.addEventListener('click', function() {
//     // Verifica se o contêiner está com altura reduzida
//     const alturaAtual = container.style.height;
//     if (alturaAtual === `${alturaInicial}px`) {
//         // Se estiver reduzido, expande para mostrar o conteúdo completo
//         container.style.height = 'auto';
//         botaoLeiaMais.textContent = 'Mostrar menos';
//     } else {
//         // Caso contrário, reduz novamente para 50% da altura
//         container.style.height = `${alturaInicial}px`;
//         botaoLeiaMais.textContent = 'Leia mais';
//     }
// });