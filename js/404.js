var scene		= new THREE.Scene();
var camera		= new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer	= new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var text_canvas		= document.createElement("canvas");
var text_render		= text_canvas.getContext("2d");
text_canvas.width	= 512;
text_canvas.height	= 512;

text_render.fillStyle	= "white";
text_render.fillRect(0, 0, text_canvas.width, text_canvas.height);

/*
Crosshair (center text)

text_render.strokeStyle="red";
text_render.moveTo(text_canvas.width/2,0);
text_render.lineTo(text_canvas.width/2,text_canvas.height);
text_render.stroke();
text_render.moveTo(0,text_canvas.height/2);
text_render.lineTo(text_canvas.width,text_canvas.height/2);
text_render.stroke();
*/

text_render.fillStyle = "black";
text_render.font = "128pt monospace";

text_render.fillText('404', 	(text_canvas.width/2)-152,
								(text_canvas.height/2)-96);
text_render.fillText('NOT', 	(text_canvas.width/2)-152,
								(text_canvas.height/2)+64);
text_render.fillText('FOUND',	0,
								(text_canvas.height/2)+224);

var basic_material = new THREE.MeshBasicMaterial
(
	{map: new THREE.Texture(text_canvas), transparent: true}
);

basic_material.map.needsUpdate = true;

var cube = new THREE.Mesh(new THREE.CubeGeometry(150, 150, 150), basic_material);

cube.doubleSided = true;
scene.add(cube);
camera.position.z = 200;

var render = function()
{
	requestAnimationFrame(render);
	cube.rotation.y += 0.01;
	cube.rotation.z += 0.01;

	renderer.render(scene, camera);
};

render();
