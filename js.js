//hàm khởi nguyên
const arrListProduct = [
    {
        id : 1,
        name : "Cháo Gà",
        img : "background.jpg"
    },
    {
        id : 2,
        name : "Cháo Gà",
        img : "background.jpg"
    },
    {
        id : 3,
        name : "Cháo Gà",
        img : "background.jpg"
    }
];
// tạo 1 biến mới trên localStorage từ hàm khởi nguyên
let arrNewProduct = JSON.parse(localStorage.getItem("detail"));
//  phải có điều kiển để tạo biến

if(arrNewProduct==null) {
   localStorage.setItem("detail", JSON.stringify(arrListProduct));
}
const showProduct = (data)=> {
    let show = document.querySelector("#show");
    if(show) {
        for(let item of data) {
            show.innerHTML += ` 
            <div class="item">
                <img src="${item.img}" alt="">
                <p>${item.name}</p>
            </div>
            `            
        }
    }
}
showProduct(arrNewProduct);
console.log(arrNewProduct);
const adđProduct= () =>  {
    let id = document.querySelector(".id").value;
    let _name = document.querySelector("._name").value;
    let img = document.querySelector(".img").value;
    arrNewProduct.push( {
        id : id,
        name : _name,
        img : img
    });
    localStorage.setItem("detail", JSON.stringify(arrNewProduct));
}