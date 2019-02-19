
var practer = document.getElementsByClassName("practer");
// var colorArr = ['red', 'green', 'cadetblue', 'black', 'cornflowerblue'];
var colorX = 'dodgerblue';
var colorArr2 = [colorX,'lightskyblue', 'lightskyblue','lightskyblue', 'rgb(200, 250, 250)', 'lightskyblue', 'rgb(200, 250, 250)',
'orange', 'rgb(200, 250, 250)',
'orange', '#fff196', 'lightgoldenrodyellow', '#fff196', 'lightgoldenrodyellow'];
var skyHeights = ['8', '2', '8', '10', '4', '4', '8',
'4', '4', '8', '6','4','3','20'];  // From top orange

for (i=0; i<practer.length; i++) {
  console.log(practer[i]);
  practer[i].style.background = `${colorArr2[i]}`
  practer[i].style.height = `${skyHeights[i]}vh`
}


// 200,250,250   45,52   rgb(200, 250, 250);
// 9687eb
// skyblue
// royalblue
// powderblue
// lightgoldenrodyellow
// lemonchiffon
// lightyellow
// navajowhite
// yellow
// fff196
// orange
