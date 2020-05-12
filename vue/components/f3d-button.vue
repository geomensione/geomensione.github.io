<template>
	<div :id="button.id" class="barButton" @click="down">{{button.fn}}</div>
</template>
<scripts>
exports default {
	name: "f3d-button",
	props: ['buttons'],
	methods: function(){
		return{
			down: function(){
				this.button.fn  = (this.button.fn.indexOf(this.button.fn1)==-1)?this.button.fn1:this.button.fn2; 
			}
		}
	}
}
</scripts>
<style scoped>
</style>
