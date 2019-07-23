// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
let data;


fetch('https://randomuser.me/api/?results=12&nat=us')
   .then(response => response.json())
   //.then(response => console.log(response))
   //.then(data => console.log(data.results))
   .then(function (data) {
    jsonArray = data.results
    jsonArray.forEach(person =>{
      let picture = person.picture.large;
      let first = person.name.first;
      let last = person.name.last;
      let email = person.email;
      let city = person.city;
      let state = person.state;
      
      //gallery markup
      let galleryCard = 
      `<div class="card">
        <div class="card-img-container">
            <img class="card-img" src= ${picture} alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${first} ${last}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${city}, ${state}</p>
        </div>
      </div>`
        $('.gallery').append(galleryCard);
      })
   })

//search markup
let formAction = `<form action="#" method="get">
                    <input type="search" id="search-input" class="search-input" placeholder="Search...">
                    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                  </form>`

$('.search-container').append(formAction);


//modal markup -- function then event listner

let modalcontainer = `<div class="modal-container">
              <div class="modal">
                  <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                  <div class="modal-info-container">
                      <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                      <h3 id="name" class="modal-name cap">name</h3>
                      <p class="modal-text">email</p>
                      <p class="modal-text cap">city</p>
                      <hr>
                      <p class="modal-text">(555) 555-5555</p>
                      <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                      <p class="modal-text">Birthday: 10/21/2015</p>
                  </div>
              </div>`;

//$('body').append(modalcontainer);
