
var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener(
								"click"
								, function(event){

									event.preventDefault(); //impede o comportamento Padrão

									var cpNome =  document.querySelector("#campo-nome");
									var cpPeso = document.querySelector("#campo-peso");
									var cpAltura = document.querySelector("#campo-altura");

									var pacienteNovo = "<tr class='paciente'>"+
															"<td class='info-nome' >"+ cpNome.value +"</td>"+
															"<td class='info-peso' >"+ cpPeso.value +"</td>"+
															"<td class='info-altura' >"+ cpAltura.value +"</td>"+
															"<td class='info-imc' td>"+
														"</tr>";
									var tbPacientes = document.querySelector("table");

									tbPacientes.innerHTML = tbPacientes.innerHTML + pacienteNovo;


									//Limpar Campos de Input
									cpNome.value = "";
									cpPeso.value = "";
									cpAltura.value = "";

									alert("Registro adicionado!");

								}
							)








