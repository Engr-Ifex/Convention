let showimg = document.querySelector('#showimg')
let pho = localStorage.getItem('updateimg')
let para = document.querySelector('p')
let nm = localStorage.getItem('name')

para.innerHTML = nm;
showimg.src = pho;

console.log(pho)




