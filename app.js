let quote = document.getElementById('quote');
let author = document.getElementById('author');
let qbtn = document.getElementById('btn');
qbtn.addEventListener('click', majorF);
let loader = document.getElementById('loader');


function majorF(){
    qbtn.disabled = true;
    loaderf();
    setTimeout(getQuote, 2000) ;
}
function btndis(){
    qbtn.disabled = false;
    
}


function loaderf(){
    loader.style.display = "flex";
    document.getElementById('quote').style.display = "none";
    
}
function loaderf1(){
    loader.style.display = "none";
    document.getElementById('quote').style.display = "block";
}
function getQuote(){
   let newp =  fetch('https://dummyjson.com/todos/random')
    .then( res => res.json())
    .then(json=>{
        let quotetxt = json.todo;
        quote.innerHTML = `"${quotetxt}"`;
        author.innerHTML = "Today's Task";
    })
    .then(loaderf1)
    .then(btndis);
}

