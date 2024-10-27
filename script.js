document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const olhoBtn = document.getElementById('olho');
    const formContainer = document.querySelector('.form-container');
    let startX;

    function showLogin() {
        loginForm.style.transform = 'translateX(0)';
        signupForm.style.transform = 'translateX(100%)';
        loginBtn.classList.add('ativoBtn');
        loginBtn.classList.remove('inativoBtn');
        signupBtn.classList.remove('ativoBtn');
        signupBtn.classList.add('inativoBtn');
    }

    function showSignup() {
        loginForm.style.transform = 'translateX(-100%)';
        signupForm.style.transform = 'translateX(0)';
        signupBtn.classList.add('ativoBtn');
        signupBtn.classList.remove('inativoBtn');
        loginBtn.classList.remove('ativoBtn');
        loginBtn.classList.add('inativoBtn');
    }

    loginBtn.addEventListener('click', showLogin);
    signupBtn.addEventListener('click', showSignup);

    olhoBtn.addEventListener('click', () => {
        alteraOlho(olhoBtn);
    });

    formContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    formContainer.addEventListener('touchmove', (e) => {
        if (!startX) return;

        let endX = e.touches[0].clientX;
        let diffX = startX - endX;

        if (diffX > 50) {
            showSignup();
            startX = null;
        } else if (diffX < -50) {
            showLogin();
            startX = null;
        }
    });
});

function alteraOlho(olhoBtn) {
    const campoSenha = document.getElementById('senha');

    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        olhoBtn.classList.remove("fechado");
    } else {
        campoSenha.type = "password";
        olhoBtn.classList.add("fechado");
    }
}
