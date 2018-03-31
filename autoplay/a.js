Cyanna.loadCurrentHtml = function(id, position, url, callback) {
	if(url != undefined) {

		var urls = Url.createNew();
		url = urls.protocol() + '//' + urls.path() + url;

		if(window.XMLHttpRequest) {
			var oAjax = new XMLHttpRequest();
		} else {
			var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		}

		oAjax.open('GET', url + this.cacheVersion + this.cacheTimestamp, true);

		oAjax.send();

		oAjax.onreadystatechange = function() {
			if(oAjax.readyState == 4) {
				if(oAjax.status == 200) {
					document.getElementById(id).insertAdjacentHTML(position, oAjax.responseText);
					if(typeof callback === "function") {
						callback && callback();
					}
				}
			};
		};
	}
};