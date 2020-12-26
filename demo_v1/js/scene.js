import * as THREE from './three.min.js';

var camera, scene, renderer;

var width = 250;
var height = 400;
var pixelRatio = width/height;

var isUserInteracting = false,
	onPointerDownMouseX = 0, onPointerDownMouseY = 0,
	lon = 0, onPointerDownLon = 0,
	lat = 0, onPointerDownLat = 0,
	phi = 0, theta = 0;

init();
animate();

function init() {
	var container, mesh;

	container = document.getElementById( 'container' );

	camera = new THREE.PerspectiveCamera( 75, pixelRatio, 1, 1100 );
	camera.target = new THREE.Vector3( 0, 0, 0 );

	scene = new THREE.Scene();

	var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
	// invert the geometry on the x-axis so that all of the faces point inward
	geometry.scale( - 1, 1, 1 );

	var texture = new THREE.TextureLoader().load( 'images/pan.jpg' );
	var material = new THREE.MeshBasicMaterial( { map: texture } );

	mesh = new THREE.Mesh( geometry, material );

	scene.add( mesh );

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( pixelRatio );
	renderer.setSize( width, height );
	container.appendChild( renderer.domElement );

	container.style.touchAction = 'none';
	container.addEventListener( 'pointerdown', onPointerDown, false );

	document.addEventListener( 'wheel', onDocumentMouseWheel, false );

	//

	document.addEventListener( 'dragover', function ( event ) {

		event.preventDefault();
		event.dataTransfer.dropEffect = 'copy';

	}, false );

	document.addEventListener( 'dragenter', function () {

		document.body.style.opacity = 0.5;

	}, false );

	document.addEventListener( 'dragleave', function () {

		document.body.style.opacity = 1;

	}, false );

	document.addEventListener( 'drop', function ( event ) {

		event.preventDefault();

		var reader = new FileReader();
		reader.addEventListener( 'load', function ( event ) {

			material.map.image.src = event.target.result;
			material.map.needsUpdate = true;

		}, false );
		reader.readAsDataURL( event.dataTransfer.files[ 0 ] );

		document.body.style.opacity = 1;

	}, false );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = pixelRatio;
	camera.updateProjectionMatrix();

	renderer.setSize( width, height );

}

function onPointerDown( event ) {

	if ( event.isPrimary === false ) return;

	isUserInteracting = true;

	onPointerDownMouseX = event.clientX;
	onPointerDownMouseY = event.clientY;

	onPointerDownLon = lon;
	onPointerDownLat = lat;

	document.addEventListener( 'pointermove', onPointerMove, false );
	document.addEventListener( 'pointerup', onPointerUp, false );

}

function onPointerMove( event ) {

	if ( event.isPrimary === false ) return;

	lon = ( onPointerDownMouseX - event.clientX ) * 0.1 + onPointerDownLon;
	lat = ( event.clientY - onPointerDownMouseY ) * 0.1 + onPointerDownLat;

}

function onPointerUp() {

	if ( event.isPrimary === false ) return;

	isUserInteracting = false;

	document.removeEventListener( 'pointermove', onPointerMove );
	document.removeEventListener( 'pointerup', onPointerUp );

}

function onDocumentMouseWheel( event ) {

	var fov = camera.fov + event.deltaY * 0.05;

	camera.fov = THREE.MathUtils.clamp( fov, 10, 75 );

	camera.updateProjectionMatrix();

}

function animate() {

	requestAnimationFrame( animate );
	update();

}

function update() {

	if ( isUserInteracting === false ) {

		lon += 0.1;

	}

	lat = Math.max( - 85, Math.min( 85, lat ) );
	phi = THREE.MathUtils.degToRad( 90 - lat );
	theta = THREE.MathUtils.degToRad( lon );

	camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
	camera.target.y = 500 * Math.cos( phi );
	camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );

	camera.lookAt( camera.target );

	/*
	// distortion
	camera.position.copy( camera.target ).negate();
	*/
	renderer.render( scene, camera );
}