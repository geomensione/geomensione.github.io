'use strict';

class myUtils {
	constructor(){
	}
	
	write_dom(str){
		b.innerHTML += str+'<br /> ';
	}		
}

class Canvas2D {
	constructor(){
		this.ctx = c.getContext('2d');
		this.ctx.font = "30px Arial";
	}
	write_2d(str,x,y){
		if(x) this.canvas_text_x = x;
		if(y) this.canvas_text_y = y;
		this.ctx.fillText(str,this.canvas_text_x,this.canvas_text_y);
		this.canvas_text_y += 30;
	}
}

class Canvas3D {
	constructor(){
		var d = document.documentElement;
		this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
		this.camera.position.set(0, 1000, 0 );
		this.camera.lookAt( new THREE.Vector3() );
		this.scene = new THREE.Scene();
		
		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();
		var geometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
		geometry.rotateX( - Math.PI / 2 );
		this.plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
		this.scene.add( this.plane );
		
		var ambientLight = new THREE.AmbientLight( 0x606060 );
		this.scene.add( ambientLight );
		var directionalLight = new THREE.DirectionalLight( 0xffffff );
		directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
		this.scene.add( directionalLight );
		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setClearColor( 0xf0f0f0 );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		d.appendChild( this.renderer.domElement );
		this.group = new THREE.Group();
		this.scene.add(this.group);
		document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
		document.addEventListener( 'touchmove', this.onDocumentMobileMouseMove, false );
		document.addEventListener( 'mousedown', this.onDocumentMouseDown, false );
		document.addEventListener( 'touchstart', this.onDocumentMobileMouseDown, false );
		document.addEventListener( 'keydown', this.onDocumentKeyDown, false );
		document.addEventListener( 'keyup', this.onDocumentKeyUp, false );
		document.addEventListener( 'mouseup', this.onDocumentMouseUp, false );
		document.addEventListener( 'touchend', this.onDocumentMobileMouseUp, false );
		//
		window.addEventListener( 'resize', this.onWindowResize, false );
		Array.prototype.insertAt = function(pos,val){
			let first = this.slice(0,pos+1);
			let second = this.slice(pos+1,this.length);
			return first.concat(val).concat(second);
		}
		this.me = this;
	}
	
	write_2d(str,x,y){
		if(x) this.canvas_text_x = x;
		if(y) this.canvas_text_y = y;
		this.ctx.fillText(str,this.canvas_text_x,this.canvas_text_y);
		this.canvas_text_y += 30;
	}
	render() {
		renderer.render( scene, camera );
		
	}
	
	onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	onDocumentMobileMouseMove( event ){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		mousemove(event, x,y);
	}

	onDocumentMouseMove( event ) {
		var x = event.clientX;
		var y =  event.clientY;
		me.mousemove(event, x,y);
	}

	sketch(){
		var geometry = new THREE.Geometry();
		for(var i = 0;i<draw.length-1;i++){
			geometry.vertices.push(new THREE.Vector3(draw[i].x, 1, draw[i].z));
			geometry.vertices.push(new THREE.Vector3(draw[i+1].x, 1, draw[i+1].z));
			var line = new THREE.Line(geometry, material);
			scene.add(line);
		}
	}

	drawTube(){
		var result = simplify(draw, 1, false);
		console.log('draw length '+draw.length);
		console.log('result length '+result.length);
	}

