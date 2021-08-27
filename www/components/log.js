// This is a JavaScript file
			function  calcularIMC() {
				var peso = eval(document.form.peso.value);
				var alt = eval(document.form.alt.value);
				var alt2 = alt / 100;
				var IMC = peso  / (alt2 * alt2);
							if(IMC <=30 )
							{
								document.getElementById("Tabela").style.display = "none";
								document.getElementById("Abaixo").style.display = "block";
								document.getElementById("Normal").style.display = "none";
								document.getElementById("Acima").style.display = "none";
								
							}
							if(IMC >=35 && IMC <=39.9)
							{
								document.getElementById("Tabela").style.display = "none";
								document.getElementById("Abaixo").style.display = "none";
								document.getElementById("Normal").style.display = "block";
								document.getElementById("Acima").style.display = "none";
							}
							if(IMC >=40 )
							{
								document.getElementById("Tabela").style.display = "none";
								document.getElementById("Abaixo").style.display = "none";
								document.getElementById("Normal").style.display = "none";
								document.getElementById("Acima").style.display = "block";
							}
				document.form.massacor.value=custRound(IMC,1);
						function custRound(x,places) {
							return (Math.round(x*Math.pow(10,places)))/Math.pow(10,places);
							
						};
							
						
							
        };
		

						
				