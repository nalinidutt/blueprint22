function search_recipes() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('recipe');

  for (i = 0; i < x.length; i++) {
      if (!x[i].textContent.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="block";
      }
  }
}
