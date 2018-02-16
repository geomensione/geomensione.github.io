gms = {};
//do nothing
gms.fuzzy = () => {};
//remove css class name
gms.removeClass = (el,cls) => {
  el.classList.contains(cls))?el.classList.remove(cls):fuzzy();
};
//add css class
gms.addClass = (el,cls) => {
  el.classList.add(cls);
};

