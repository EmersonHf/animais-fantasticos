import debounce from './debounce.js';


export default class ScrollAnima{
  constructor(sections){
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
    
  }
  //pega a distancia de cada item em relação
  //ao topo do site
  getDistance(){
    this.distance = [...this.sections].map((section) =>{
      const offset = section.offsetTop;
      return{
        element: section,
        offset: Math.floor(offset - this.windowMetade)
      }
    });
  }
  //verifica a distancia em cada objeto
  //em relaçao ao scroll do site
  checkDistance(){
      
          this.distance.forEach((item)=>{
        if (window.scrollY > item.offset) {
          item.element.classList.add("ativo");
        } else if (item.element.classList.contains("ativo")) {
          item.element.classList.remove("ativo");
        }  do {
          item.element.classList.add('ativo');
        } while (window.scrollY == 0);
      })
    
   
  }

     animaScroll(){
      this.sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - this.windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else if(section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }

    init(){
      if(this.sections.length){
        this.getDistance()
        this.getDistance();
      window.addEventListener('scroll', this.checkDistance);
      
      }
      return this;

      }

      //remove o event do scroll
       stop(){
        window.removeEventListener('scroll',this.checkDistance)
       }
  }
