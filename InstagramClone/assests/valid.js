

function validate(){
    var password = document.getElementById("pass").value;
    var email = document.getElementById("em").value;

    if(email=="chauhanprithvi682@gmail.com" && password=="123321"){
       
       
        window.location.replace("inndex.html");
       
        
    }
    else{
   alert("Login Failed");
    }
}
function auth(){
    window.location.replace("newpage.html")
}

function dude(){
    window.location.replace("profile.html")
}
function prit(){
    window.location.replace("inndex.html");
}
function man(){
    window.location.replace("user_profile.html");
}

function done(){
    window.location.replace("chatbot.html");
}
function fun(){
    window.location.replace("profile.html");
}








/*dark mode*/

function changeMode(){
    var body = document.getElementsByTagName("body")[0];
    var footerLinks = document.getElementById("links").getElementsByTagName("a");


    if(body.classList.contains("dark")){
        body.classList.remove("dark");

       for(let i = 0; i<footerLinks.length;i++){
        footerLinks[i].classList.remove("dark-mode-link");
       }



    }
    else{
        body.classList.add("dark");

        for(let i=0; i<footerLinks.length;i++){
        footerLinks[i].classList.add("dark-mode-link");


        }
    }
}

docu.getElementById("dark-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    changeMode();
});






  











