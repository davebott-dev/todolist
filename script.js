var addProjectArr = [];


let describeArr = [];
let dueDateArr = [];
let projectArr = [];

const container = document.createElement('div');
container.classList.add('container');
const header = document.createElement('div');
header.classList.add('header');
containerHeader = document.createElement('h1');
containerHeader.textContent = "To Do List";
const headerBtn = document.createElement('button');
headerBtn.id = "taskBtn";
headerBtn.setAttribute("type", "button");
headerBtn.textContent = "Add Tasks";
const content = document.createElement('div');
content.classList.add('content');
const project = document.createElement('div');
project.classList.add('project');
const projectHeader = document.createElement('div');
projectHeader.classList.add('projectHeader');
const projectH2 = document.createElement('h2');
projectH2.textContent = 'Projects';
const plusBtn = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
plusBtn.classList.add('projectBtn');
plusBtn.setAttributeNS(null, "width", "24");
plusBtn.setAttributeNS(null, "height", "24");
plusBtn.setAttributeNS(null, "viewBox", "0 0 24 24");
plusBtnPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
plusBtnPath.setAttributeNS(null, "d", "M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z");
const projectCards = document.createElement('div');
projectCards.classList.add('projectCards');
const defaultProject = document.createElement('button');
defaultProject.setAttribute("type", "button");
defaultProject.id = "default";
defaultProject.textContent = "All";
const workProject = document.createElement('button');
workProject.setAttribute("type", "button");
workProject.id = "work";
workProject.classList.add('givenProject');
workProject.textContent = "Work";
const personalProject = document.createElement('button');
personalProject.setAttribute("type", "button");
personalProject.id = "personal";
personalProject.classList.add('givenProject');
personalProject.textContent = "Personal";
const schoolProject = document.createElement('button');
schoolProject.setAttribute("type", "button");
schoolProject.id = "school";
schoolProject.classList.add('givenProject');
schoolProject.textContent = "School";

const task = document.createElement('div');
task.classList.add('task');
const taskHeader = document.createElement('div');
const taskH2 = document.createElement('h2');
taskH2.textContent = "Tasks: All";
const taskCards = document.createElement('div');
taskCards.classList.add('taskCards');

header.appendChild(containerHeader);
header.appendChild(headerBtn);

plusBtn.appendChild(plusBtnPath);

projectHeader.appendChild(projectH2);
projectHeader.appendChild(plusBtn);

taskHeader.appendChild(taskH2);
task.appendChild(taskHeader);
task.appendChild(taskCards);

projectCards.appendChild(defaultProject);
projectCards.appendChild(workProject);
projectCards.appendChild(personalProject);
projectCards.appendChild(schoolProject);

project.appendChild(projectHeader);
project.appendChild(projectCards);

content.appendChild(project);
content.append(task);

container.appendChild(header);
container.appendChild(content);

document.body.appendChild(container);

class Task {
  constructor(description, dueDate, project) {
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
  }
  push() {
    describeArr.push(this.description);
    dueDateArr.push(this.dueDate);
    projectArr.push(this.project);
  }
}

