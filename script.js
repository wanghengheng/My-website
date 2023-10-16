if (window.location !== window.parent.location) {
  document.body.innerHTML = `<iframe src="https://connerow.dev/" style="border:none;position:absolute;top:0;left:0;width:100%;height:100%;outline:none;">`
}else {
  location.href = "https://connerow.dev"
}