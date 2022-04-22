let color = 'black';
let click = true;

function populateBoard(size){
  let board = document.querySelector('.board');
  let boxes = board.querySelectorAll('div');
  boxes.forEach(box=>{
    box.remove();
  })
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  let amount = size * size;
  for(let i=0; i<amount; i++){
    let box = document.createElement('div');
    box.addEventListener('mouseover', colorBox);
    box.style.backgroundColor = 'white';
    board.appendChild(box);
  }
}
populateBoard(32);

function changeSize(input){
  if(input>=2 && input <=100) {
    document.querySelector('.error').style.display = 'none';
    populateBoard(input);
  }
  else document.querySelector('.error').style.display = 'flex';
}

function colorBox(){
  if(click){
    if(color === 'random') this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    else this.style.backgroundColor = color;
  }
}

function changeColor(choice){
  color = choice;
}

function resetBoard(){
  let board = document.querySelector('.board');
  let boxes = board.querySelectorAll('div');
  boxes.forEach(box=>{
    box.style.backgroundColor = 'white';
  });
}

document.querySelector('body').addEventListener('click', (e)=>{
  if(e.target.tagName !== 'BUTTON'){
    click = !click;
    if(click){
      document.querySelector('.mode').textContent = 'Mode: Drawing';
    } else {
      document.querySelector('.mode').textContent = 'Mode: Not drawing';
    }
  }
})
