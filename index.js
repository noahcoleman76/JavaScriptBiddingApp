const input = document.getElementById('inputName');
const button = document.getElementById('button');
//creates username and displays option to place bid//
function username(){
    const name = input.value;
    if (name.length != 0){
        document.getElementById('enterName').innerHTML = "Welcome " + name;
        document.getElementById('enterName').classList.add('username');
        document.getElementById('enterBid').classList.remove('enterBid');
    }
    else {
        alert("Enter a valid name");
    }
}
button.addEventListener('click', username);

// place bid and change top bid number for first bid input box and button//
const myBid = document.getElementById('myBid');
const enterBidButton = document.getElementById('enterBidButton');

function placeBid(){
    const currentBid = document.getElementById('price').innerText;
    if (parseInt(myBid.value) > parseInt(currentBid)){
    document.getElementById('price').innerText = myBid.value;
    document.getElementById('color').classList.add('color1');
    document.getElementById('color').classList.remove('color2');
    }
    else {
        alert("Enter a higher bid");
    }
}
enterBidButton.addEventListener('click', placeBid);

//input and button two to change top bid number//
const myBid2 = document.getElementById('myBid2');
const enterBidButton2 = document.getElementById('enterBidButton2');

function placeBid2(){
    const currentBid2 = document.getElementById('price').innerText;
    if (parseInt(myBid2.value) > parseInt(currentBid2)){
    document.getElementById('price').innerText = myBid2.value;
    document.getElementById('color').classList.add('color2');
    }
    else {
        alert("enter higher bid");
    }
}

enterBidButton2.addEventListener('click', placeBid2);