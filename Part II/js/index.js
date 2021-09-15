function changeValue1(){
    let valueNum = document.querySelector('.likesValue1');
    let plusValue = parseInt(valueNum.innerHTML);
    plusValue += 1;
    valueNum.innerHTML = plusValue;
}

function changeValue2(){
    let valueNum = document.querySelector('.likesValue2');
    let plusValue = parseInt(valueNum.innerHTML);
    plusValue += 1;
    valueNum.innerHTML = plusValue;
}

function changeValue3(){
    let valueNum = document.querySelector('.likesValue3');
    let plusValue = parseInt(valueNum.innerHTML);
    plusValue += 1;
    valueNum.innerHTML = plusValue;
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
