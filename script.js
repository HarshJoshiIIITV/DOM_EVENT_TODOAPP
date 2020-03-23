var input=document.getElementById("input");
var button=document.getElementById("button");
var list=document.querySelector("ul");



function pressme(event){
	if(input.value.length>0 && event.keyCode===13){
		giveme();
	}
}

function clickme(){
	if(input.value.length>0){
		giveme();
	}
}

function giveme(){
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	list.appendChild(li);
	input.value="";
}


button.addEventListener("click",clickme);
input.addEventListener("keypress",pressme);
