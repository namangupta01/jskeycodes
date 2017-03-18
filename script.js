codeBox=document.getElementById("code");
buttonPressed=document.getElementById("which-key")
function keyCodesGenerator(e){
	if(!e.metaKey){
		e.preventDefault();
	}
	code=e.keyCode;
	codeBox.innerText= code+"";
	buttonPressed.innerText=e.code+"";
	buttonPressed.style.paddingLeft=20+"px"
	buttonPressed.style.paddingRight=20+"px"
	buttonPressed.style.paddingTop=5+"px"
	buttonPressed.style.paddingBottom=5+"px"
}
document.addEventListener("keydown",keyCodesGenerator);