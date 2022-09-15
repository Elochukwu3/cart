const bagContainer = document.querySelector("#bagContainer");
const shirtContainer = document.querySelector("#shirtContainer");
const carContainer = document.querySelector("#carContainer");
let cartNumDisplay = document.querySelector("#cartNum");
let to_searchValue = document.getElementsByTagName("h1");
to_searchValue = [...to_searchValue]
let discountPercent;
let cartNewItems= JSON.parse(localStorage.getItem("items")) || [];

    cartNewItems ? cartNumDisplay.innerHTML = cartNewItems.length : console.log("nn");;


const showItems = (objs, showConts )=>{
    const showMap = objs.map(b=>{
        const{src,price, discount, Text} = b;
        discountPercent = Math.round((discount/price) *100 );
       
        
        return`
        <div class="images w-64 h-70 border-4 border-slate-400 rounded-lg shadow-md mb-2">
        <div class="w-full h-48 rounded-lg">
        <img src="${src}" alt=""
           class="w-full h-full object-cover" id="img-name">
   </div>
       <div class="image-text border-t-8 border-b-2  border-zinc-800 italic rounded-sm shadow-md ">
       <p class="text-orange-600 text-sm border-b-2 border-slate-300 shadow-md p-2 h-14 text-ellipsis overflow-y-auto" id="Text-name">${Text}</p>
       <p class="font-bold pl-2.5" id="price-name">&dollar;${price}</p>
       <p class="font-bold"><span class="line-through pl-2.5" id="discount-name" >&dollar;${discount}</span> <span id="cent-name" class="bg-orange-400 rounded-lg text-xs text-white w-fit px-2">${discountPercent}%</span></p>
    </div>
<div>
   <button class="w-full bg-slate-500 py-1 rounded-md font-semibold text-orange-600" id="addBtn">  <i class="fas fa-cart-plus"></i> Add</button>
</div>
</div>
        `
    })
    showConts.innerHTML = showMap.join("")
    
  
}
showItems(bags, bagContainer)
showItems(shirts, shirtContainer)
showItems(cars, carContainer)
// console.log(contents);

const cartBtn = document.querySelectorAll("#addBtn")
cartBtn.forEach(i => {
        i.addEventListener("click", ()=>{
           let m = i.parentElement;
           let c = m.parentElement;
           let imgName = c.querySelector("#img-name")
           let desc = c.querySelector("#Text-name")
           let price = c.querySelector("#price-name")
           let discount = c.querySelector("#discount-name")
           let pCent = c.querySelector("#cent-name")
          
          const  contents ={
            src: imgName.src,
            price: price.innerText,
            discount: discount.innerText,
            Text: desc.innerText,
            discountPercent: pCent.innerText,

        }
         cartNewItems.push(contents)
            cartNumDisplay.innerHTML = cartNewItems.length;
       localStorage.setItem("items", JSON.stringify(cartNewItems))
       
        })
    });
const toTop = document.querySelector("#toTop")
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            toTop.style.display = "block";
        } else {
            toTop.style.display = "none";
        }
      }
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