plusBtn.addEventListener("click", () => {
  document.body.removeChild(container);

  const form = document.createElement('form');
  const formHeader = document.createElement('div');
  formHeader.classList.add('formHeader');
  const formHeaderH2 = document.createElement('h2');
  formHeaderH2.textContent = "Give Your Project a Name 👇";
  const formElements = document.createElement('div');
  formElements.classList.add('formElements');
  const projectTitle = document.createElement('label');
  projectTitle.setAttribute("for", "projectTitle");
  projectTitle.textContent = "Project Title:";
  var projectInput = document.createElement('input');
  projectInput.id = 'projectTitle';
  projectInput.setAttribute("type", "text");
  projectInput.setAttribute("maxlength", "15");


  const submitBtn = document.createElement('button');
  submitBtn.setAttribute("type", "button");
  submitBtn.id = "submitBtn";
  submitBtn.textContent = "Submit";

  formElements.appendChild(projectTitle);
  formElements.appendChild(projectInput);
  formElements.appendChild(submitBtn);

  formHeader.appendChild(formHeaderH2);

  form.appendChild(formHeader);
  form.appendChild(formElements);

  document.body.appendChild(form);


  submitBtn.addEventListener("click", () => {

    console.log(projectInput.value);
    addProjectArr.push(projectInput.value);

    console.log(addProjectArr);

    document.body.removeChild(form);
    document.body.appendChild(container);


    const newProject = document.createElement('div');
    newProject.classList.add('newProject');
    newProject.style.fontFamily = "arial";
    newProject.textContent = projectInput.value;


    const newProjectDel = document.createElement('img');
    newProjectDel.setAttribute("src", "close.png");
    newProjectDel.classList.add('closeIcon');


    newProject.appendChild(newProjectDel);
    projectCards.appendChild(newProject);

    newProjectDel.addEventListener("click", () => {
      projectCards.removeChild(newProject);

      const allTaskCards = document.querySelectorAll(".cards");

      allTaskCards.forEach((card) => {
        if (card.innerText.includes(newProject.innerText)) {
          taskCards.removeChild(card);
        }
      })

      console.log(projectInput.value);
      addProjectArr.pop();

    });


    newProject.addEventListener("click", () => {
      taskH2.innerText = "Tasks";
      let addon = ': ' + newProject.innerText
      taskH2.innerText += addon;

      const allTaskCards = document.querySelectorAll(".cards");

      allTaskCards.forEach((card) => {
        if (card.innerText.includes(newProject.innerText)) {
          console.log('good');
          card.style.display = null;
        } else {
          card.style.display = 'none';
        }
      })

    })
  })


})

