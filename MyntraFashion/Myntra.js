var dataArray = [];
function  display() {
    fetch('https://fakestoreapi.com/products')
        .then(function (value) {
            return value.json();
        }).then(function (value) {
            dataArray = value;
            console.log(dataArray);
            displayMyHtml(dataArray, true);
        })
}



function displayMyHtml(dataArray, isload) {

    const myImg = dataArray.map( function(a, b){

        return `<article class="product" ondblclick="showDetail(event)" id="${a.id}">
                <img src="${a.image}" class="product-img img " alt="" />
                <footer>
                <h5 class="product-name ">${a.title}</h5>
                <span class="product-price">$${a.price}</span>
                <p class="product_desc hide" id="element1">${a.description}</p>
                </footer>
                </article>`
    })
    document.getElementById("items").innerHTML = myImg.join("");
    
    const el = document.getElementById('items');

    const hiddenDiv = document.getElementById('element1');
    
    console.log(element1);
    el.addEventListener('mouseenter', function handleMouseOver() {
      
      // for(i=0;i<element1.length;i++){
      hiddenDiv.classList.add('myDIV')
      
    });

    el.addEventListener('mouseover', function handleMouseOut() {
      hiddenDiv.classList.remove('hide')
    });
   
 
    
    if (isload) {

        const btn = dataArray.map(function (value){
          return `<div class="row1">
          <input type="checkbox" class="inputcheck" value="${value.category}" onclick="filter_info(event)">
          <button class="company-btn">${value.category}</button></div>`
        });
    
        const filt_btn = [...new Set(btn)];
        console.log(filt_btn);
    
        document.getElementById("categories").innerHTML = filt_btn.join(" ");
      }
}
display();

function filter_info(e) {
    var array = []
    var ty = document.querySelectorAll('.inputcheck:checked');
  
    if (ty.length > 0) {
      for (var i = 0; i < ty.length; i++) {
        array.push(ty[i].defaultValue)
      }
  
      var myfilterData = dataArray.filter(function(value) {
  
        return array.includes(value.category)
      });
  
      displayMyHtml(myfilterData, false);
  
    }
    else {
      displayMyHtml(dataArray, false);
    }
  
  }

 
