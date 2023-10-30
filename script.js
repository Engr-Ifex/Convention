let name = document.querySelector('.name')
let photo = document.querySelector('#file')
let submit = document.querySelector('.btn')
let form = document.querySelector('#form')



submit.addEventListener('click', function(){
    if(name.value === '')
    alert('Please enter a name');

    if(photo.value === '')
    alert('Please enter a photo')

    else{
        alert('Your data as been successfully submitted')
        location.replace('./second.html')
    }

})


form.addEventListener('submit', function(e){
    e.preventDefault();

    let nameValue = name.value
    localStorage.setItem('name', nameValue)
})



photo.addEventListener('change', function() {
    const reader = new FileReader();

    reader.readAsDataURL(photo.files[0])

    reader.addEventListener('load', () => {

        const  url = reader.result
        
        localStorage.setItem('updateimg', url);

       
    });

   
})

