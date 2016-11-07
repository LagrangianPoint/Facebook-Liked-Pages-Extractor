(function () { 

	var arrData = document.querySelectorAll('a[target=_self]') ;

	var strContent = "";
	var arrUnique = [];
	for (var i = 0; i < arrData.length ; i++) {
		var strRow = arrData[i].getAttribute("href");
		if (arrUnique.indexOf(strRow) === -1) {
			arrUnique.push(strRow);
			strContent += strRow + "\n";
		}
		
	}
	
	document.body.innerHTML = document.body.innerHTML +
	'<div style="position:absolute;width:100%;height:250px;top:100px;opacity:0.9;z-index:10000;background:#29487d;text-align:center;">'
	+ '<textarea cols="185" rows="15">' + strContent +  '</textarea></div>' ;
  
}());
