document.addEventListener('DOMContentLoaded', function() {
    console.log("Bem-vindo ao site do CUBESAT POLI-UPE!");

    // Aqui você pode implementar certas funcionalidades, como eventos de clique, animações, etc.

    // Exemplo de evento para um botão "Saiba Mais"
    const projectButtons = document.querySelectorAll('.project-button');
    
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectName = this.getAttribute('data-project');
            alert(`Você clicou no projeto: ${projectName}`);
            // Pode abrir uma nova página ou modal com informações adicionais do projeto
        });
    });

    // Seção de Contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previne o envio normal do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Aqui você pode adicionar a lógica para enviar os dados, por exemplo, usando fetch para um endpoint de envio
            console.log(`Enviado por: ${name}, Email: ${email}, Mensagem: ${message}`);

            // Mostrar mensagem de sucesso
            alert("Mensagem enviada com sucesso!");
        });
    }

    // Outras funcionalidades a serem adicionadas conforme a necessidade
});