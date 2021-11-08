// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();

function cubo(x, y, z, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}

function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.5, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);    

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
      
    light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, semejante al sol.
    light.position.set( -10, 25, 25 );             //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    Cubo = [];   // Definir un array unidimensional
  
    Axis=["X","Y","Z"];


    dim = 2; 		//Medida que va a tener cada cubo
    delta =1.2; 		//Movimiento de cada cubo con respecto a los ejes
    angulo= (Math.PI/2)

    Cubo.push(cubo(dim, dim, dim, 0xE61F1F, 'Physical', false));
    Cubo.push(cubo(dim, dim, dim, 0xCEE61F, 'Phong', false));
    Cubo.push(cubo(dim, dim, dim, 0x1FE6E3, 'Standard', false));

 
    // Movimiento de ejes cubo 0
    Cubo[0].translateX(delta);
    Cubo[0].translateY(delta);
    Cubo[0].translateZ(delta);

    while (pos==1.1){
    //movimiento de ejes cubo 1
    angulo=(Math.PI/2)

    Cubo[1].translateX(pos);
    Cubo[1].translateY(pos);
    Cubo[1].translateZ(pos);

    //movimiento de ejes cubo 2
    angulo=(Math.PI/2)

    Cubo[2].translateX(pos);
    Cubo[2].translateY(pos);
    Cubo[2].translateZ(pos);
    pos++
    }
    //Movimiento del cubo 1
    cam=1.5;
    Cubo[1].translateY(cam);

    //movimiento del cubo 2 
    cmb=2.3;
    Cubo[2].translateY(cmb);

    //Escalado del cubo 1 y 2
    Cubo[1].scale.set(0.5,0.5,0.5)
    Cubo[2].scale.set(0.25,0.25,0.25)

    //Rotacion de los cubos 1 y 3 
    angulo=(Math.PI/4)
    Cubo[0].rotateY(angulo);
    Cubo[2].rotateY(angulo);

    // position and point the camera to the center of the scene
    camera.position.set(20, 20, 10);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}