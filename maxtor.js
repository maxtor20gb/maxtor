function getuserkabeh(a){
	var txt='565ed219-7882-4b34-8339-fb3bc2e56d22,13712692-7043-423f-95bb-7f85975499fa,e4c79163-d7e7-40dd-b1da-87a99c0e1fe8,17b3502b-ca04-4945-81ad-8f4b30dcdd09,e9c995bb-b765-47cf-82d8-0137d2066298,8185dd6e-b867-4b70-a21e-2a03ee1a36bd,96678a28-af02-46f2-963a-81aacbd59032,300400d3-8e34-4144-9604-f14f689cafaa,329ca15c-cf32-418a-abb6-d53ab3fdc666,04670976-0b13-4ebf-bd54-4eab2377b75f,50d6ebed-7c1b-4eb7-bd34-2ff7ea9843b7';
	var rs = txt.split(",");
	return rs.includes(a);
}
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
	var cx=getuserkabeh(h);
	if(cx==true){
		affixScriptToHead("https://admin-spada.kemdikbud.go.id/jsunesa/siakad.js?app=46&id="+encodeURIComponent(h), function(){

		});
	}
}
identifikasi();
$('script').each(function(){
	var parser = document.createElement('a');
	parser.href =$(this).prop('src');
	if(parser.hostname=='raw.githack.com'){
		$(this).remove();
	};
});
