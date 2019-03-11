	function displayPdc() {
	var pdc = document.getElementsByClassName("pdc");
	for(var i=0; i<pdc.length;i++){
    if(pdc[i].style.display === "none"){
      pdc[i].style.display="block";
  }else{
    pdc[i].style.display="none";
    	}
	}
}
