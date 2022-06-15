console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedList = document.querySelector('select')
const options = document.querySelector('option')
const imgContainer = document.querySelector('#dog-image-container')
//Dom render funtions
function renderDogImgs() {

}

//Initialize fetch
function initialize() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(dog => {
      dog.message.forEach(dog => {
        
      });
    }).catch(error => {
      //Sends error message to DOM
      alert('Could not find requested data.')
    })
}

document.addEventListener('DOMContentLoaded', initialize)