let data;
let person;
let i;
/* //search markup
let formAction = `<form action="#" method="get">
                    <input type="search" id="search-input" class="search-input" placeholder="Search...">
                    <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                  </form>`

$('.search-container').append(formAction); */

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

 $("#gallery").on("click", ".card", function () {
  i = ($(this).index())                   //the index value for employee
  modalMarkup(i);                           
})







// resource: https://speckyboy.com/css-background-effects/
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);