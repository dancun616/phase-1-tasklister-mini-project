document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById('create-task-form');

  const userToDo = document.getElementById('new-task-description');

  const ulForTo = document.getElementById('tasks');

// event listener for submitting the form
  form.addEventListener('submit', (e) => {
        e.preventDefault();


        let newToDo = document.createElement('li');

//button for deleting toDo
        let deleter = document.createElement('button');

        deleter.textContent = 'x';



//Take in username
const user = document.getElementById('user');
//Take in duration in hours
const hours = document.getElementById('hours');
//Take in duration in minutes
const minutes = document.getElementById('minutes');
//Take in dueDate
const dueDate = document.getElementById('dueDate');



newToDo.innerHTML = `<b>user:</b> ${user.value} <br>
                      <b>Task:</b> ${userToDo.value} <br>
                      <b>Duration:</b> ${hours.value} hrs ${minutes.value} min <br>
                      <b>Due date:</b> ${dueDate.value}`;


//adds deleter button to task output
newToDo.appendChild(deleter);


const spacer = document.createElement('hr');


newToDo.append(spacer);

//event to delete task output when deleter button is pressed
deleter.addEventListener('click', () => {
  newToDo.remove();

})





//Priority value of toDO
const high = document.getElementById('high');

const medium = document.getElementById('medium');

const low = document.getElementById('low');

let priority = document.getElementById('priority');



//Set color and sort toDO depending on priority
if(priority.value === 'High priority'){
  newToDo.style.color = 'red';
  high.append(newToDo);

}else if(priority.value === 'Medium priority'){
  newToDo.style.color = '#FEBE00';
  medium.append(newToDo);


}else if(priority.value === 'Low priority'){
  newToDo.style.color = 'green';
  low.append(newToDo);


}



form.reset()

      })



});





 


  