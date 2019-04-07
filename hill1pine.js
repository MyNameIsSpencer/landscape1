let hill1 = document.getElementById('hill1');
let pineTree = document.getElementsByClassName('pine-tree')[0];



function hill1Treeline() {
  let xPosMod = 0;
  let yPosMod = 0;

  for (let i = 0; i < 30; i ++) {
    let pineCopy = pineTree.cloneNode(true);
    let newDiv = document.createElement('div');
    newDiv.appendChild(pineCopy)

    newDiv.style.position = 'absolute';
    newDiv.style.display = 'inline-block';
    newDiv.style.left = `${xPosMod + 62}%`;
    newDiv.style.marginTop = `${-0.73 - yPosMod}%`;

    hill1.appendChild(newDiv);
    xPosMod += 1 + Math.random();
    yPosMod += 0.04;
  }

}




hill1Treeline();
