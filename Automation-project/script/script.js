const singup_Button = document.getElementById("singUp_Button");
const login_btn = document.getElementById("login-btn")



 const submitForm = (event)=>{
    const link = document.getElementById("singUp_Button");
    link.href = "sing_Up_page.html"
    // event.preventDefault();
}

const login = () => {
    
}



singup_Button.addEventListener("click",submitForm)
login_btn.addEventListener("click",login)