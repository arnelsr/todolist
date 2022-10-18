const filterList=(toDoList,filter)=>{
    let filteredToDoList=[];
    let today=new Date();
   
    let compareDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    switch (filter){
        case 'today':
            filteredToDoList=toDoList.filter(toDo=>toDo.date==compareDate);
            break;
        case 'projects':
            break;
    }
    
    return filteredToDoList;
}
export default filterList;