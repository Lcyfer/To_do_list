const itemsA=localStorage.getItem("items") ?JSON.parse(localStorage.getItem('items')):[]
console.log(itemsA)
document.querySelector("#enter").addEventListener("click",()=>{
  const item=document.querySelector("#item")
  createItem(item)
})
function createItem(item){
  itemsA.push(item.value)
  localStorage.setItem("items",JSON.stringify(itemsA))
  location.reload()
}

function disp(){
  let items=""
  for(let i=0;i <itemsA.length;i++){
    items +=`<div class="item">
      <div class="intpcont">
        <textarea disabled>${itemsA[i]} </textarea>
         <div class="edtcont">
           <i class="fa-solid fa-check dltbtn"><span class="v1">Delete<span></i>
           <i class="fa-solid fa-pen edtbtn"><span class="v1">Edit</span></i>
         </div>
         <div class="updtcont">
           <input type="button"class="svbtn" value="Save">
           <input type="button"class="cabtn" value="Cancel">
         </div>
      </div>
    </div>`
  } document.querySelector(".tolist").innerHTML=items;
  actdel()
  actedit()
  actsave()
  actcan()
}



function actdel() {
  let dltbtn = document.querySelectorAll(".dltbtn");
  dltbtn.forEach((db, i) => {
    db.addEventListener("click", () => {
      itemsA.splice(i, 1);
      localStorage.setItem('items', JSON.stringify(itemsA));
      location.reload();
    });
  });
}
function actedit(){
  const edtbtn = document.querySelectorAll(".edtbtn");
  const updtcont = document.querySelectorAll(".updtcont");
  const inputs = document.querySelectorAll(".intpcont textarea");
  edtbtn.forEach((eb,i) => { 
    eb.addEventListener("click", () => {
      updtcont[i].style.display = "block";
      inputs[i].disabled = false;
      inputs[i].style.color="blue";
    });
  });
}

function actsave() {
  const svbtn = document.querySelectorAll(".svbtn");
  const inputs = document.querySelectorAll(".intpcont textarea");

  svbtn.forEach((sb, i) => {
    sb.addEventListener("click", () => {
      itemsA[i] = inputs[i].value;
      localStorage.setItem("items", JSON.stringify(itemsA));
      location.reload();
    });
  });
}

function actcan(){
  const cabtn = document.querySelectorAll(".cabtn");
  const updtcont = document.querySelectorAll(".updtcont");
  const inputs = document.querySelectorAll(".intpcont textarea");
  cabtn.forEach((ca,i) => { 
    ca.addEventListener("click", () => {
      updtcont[i].style.display = "none";
      inputs[i].disabled = true;
      inputs[i].style.color="black";
    });
  });
}


window.onload=function(){
  disp()
}