Vue.component('f3d-button', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['button'],
    template: '<div :id="button.id" class="barButton" @click="down">{{button.fn}}</div>',
	  methods:{
	  	down: function(){
			this.button.fn  = (this.button.fn.indexOf(this.button.fn1)==-1)?this.button.fn1:this.button.fn2; 
		}
	  }
  })
