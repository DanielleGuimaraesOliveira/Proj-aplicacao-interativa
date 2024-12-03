window.addEventListener("load", function () {
    const email_signup = document.getElementById("email-signup");
    const email_login = document.getElementById("email-login");
    
    const enviar_btn_login = document.getElementById("enviar-btn-login");
    const enviar_btn_signup = document.getElementById("enviar-btn-signup");
    
    const repete_senha_signup = document.getElementById("repete-senha-signup");
    const senha_repetida_error = document.getElementById("senha-repetida-error");

    const senha_signup = document.getElementById("senha-signup");
    const senha_signup_error = document.getElementById("senha-signup-error");

    const senha_esquecida = document.getElementById("senha-esquecida");


    enviar_btn_login.addEventListener("click", function () {
        verificacao_firebase();
    });
    


    email_signup.addEventListener("input", () => {
        if (validar_email(email_signup.value)) {
            email_signup.classList.remove("error");
        } else {
            email_signup.classList.add("error");
        }
    });

    senha_signup.addEventListener("input", () => {
        const erros = verificar_erros_senha(senha_signup.value);
    
        if (erros.length === 0) {
            senha_signup.classList.remove("error");
            senha_signup_error.classList.remove("active");
            senha_signup_error.innerHTML = ""; 
        } else {
            senha_signup.classList.add("error");
            senha_signup_error.classList.add("active");
            senha_signup_error.innerHTML = erros.join("<br>"); 
        }
    });

    repete_senha_signup.addEventListener("input", () => {
        if(repete_senha_signup.value===senha_signup.value){
            repete_senha_signup.classList.remove("error");
            senha_repetida_error.classList.remove("active");
            senha_repetida_error.textContent = "";
        }else{
            repete_senha_signup.classList.add("error");
            senha_repetida_error.classList.add("active");
            senha_repetida_error.textContent = "As senhas não são iguais";
        }
    });

    senha_esquecida.addEventListener("click",()=>{
        recuperar_senha(email_login.value);
    })

    enviar_btn_signup.addEventListener("click", function (event) {
        event.preventDefault();
        
        const emailValido = validar_email(email_signup.value);
        const senhaValida = verificar_erros_senha(senha_signup.value).length === 0;
        const senhasIguais = repete_senha_signup.value === senha_signup.value;

        if (emailValido && senhaValida && senhasIguais) {
           cadastrar_user(email_signup.value,senha_signup.value)
        } else {
            alert("Por favor, corrija os erros antes de prosseguir.");
        }
    });

});

function verificar_erros_senha(senha) {
    const erros = [];

    if (senha.length < 6) {
        erros.push("A senha deve ter pelo menos 6 caracteres.");
    }
    if (!/[A-Z]/.test(senha)) {
        erros.push("A senha deve conter pelo menos uma letra maiúscula.");
    }
    if (!/\d/.test(senha)) {
        erros.push("A senha deve conter pelo menos um número.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
        erros.push("A senha deve conter pelo menos um símbolo (!@#$%, etc.).");
    }

    return erros;
}
function validar_email(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
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
function recuperar_senha(email) {
    if (!validar_email(email)) {
      alert("Coloque um email válido para recuperação de senha.");
      return;
    }
  
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        alert("Email de recuperação enviado com sucesso. Verifique sua caixa de entrada!");
      })
      .catch((error) => {
        console.error("Erro ao enviar email de recuperação:", error);
        switch (error.code) {
          case "auth/user-not-found":
            alert("Usuário não encontrado, verifique o email inserido.");
            break;
          case "auth/invalid-email":
            alert("Email inválido, tente novamente.");
            break;
          default:
            alert("Ocorreu um erro, tente novamente mais tarde.");
        }
      });
  }
  

  function cadastrar_user(email,senha){
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Usuário cadastrado com sucesso!");
            console.log("Usuário cadastrado:", user);
        })
        .catch((error) => {
            console.error("Erro ao cadastrar usuário:", error.message);
            switch (error.code) {
                case "auth/email-already-in-use":
                    alert("Este email já está em uso.");
                    break;
                case "auth/invalid-email":
                    alert("O email inserido é inválido.");
                    break;
                case "auth/weak-password":
                    alert("A senha é muito fraca.");
                    break;
                default:
                    alert("Erro ao cadastrar. Tente novamente mais tarde.");
            }
    });
  }