function todo(){
    let input = document.getElementById("input");  
    if(input.value=="") {
        alert("Please Don't try to make empty list")
        return;
    }
    let container = document.querySelector(".container");
    let output = document.querySelector(".output");
    console.log(container);

let li = document.createElement("li");
let removeBtn = document.createElement("button");
removeBtn.className = "remove";
removeBtn.textContent = "remove";
removeBtn.addEventListener("click", function() {
    output.removeChild(li); // Remove the list item when the button is clicked
    output.removeChild(removeBtn); // Remove the button itself
});
li.textContent=input.value;
output.appendChild(li);
output.appendChild(removeBtn);
input.value="";

}
// function removeTxt(e){
//     e.remove();
// }