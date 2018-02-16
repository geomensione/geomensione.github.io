gms = {};
gms.prototype.d = document;

gms.prototype.consoleObject = (o) => {
  console.log(JSON.stringify(o));
}
  
gms.prototype.printObject = (o) => {
  document.writeln(JSON.stringify(o));
}
//do nothing
gms.prototype.fuzzy = () => {};
//get element from class name
gms.prototype.getFromClass = (str,i) => {
  if(i)
    return this.d.getElementsByClassName(str)[i];
  else
    return this.d.getElementsByClassName(str)[0];
}
//get element from class name
gms.prototype.getAllFromClass = (str,i) => {
  return this.d.getElementsByClassName(str);
}
//remove css class name
gms.prototype.removeClass = (el,cls) => {
  if(typeof el === 'string')
    el = this.getFromClass(el);
  el.classList.contains(cls)?el.classList.remove(cls):fuzzy();
};
//add css class
gms.prototype.addClass = (el,cls) => {
  el.classList.add(cls);
};
//shuffle fn
gms.prototype.shuffle = (array) => {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
