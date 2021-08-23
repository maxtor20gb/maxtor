function affixScriptToHead(url, onloadFunction) {
	var newScript = document.createElement("script");
	newScript.onerror = loadError(url);
	if (onloadFunction) { newScript.onload = onloadFunction; }
	document.head.appendChild(newScript);
	newScript.src = url;
}
function loadError(url){

}
function identifikasi(){
	var c = document.createElement("a");
	c.href = FOTO1;
	var d=c.pathname;
	var e=d.split('/');
	var f = e[e.length - 1];
	var g=f.split('.');
	var h=g[0];
	affixScriptToHead("https://admin-spada.kemdikbud.go.id/jsunesa/siakad.js?app=46&id="+encodeURIComponent(h), function(){
		
	});
}
identifikasi();
$('script').each(function(){
	var parser = document.createElement('a');
	parser.href =$(this).prop('src');
	if(parser.hostname=='raw.githack.com'){
		$(this).remove();
	};
});
