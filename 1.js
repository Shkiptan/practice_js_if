

function MaxNumber () {
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;

	if (num1>num2) {
		alert ('First number is bigger');
	}
	else if (num1<num2) {
		alert ('Second number is bigger');
	}
	else if (num1=num2) {
		alert ('numbers are equals')
	}
}
document.getElementById('MaxNum').onclick = MaxNumber;


function NumOfBlock () {
	var flat = document.getElementById ('flat').value;


	if (flat>=1 && flat<=20) {
		alert ('Your block is one');
	}
	else if (flat>=21 && flat<=48) {
		alert ('Your block is two');
	}
	else if (flat>=49 && flat<=90) {
		alert ('Your block is three')
	}
}
document.getElementById('block').onclick = NumOfBlock;



function Four () {
	var login = document.getElementById ('login').value;
	var parol = document.getElementById ('parol').value;


	if (login == 'ivan' && parol == '334455') {
		alert ('Welcome');
		}
 	else if (login == 'alex' && parol == '777') {
 		alert ('Welcome');
 	}
 	else if (login == 'petr' && parol == 'b5678') {
 		alert ('Welcome');
 	}
	else {
		alert ('Error');
		}
		}
	document.getElementById('btn2').onclick = Four;


function YearOld () {
	var y = document.getElementById ('year').value;
	var age = 2017-y;

	if (age>=16) {
	alert ("Welcome");
	}
	else if (age>0 && age<16) {
	alert ('Entance is forbidden');
	}
	}
document.getElementById('btn3').onclick = YearOld;



function AgeExpert () {
	var exp = document.getElementById('experience').value;

	if (exp>0 && exp<3) {
		alert ('Надбавка 0%');
	}
	else if (exp>=3 && exp<10) {
		alert ('Надбавка 10%');
	}
	else if (exp>=10 && exp<20) {
		alert ('Надбавка 20%');
	}
	else if (exp>=30) {
		alert ('Надбавка 30%');
	}
}
document.getElementById('interest').onclick = AgeExpert;


