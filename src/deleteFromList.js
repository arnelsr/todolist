const deleteFromList=(projectName,toDoList)=>{
    const newList=[];
    for (let i=0;i<toDoList.length;i++){
        if (!(projectName == toDoList[i].project)){
            newList.push(toDoList[i]);
        };
    };
    return newList;
};
export default deleteFromList;