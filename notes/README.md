# IIFE

```javascript
var om = (function(){
	var priv1 = 0, priv2 = 0;
	function toString(){
		return priv1 + ' ' + priv2;
	} 
	return{
		toString: toString
	}
})()
```

{toString: ƒ}

om.toString()

"0 0"

```javascript
om = (function(v){
	var priv1 = 0, priv2 = 0;
	if(v)
		priv1 = priv2 = v;
	function toString(){
		return priv1 + ' ' + priv2;
	} 
	return{
		toString: toString
	}
})()
```

{toString: ƒ}

om.toString()

"0 0"

```javascript
var om2 = new om(2)
VM670:1 Uncaught TypeError: om is not a constructor
    at <anonymous>:1:11
(anonymous) @ VM670:1
```

# MODULE

```javascript
om = function(v){
	var priv1 = 0, priv2 = 0;
	if(v)
		priv1 = priv2 = v;
	function toString(){
		return priv1 + ' ' + priv2;
	} 
	return{
		toString: toString
	}
}
ƒ (v){
	var priv1 = 0, priv2 = 0;
	if(v)
		priv1 = priv2 = v;
	function toString(){
		return priv1 + ' ' + priv2;
	} 
	return{
		toString: toString
	}
}
```

var om2 = new om();

undefined

om2.toString()

"0 0"

om2 = new om(2);

{toString: ƒ}

om2.toString()

"2 2"
