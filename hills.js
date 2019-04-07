let hill1 = document.getElementById('hill1');
let hill3 = document.getElementById('hill3');
let backPineTree = document.getElementsByClassName('back-pine-tree')[0];
let frontPineTree = document.getElementsByClassName('front-pine-tree')[0];
let oakTree = document.getElementsByClassName('oak-tree-container')[0];


// let colors = ['firebrick', 'orange', 'darkgreen', 'green', 'darkgreen', 'green', 'yellow'];
 // pine, oak, columnar




function hill1Treeline() {
  let xPosMod = 0;
  let yPosMod = 0;

  for (let i = 0; i < 30; i ++) {
    let pineCopy = backPineTree.cloneNode(true);
    let newDiv = document.createElement('div');
    newDiv.appendChild(pineCopy);

    newDiv.style.position = 'absolute';
    newDiv.style.display = 'inline-block';
    newDiv.style.left = `${xPosMod + 62}%`;
    newDiv.style.marginTop = `${-0.73 - yPosMod}%`;

    hill1.appendChild(newDiv);
    xPosMod += 1 + Math.random();
    yPosMod += 0.04;
  }

}


function hill3Treeline() {
  let xPosMod = 0;
  let yPosMod = 0;

  for (let i = 0; i < 100; i ++) {
    let pineCopy = frontPineTree.cloneNode(true);
    let newDiv = document.createElement('div');
    let yPos;
    newDiv.appendChild(pineCopy);

    if (xPosMod < 10) {
      yPos = -8.0 - yPosMod;
      yPosMod += 0.15;
    } else if (xPosMod < 20) {
      yPos = -8.0 - yPosMod;
    } else if (xPosMod < 65) {
      yPos = -10.20 + yPosMod;
      yPosMod += 0.072;
    } else if (xPosMod < 100) {
      yPos = -10 + yPosMod;
      yPosMod += 0.15;
    }

    newDiv.style.position = 'absolute';
    newDiv.style.display = 'inline-block';
    newDiv.style.left = `${xPosMod}%`;
    // newDiv.style.marginTop = `${-8.0 - yPosMod}%`;
    newDiv.style.marginTop = `${yPos}%`;


    hill3.appendChild(newDiv);
    xPosMod += 1 + Math.random();
  }
}



function oakTreeGenerator () {
  let oakCopy = oakTree.cloneNode(true);
  let xPosMod;
  let yPosMod;

  // xPosMod = 5;
  oakCopy.style.transform = `scale(0.5)`;
  oakCopy.style.left = `${xPosMod}%`;

  hill3.appendChild(oakCopy);

}





hill1Treeline();
hill3Treeline();
oakTreeGenerator();
