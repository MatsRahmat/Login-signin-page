const signinForm = document.forms;
const loginForm = document.getElementById('loginForm');
const warnMsg = document.querySelector('.warn')


//===================Validate Form Signin===============
function validate() {
let nama = signinForm[0].elements[0].value;
let password = signinForm[0].elements[1].value;
let repeatPas = signinForm[0].elements[2].value;
let email = signinForm[0].elements[3].value;
let temEmail = email.includes('@') && email.includes(".com")
    if(nama == ''){
        warnMsg.innerHTML = 'masukan nama'
    }else if(password == ''){
        warnMsg.innerHTML = 'Masukan password'
    }else if(password.length <= 7){
        warnMsg.innerHTML = 'password minimal 8 karakter'
    }else if(password != repeatPas){
        warnMsg.innerHTML = 'password tidak sama'
        console.log([password, repeatPas]);
        console.log('salah');
    }else if(temEmail == false){
        warnMsg.innerHTML = 'email invalid'
    }else{
        warnMsg.innerHTML = ''
        console.log(`anda terdaftar ${[nama, password, email]}`);
    }
    
}


//===============autentikasi login =====================
const modal = document.getElementById('alert');
const overlayModal = document.querySelector('.overlay');
const loginMsg = document.getElementById('loginMsg')
function login(){
    let username = signinForm[1].elements[0].value;
    let password = signinForm[1].elements[1].value;
    if(username == 'ujang' && password == '12345678'){
        suscesLogin()
    }else{
        failedLogin()
    }
    username = '';
    password = '';
}

function suscesLogin() {
    loginMsg.innerHTML = 'Berhasil Masuk'
    modal.classList.toggle('hidden')
    overlayModal.classList.add('overlay-active')
    closeModal()
}

function failedLogin() {
    loginMsg.innerHTML = 'Gagal masuk'
    modal.classList.toggle('hidden')
    overlayModal.classList.add('overlay-active')
    closeModal()
}

function closeModal() {
    setTimeout(() => {
        modal.classList.add('hidden')
        overlayModal.classList.remove('overlay-active')
    }, 2000)
}  



 



//=================switch element login/signin============
const formTogleSignin = document.getElementById('signinForm')
const formTogleLogin = document.getElementById('loginForm')

function switcEl(){
    formTogleLogin.classList.toggle('hidden')
    formTogleSignin.classList.toggle('hidden')
}