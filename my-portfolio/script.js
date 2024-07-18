
function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("side-menu").classList.toggle("change");
}

let userName = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let sub = document.getElementById("sub").value;
let areas = document.getElementById("areas").value;

let messgeBody = "Name :"+ userName +
"<br/> Email :" + email +
"<br/> Phone :" + phone +
"<br/> Email sub :" + sub +
"<br/> Text Areas :" + areas ;


function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "infosudcpr76@gmail.com",
        Password : "4A632E3226A7541BCE6BC43E05783F30036B",
        To : 'factbaba7645@gmail',
        From : "infosudcpr76@gmail.com",
        Subject : "This is the subject",
        Body : messgeBody
    }).then(
      message => alert(message)
    );
}