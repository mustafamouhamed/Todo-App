let TaskInput = document.getElementById('TaskInput');
let TaskBtn = document.getElementById('TaskBtn');
let NoTask = document.getElementById('NoTask');
let tasks = document.querySelector('.tasks');
let inValid = document.getElementById('inValid');
let closeValidationMessage = document.getElementById('closeValidationMessage');
let modal= document.querySelector('.modal');
let ModalBtn=document.getElementById('ModalBtn');
let closemodel=()=>{
    modal.style.display='none';
    }

let addTask = () => {
    let inputData = TaskInput.value;


    if (inputData.trim() == 0 || TaskInput.value.length < 3) {
        inValid.classList.remove('none');
    } else {
        NoTask.classList.add('none');
        tasks.innerHTML += `<div class="alert task alert-info pb-4 "> ${inputData}
        <button class='btn delete btn-danger float-right'> Delete </button>

    </div> `;
    tasks.addEventListener('click',function(m){
if(m.target.classList.contains('task'))
    m.target.classList.toggle('checked');
});
    
        TaskInput.value = "";
       closemodel();

    }

}
let showNoTask =()=>{
    if(tasks.children.length==0){
        NoTask.classList.remove ('none');
    }
}
let removeInvalid = () => {
    inValid.classList.add('none');
}

TaskBtn.addEventListener('click', addTask);
closeValidationMessage.addEventListener('click', removeInvalid);

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        showNoTask(); 
    }


}) ;
let showmodel=()=>{
modal.style.display='block';
};

ModalBtn.addEventListener('click',showmodel);
