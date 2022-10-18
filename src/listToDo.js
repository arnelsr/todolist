/*
<article class="content" id='article'>
<h1 id='list-h1'>All To Do List</h1> title variable
<table id="table">
            <tr>
              <th >Title</th>
              <th >Date</th>
              <th >Delete</th>
              
            </tr>
            <tr>
              <td>schedule1</td>
              <td>schedule1</td>
              <td><input type="button" value="Delete" id="delete-button"></td>
            </tr>
            <tr>
              <td>schedule2</td>
              <td>schedule1</td>
              
            </tr>
</table>

</article>
*/
//import
import createAddToDoForm from "./createAddToDoForm";
//function
const listToDo=(toDoList,page,projectTitle)=>{
    //clear page
    //h1
    const listH1 = document.getElementById('list-h1');
    
   
    if (listH1){
        listH1.remove();
    }
    //table
    let table = document.getElementById('table');
    if (table){
        table.remove();
    }
    //schedule list
    const schedules = document.querySelectorAll('.schedule');

    schedules.forEach(schedule => {
      schedule.remove();
    });
    

    let title = ' ';
    switch (page){
        case 'home':
            title='All To Do List';
            break;
        case 'today':
            title="Today's To Do List";
            break;
        case 'project':
            title=projectTitle + " To Do List";
            break;
    }
    //create h1
    const h1=document.createElement('h1');
    h1.setAttribute('id','list-h1');
    h1.textContent=title;
    //select article id ele
    const article = document.getElementById('article');
    //append h1
    article.appendChild(h1);


    //create table
    table = document.createElement('table');
    table.setAttribute('id','table');
    
    //create th
    let tr=createTr('th',['Title', 'Date', 'Project','Description','Delete']);
    //append table
    table.appendChild(tr);
    

    //append article
    
   
    article.appendChild(table);
 

    //loop thru todo list and display all
    for (let i=0;i<toDoList.length;i++){

        tr=createTr('td',[toDoList[i].title,toDoList[i].date,
        toDoList[i].project,toDoList[i].description],i);
        table.appendChild(tr);
        article.appendChild(table);
    
    }
    createAddToDoForm();
}
export default listToDo;

const createTr = (detail,array,deleteIndex)=>{
       //tr
       let tr = document.createElement('tr');
       for(let i=0;i<array.length;i++){
        let td = document.createElement(detail);
        td.textContent=array[i];
        tr.appendChild(td);
       }
       if (detail =='td'){
            //delete button
            const deleteButton=document.createElement('input');
            deleteButton.setAttribute('id','delete-button');
            deleteButton.setAttribute('type','button');
            deleteButton.setAttribute('value','Delete');
            deleteButton.setAttribute('data-index',deleteIndex);
            //add to td
            
            const td = document.createElement(detail);
            td.appendChild(deleteButton);
            //add to tr
            tr.appendChild(td);
       }
       return tr;
   
}
