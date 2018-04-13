var marvel = {
	render: function(id) {
		var url = "https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=743c75c0fb3d8c3e4804f227860caeec&hash=b54d4fd1e585d129f61aba1e8a2c4ce9"; 
		

		var message = document.getElementById("message");
		var marvelContainer = document.getElementById("marvelcontainer");
		var caraccontainer = document.getElementById("imagema");
		var a = window.location.href;
		var url2 = new URL(a);
		url = "https://gateway.marvel.com:443/v1/public/characters/"+ url2.searchParams.get("id") +"?&ts=1&apikey=743c75c0fb3d8c3e4804f227860caeec&hash=b54d4fd1e585d129f61aba1e8a2c4ce9";
		
		$.ajax({
			url: url,
			type : "GET",
			beforeSend: function() {

				message.innerHTML = "Carregando...";
			},
			complete: function() {
				message.innerHTML = "Pronto!";
			},
			success: function(data)
			{
				var string ="";
				var teste="";
				string += "<div class='row'>";

				for(var i = 0; i< data.data.results.length; i++ )
				{
					var elemento = data.data.results[i];
	
				string += "<div class='col-md-3'>";
				string += "<a href='index2.html?id=this.id>";
				string += "	<img id='"+elemento.id+"' src='"+elemento.thumbnail.path+"/portrait_fantastic."+elemento.thumbnail.extension+"' />";
				string += "</a>";
				string += "	<img id='"+elemento.id+"' src='"+elemento.thumbnail.path+"/portrait_fantastic."+elemento.thumbnail.extension+"' />";
				string += "			<h3>" + elemento.name + "</h3>";
				string += "</div>";
				string += "<div class='col-md-3'>";
				string += "<p>" + elemento.description + "</p>";
				string += "</div>";
				

				

					if ((i+1) %4 == 0)
					{
						string += "</div>";
						string += "<div class='row'>";
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

var idcarc;

function Enviar(id)
{
	idcarc = id;
	console.log(idcarc);
}

function retornaid(idcarc)
{
	console.log(idcarc);
}