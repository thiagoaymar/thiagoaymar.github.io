/* Tentativa slider por Thiago Aymar */

/*-----------------------------------*/

/* Variáveis */

var imageCount = 0;
var currentImage = 0;
var images = new Array();
var preLoadImages = new Array();

/*-----------------------------------*/

images[0] = "imagens/imagembg1.JPG";
images[1] = "imagens/escada.JPG";

for (var i = 0; i < images.length; i++) {
	if(images[i] == "") {
		break;

		preLoadImages[i] = new Image();
		preLoadImages[i].src = images[i];
		imageCount++; 
	}
}

function startSlideShow() {
	if (document.body && imageCount > 0) {

		document.
	}
}



