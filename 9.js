function checkNameValue(event){
event.preventDefault();


var name = document.getElementById("name");
var nameValue = name.value;

if (nameValue === ''){
	name.style.border = '1px solid red';
	
}   else {
	name.style.border = '1px solid black';
	
}
}

function checkEmailValue(event){
event.preventDefault();

var email = document.getElementById("email");
var emailValue = email.value;
if (emailValue === ''){
    email.style.border = '1px solid red';
}   else {
	email.style.border = '1px solid black';
	
}
}
var button = document.getElementById("send");
button.addEventListener ("click", checkNameValue);
button.addEventListener ("click", checkEmailValue);



var text=("Спасибо,Ваше сообщение отправлено!");
alert(text);