	drawPolyline(){
		var corners=[draw[0]]
		var n=0
		var t=0
		var lastCorner=draw[0]
		for (var i=1; i<draw.length-2; i++){

		  var pt=draw[i+1]
		  var d=delta(lastCorner, draw[i-1])

		  if (len(d)>20 && n>2){
			ac=delta(draw[i-1], pt)
			if (Math.abs(angle_between(ac, d)) > Math.PI/4){
			  pt.index=i
			  corners.push(pt)
			  lastCorner=pt
			  n=0
			  t=0
			}
		  }
		  n++
		}

		if (len(delta(draw[draw.length-1], draw[0]))<25){
		  corners.push(draw[0])

		  //c.fillStyle='rgba(0, 0, 255, 0.3)'

		  //if (corners.length==5){
			//check for square
			var p1=corners[0]
			var p2=corners[1]
			var p3=corners[2]
			var p4=corners[3]
			var p1p2=delta(p1, p2)
			var p2p3=delta(p2, p3)
			var p3p4=delta(p3, p4)
			var p4p1=delta(p4, p1)
			if ((Math.abs(angle_between(p1p2, p2p3)-Math.PI/2))<Math.PI/6
			&& (Math.abs(angle_between(p2p3, p3p4)-Math.PI/2))<Math.PI/6
			&& (Math.abs(angle_between(p3p4, p4p1)-Math.PI/2))<Math.PI/6
			&& (Math.abs(angle_between(p4p1, p1p2)-Math.PI/2))<Math.PI/6){
			  //c.fillStyle='rgba(0, 255, 255, 0.3)'
			  var p1p3=delta(p1, p3)
			  var p2p4=delta(p2, p4)

			  var diag=(len(p1p3)+len(p2p4))/4.0

			  var tocenter1=scale(unit(p1p3), -diag)
			  var tocenter2=scale(unit(p2p4), -diag)

			  var center=average([p1, p2, p3, p4])	

			  var angle=angle_between(p1p3, p2p4)

			  corners=[add(center, tocenter1),
				  add(center, tocenter2),
				  add(center, scale(tocenter1, -1)),
				  add(center, scale(tocenter2, -1)),
				  add(center, tocenter1)]	
			}


		  }


		  var geometry = new THREE.Geometry();
		  geometry.vertices.push(new THREE.Vector3(corners[0].x, 1, corners[0].z));
		  for (var i=1; i<corners.length; i++){
			geometry.vertices.push(new THREE.Vector3(corners[i].x, 1, corners[i].z));
		  }
		  geometry.vertices.push(new THREE.Vector3(draw[draw.length-1].x, 1, draw[draw.length-1].z));
		  var line = new THREE.Line(geometry, material);
		  scene.add(line);
	}


	mousemove( event, x, y ) {
		if( draw_mode ){

			
			


			/*	
			console.log('minX '+minX);
			console.log('maxX '+maxX);
			console.log('minY '+minY);
			console.log('maxY '+maxY);
			console.log('clientX '+event.clientX);
			console.log('clientY '+event.clientY);
			*/
			mouse.set( ( x / window.innerWidth ) * 2 - 1, - ( y / window.innerHeight ) * 2 + 1 );

			raycaster.setFromCamera( mouse, camera );
			var intersects = raycaster.intersectObjects( scene.children );

			
			if ( intersects.length > 0 ) {

				var intersect = intersects[ 0 ];
				setSphereScaleFromMouseDistance(intersect.point.x,intersect.point.z);

			}
		
			

			render();	
		}else{
			

			mouse.set( ( x / window.innerWidth ) * 2 - 1, - ( y / window.innerHeight ) * 2 + 1 );

			raycaster.setFromCamera( mouse, camera );

			var intersects = raycaster.intersectObjects( scene.children );

			if ( intersects.length > 0 ) {

				if(indexPickedObject || indexPickedObject === 0){
					for(let i = 0,intersect_length = intersects.length;i<intersect_length;i++){
						if(intersects[i].object.name.length === 0)
							scene.children[f3d_scene[0][indexPickedObject]].position.copy( intersects[i].point );
					}
					
					
				}

			}
			
		}
	}
	onDocumentMobileMouseDown( event ){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		mousedown(event, x,y);
	}

	onDocumentMouseDown( event ) {
		var x = event.clientX;
		var y =  event.clientY;
		mousedown(event, x,y);
	}

