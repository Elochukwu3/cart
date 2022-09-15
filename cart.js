// cart js
let cont = document.querySelector("#cont");
let cartNumDisplay = document.querySelector("#cartNum");
cartNewItems = JSON.parse(localStorage.getItem("items"));
let totalBtn = document.querySelector("#totalBtnsCont");
let prices = []


cartNumDisplay.innerHTML = cartNewItems.length;
cartNewItems.length < 1? totalBtn.classList.add("hidden"):totalBtn.classList.remove("hidden");

const showMap = cartNewItems.map((b) => {
  const { src, price, discount, Text, discountPercent} = b;
  prices.push(price)

  return `
    <div class="images w-64 h-70 border-4 border-emerald-400 rounded-lg shadow-md">
    <div class="w-full h-48 rounded-lg">
    <img src="${src}" alt=""
       class="w-full h-full object-cover rounded-lg " id="img-name">
</div>
   <div class="image-text border-t-8 border-b-2  border-emerald-400 italic rounded-sm shadow-md ">
   <p class="text-orange-600 text-sm border-b-2 border-slate-300 shadow-md p-2  h-14 text-ellipsis overflow-y-auto" id="Text-name">${Text}</p>
   <p class="font-bold pl-2.5" id="price-name">${price}</p>
   <p class="font-bold"><span class="line-through pl-2.5" id="discount-name" >${discount}</span> <span id="cent-name" class="bg-orange-400 rounded-lg text-xs text-white w-fit px-2">${discountPercent}</span></p>
</div>
<div class="flex justify-around py-2 items-center"><p class="text-md cursor-pointer" id ="removeItem"><i class="fas fa-trash"></i> Remove</p>
                    <p class="px-3 bg-emerald-400 text-3xl rounded-md text-slate-700 font-bold text-center cursor-pointer">-</p>
                    <p class="px-3 bg-emerald-400 text-2xl  rounded-md text-slate-700 font-bold text-center cursor-pointer">+</p>
                </div>
</div>
    `;
});
cont.innerHTML = showMap.join("");

function checkout() {
    let newPrices = [];
let totalDp = document.querySelector("#total")
let totalDp2 = document.querySelector("#total2")

for (let index = 0; index < prices.length; index++) {
    let element = prices[index];
    element = element.slice(1);
    // element = Number(element)
    element = parseInt(element, 10)
   newPrices.push(element)
}

let addedItems = newPrices.reduce((a, b)=>{
    return a+b
})
 addedItems=addedItems.toLocaleString()
totalDp.innerHTML = `&dollar;${addedItems}`
totalDp2.innerHTML = `(&dollar;${addedItems})`
}
  
