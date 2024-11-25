window.addEventListener("load", function () {
    const email_signup = document.getElementById("email-signup");
    const email_login = document.getElementById("email-login");
    const senha_signup = document.getElementById("senha-signup");
    const repete_senha_signup = document.getElementById("repete-senha-signup");
    const enviar_btn_login = document.getElementById("enviar-btn-login");

    enviar_btn_login.addEventListener("click", function () {
        verificacao_firebase();
    });
    email_login.addEventListener("input", () => {
        if (validar_email(email_login.value)) {
            email_login.classList.remove("error");
        } 
        else {
            email_login.classList.add("error");
        }
    });


    email_signup.addEventListener("input", () => {
        if (validar_email(email_signup.value)) {
            email_signup.classList.remove("error");
        } else {
            email_signup.classList.add("error");
        }
    });

    senha_signup.addEventListener("input", () => {
        if (validar_senha(senha_signup.value)) {
            senha_signup.classList.remove("error");
        } else {
            senha_signup.classList.add("error");
        }
        verificar_senhas(); 
    });

    repete_senha_signup.addEventListener("input", () => {
        verificar_senhas(repete_senha_signup);
    });

});

function verificar_senhas(repete_senha_signup) {
    if (repete_senha_signup.value === senhaSignup.value && senhaSignup.value !== "") {
        repete_senha_signup.classList.remove("error");
    } else {
        repete_senha_signup.classList.add("error");
    }
}
function validar_email(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validar_senha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(senha);
}

function verificacao_firebase() {
    let valor_email = document.getElementById("email-login").value;
    let valor_senha = document.querySelector(".senha-login").value;

    firebase.auth().signInWithEmailAndPassword(valor_email, valor_senha)
        .then(response => {
            window.location.href = `menu.html`;
        })
        .catch(error => {
            console.log('Erro ao fazer login:', error.message);
        });
}

   