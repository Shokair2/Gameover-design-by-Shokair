const searchParams = location.search; 

const params = new URLSearchParams(searchParams);

const id = params.get("id"); 






(async function () {
    const options = {
       method: "GET",
       headers: {
          "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
       },
    };
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
 
    const responseData = await api.json();
 
    containerDetails = responseData;
    displayData();
 
    console.log(responseData);
 })();
 
 function displayData() {
    const detailsBox = `
    
    <div class="col-md-4">
    <figure>
       <img src="${containerDetails.thumbnail}" class="w-100" alt="details image" />
    </figure>
 </div>
 <div class="col-md-8">
 
    <div>
       <nav aria-label="breadcrumb">
          <ol class="breadcrumb" class="text-light">
             <li class="breadcrumb-item text-reset"><a href="./index.html" class="back text-decoration-none">Back</a></li>
             <li class="breadcrumb-item text-info" aria-current="page">${containerDetails.title}</li>
          </ol>
       </nav>
       <h6> category: <span class="badge text-bg-primary p-2">${containerDetails.genre}</span></h6>
       <h6> Platform: <span class="badge text-bg-primary p-2">${containerDetails.platform}</span></h6>
       <h6> Status: <span class="badge text-bg-primary p-2">${containerDetails.status}</span></h6>
       
       <h1 class="mt-3">${containerDetails.title}</h1>
 
       <h3>About ${containerDetails.title}</h3>
       <p>${containerDetails.description}</p>
       <button class="btn btn-outline-primary"><a href="${containerDetails.game_url}" class="text-decoration-none">Show game</a></button>
 
       
    </div>
 </div>
 
    `;
 
    document.getElementById("detailsData").innerHTML = detailsBox;
 
    const backgroundImage = containerDetails.thumbnail.replace("thumbnail", "background");
 
    document.body.style.cssText = `
    background-image:url('${backgroundImage}') ;
    background-size:cover;
    background-position:center; `;
 }
//  