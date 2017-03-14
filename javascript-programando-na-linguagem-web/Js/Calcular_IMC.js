//Montar Paciente
function Paciente(pacienteTr){
    var tdNome 		= pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso 		= pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura 	= pacienteTr.getElementsByClassName("info-altura")[0];
	var tdImc 	 	= pacienteTr.getElementsByClassName("info-imc")[0];


    var paciente = {
						nome:tdNome.textContent
						,peso:tdPeso.textContent
						,altura:tdAltura.textContent
						,getImc: function(){
												if(this.altura != 0)
												{
													var imc = this.peso / (this.altura * this.altura); //25
													return imc;
												}else{
													("Altura Inválida, seu burro!!!")
												}
											} 
					};
    return paciente;
}

//Imprimir IMC
function ImprimeModificaTdImc(pacienteTr){
	var tdImc 		= pacienteTr.getElementsByClassName("info-imc")[0];
	var pacienteAtual = Paciente(pacienteTr);

	var imc = pacienteAtual.getImc();
	tdImc.textContent = imc;
	console.log(imc);	
}


function calcularTodosImcs(){

var trPacientes = document.getElementsByClassName("paciente");


percorreArray(trPacientes,ImprimeModificaTdImc);

}

var btnCalcularImcs =  document.getElementById("btn_calcular_imc");
//btnCalcularImcs.onclick = calcularTodosImcs;

btnCalcularImcs.addEventListener("click", calcularTodosImcs);
