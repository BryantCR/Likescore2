function changeValue1(){
    let valueNum = document.querySelector('.likesValue1');
    let plusValue = parseInt(valueNum.innerHTML);
    plusValue += 1;
    valueNum.innerHTML = plusValue;
}

function increaselikes1(){
    let numLike = document.querySelector('.likesNumber1');
    let increasedNum = parseInt(numLike.innerHTML);
    increasedNum += 1;
    numLike.innerHTML = increasedNum;
}

function increaselikes2(){
    let numLike2 = document.querySelector('.likesNumber2');
    let increasedNum2 = parseInt(numLike2.innerHTML);
    increasedNum2 += 1;
    numLike2.innerHTML = increasedNum2;
}

function increaselikes3(){
    let numLike3 = document.querySelector('.likesNumber3');
    let increasedNum3 = parseInt(numLike3.innerHTML);
    increasedNum3 += 1;
    numLike3.innerHTML = increasedNum3;
}
/*

function increaselikes(event){
    console.log(event);
    let currentButton = event.target;
    let numberLikes = parseInt(currentButton.closest('.dessertLikes').querySelector('.numberLikes').textContent);
    numberLikes ++;
    currentButton.closest('.dessertLikes').querySelector('.numberLikes').textContent = numberLikes;
}

let heartButton = document.querySelectorAll('.heartImage');
for(let i = 0; i < heartButton.length; i++){
    heartButton[i].addEventListener("click", increaselikes);
}

*/
