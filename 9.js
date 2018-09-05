
function CheckFormValues(event){
	event.preventDefault();



function CheckNameValue(event){
event.preventDefault();


var name = document.getElementById("name");
var nameValue = name.value;

if (nameValue === ''){
	name.style.border = '1px solid red';
	
}   else {
	name.style.border = '1px solid black';
	
}
}

function CheckEmailValue(event){
event.preventDefault();

var email = document.getElementById("email");
var emailValue = email.value;
if (emailValue === ''){
    email.style.border = '1px solid red';
}   else {
	email.style.border = '1px solid black';
	
}
}

var text=("Спасибо,Ваше сообщение отправлено!");
alert(text);
}
var button = document.getElementById("send");
button.addEventListener ("click", CheckFormValues);



if (form.style.border === '1px solid red'){ 
document.getElementById("form").style.display = "block";
}
else{
	form.style.border === '1px solid black'

document.getElementById("form").style.display = "none";
}




