var data = ["hey there ","more stufff", "even more"]; 
fetch('lorem.json').then(response=>response.json()).then(x=>{
	 console.log(x);
	 data = x.data; 
})
//let data = require("lorem.json")

document.querySelector("#generate").addEventListener('click', ()=> {
	let lorem = document.querySelector("#lorem") 
	let quantity = document.querySelector("#quantity").value;
	lorem.innerHTML = data.filter( (x,i) => i< quantity).map(x=>`<p>${x}</p>`).join("");
})

document.querySelector("#copy").addEventListener('click', ()=> {
	var range = document.createRange();
	let lorem = document.querySelector("#lorem") 
	range.selectNode(lorem);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
})