	mousedown( event, x, y ) {
		
		
		maxX = minX = x;
		maxY = minY = y;
		mouse.set( ( x / window.innerWidth ) * 2 - 1, - ( y / window.innerHeight ) * 2 + 1 );
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( scene.children, true );
		
		if ( intersects.length > 0 ) {
			intersects.map(
				function(e){
					info2.innerHTML += e.object.name;
				}
			);
			if(intersects[ 0 ].object.name.indexOf('f3d_sphere_') !== -1){
				for(let o = 0,scene_children_length = scene.children.length;o<scene_children_length;o++){
					let index_f3d_sphere = parseInt(intersects[ 0 ].object.name.split('_')[2])-1;
					if(scene.children[o].name === intersects[ 0 ].object.name)
						indexPickedObject = index_f3d_sphere;
				}
			}else if(intersects[ 0 ].object.name.indexOf('interpolation_') !== -1){
				for(let o = 0,group_children_length = group.children.length;o<group_children_length;o++){
					if(group.children[o].name === intersects[ 0 ].object.name){
						//ottendo id sfera dal gruppo
						//clono l'oggetto
						//lo inserisco nella scena
						//aggiungo un l'id alla f3d_scene(basta aggiungere, come ultimo elemento, l'ultimo id incrementato di uno)
						let token_objId = intersects[ 0 ].object.name.split('_')[1];
						let first = scene.children.slice(0,f3d_scene[0][token_objId]+1);
						let second = scene.children.slice(f3d_scene[0][token_objId]+1,scene.children.length);
						let obj = group.children[o].clone();
						obj.name = 'f3d_sphere_' + (parseInt(token_objId)+1);
						obj.material.color = {r:1,g:1,b:0};
						number_of_f3d_spheres += 1;
						//scene.add( obj );						
						let tmp = first.concat(obj);
						second.map(function(e){
							let str = e.name.split('_');
							e.name = str[0]+'_'+str[1]+'_'+(parseInt(str[2])+1);
						})
						scene.children.length = 0;
						scene.children = tmp.concat(second);
						f3d_scene[0].push(f3d_scene[0][f3d_scene[0].length-1]+1);
						indexPickedObject = (parseInt(token_objId)+1);
					}
						
				}
			}else{
				draw_mode = true;
				var intersect = intersects[ 0 ];
				var voxel = Sphere(0xffff00);
				voxel.name = 'f3d_sphere_' + number_of_f3d_spheres;
				number_of_f3d_spheres += 1;
				setOldCoord(intersect.point.x,intersect.point.z);
				setLastSphereCenter(intersect.point.x,intersect.point.z);
				voxel.position.copy( intersect.point ).add( intersect.face.normal );
				//voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
				scene.add( voxel );
				f3d_scene[0].push(scene.children.length-1);
				//objects.push( voxel );
			}
			
		} else {
			console.log('nothing here');
		}
		render();	
	}

	onDocumentMobileMouseUp( event ){
		mouseup(event);
	}

	onDocumentMouseUp( event ){

		mouseup(event);
	}

	draw_circle_link(){

		if (circle_in_scene % 3 === 0){

			var geometry = new THREE.Geometry(),
			colors = [];

			n_sub = 6;

			var position, index;

			var spline = new THREE.Spline( points );

			for ( i = 0; i < points.length * n_sub; i ++ ) {

				index = i / ( points.length * n_sub );
				position = spline.getPoint( index );

				geometry.vertices[ i ] = new THREE.Vector3( position.x, position.y, position.z );

				colors[ i ] = new THREE.Color( 0xffffff );
				colors[ i ].setHSL( 0.6, 1.0, Math.max( 0, - position.x / 200 ) + 0.5 );

			}
			geometry.colors = colors;

			// lines

			material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 1, linewidth: 3, vertexColors: THREE.VertexColors } );

			var line, p, scale = 0.3, d = 225;
			var parameters =  [
				[ material, scale*1.5, [-d,0,0],  geometry ],
			];

