
var practer = document.getElementsByClassName("practer");
var colorArr = ['red', 'green', 'cadetblue', 'black', 'cornflowerblue'];


for (i=0; i<practer.length; i++) {
  console.log(practer[i]);
  practer[i].style.background = `${colorArr[i]}`
}
