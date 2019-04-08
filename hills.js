let hill1 = document.getElementById('hill1');
let hill3 = document.getElementById('hill3');
let backPineTree = document.getElementsByClassName('back-pine-tree')[0];
let frontPineTree = document.getElementsByClassName('front-pine-tree')[0];
let oakTree = document.getElementsByClassName('oak-tree-container')[0];
let forestPine = document.getElementsByClassName('forest-pine-tree')[0];

let pineColors = ['rgb(0, 70, 100)', 'rgb(0, 75, 65)', 'darkgreen', 'rgb(120, 140, 12)' ];
let oakColors = ['firebrick', 'orange', 'lightgreen', 'yellow', 'darkgreen'];
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




function oakTreeGenerator (xPos, yPos) {
  let oakCopy = oakTree.cloneNode(true);
  let myColor = oakColors[Math.floor(Math.random()*oakColors.length)];
  let oakTreeBigBush = oakCopy.getElementsByClassName('oak-tree-bush-big')[0];
  let oakTreeBushes = oakCopy.getElementsByClassName('oak-tree-bush');

  oakTreeBigBush.style.backgroundColor = myColor;
  for (let i = 0; i < oakTreeBushes.length; i ++) {
    oakTreeBushes[i].style.backgroundColor = myColor;
  }

  oakCopy.style.transform = `scale(0.2)`;
  oakCopy.style.left = `${xPos}%`;
  oakCopy.style.top = `${yPos}vw`;

  hill3.appendChild(oakCopy);
}



function singlePineGenerator (xPos, yPos) {
  let myColor = pineColors[ Math.floor(Math.random() * pineColors.length )];
  let pineCopy = forestPine.cloneNode(true);
  let newDiv = document.createElement('div');
  newDiv.appendChild(pineCopy);

  let triangles = pineCopy.getElementsByClassName('triangle');
  for (i = 0; i < triangles.length; i++) {
    triangles[i].style.borderBottomColor = myColor;
  }

  newDiv.style.position = 'absolute';
  newDiv.style.display = 'inline-block';
  newDiv.style.left = `${xPos}%`;
  newDiv.style.top = `${yPos}vw`;

  hill3.appendChild(newDiv);
}



function foreGroundTrees (treeCounter) {
  let xPos = 4;
  let yMod = -3;
  let triggerPoint;


  for (let i = 0; i < treeCounter; i ++) {
    let randomTree = Math.round(Math.random());
    let yPos = Math.random() * 1.5 - 0.75 + yMod;
    (randomTree > 0.5) ? singlePineGenerator(xPos, yPos) : oakTreeGenerator(xPos, yPos);
    // console.log(randomTree);
    xPos += (Math.random() * 2 + 1);
    if (xPos >= triggerPoint) {
      xPos = 4;
      yMod += 3;
    }

    if (yMod <= -3) {
      triggerPoint = 55;
    } else if (yMod < 1) {
      triggerPoint = 80;
    } else {
      triggerPoint = 120;
    }

  }

// if xPos >= 100%, reset xPos to 0, yPos gets more
// skew probability toward greens
// adjust frontal treeline for front mountain treeline

// need number of trees
// pass position
// pass color

// each tree iterate xPos
// yPos has RNG range

}




hill1Treeline();
hill3Treeline();
// oakTreeGenerator(5, 5);
foreGroundTrees(200);
