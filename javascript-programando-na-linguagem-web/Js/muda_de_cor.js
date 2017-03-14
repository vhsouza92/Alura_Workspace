var trs =  document.getElementsByTagName("tr");

percorreArray(trs, mudarCor);

function mudarCor(tr){
	tr.addEventListener(
							"mouseover"
							, function(){
								this.setAttribute("bgcolor", "green");
								this.style.color = "yellow";
							}
						);
	tr.addEventListener(
							"mouseout"
							, function(){
								this.setAttribute("bgcolor", "white");
								this.style.color = "black";
							}
						);
};
