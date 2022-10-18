//import
import './style.css';
import initialLoad from './initialLoad';
import listProjects from './listProjects';
import listToDo from './listToDo';
import createAddToDoForm from './createAddToDoForm';
import filterList from './filterList';

import getToDoForm from './getToDoForm';
import Icon from './delete.png';
import sortList from './sortList';
import deleteFromList from './deleteFromList';

//flow
//data declaration:
//ToDo object
    
//to do list as array object
    //declare in main
//project list as array object
    //declare in main
//intialLoad 
    //create header
    //create sidebar
    //create main
    //create footer
//call sort by date
//call create divs/p ele with title All To DO List
//call display add to do icon
//call display projects and add project form in sidebar
    //delete project list
    //delete form
    //relist projects
    //redisplay form
    
//call display add schedule form
//event delegation based on ele clicked
    //intialLoad when home is clicked. logic above
    //displayToday when today is clicked
        //call delete all to do list displayed
        //filter/select array elements equals today date
        //call create divs/p ele with title Today
    //displayProject when project clicked
        //delete all to do list displayed
        //display all to do list in project with title Project Name/index
        //sort by date
        //create divs/p ele
    //add task button
        //call update to do list array
        //if there's new project call update project array and 
            //call display projects in sidebar


    //add project
        //call update project array
        //call display projects in sidebar
//called methods/modules:
    //delete all to do list displayed
    //sort by date
    //create divs ele displaying title name
    //update to do list array
    //update project array
    //display projects in sidebar and add project form
    //display add schedule form


//main program:
//array declarations/factories
//ToDo
//variables and constants
//to do list as array object
let toDoList = [];
//localStorage.removeItem('toDoList');
//localStorage.removeItem('projectList');
//get from local storage, json parse
if (localStorage.getItem('toDoList')){
    toDoList=JSON.parse(localStorage.getItem('toDoList'));
}else{
    localStorage.setItem('toDoList',JSON.stringify(toDoList));
    
};


let filteredToDoList=[];


//project list as array object
let projectList = [];
//get from local storage
if (localStorage.getItem('projectList')){
    projectList=JSON.parse(localStorage.getItem('projectList'));
}else{
    localStorage.setItem('projectList',JSON.stringify(projectList));
};

//todo object
const ToDo = (title,project,date,description) => {

  
    return {title,project,date,description};
};
let ToDoForm=ToDo();
//page variable
let page='home'

let projectMatch=false
let projectName='';
let projectSideBar='';
let projectIndex='';
//call initialLoad
initialLoad();
//call list projects list
listProjects(projectList);
//call list todo list
listToDo(toDoList,'home');
//call add to do form
createAddToDoForm();



//event delegation, main logic
document.addEventListener('click',function(e){
    
    switch (e.target.id) {
        case 'home':
            
            //all list
            
            listToDo(toDoList,'home');
            page='home';
            break;
        case 'today':
            //filter today
            filteredToDoList=filterList(toDoList,'today');
            
            listToDo(filteredToDoList,'today');
            page='today';
            break;
        case 'add-project-button':
            //add project
            
            projectName=document.getElementById('new-project').value;
            
            if (!(projectName=='') &
                !(projectName==' ')){
                    projectMatch=false
                    for(let i=0;i<projectList.length;i++){
                        if (projectList[i]==projectName){
                            projectMatch=true;

                        }
                    }
                    if (!projectMatch) {
                        projectList.push(projectName)
                        //store in local storage
                        localStorage.setItem('projectList',JSON.stringify(projectList));
                    }
            } 
            
            
            //list project
            if (!projectList.length==0){
                listProjects(projectList);
            }
            break;
        case 'add-schedule-button':
            //todo object
            ToDoForm = getToDoForm();
            
  
            //add To Do
            if (!(ToDoForm=='') &
               !(ToDoForm==' ')){
                toDoList.push(ToDoForm);
               }
            //sort list
            toDoList = sortList(toDoList);
            //store in local storage
            
            localStorage.setItem('toDoList',JSON.stringify(toDoList));
            
            listToDo(toDoList,'home');
            //check if project there
            if (!(ToDoForm.project=='') &
            !(ToDoForm.project==' ')){
                projectMatch=false
                for(let i=0;i<projectList.length;i++){
                    if (projectList[i]==ToDoForm.project){
                        projectMatch=true;

                    }
                }
                if (!projectMatch) {
                    projectList.push(ToDoForm.project)
                    //store in local storage
                    localStorage.setItem('projectList',JSON.stringify(projectList));
                }
            } 
            //relist project
            if (!projectList.length==0){
                listProjects(projectList);
            }
            break;
        case 'delete-button': 
            //delete from todo array
            
            toDoList.splice(e.target.dataset.index,1);
            //store in local storage
            localStorage.setItem('toDoList',JSON.stringify(toDoList));
            listToDo(toDoList,'home');
            break;
        case 'project-sidebar': 
            projectSideBar=projectList[e.target.dataset.index];
            filteredToDoList=toDoList.filter(toDo=>toDo.project==projectSideBar);
            page='project';
            listToDo(filteredToDoList,page,projectSideBar);
            break;
        case 'project-sidebar-delete': 
            //delete from project array 
            projectIndex = e.target.dataset.index;
            projectName=projectList[projectIndex];
            projectList.splice(projectIndex,1);
            //store in local storage
            localStorage.setItem('projectList',JSON.stringify(projectList));
            listProjects(projectList);
            //delete project from list
            toDoList=deleteFromList(projectName,toDoList);
            //store in local storage
            
            localStorage.setItem('toDoList',JSON.stringify(toDoList));
            //force to home
            listToDo(toDoList,'home');
            break;
            
            

    }
    
});

