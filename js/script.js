
 // Inicializa o ScrollReveal
 ScrollReveal().reveal('.section-home', {
    distance: '50px',      // Distância do movimento
    origin: 'bottom',      // Origem do movimento
    duration: 1000,        // Duração da animação (em milissegundos)
    easing: 'ease-in-out', // Tipo de transição
    delay: 300,             // Atraso antes de começar (em milissegundos)
    reset: true,
    opacity: null
});

ScrollReveal().reveal('.section-sobre', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out', // Tipo de transição
    delay: 300,
    reset: true,
    opacity: null
});

ScrollReveal().reveal('.container-projeto', {
    distance: '50px',
    origin: 'left',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 300,
    reset: true,
    opacity: null
});

/////////////////////////////////////////

 // Inicialize o EmailJS com sua chave pública
 emailjs.init("eC1BRFJvXLP7GIuhH");

 // Capturar o formulário
 const form = document.getElementById("contact-form");

 form.addEventListener("submit", function(event) {
     event.preventDefault(); // Prevenir o envio padrão do formulário

     const feedback = document.getElementById("feedback");

     emailjs.sendForm("service_5zvnlcm", "template_k74cuo4", form)
         .then(function() {
             feedback.innerHTML = '<div class="success">Mensagem enviada com sucesso!</div>';
             form.reset(); // Limpar o formulário
         })
         .catch(function(error) {
             feedback.innerHTML = '<div class="error">Erro ao enviar mensagem. Tente novamente.</div>';
             console.error("Erro:", error);
         });
 });