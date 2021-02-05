funcion require(pathToFile) {
  let file = document.createElement('script');
  file.src = pathToFile;
  document.head.appendChild(file);
}
