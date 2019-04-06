
var practer = document.getElementsByClassName("practer");
// var colorArr = ['red', 'green', 'cadetblue', 'black', 'cornflowerblue'];
var colorX = 'dodgerblue';
var colorArr2 = [colorX,'lightskyblue', 'rgb(200, 250, 250)', 'lightskyblue', 'rgb(200, 250, 250)',
'orange', 'rgb(200, 250, 250)',
'orange', '#fff196', 'lightgoldenrodyellow', '#fff196', 'lightgoldenrodyellow'];
var skyHeights = ['8', '15', '3', '3', '7',
'4', '3', '8', '6','4','3','35'];  // From top orange

for (i=0; i<practer.length; i++) {
  practer[i].style.background = `${colorArr2[i]}`
  practer[i].style.height = `${skyHeights[i]}vh`
}


// Make triangles in trees different sizes
var pineTrees = document.getElementsByClassName("pine-tree");

for (var pine in pineTrees) {
  



  console.log(pineTrees[pine]);

}


// .pine-tree:first-child {
//   margin-top: 0;
// }




// pineTrees.map( pineTree => {
//   console.log(pineTree);
//
//   // for (let i = 0; i > pineTree.length; i ++) {
//   //   console.log(pineTree[i]);
//   //
//   // }
// });
// console.log(pineTrees);
// console.log(pineTrees[0]);







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
