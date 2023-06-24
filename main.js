
const products = [
    {
        id : 1 ,
        name : "apple" ,
        price : 500 
    } ,
    {
        id : 2 ,
        name : "orange" ,
        price : 300 
    },
    {
        id : 3 ,
        name : "banana" ,
        price : 200 
    },
    {
        id : 4 ,
        name : "watermelo" ,
        price : 1000 
    }
]


// select 
let addBtn = document.querySelectorAll('.addBtn');
let qty = document.querySelectorAll('#quentity');
let tbdy = document.querySelectorAll('.tbody');
let select = document.querySelectorAll('#items');
let inputForm = document.querySelector('#inputForm');



function cal() {
    //console.log(costs);
    
let costs = document.querySelectorAll('.cost');
let res = [...costs];
//console.log(res);

 let result =  res.reduce(function(pv,cv) {
  //  console.log(cv);
    return pv+Number(cv.innerText);
   },0)

 //  console.log(result);
   let total = document.querySelector('.total');
//console.log(total);
   total.innerText = result;

}

function del(e) {
    e.target.parentElement.parentElement.remove();
    cal();
}




    // CREATE OPTION 

 products.map(function(product){
   return select[0].innerHTML += `<option value="${product.id}">${product.name}</option>`;
   // console.log(product.name); 
})

    // create el 

    // FOR CLICK BUTTON 

 inputForm.addEventListener("submit",function(e){
    // console.log(select[0].value);
    // console.log(qty[0].value);
    e.preventDefault();

 let current =  products.find(function (product) {
    if (product.id == select[0].value) {
        return product.name;
    }
   })
    //    console.log(current);

    //    FOR ROWS 

   let unit = current.price*qty[0].value;
    
    let ctr = document.createElement("tr");
    ctr.classList.add("forDel")
    //console.log(ctr);
    ctr.innerHTML = `<td>${current.id}</td>
    <td>${current.name}<a href="#" class="text-danger btnDel" onClick="del(event)">del</a>
    </td>
    <td>${qty[0].value}</td>
    <td class="cost">${unit}</td>
    `;
    tbdy[0].append(ctr);
//    console.log(ctr);
//console.log(current.id);
cal();
  

})



  

