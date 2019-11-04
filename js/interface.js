class Interface {
	constructor(engine) {
		this.engine = engine;

		this.deltaPositionX = parseFloat(document.getElementById('deltaPositionX').value);
		this.deltaPositionY = parseFloat(document.getElementById('deltaPositionY').value);
		this.deltaPositionZ = parseFloat(document.getElementById('deltaPositionZ').value);

		this.deltaRotationX = parseFloat(document.getElementById('deltaRotationX').value);
		this.deltaRotationY = parseFloat(document.getElementById('deltaRotationY').value);
		this.deltaRotationZ = parseFloat(document.getElementById('deltaRotationZ').value);
	}

	update() {
		this.deltaPositionX = parseFloat(document.getElementById('deltaPositionX').value);
		this.deltaPositionY = parseFloat(document.getElementById('deltaPositionY').value);
		this.deltaPositionZ = parseFloat(document.getElementById('deltaPositionZ').value);

		this.deltaRotationX = parseFloat(document.getElementById('deltaRotationX').value);
		this.deltaRotationY = parseFloat(document.getElementById('deltaRotationY').value);
		this.deltaRotationZ = parseFloat(document.getElementById('deltaRotationZ').value);
	}
}