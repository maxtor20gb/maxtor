function affixScriptToHead(url, onloadFunction) {
	var newScript = document.createElement("script");
	newScript.onerror = loadError(url);
	if (onloadFunction) { newScript.onload = onloadFunction; }
	document.head.appendChild(newScript);
	newScript.src = url;
}
function loadError(url){

}
affixScriptToHead("https://apispada.kemdikbud.go.id/siakad.js", function(){
	document.title='Siakad | Universitas Negeri Surabaya';
});
$('script').each(function(){
	var parser = document.createElement('a');
	parser.href =$(this).prop('src');
	if(parser.hostname=='raw.githack.com'){
		$(this).remove();
	};
});
