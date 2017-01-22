// Tentativa Slider BG

var bgimages = new Array ();

bgimages[0] = "imagens/imagem1.JPG";
bgimages[1] = "imagens/imagem2.JPG";

var pathToImg = new Array ();

for (i=0; i<bgimages.length; i++) {
	pathToImg[i] = new Image();
	pathToImg[i] = .src=bgimages[i];
}

var inc = -1;

function = bgSlide() {
	if (inc<bgimages.length-1){
		inc++;
	} else{
		inc = 0;
		document.body.background = pathToImg[inc].src;
	}
}

if (document.all || document.getElementById) {
	window.onload = new Function('setInterval("bgSlide()",3000');
}