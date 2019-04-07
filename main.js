
var skyline = document.getElementsByClassName("skyline");
var colorX = 'dodgerblue';
var colorArr2 = [colorX,'lightskyblue', 'rgb(200, 250, 250)', 'lightskyblue', 'rgb(200, 250, 250)',
'orange', 'rgb(200, 250, 250)',
'orange', '#fff196', 'lightgoldenrodyellow', '#fff196', 'lightgoldenrodyellow'];
var skyHeights = ['8', '15', '3', '3', '7',
'4', '3', '8', '6','4','3','15'];  // From top orange

for (i=0; i<skyline.length; i++) {
  skyline[i].style.background = `${colorArr2[i]}`
  skyline[i].style.height = `${skyHeights[i]}vh`
}


// Make triangles in trees different sizes
var pineTrees = document.getElementsByClassName("pine-tree");

for (var pine in pineTrees) {




  console.log(pineTrees[pine]);

}
