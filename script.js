document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const olhoBtn = document.getElementById('olho');

    loginBtn.addEventListener('click', () => {
        loginForm.style.transform = 'translateX(0)';
        signupForm.style.transform = 'translateX(100%)';
        
        loginBtn.classList.add('ativoBtn');
        loginBtn.classList.remove('inativoBtn');
        signupBtn.classList.remove('ativoBtn');
        signupBtn.classList.add('inativoBtn');
    });

    signupBtn.addEventListener('click', () => {
        loginForm.style.transform = 'translateX(-100%)';
        signupForm.style.transform = 'translateX(0)';

        signupBtn.classList.add('ativoBtn');
        signupBtn.classList.remove('inativoBtn');
        loginBtn.classList.remove('ativoBtn');
        loginBtn.classList.add('inativoBtn');
    });

    olhoBtn.addEventListener('click', ()=>{
        alteraOlho(olhoBtn);
    })
});

function alteraOlho (olhoBtn){
    const campoSenha = document.getElementById('senha');

    if (campoSenha.type==="password"){
        campoSenha.type = "text";
        olhoBtn.classList.remove("fechado");
    } else{
        campoSenha.type = "password";
        olhoBtn.classList.add("fechado");
    }
}