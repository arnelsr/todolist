//call display projects and add project form in sidebar
    //delete project list
    //delete form
    //relist projects
    //redisplay form

import createA from "./createA";

const listProjects = (projectList)=>{
        /*
          <nav class="main-nav" id="main-nav">
          <div class="projects-pair">
            <a href="" class="projects" id='project-sidebar' data-index=index>Projects1</a>
            <img src="delete.png" class="projects" id='project-sidebar-delete' data-index=index>
          </div>
         
          <form class="add-project-form" id='add-project-form'>
            <input type="button" class="button" id="add-project-button" value ="Add Project">
            <input type="text" id="new-project">
          </form>
      </nav>
      */
    //select nav
    const nav=document.getElementById('main-nav');
    //delete all projects list
    const projects = document.querySelectorAll('.projects');

    projects.forEach(project => {
      project.remove();
    });
     //delete all projects list
     const projectsPair = document.querySelectorAll('.projects-pair');

     projectsPair.forEach(project => {
       project.remove();
     });
    //delete form

    const projectForm = document.getElementById('add-project-form');
    
   
    if (projectForm){
        projectForm.remove();
    }
    
    //loop thru project and display all
    for (let i=0;i<projectList.length;i++){
        /*
        let a = createA(projectList[i]);
        a.classList.add('projects');
        a.setAttribute('id',"project-sidebar");
        a.setAttribute('data-index',i);

        nav.appendChild(a);
        */
        //div projects-pair
        const div=createDiv(projectList[i],i);
        //append to nav
        nav.appendChild(div);

    }
    //form
    const form = document.createElement('form');
    form.classList.add('add-project-form');
    form.setAttribute('id','add-project-form');
    //button
    const input1 = document.createElement('input');
    input1.setAttribute('id','add-project-button');
    input1.setAttribute('type','button');
    input1.setAttribute('value','Add Project');
    input1.classList.add('button');
    //append to form
    form.appendChild(input1);

    //input2
    const input2 = document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('id','new-project');
    //append to form
    form.appendChild(input2);
    //append form to nav
    nav.appendChild(form);
}
export default listProjects;

const createDiv =(project,index)=>{
    const div=document.createElement('div');
    div.classList.add('projects-pair');
    //create a
    let a = createA(project);
    a.classList.add('projects');
    a.setAttribute('id',"project-sidebar");
    a.setAttribute('data-index',index);
    //append a
    div.appendChild(a)
    //create img
    const img=document.createElement('img')
    img.classList.add('projects');
    img.classList.add('project-sidebar-delete');
    img.setAttribute('id',"project-sidebar-delete");
    img.setAttribute('data-index',index);
    img.setAttribute('src','./delete.png');
    div.appendChild(img);
    return div;
}