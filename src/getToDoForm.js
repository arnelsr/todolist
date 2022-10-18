

const getToDoForm = () => {
    const ToDoForm = {};
   
     ToDoForm.title=document.getElementById('title').value;
     
     ToDoForm.project=document.getElementById('project').value;
     ToDoForm.date=document.getElementById('date').value;
     ToDoForm.description=document.getElementById('description').value;
     
     return ToDoForm;

};

export default getToDoForm;