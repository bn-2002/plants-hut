//select option 
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const options = document.querySelectorAll('.option');

selected.addEventListener('click',function(){
   optionsContainer.classList.toggle('active');
   selected.classList.toggle('select-arrow-active');
});

for (let option of options) {
    option.addEventListener('click',()=>{
        selected.innerHTML = option.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active');
    });
}


