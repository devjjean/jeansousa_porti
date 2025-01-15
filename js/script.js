    // Usei o ScrollReveal para deixar as seções com animação de entrada e deixando mais dinâmico

    // Inicializa o ScrollReveal
 ScrollReveal().reveal('.section-home', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 300,
    reset: true,
    opacity: null
});

ScrollReveal().reveal('.section-sobre', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    easing: 'ease-in-out',
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


    // EmailJS para receber a mensagem de contato

    // Inicialize o EmailJS com sua chave pública
 emailjs.init("eC1BRFJvXLP7GIuhH");

 const form = document.getElementById("contact-form");

 form.addEventListener("submit", function(event) {
     event.preventDefault();

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