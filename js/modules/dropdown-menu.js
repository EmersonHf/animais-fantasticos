import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events){
    if(events === undefined) this.events = ['touchstart', 'click']
    else this.events = events;
    this.events = ['touchstart', 'click'];
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('active');
    outsideClick(element, ['touchstart', 'click'], () => {
      element.classList.remove('active');
    });
  };
  addDropDownMenusEvent(){
    this.dropdownMenus.forEach(menu => {
      ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }
  init(){
    if(this.dropdownMenus.length){
      this.addDropDownMenusEvent();
    }
    return this;
  }
}