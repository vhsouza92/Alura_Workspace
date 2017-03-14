var trPacientes = document.getElementsByClassName("paciente"); // Arry de TR's

percorreArray(trPacientes, ImprimeNome)

function ImprimeNome(pacienteTr)
{
	var tdNome 		= pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso 		= pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura 	= pacienteTr.getElementsByClassName("info-altura")[0];
	var tdImc 		= pacienteTr.getElementsByClassName("info-imc")[0];

	var pacienteAtual = {
							nome:tdNome.textContent
							,peso:tdPeso.textContent
							,altura:tdAltura.textContent
							,getImc: function()
									{
										if(this.altura != 0)
										{
											var imc = this.peso / (this.altura * this.altura); //25
											return imc;
										}else{
											("Altura Inválida, seu burro!!!")
										}
									} 
						};
						
	console.log(pacienteAtual.nome)					
}

