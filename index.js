
		let link = document.createElement("link");
		link.href="https://cdn.jsdelivr.net/gh/Govin-R/themes/styles.css";
link.setAttribute("rel","stylesheet");
		
		//let stylesSheet = "<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/Govin-R/themes/styles.css' type='text/css'> "
		document.head.appendChild(link);
		let container = document.createElement("div");
		let onOff = document.createElement("input");
		let cirCle = document.createElement("span");

		container.setAttribute("id","input-container");
		onOff.setAttribute("type","checkbox");
		onOff.setAttribute("id","onOff");
		onOff.setAttribute("name","onOff");
		//onOff.setAttribute("onChange","handleChange(this)");
		cirCle.setAttribute('id','cirCle');

		container.appendChild(onOff);
		container.appendChild(cirCle);

		document.body.appendChild(container);
	
		let onoff= document.getElementById("onOff");
		onOff.addEventListener("change",()=>{
		document.body.classList.toggle("theme-dark");	
	});

