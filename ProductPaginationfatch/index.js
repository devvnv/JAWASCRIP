var url = "https://fakestoreapi.com/products"
var array = [];

fetch (url)
.then(function(value){
    return value.json()
}).then(function(value){
    array = value;

    function display(array,start,end){
        var html = '';
    }
})