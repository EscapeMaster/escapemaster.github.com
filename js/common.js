(function(){
	var oScript = document.createElement('script');
	if(isPc()){
		oScript.src = 'js/jq.js';
	}
	else{
		oScript.src= 'js/zepto.min.js';
	}
	document.body.appendChild(oScript);

	oScript.onload = function(){
		var oIndexScript = document.createElement('script');
		oIndexScript.src = 'js/index.js';
		document.body.appendChild(oIndexScript);
	}
	function isPc(){
		var ua = navigator.userAgent;
		if(/iphone|ipad|Mobile|Android|Phone/gi.test(ua)){
			return false;
		}
		return true;
	}
})();