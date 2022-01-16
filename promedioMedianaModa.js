let numbersList = [];

function onClickAddNumber(){
    numbersList.push(document.getElementById("number").value);
    listView = document.getElementById("listView");
    listView.innerText = numbersList;
};