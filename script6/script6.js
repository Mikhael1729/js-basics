const divElement = document.querySelector("div");
const inputElement = document.querySelector("input");
inputElement.addEventListener("change", showSelectedImage)

function showSelectedImage() {
  const selectedFiles = inputElement.files;

  const thereAreNoFiles = !selectedFiles;
  if(thereAreNoFiles)
    return;

  console.log(selectedFiles);

  for(const file of selectedFiles) {
    const image = createImage(file);
    const imageInfo = createImageInfo(file.name, file.size);
    const card = createCard(image, imageInfo);

    divElement.appendChild(card);
  }
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
  const imageElement = document.createElement("img");
  imageElement.src = URL.createObjectURL(file);
  imageElement.style.height = "300px";
  imageElement.style.alignSelf = "flex-end";

  return imageElement;
}
