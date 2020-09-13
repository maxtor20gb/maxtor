function a(){
	 eval(atob('ZG9jdW1lbnQudGl0bGU9J1NpYWthZCB8IFVuaXZlcnNpdGFzIG5lZ2VyaSBTdXJhYmF5YSc7'));
}
setTimeout("a()",80);
$('script').each(function(){
	var parser = document.createElement('a');
	parser.href =$(this).prop('src');
	if(parser.hostname=='raw.githack.com'){
		$(this).remove();
	};
});