			for ( i = 0; i < parameters.length; ++ i ) {

				p = parameters[ i ];
				line = new THREE.Line( p[ 3 ],  p[ 0 ] );
				scene.add( line );

			}
			points = [];
		}

	}

	interpolateSpheres(){
		var scene = f.getScene();
		var f3d_scene = f.getF3dScene();
		
		if(f3d_scene[0].length > 1){
			for(let i = 0,f3d_scene_length = f3d_scene[0].length;i<f3d_scene_length-1;i++){
				let x_diff = scene.children[f3d_scene[0][i]].position.x - scene.children[f3d_scene[0][i+1]].position.x;
				let y_diff = scene.children[f3d_scene[0][i]].position.y - scene.children[f3d_scene[0][i+1]].position.y;
				let z_diff = scene.children[f3d_scene[0][i]].position.z - scene.children[f3d_scene[0][i+1]].position.z;
				let scale_x_diff = scene.children[f3d_scene[0][i]].scale.x - scene.children[f3d_scene[0][i+1]].scale.x;
				let scale_y_diff = scene.children[f3d_scene[0][i]].scale.y - scene.children[f3d_scene[0][i+1]].scale.y;
				let scale_z_diff = scene.children[f3d_scene[0][i]].scale.z - scene.children[f3d_scene[0][i+1]].scale.z;
				let token_position_x,token_position_y,token_position_z, token_scale_x,token_scale_y,token_scale_z;
				let distance = Math.sqrt(x_diff * x_diff + y_diff * y_diff + z_diff * z_diff);
				let numberOfTokens;
				//todo: calcolare il numero dei tokens in base alla dimensione delle due sfere
				numberOfTokens = distance/60;
				
				token_position_x = x_diff/numberOfTokens;
				token_position_y = y_diff/numberOfTokens;
				token_position_z = z_diff/numberOfTokens;
				token_scale_x = scale_x_diff/numberOfTokens;
				token_scale_y = scale_y_diff/numberOfTokens;
				token_scale_z = scale_z_diff/numberOfTokens;
				
				//s<numberOfTokens-1, perché altrimenti la penultima sfera sarebbe grande come l'ultima
				for(let s = 0;s<numberOfTokens-1;s++){
					let sphere = f.sphere(0xff0000);
					sphere.position.x = scene.children[f3d_scene[0][i]].position.x - token_position_x*(s+1);
					sphere.position.y = scene.children[f3d_scene[0][i]].position.y - token_position_y*(s+1);
					sphere.position.z = scene.children[f3d_scene[0][i]].position.z - token_position_z*(s+1);
					sphere.scale.x = scene.children[f3d_scene[0][i]].scale.x - token_scale_x*(s+1);
					sphere.scale.y = scene.children[f3d_scene[0][i]].scale.y - token_scale_y*(s+1);
					sphere.scale.z = scene.children[f3d_scene[0][i]].scale.z - token_scale_z*(s+1);
					sphere.name = 'interpolation_'+i+'_'+s;
					group.add( sphere );
				}
				
					
			}
			render();
		}
	}
	
	mouseup( event ){
	        info2.innerHTML = '';
		draw_mode = false;
		if(indexPickedObject || indexPickedObject !== undefined){
			indexPickedObject = undefined;
			var scene = f.getScene();
			group.children.length = 0;
						
		}
		render();
		if(f3d_scene[0].length > 1){
			interpolateSpheres();
		}
		
		gest = new Array();
		mystroke = new Array();
		draw = new Array();

		render();	
	}
	onDocumentKeyDown( event ) {
		switch( event.keyCode ) {
			case 16: isShiftDown = true; break;
		}
	}
	onDocumentKeyUp( event ) {
		switch ( event.keyCode ) {
			case 16: isShiftDown = false; break;
		}
	}
	setOldCoord(x,y){
			oldX = x;
			oldY = y;
	}
	
	setLastSphereCenter(x,y){
		lastSphereCenterX = x;
		lastSphereCenterY = y;
	}
	
	setSphereScaleFromMouseDistance(x,y){
		let min_r = distance(lastSphereCenterX,lastSphereCenterY,oldX,oldY);
		let max_r = distance(lastSphereCenterX,lastSphereCenterY,x,y);
		if (min_r === 0)
			min_r = 1;
		let scale = max_r/min_r;
		lastSphere.scale.x += 1;
		lastSphere.scale.y += 1;
		lastSphere.scale.z += 1;
	}
	
}

class app{
	constructor(){
		this.canvas = new Canvas3D();
		
	}
}

var demo = new app();	
