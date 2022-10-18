//import
import createA from './createA';

//intialLoad 
    //create header
    //create sidebar
    //create main
    //create footer


const initialLoad = ()=>{
    document.title=('To Do List');
   
   
    // access content div
    let content = document.getElementById('content');
    if (!content){
        content=document.createElement('div');
        content.setAttribute('id','content');
        content.classList.add('wrapper');
        document.body.appendChild(content);
    }
    //create header
    const header = createHeader();
    //append header to id content
    content.appendChild(header);
    //create sidebar
    const sidebar=createSidebar();
    //append sidebar to id content
    content.appendChild(sidebar);

    //create main body
    const main = createMain();
    //append main to div id content
    content.appendChild(main);
    
    //create footer
    const footer = createFooter();
    //append footer to div id content
    content.appendChild(footer);
    

}
export default initialLoad;

//create header
const createHeader = () =>{
      //*<header class="main-head">To Do List</header>*/
      const header = document.createElement('header');
      header.classList.add('main-head');
      header.textContent='To Do List';
    
      return header;
      
}

//create sidebar
const createSidebar = () =>{
    /*
          <nav class="main-nav">
          <a href="">Home</a>
          <a href="" id='today'>Today</a>
          <a>Projects</a>

      </nav>
      */
    const nav = document.createElement('nav');
    nav.classList.add('main-nav');
    nav.setAttribute('id','main-nav');
    
    //home
    let a = createA('Home');
    a.setAttribute('id','home');
   
    //append to nav
    nav.appendChild(a);
    //today
    a=createA('Today');
    a.setAttribute('id','today')
    nav.appendChild(a);
    //projects
    //a=createA('Projects');
    const a1=document.createElement('a');
    a1.textContent='Projects';
    nav.appendChild(a1);
    
    return nav;
    
}

const createMain=()=>{
/*<article class="content" id='article'></article>*/
    const article=document.createElement('article');
    article.classList.add('content');
    article.setAttribute('id','article');
    return article;
};

const createFooter=()=>{
/*<footer class="main-footer">&copy 2022 arnelsr</footer>*/
    const footer=document.createElement('footer');
    footer.classList.add('main-footer');
    footer.innerHTML='&copy; 2022 arnelsr';
    return footer;
};




 

