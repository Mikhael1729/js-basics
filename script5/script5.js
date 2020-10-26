const currentLocation = document.location.href;

// You can load a page in a server into the div with the container class using this method.
function loadPage() {
  const url = "./another-page2.html";
  const containerElement = document.getElementById("container");
  fetch(url).then(file => {
    file.text().then(content => {
      containerElement.insertAdjacentHTML('afterend', content)
      // Of course. It won't work :'V
    }) 
  })
}

