//save tp local storage
function saveData(){
    console.log("in saveData");
  
        localStorage.setItem(`name` , document.getElementById(`name`).value);
        localStorage.setItem(`email` , document.getElementById(`email`).value);
        localStorage.setItem(`roomNumber` ,document.getElementById(`roomNumber`).value);
        localStorage.setItem(`roomWidth` , document.getElementById(`roomWidth`).value);
        localStorage.setItem(`roomLength` , document.getElementById(`roomLength`).value);
        localStorage.setItem(`colorOption` ,document.getElementById(`colorOption`).value);
        localStorage.setItem(`paint` , document.getElementById(`paint`).value);
        location.replace("quote.html");
    
    alert("Data Saved");
}//end save data

function quote(){
     let x ;
     let finalCost;
     let width = parseFloat(localStorage.getItem('roomWidth'));
     let length = parseFloat(localStorage.getItem('roomLength'));
    document.getElementById("name").value = localStorage.getItem(`name`);
    document.getElementById("email").value = localStorage.getItem(`email`);
    document.getElementById("roomNumber").value = localStorage.getItem(`roomNumber`);
    document.getElementById("roomLength").value = localStorage.getItem(`roomLength`);
    document.getElementById("roomWidth").value = localStorage.getItem(`roomWidth`);
    document.getElementById("colorOption").value = localStorage.getItem(`colorOption`);
    document.getElementById("paint").value = localStorage.getItem(`paint`);
  
    finalCost = (width * length)/400; //calculating cans required to paint the room

    x =  document.getElementById("colorOption").value; //calculating total price with tax
    if(x =="standard"){
        finalCost=((finalCost*24.99)*1.13).toFixed(2);
    }else{
        finalCost=((finalCost*39.99)*1.13).toFixed(2);
    }

    document.getElementById("cost").value = finalCost;//display cost
    console.log(finalCost);
}
