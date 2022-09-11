
let container = document.createElement("div");
let onOff = document.createElement("input");
let cirCle = document.createElement("span");

container.setAttribute("id","input-container");
onOff.setAttribute("type","checkbox");
onOff.setAttribute("id","onOff");
onOff.setAttribute("name","onOff");
onOff.setAttribute("onChange","handleChange(this)");
cirCle.setAttribute('id','cirCle');

container.appendChild(onOff);
container.appendChild(cirCle);

document.body.appendChild(container);

function handleChange(checkbox){
	if(checkbox.checked==true){
		document.body.classList.toggle("theme-dark")
			//console.log(document.body.classList())
	}
	else{
		document.body.removeAttribute("class","theme-dark");	
	}
}
