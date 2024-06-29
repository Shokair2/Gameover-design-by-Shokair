getGames('MMORPG')
document.querySelectorAll('.shokair a').forEach(
    function (link) {
        link.addEventListener('click', function () {

            document.querySelector('.shokair .active').classList.remove('active')
            link.classList.add('active')
            const category = link.getAttribute('data-category')
           getGames(category)

        })
    }
);



async function getGames(categoryName) {
    const options = {
       method: "GET",
       headers: {
          "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
       },
    };
 
    const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
    const data = await apiResponse.json();
    gamesData = data;
    displayData();
     
 }
 function displayData() {
    let cartona =``
    for (let i = 0; i < gamesData.length; i++) {
        let video =gamesData[i].thumbnail.replace('thumbnail.jpg','videoplayback.webm')
        cartona += `
      <div class="col text-white">
      <div  onmouseenter="Videos(event) " onmouseleave="Videostop(event)" onclick="showDetails(${gamesData[i].id})" class="card h-100 bg-transparent" role="button" >
         <div class="card-body">

            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${gamesData[i].thumbnail}" />
               <video  muted="true"  preload="none" loop   class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
               <source src="${video}">
               </video>
           
            </figure>

            <figcaption>

               <div class="hstack justify-content-between">
                  <h3 class="h6 small"> ${gamesData[i].title} </h3>
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text small text-center opacity-50">
                  ${gamesData[i].short_description}
               </p>

            </figcaption>
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">${gamesData[i].genre}</span>
            <span class="badge badge-color">${gamesData[i].platform}</span>

         </footer>
      </div>
   </div>
      `;
        
    }
    document.getElementById("gameData").innerHTML = cartona;
 }

 function Videos(event){
    const videoEl = event.target.querySelector("video"); 
    videoEl.classList.remove("d-none");
    videoEl.muted = true;
    videoEl.play();
 }
 function Videostop(event){
    const videoEl = event.target.querySelector("video"); 
    videoEl.classList.add("d-none");
    videoEl.muted = true;
    videoEl.pause();
 }
 function showDetails(id) {
    console.log('hello');
    location.href = `./details.html?id=${id}`
 }