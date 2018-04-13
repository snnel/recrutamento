var marvel = {
	render: function() {
		var url = "https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=743c75c0fb3d8c3e4804f227860caeec&hash=b54d4fd1e585d129f61aba1e8a2c4ce9"; 
		var message = document.getElementById("message");
		var marvelContainer = document.getElementById("marvelcontainer");
		var caraccontainer = document.getElementById("imagema");
		var marvelinput = document.getElementById("marvelinput");
		
		var a = document.getElementById("marvelc");


		$.ajax({
			url: url,
			type : "GET",
			beforeSend: function() {

				message.innerHTML = "<img src='images/haranha.gif' width='1200px' height='500px'/>";

			},
			complete: function() {
				message.innerHTML = "";
			},
			success: function(data)
			{
				var url2 = new URL(window.location.href);
				var marvelSearch;
				if(window.location.href.indexOf("nome") >= 0)
				{
					marvelSearch = url2.searchParams.get("nome");
				}
				else
				{
					marvelSearch = "";
				}

				var string ="";
				var teste="";
				string += "<div class='row'>";
				

				if(marvelSearch.length > 0)
				{
					for(var i = 0; i< data.data.results.length; i++ )
					{


						var elemento = data.data.results[i];
					if(elemento.name.indexOf(marvelSearch) >= 0)
					{
						string += "<div class='col-md-3'>";
						string += "<a href='index2.html?id="+elemento.id+"' onload='retornaid(idcarc)'>";
						string += "		<img id=' "+elemento.id+" ' onclick='Enviar(this.id)' src='" + elemento.thumbnail.path +"/portrait_fantastic." + elemento.thumbnail.extension + "' />";
						string += "</a>";
						string += "			<h3>" + elemento.name + "</h3>";
						string += "</div>";
							if ((i+1) %4 == 0)
							{
								string += "</div>";
								string += "<div class='row'>";
							}
					}
					}
				}
				else
				{
					for(var i = 0; i< data.data.results.length; i++ )
				{


					var elemento = data.data.results[i];
	
				string += "<div class='col-md-3'>";
				string += "<a href='index2.html?id="+elemento.id+"' onload='retornaid(idcarc)'>";
				string += "		<img id=' "+elemento.id+" ' onclick='Enviar(this.id)' src='" + elemento.thumbnail.path +"/portrait_fantastic." + elemento.thumbnail.extension + "' />";
				string += "</a>";
				string += "			<h3>" + elemento.name + "</h3>";
				string += "</div>";

				

					if ((i+1) %4 == 0)
					{
						string += "</div>";
						string += "<div class='row'>";
					}

				}
				}
				





				marvelContainer.innerHTML = string;

			},

			error: function()
			{
				message.innerHTML = "Parece que algo de errado não está certo";
			} 
		});
	}
};

marvel.render();


function teste()
{
	return "index1.html?nome=" + marvelinput.value;
}

function Enviar(id)
{
	alert(id);
	idcarc = id;
}

function retornaid(idcarc)
{
	console.log(idcarc);
}