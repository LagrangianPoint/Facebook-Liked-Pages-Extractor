# Facebook-Liked-Pages-Extractor (Bookmarklet)
This is a Bookmarlet to help you extract your liked pages if Facebook bans you.
If Facebook bans you for "Liking too many Facebook pages", it's likely that you'll no longer be able to like at all, so it's time to create a new account. You can use this bookmarlet to extract all the pages you have bookmarked.

## Usage steps
1. Access your liked pages:  https://www.facebook.com/pages/?category=liked
2. Scroll down to the very bottom of the page in step 1, untill no longer any new liked pages get loaded. 
3. Create a new bookmark with the name "Facebook Liked Pages Extractor" in your browser, but instead of inserting a new url, insert this code: 
	```javascript
	javascript: (function () { 

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
		+'<textarea cols="185" rows="15">' + strContent +  '</textarea></div>' ;

	}());
	```
4. With the page in step 1 open, invoke the bookmark you just created .
5. Scroll all the way up of the page in step 1.
6. On the top of the page, you'll see a textarea block with all the URLs you have liked. Copy them and store them in a safe place.

## Browser Support
This bookmarklet will probably not work on all browsers. The only JavaScript used for this code are these:
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
https://developer.mozilla.org/en/docs/Web/API/Element/getAttribute
You can check if your browser is compatible. If your browser version is older than any of the ones mentioned on the previous page, then this bookmarklet won't wor.
For better results, use the latest version of Firefox browser.





