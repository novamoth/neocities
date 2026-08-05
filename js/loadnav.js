fetch("/navigation.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementsByClassName("left-nav")[0].innerHTML = html;
  })
  .catch((error) => {
    console.warn(error);
  });
