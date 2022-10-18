const sortList = (toDoList)=>{
    toDoList.sort((toDoA, toDoB)=>{
    if (toDoA.date < toDoB.date) {
        return -1;
      };
      if (toDoA.date > toDoB.date) {
        return 1;
      };
    
      // names must be equal
      return 0;
    });
    return toDoList;

};
export default sortList;