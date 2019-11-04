class Engine {
	constructor() {
		this.canvas = document.createElement('canvas');
		this.canvas.setAttribute('width', window.innerWidth);
		this.canvas.setAttribute('height', window.innerHeight);
		document.body.appendChild(this.canvas);

		this.scale = window.innerWidth / window.innerHeight;


		this.renderer = new THREE.WebGLRenderer({canvas : this.canvas});
		this.renderer.setClearColor(0x000000);

		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(45, this.scale, 0.1, 5000);
		this.camera.position.set(0, 0, 1000);

		this.light = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.light);

		this.geometry = new THREE.SphereGeometry(150 * this.scale, 50, 50);
		this.material = new THREE.MeshBasicMaterial({
														color : 0xffffff,
														vertexColors : THREE.FaceColors
													});

		this.geometry.faces.forEach(face => {
			face.color.setRGB(Math.random(), Math.random(), Math.random());
		});

		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.scene.add(this.mesh);

		this.interface = new Interface(this);
		
		this.loop();
	}

	loop() {

		this.interface.update();

		this.mesh.position.x += this.interface.deltaPositionX;
		this.mesh.position.y += this.interface.deltaPositionY;
		this.mesh.position.z += this.interface.deltaPositionZ;

		this.mesh.rotation.x += this.interface.deltaRotationX;
		this.mesh.rotation.y += this.interface.deltaRotationY;
		this.mesh.rotation.z += this.interface.deltaRotationZ;

		this.renderer.render(this.scene, this.camera);

		window.requestAnimationFrame(this.loop.bind(this));
	}
}