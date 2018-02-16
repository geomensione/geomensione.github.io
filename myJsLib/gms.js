gms = {};
gms.prototype.d = document;
//do nothing
gms.prototype.fuzzy = () => {};
//get element from class name
gms.prototype.getFromClass = (str) => {
  return this.d.getElementsByClassName(str)[0];
}
//remove css class name
gms.prototype.removeClass = (el,cls) => {
  if(typeof el === 'string')
    el = this.getFromClass(el);
  el.classList.contains(cls))?el.classList.remove(cls):fuzzy();
};
//add css class
gms.addClass = (el,cls) => {
  el.classList.add(cls);
};

