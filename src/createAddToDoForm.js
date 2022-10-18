/*
      <article class="content" id='article'>
      
      
      <form class="add-schedule-form" id='add-schedule-form'>
        <input type="button" class="button" id="add-schedule-button" value ="Add Schedule">
        <label for="title">Title</label>
        <input type="text" id="title">
        <label for="project">Project</label>
        <input type="text" id="project">
        <label for="date">Date</label>
        <input type="date" id="date">
        <label for="description">Description</label>
        <textarea rows="5" id="description"></textarea>
      </form>
    </article>
*/
const createAddToDoForm=()=>{
    //select article ele
    const article = document.getElementById('article');
    //delete form if existing
    const addToDoForm = document.getElementById('add-schedule-form');
    
   
    if (addToDoForm){
        addToDoForm.remove();
    }
    //create form
    const form=document.createElement('form');
    form.classList.add('add-schedule-form');
    form.setAttribute('id','add-schedule-form');
    //create input button
    const input1=document.createElement('input');
    input1.classList.add('button');
    input1.setAttribute('id','add-schedule-button');
    input1.setAttribute('value','Add Schedule');
    input1.setAttribute('type','button');
    //append to form
    form.appendChild(input1);
    //create label title
    let elements =createLabelAndInput('title','text','title','Title');
    //append to form
    form.appendChild(elements[0]);
    form.appendChild(elements[1]);

    //create label project
     elements =createLabelAndInput('project','text','project','Project');
    //append to form
    form.appendChild(elements[0]);
    form.appendChild(elements[1]);

     //create label date
     elements =createLabelAndInput('date','date','date','Date');
    //append to form
    form.appendChild(elements[0]);
    form.appendChild(elements[1]);
    //create label textarea
    const label=document.createElement('label');
    label.setAttribute('for','description');
    label.textContent='Description';    
    form.appendChild(label);
    //create text area
    const textarea=document.createElement('textarea');
    textarea.setAttribute('rows','5');
    textarea.setAttribute('id','description');
    form.appendChild(textarea);

    //append to article
    article.appendChild(form);


};
export default createAddToDoForm;

const createLabelAndInput=(for1, type, id, text) => {
    let elements =[];
    const label=document.createElement('label');
    label.setAttribute('for',for1);
    label.textContent=text;
    const input=document.createElement('input');
    input.setAttribute('type',type);
    input.setAttribute('id',id);
    elements.push(label);
    elements.push(input);
    return elements;
};