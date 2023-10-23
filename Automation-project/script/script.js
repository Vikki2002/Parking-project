const singup_Button = document.getElementById("singUp_Button");
const login_btn = document.getElementById("login-btn");
const loginPage = document.querySelector(".side-login-page");


 const submitForm = (event)=>{
    const link = document.getElementById("singUp_Button");
    link.href = "sing_Up_page.html"
}

const login = () => {
    loginPage.classList.toggle("side-login-page-block")
}



singup_Button.addEventListener("click",submitForm)
login_btn.addEventListener("click",login)