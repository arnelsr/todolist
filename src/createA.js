const createA = (text)=>{
    const a=document.createElement('a');
    a.href="#";
    a.textContent=text;
    return a;
}
export default createA;