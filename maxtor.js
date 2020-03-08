function a(){
	if($){
		var d=window.location.href;
		var r = d.split('?'); var a=r[0].split('/');
		console.log(a);
		//
	}
}
setTimeout("a()",100);
