let result=[]
let index = 0
let idOfGame= 0
let numOfGame = 0
async function getGames(category){
  
	
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '015dd4b3f1mshaa619dc1672581ap10d5d0jsn87ad4545e6c2',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
	

		const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
		 result = await response.json();
		console.log(result);
		displayGame()

}
getGames('mmorpg')


function displayGame(){

let cols=[]
	for (let i = 0; i < result.length; i++) {
		 index = i
		 idOfGame = result[numOfGame].id
		
		cols+=`<div class="col-md-3 mt-5 ">
		<div class="">
			<div class="card cards-hover bg-transparent  games-cards"  style="width: 18rem;">
				<div class="width-img m-auto">  <img src="${result[i].thumbnail}"  class=" card-img-top  my-3 " alt="..."></div>
		   
				
				<div class="card-body ">
				  <h5 class="card-title d-flex justify-content-between text-white text-font">${result[i].title}<a href="#" class="btn btn-primary font-btn-free">free</a></h5>
				  <p class="card-text color-title">${result[i].short_description}</p>
				</div>
				<div class="card-footer bg-transparent border-dark d-flex justify-content-between">
					<button type="button" class="btn btn-dark text-white font-btn">${result[i].genre}</button>
					<button type="button" class="btn btn-dark text-white font-btn">${result[i].platform}</button>
				</div>
			  </div>
		</div>
	</div>`



	}
	
	document.querySelector('.colsOfGames').innerHTML=cols

	displayIdGame()
	
	

	}
	
	
	




	let icon = document.querySelectorAll('.font-of-nav a')
	// console.log(icon);
	for (let i = 0; i < icon.length; i++) {
		icon[i].addEventListener('click',(e)=>{
			let category = e.target.getAttribute('data-category')
			getGames(category)
			// console.log(category);
		
		
		

	})
	}





	async function getDetailOfGame (idOfGame){



	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '015dd4b3f1mshaa619dc1672581ap10d5d0jsn87ad4545e6c2',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
		
            }

		let responseOfDetailGame = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idOfGame}`,options)
		let resultOfDetailGame = await responseOfDetailGame.json()
		
	};
	

function displayIdGame(){
	let cards = document.querySelector('.colsOfGames').children
	console.log([...cards]);
	for (let x = 0; x < cards.length; x++){cards[x].addEventListener('click', (e)=>
	{;
		// console.log(e.target);
		// console.log(x);
		numOfGame = x
	
	getDetailOfGame (idOfGame)

	
	console.log(numOfGame);
	displayDetailsGame(numOfGame)
})

}
}


function displayDetailsGame(numOfGame){

	let cols=[]
		for (let i = 0; i < 1; i++) {
			
			
			cols+=`<div class="container">
			<div class="row">
		   
			  <div class="d-flex justify-content-between m-3"><h4>Details Game</h4><button class="btn-close btn-close-white" onclick="closeButton ()" ></button></div>
		  
	
			  <div class="col-md-4"> 
				
			<img src="${result[numOfGame].thumbnail}"  width="300px" alt="">
		  </div>
			  <div class="col-md-8">
				<h3>Title: <span class="bg-info text-black">${result[numOfGame].title}</span> </h3>
				<h5>Category:<span class="bg-info text-black">${result[numOfGame].genre}</span> </h5>
				<h5>Platform: <span class="bg-info text-black">${result[numOfGame].platform}</span> </h5>
				<h5>Status:<span class="bg-info text-black">live</span> </h5>
				<p>${result[numOfGame].short_description}</p>
				<button class="btn btn-outline-warning text-white">Show Game</button>
			  </div>
			</div>
		   
		  </div>`
		}
		
		document.querySelector('.title-game').innerHTML=cols
		document.querySelector('.title-game').style.display='flex'
	
		document.querySelector('.navigator').style.display='none'
		}

		function closeButton (){
			
			document.querySelector('.title-game').style.display='none'
			
			document.querySelector('.navigator').style.display='flex'
		}