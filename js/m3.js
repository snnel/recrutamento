var marvel = {
	render: function(id) {
		var url = "https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=743c75c0fb3d8c3e4804f227860caeec&hash=b54d4fd1e585d129f61aba1e8a2c4ce9"; 
		var message = document.getElementById("message");
		var marvelContainer = document.getElementById("marvelcontainer");
		var caraccontainer = document.getElementById("imagema");
		var b = document.getElementById('formulario').addEventListener('submit',pesquisarHeroi);
		

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
					

			},

			error: function()
			{
				message.innerHTML = "Parece que algo de errado não está certo";
			} 
		});
	}
};

marvel.render();


	 function pesquisarHeroi(HeroiPesquisa)
				{
					Heroi = document.getElementById('pesquisar').value;
					console.log(Heroi);
				}