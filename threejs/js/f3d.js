if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			
var f3d = function(){
	var lastSphereCenterX;
	var lastSphereCenterY;
	var oldX,oldY;
	var lastSphere;
	var container;
	var camera, scene, renderer, rollOverGeo;
	var rollOverMesh, rollOverMaterial;
	var cubeGeo, cubeMaterial;
	var mouse, raycaster, isShiftDown = false;
	var objects = [];
	var plane, cube;
	var number_of_f3d_spheres = 1;
	var INTERSECTED;
	var draw_mode = false;
			
	function Sphere(){
		var geometry = new THREE.SphereGeometry( 5, 32, 32 );
		var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
		lastSphere = new THREE.Mesh( geometry, material );
		
		
		return this.lastSphere;
	}
	function distance(x1,y1,x2,y2){
		var a = x1 - x2
		var b = y1 - y2

		return Math.sqrt( a*a + b*b );
	}
	function init() {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		var info = document.createElement( 'div' );
		info.style.position = 'absolute';
		info.style.top = '10px';
		info.style.width = '100%';
		info.style.textAlign = 'center';
		info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - voxel painter - webgl<br><strong>click</strong>: add voxel, <strong>shift + click</strong>: remove voxel';
		container.appendChild( info );
		camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.set(0, 1000, 0 );
		camera.lookAt( new THREE.Vector3() );
		scene = new THREE.Scene();
		// roll-over helpers
		rollOverGeo = new THREE.BoxGeometry( 50, 50, 50 );
		rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
		rollOverMesh = new THREE.Mesh( rollOverGeo, rollOverMaterial );
		//scene.add( rollOverMesh );
		// cubes
		cubeGeo = new THREE.BoxGeometry( 2, 2, 2 );
		cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c, map: new THREE.TextureLoader().load( "textures/square-outline-textured.png" ) } );
		// grid
		var size = 500, step = 10;
		var geometry = new THREE.Geometry();
		for ( var i = - size; i <= size; i += step ) {
			geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
			geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );
			geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
			geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
		}
		var material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2, transparent: true } );
		var line = new THREE.LineSegments( geometry, material );
		scene.add( line );
		//
		raycaster = new THREE.Raycaster();
		mouse = new THREE.Vector2();
		var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
		geometry.rotateX( - Math.PI / 2 );
		plane = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { visible: false } ) );
		scene.add( plane );
		objects.push( plane );
		// Lights
		var ambientLight = new THREE.AmbientLight( 0x606060 );
		scene.add( ambientLight );
		var directionalLight = new THREE.DirectionalLight( 0xffffff );
		directionalLight.position.set( 1, 0.75, 0.5 ).normalize();
		scene.add( directionalLight );
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setClearColor( 0xf0f0f0 );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( renderer.domElement );
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'touchmove', onDocumentMobileMouseMove, false );
		document.addEventListener( 'mousedown', onDocumentMouseDown, false );
		document.addEventListener( 'touchstart', onDocumentMobileMouseDown, false );
		document.addEventListener( 'keydown', onDocumentKeyDown, false );
		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'mouseup', onDocumentMouseUp, false );
		document.addEventListener( 'touchend', onDocumentMobileMouseUp, false );
		//
		window.addEventListener( 'resize', onWindowResize, false );
	}
	function render() {
		renderer.render( scene, camera );
	}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}

	function onDocumentMobileMouseMove( event ){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		mousemove(x,y);
	}

	function onDocumentMouseMove( event ) {
		var x = event.clientX;
		var y =  event.clientY;
		mousemove(x,y);
	}

	function sketch(){
		var geometry = new THREE.Geometry();
		for(var i = 0;i<draw.length-1;i++){
			geometry.vertices.push(new THREE.Vector3(draw[i].x, 1, draw[i].z));
			geometry.vertices.push(new THREE.Vector3(draw[i+1].x, 1, draw[i+1].z));
			var line = new THREE.Line(geometry, material);
			scene.add(line);
		}
	}

	function drawTube(){
		var result = simplify(draw, 1, false);
		console.log('draw length '+draw.length);
		console.log('result length '+result.length);
	}

	function drawPolyline(){
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


	function mousemove( x, y ) {
		if( draw_mode ){

			event.preventDefault();
			


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

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				var intersect = intersects[ 0 ];
				setSphereScaleFromMouseDistance(intersect.point.x,intersect.point.z);
				
			}

			render();	
		}else{
			event.preventDefault();

			mouse.set( ( x / window.innerWidth ) * 2 - 1, - ( y / window.innerHeight ) * 2 + 1 );

			raycaster.setFromCamera( mouse, camera );

			var intersects = raycaster.intersectObjects( objects );

			if ( intersects.length > 0 ) {

				var intersect = intersects[ 0 ];

				//document.getElementById('coordinates').innerText = 'x= '+intersect.point.x+', y= '+intersect.point.y+', z= '+intersect.point.z;

			}
		}
		/*
		event.preventDefault();
		mouse.set( ( event.clientX / window.innerWidth ) * 2 - 1, - ( event.clientY / window.innerHeight ) * 2 + 1 );
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( objects );
		if ( intersects.length > 0 ) {
			var intersect = intersects[ 0 ];
			rollOverMesh.position.copy( intersect.point ).add( intersect.face.normal );
			rollOverMesh.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
		}
		render();
		*/
	}
	function onDocumentMobileMouseDown( event ){
		var x = event.targetTouches[0].pageX;
		var y = event.targetTouches[0].pageY;
		mousedown(x,y);
	}

	function onDocumentMouseDown( event ) {
		var x = event.clientX;
		var y =  event.clientY;
		mousedown(x,y);
	}

	function mousedown( x, y ) {
		
		draw_mode = true;
		event.preventDefault();
		maxX = minX = x;
		maxY = minY = y;
		mouse.set( ( x / window.innerWidth ) * 2 - 1, - ( y / window.innerHeight ) * 2 + 1 );
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( objects );
		
		if ( intersects.length > 0 ) {
			var intersect = intersects[ 0 ];
			var voxel = sphere();
			voxel.name = 'f3d_sphere_' + number_of_f3d_spheres;
			number_of_f3d_spheres += 1;
			setOldCoord(intersect.point.x,intersect.point.z);
			setLastSphereCenter(intersect.point.x,intersect.point.z);
			voxel.position.copy( intersect.point ).add( intersect.face.normal );
			//voxel.position.divideScalar( 50 ).floor().multiplyScalar( 50 ).addScalar( 25 );
			scene.add( voxel );
		} else {
			console.log('nothing here');
		}
		render();	
	}

	function onDocumentMobileMouseUp( event ){
		mouseup();
	}

	function onDocumentMouseUp( event ){

		mouseup();
	}

	function draw_circle_link(){

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
				//line.scale.x = line.scale.y = line.scale.z =  p[ 1 ];
				//line.position.x = p[ 2 ][ 0 ];
				//line.position.y = p[ 2 ][ 1 ];
				//line.position.z = p[ 2 ][ 2 ];
				scene.add( line );

			}
			points = [];
		}

	}

	function mouseup(  ){

		draw_mode = false;
		event.preventDefault();
		/*
		//var matched = r.Recognize(gest);
		//console.log(matched);
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vector3( _3dminX, 1, _3dminZ ) );
		geometry.vertices.push( new THREE.Vector3( _3dminX, 1, _3dmaxZ ) );

		geometry.vertices.push( new THREE.Vector3( _3dminX, 1, _3dminZ ) );
		geometry.vertices.push( new THREE.Vector3( _3dmaxX, 1, _3dminZ ) );

		geometry.vertices.push( new THREE.Vector3(   _3dmaxX, 1, _3dmaxZ ) );
		geometry.vertices.push( new THREE.Vector3( _3dmaxX, 1,  _3dminZ) );

		geometry.vertices.push( new THREE.Vector3(   _3dmaxX, 1, _3dmaxZ ) );
		geometry.vertices.push( new THREE.Vector3( _3dminX, 1,  _3dmaxZ) );


		var material = new THREE.LineBasicMaterial( { color: 0xff0000, opacity: 1, transparent: false } );
		var line = new THREE.LineSegments( geometry, material );
		scene.add( line );
		var width = _3dmaxX -_3dminX;
		var height = _3dmaxZ -_3dminZ;
		switch(matched.Name){
			case "rectangle":

				//console.log('width '+width+', height '+height);
				var geometry = new THREE.BoxGeometry( width, 1 , height );
				geometry.translate(_3dminX+width/2, 1, _3dminZ+height/2);
				var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
				var cube = new THREE.Mesh( geometry, material );
				scene.add( cube );
				break;
			case "circle":
				if(width<height){
					var radius = width/2;
				}else{
					var radius = height/2;
				}
				var circleGeometry = new THREE.SphereGeometry( radius, 32, 32 );

				circleGeometry.translate(_3dminX+width/2, 3, _3dminZ+height/2);
				points.push(
					new THREE.Vector3(_3dminX+width/2, 3, _3dminZ+height/2)
				);
				var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
				var circle = new THREE.Mesh( circleGeometry, material );
				scene.add( circle );
				circle_in_scene++;
				draw_circle_link();
				break;
			case "triangle":
			case "x":
			case "arrow":
			case "delete":
			case "star":
			case "pigtail":
				console.log('unsupported sign');
				break;
			case "v":
			case "left square bracket":
			case "right square bracket":
			case "left curly brace":
			case "right curly brace":
			case "check":
			case "caret":
			case "zig-zag":
				//drawPolyline();
				//sketch();
				drawTube();



			//}
			break;


			default:
				console.log(mystroke);
				var geometry = new THREE.Geometry();
				geometry.vertices.push(new THREE.Vector3(mystroke[0].position.x, 1, mystroke[0].position.z));
				geometry.vertices.push(new THREE.Vector3(mystroke[1].position.x, 1, mystroke[1].position.z));
				var line = new THREE.Line(geometry, material);
				scene.add(line);


		}
		*/
	//document.getElementById('coordinates').innerText =  '_3dmaxX '+_3dmaxX+' _3dminX '+_3dminX+' _3dmaxZ '+_3dmaxZ+' _3dminZ '+_3dminZ;	               
		gest = new Array();
		mystroke = new Array();
		draw = new Array();

		render();	
	}
	function onDocumentKeyDown( event ) {
		switch( event.keyCode ) {
			case 16: isShiftDown = true; break;
		}
	}
	function onDocumentKeyUp( event ) {
		switch ( event.keyCode ) {
			case 16: isShiftDown = false; break;
		}
	}
	function setOldCoord(x,y){
			oldX = x;
			oldY = y;
	}
	
	function setLastSphereCenter(x,y){
		lastSphereCenterX = x;
		lastSphereCenterY = y;
	}
	
	function setSphereScaleFromMouseDistance(x,y){
		let min_r = distance(lastSphereCenterX,lastSphereCenterY,oldX,oldY);
		let max_r = distance(lastSphereCenterX,lastSphereCenterY,x,y);
		if (min_r === 0)
			min_r = 1;
		let scale = max_r/min_r;
		lastSphere.scale.x = scale;
		lastSphere.scale.y = scale;
		lastSphere.scale.z = scale;
	}
	return{
		getOldCoord: function(){
			return {x:oldX,y:oldY};
		},
		sphere: Sphere,
		getMouseDistance: function(x,y){
			return distamce(oldX,oldY,x,y);
		},
		init: init,
		render: render
	}
}

var f = new f3d();
f.init();
f.render();


