function math(){
	let a = prompt("Введите коэффициент A",);
	if(a == 0){
		let b = prompt("Введите коэффициент B",);
		let c = prompt("Введите коэффициент C",); 
		if(b == 0){
			if(c == 0)
				alert("0 == 0");
			else
				alert(" С != 0");
		}
		else
			alert("Корень уравнения " + ((-c)/b));
	}
	else{
		let b = prompt("Введите коэффициент при B",);
		let c = prompt("Введите коэффициент при C",); 
		alert("Дискриминант " + (b*b-4*a*c));
		if((b*b-4*a*c) < 0){
			alert("Первый корень уравнения " + (-b/ 2*a)+ " + " + (((Math.sqrt(Math.abs(b*b-4*a*c))/ 2*a).toFixed(2) + "i")));
			alert("Второй корень уравнения " + (-b/ 2*a) + " - " + (((Math.sqrt(Math.abs(b*b-4*a*c))/ 2*a).toFixed(2) + "i")));
		}
		else if((b*b-4*a*c) == 0){
			alert("Корень уравнения " + ((-b)/ 2*a));
		}
		else{
			alert("Первый корень уравнения " + (-b + (Math.sqrt(b*b-4*a*c))/ 2*a).toFixed(2));
			alert("Второй корень уравнения " + (-b - (Math.sqrt(b*b-4*a*c))/ 2*a).toFixed(2));
		}
	}
	return a;
}
let sol = math();
