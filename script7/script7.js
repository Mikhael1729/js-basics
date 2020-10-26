const dragAndDropZone = document.getElementById("drop-zone");
dragAndDropZone.ondragover = dragOverHanlder;
dragAndDropZone.ondrop = handleDroppingImage;


function handleDroppingImage(event) {
  console.log("Hello");
  // This avoid to open the image into the page.
  event.preventDefault(); 

  console.log("Hello 2");
  const thereIsData = event.dataTransfer.items;
  if(!thereIsData)
    return;

  const contentElement = document.getElementById("content");

  const files = event.dataTransfer.items;
  for(let i = 0; i < files.length; i++) {
    const currentFile = files[i].getAsFile();
    console.log(currentFile);

    console.log("kind: ", currentFile.kind)
    const isAnImage = currentFile.type.includes("image");
    console.log('is an image: ', isAnImage)
    if(!isAnImage)
      continue;

    console.log("Is an image");
    const image = createImage(currentFile);
    const imageInfo = createImageInfo(currentFile.name, currentFile.size);
    const card = createCard(image, imageInfo);

    contentElement.appendChild(card);
  }
}

function dragOverHanlder(event) {
  event.preventDefault();
}

function createCard(imageElement, imageInfoElement) {
  const card = document.createElement("div");
  card.style.display = "flex";
  card.style.flexDirection = "ro";
  card.style.backgroundColor = "#fafafa";
  card.style.border = "1px solid black";
  card.style.marginBottom = "1rem";

  card.appendChild(imageInfoElement)
  card.appendChild(imageElement);

  return card;
}

function createImageInfo(fileName, fileSize) {
  const info = document.createElement("div");
  info.style.display = "flex";
  info.style.flexDirection = "column";
  info.style.padding = "10px";
  info.style.flexGrow = 1;

  const labelFileName = document.createElement("label");
  labelFileName.innerHTML = `<strong>Nombre del archivo:</strong> ${fileName}`;

  const labelFileSize = document.createElement("label");
  labelFileSize.innerHTML = `<strong>Tamaño del archivo:</strong> ${fileSize}`;

  info.appendChild(labelFileName);
  info.appendChild(labelFileSize);

  return info;
}

function createImage(file) {
  console.log('Image file: ', file);
  const imageElement = document.createElement("img");
  imageElement.src = URL.createObjectURL(file);
  imageElement.style.height = "300px";
  imageElement.style.alignSelf = "flex-end";

  return imageElement;
}
