let showimg = document.querySelector('#showimg')
let pho = localStorage.getItem('updateimg')
let para = document.querySelector('p')
let nm = localStorage.getItem('name')
let main = document.querySelector('#mainimg')

para.innerHTML = nm;
showimg.src = pho;



function htmlToimage() {


    domtoimage.toJpeg(document.getElementById('mainimg'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'myImage.jpeg';
        link.href = dataUrl;
        link.click();
    });
}





