

let overlay = document.createElement("div");

overlay.className ="overlaY";

let btn = document.querySelector(".header  .content nav .container .btn");


// header


// Create links According To The Number OF Sections

let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;


let links = document.createElement("ul");

let close = document.createElement("span");

close.className = "close";

let icon = document.createElement("i");

icon.className="fas fa-times";

close.appendChild(icon);



links.className = "links"; 

links.appendChild(close);


for (let i = 1 ;i < secNumber - 3 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href", "#"+sections[i].getAttribute("class"));

	sections[i].setAttribute("id",  sections[i].getAttribute("class"));

	a.onclick = ()=>{


	links.style.left ="-220px"
	overlay.remove();

	}

	li.appendChild(a);

	links.appendChild(li);

		
}
document.body.appendChild(links);

close.onclick = function(){


	links.style.left ="-220px"
	overlay.remove();
}





btn.onclick = function(){

	links.style.left="0";

	document.body.appendChild(overlay);

}


// arrow to Up 

let arrowUp = document.createElement("div");

	arrowUp.className = "arrowUp";

let i = document.createElement("i");

	i.className = "fas fa-arrow-circle-up";

	arrowUp.appendChild(i);

	document.body.appendChild(arrowUp);

window.addEventListener("scroll",()=>{


	


	if(window.pageYOffset > 100){

		arrowUp.classList.add("active");
	}
	else{
		arrowUp.classList.remove("active");
	}
});


arrowUp.onclick = function(){
	window.scrollTo({

		top:0
	}); 
}

