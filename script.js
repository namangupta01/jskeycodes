codeBox=document.getElementById("code");
buttonPressed=document.getElementById("which-key")
function keyCodesGenerator(e){
	if(!e.metaKey){
		e.preventDefault();
	}
	code=e.keyCode;
	codeBox.innerText= code+"";
	buttonPressed.innerText=e.code+"";
}
document.addEventListener("keydown",keyCodesGenerator);