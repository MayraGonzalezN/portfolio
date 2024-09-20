const form = document.querySelector("form");

function enviarFormulario(envio) {
    envio.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
        alert("¡Completa todos los campos para continuar la aventura!");
    }
    else {
        alert("¡Mensaje entregado! ¡Que la fuerza te acompañe!");
        form.reset();
    }
};

form.onsubmit = enviarFormulario;