headerBtn.addEventListener("click", () => {


  document.body.removeChild(container);

  const form = document.createElement('form');
  const formHeader = document.createElement('div');
  formHeader.classList.add('formHeader');
  const formHeaderH2 = document.createElement('h2');
  formHeaderH2.textContent = "Add Your Task ✅";
  const formElements = document.createElement('div');
  formElements.classList.add('formElements');
  const taskDescription = document.createElement('label');
  taskDescription.setAttribute("for", "taskDescription");
  taskDescription.textContent = "Describe your task:";
  const taskInput = document.createElement('input');
  taskInput.id = 'taskDescription';
  taskInput.setAttribute("type", "text");
  taskInput.setAttribute("paceholder", "note your plans");

  const middleRow = document.createElement('div');
  middleRow.classList.add('middleRow');

  const middleRowDiv1 = document.createElement('div');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.textContent = "Due:";
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("name", "dueDate");
  dueDateInput.id = "dueDate";

  const middleRowDiv2 = document.createElement('div');
  const projectListLabel = document.createElement('label');
  projectListLabel.setAttribute("for", "projectList");
  projectListLabel.textContent = "Project:";
  const projectListInput = document.createElement('select');
  projectListInput.setAttribute("name", "projectList");
  projectListInput.id = "projectList";
  const projectListOption1 = document.createElement('option');
  projectListOption1.setAttribute('value', 'Work');
  projectListOption1.textContent = "Work";
  const projectListOption2 = document.createElement('option');
  projectListOption2.setAttribute('value', 'Personal');
  projectListOption2.textContent = "Personal";
  const projectListOption3 = document.createElement('option');
  projectListOption3.setAttribute('value', 'School');
  projectListOption3.textContent = "School";


  for (var elements of addProjectArr) {
    const projectListOption = document.createElement('option');
    projectListOption.setAttribute('value', elements);
    projectListOption.textContent = elements;

    projectListInput.appendChild(projectListOption);
  }

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute("type", "button");
  submitBtn.id = "submitBtn";
  submitBtn.textContent = "Submit";


  projectListInput.appendChild(projectListOption1);
  projectListInput.appendChild(projectListOption2);
  projectListInput.appendChild(projectListOption3);

  middleRowDiv2.appendChild(projectListLabel);
  middleRowDiv2.appendChild(projectListInput);

  middleRowDiv1.appendChild(dueDateLabel);
  middleRowDiv1.appendChild(dueDateInput);

  middleRow.appendChild(middleRowDiv1);
  middleRow.appendChild(middleRowDiv2);

  formElements.appendChild(taskDescription);
  formElements.appendChild(taskInput);
  formElements.appendChild(middleRow);
  formElements.appendChild(submitBtn);

  formHeader.appendChild(formHeaderH2);

  form.appendChild(formHeader);
  form.appendChild(formElements);

  document.body.appendChild(form);

  submitBtn.addEventListener("click", () => {
    console.log(projectListOption1.value)

    const task = new Task(taskInput.value, dueDateInput.value, projectListInput.value);


    task.push();

    console.log(describeArr);
    console.log(dueDateArr);
    console.log(projectArr);


    const card = document.createElement('div');
    card.classList.add('cards');


    const taskDesc = document.createElement('div');
    taskDesc.textContent = describeArr[(describeArr.length) - 1];
    taskDesc.classList.add('taskDesc');
    const dueDate = document.createElement('div');
    dueDate.textContent = dueDateArr[(dueDateArr.length) - 1];
    dueDate.classList.add('dueDate');
    const taskProject = document.createElement('div');
    taskProject.textContent = projectArr[(projectArr.length) - 1];
    taskProject.classList.add('taskProject');
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('iconDiv');

    const taskDel = document.createElement('img');
    taskDel.setAttribute("src", "close.png");
    taskDel.classList.add('closeIcon');
    const taskEdit = document.createElement('img');
    taskEdit.setAttribute("src", "edit.png");
    taskEdit.classList.add('editIcon');


    iconDiv.appendChild(taskDel);
    iconDiv.appendChild(taskEdit);

    card.appendChild(taskDesc);
    card.appendChild(dueDate);
    card.appendChild(taskProject);
    card.appendChild(iconDiv);

    taskCards.appendChild(card);


    taskDel.addEventListener("click", () => {
      console.log(taskCards.innerText);
      taskCards.removeChild(card);
    });

    taskEdit.addEventListener("click", () => {

      taskDesc.contentEditable = true;
      dueDate.contentEditable = true;
      taskProject.contentEditable = true;

      const allTaskDesc = document.querySelectorAll(".taskDesc");
      allTaskDesc.forEach((element) => {
        element.focus();
      })


      document.body.addEventListener('click', () => {
        if (document.activeElement !== taskDesc && document.activeElement !== dueDate && document.activeElement !== taskProject) {
          taskDesc.removeAttribute('contentEditable');
          dueDate.removeAttribute('contentEditable');
          taskProject.removeAttribute('contentEditable');
        }

      })

    });


    document.body.removeChild(form);
    document.body.appendChild(container);

  })

})

const allProjectCard = document.getElementById('default');
allProjectCard.addEventListener("click", () => {
  taskH2.innerText = "Tasks";
  let addon = ': ' + allProjectCard.innerText;
  taskH2.innerText += addon;

  const allTaskCards = document.querySelectorAll(".cards");

  allTaskCards.forEach((card) => {
    if (card.innerText.includes("")) {
      console.log('good');
      card.style.display = null;
    } else {
      card.style.display = 'none';
    }
  })

})

const allGivenProjects = document.querySelectorAll('.givenProject');
allGivenProjects.forEach((element) => {
  element.addEventListener("click", () => {
    taskH2.innerText = "Tasks";
    let addon = ': ' + element.innerText;
    taskH2.innerText += addon;

    const allTaskCards = document.querySelectorAll(".cards");

    allTaskCards.forEach((card) => {
      if (card.innerText.includes(element.innerText)) {
        console.log('good');
        card.style.display = null;
      } else {
        card.style.display = 'none';
      }
    })

  })
})

//eventually figure out how to save locally
