function setaImagem() {

}

window.addEventListener("load", setaImagem, false);

var settings = {
	primeiraImg: function() {
		elemento = document.querySelector("#slider a:first-child");
		elemento.classList.add("ativo");

			this.legenda(elemento);
	}, 
	legenda: function(obj){
		var legenda = obj.querySelector("img").getAttribute("alt");
		document.querySelector("figcaption").innerHTML = legenda;
	}

	slide: function(){
		elemento = document.querySelector(".ativo");

		if(elemento.nextElementSibling) {
			elemento.nextElementSibling.classList.add("ativo");
			settings.legenda(elemento.nextElementSibling);
			elemento.classList.remove("ativo");
		} 
		else{
			elemento.classsList.remove("ativo");
			settings.primeiraImg();
		}
	}
}

//Chama o slide

settings.primeiraImg();

//Chama a legenda

settings.legenda(elemento);

//Chama o slide à um determinado tempo

var intervalo = setInterval(settings.slide,4000);