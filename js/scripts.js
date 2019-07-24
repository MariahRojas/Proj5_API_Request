let data;
let person;
let i;
//search markup
let formAction = `<form action="#" method="get">
                    <input type="search" id="search-input" class="search-input" placeholder="Search...">
                    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                  </form>`

$('.search-container').append(formAction);

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
      let city = person.location.city;
      let state = person.location.state;
      
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
      
        $(".card").click(function(e) {
            //modalMarkup(jsonArray[0]);
            console.log(modalMarkup())
        });
   })



//modal markup

function modalMarkup(i) {
  //append modal html to body
  $('body').append(
    `<div class="modal-container"> 
        <div class="modal">
          <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
          <div class="modal-info-container">
            <img class="modal-img" src = "${jsonArray[i].picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${jsonArray[i].name.first} ${jsonArray[i].name.last}</h3>
            <p class="modal-text">${jsonArray[i].email}</p>
            <p class="modal-text cap">${jsonArray[i].location.city}</p>
            <hr>
            <p class="modal-text">${jsonArray[i].phone}</p>
            <p class="modal-text cap">${jsonArray[i].location.street}, ${jsonArray[i].location.city}, ${jsonArray[i].location.state}, ${jsonArray[i].location.postcode}</p>
            <p class="modal-text">Birthday: ${jsonArray[i].dob.date.slice(5, 7) + "/" + jsonArray[i].dob.date.slice(8, 10) + "/" + jsonArray[i].dob.date.slice(0, 4)}</p>                   
        </div>
    </div>`)

    //Click Event listener to close when i button is clicked
    $("#modal-close-btn").click(function () {
        $('.modal-container').remove()
    });
 }  
  //Click Event Listener to display the modal when a employee card is clicked


// $("#gallery").on("click", ".card", function () {
//   i = ($(this).index())                   //the index value for employee
//   modalMarkup(i);                           
// })

 $("#gallery").on("click", ".card", function () {
  i = ($(this).index())                   //the index value for employee
  modalMarkup(i);                           
})