const URl = 'https://jsonplaceholder.typicode.com/posts'
fetch (URl)
.then(y => y.json())
.then(y=>{
    console.log(y)
    return y 
})
.then(y => console.log(y[0]))