sap.ui.define(["sap/ui/base/ManagedObject"], ManagedObject => {
	"use strict";
	const ArAssets = ManagedObject.extend("webar-test.assets.ArAssets", {

		init() {
			this.explosion = new Audio("assets/Explosion.mp3");
			this.explosion.load();
			this.laserFire = new Audio("assets/Laser.mp3");
			this.laserFire.load();
		},

		loadTieFighter(doneHandler) {
			new THREE.MTLLoader()
				.load("assets/materials.mtl", materials => {
					materials.preload();
					new THREE.OBJLoader()
						.setMaterials(materials)
						.load("assets/tie.obj", object => {
							const scale = 0.1;
							object.scale.set(scale, scale, scale);
							doneHandler(object);
						});
				});
		},

		playExplosionSound() {
			this.explosion.currentTime = 0;
			this.explosion.play();
		},

		playLaserFireSound() {
			this.laserFire.currentTime = 0;
			this.laserFire.play();
		},

		explode(scene) {
			const material = new THREE.SpriteMaterial({
				map: new THREE.CanvasTexture(this.generateSprite()),
				blending: THREE.AdditiveBlending
			});
			for (var i = 0; i < 100; i++) {
				const particle = new THREE.Sprite(material);
				this.initParticle(particle, i * 10);
				scene.add(particle);
			}
		},

		generateSprite() {
			const canvas = document.createElement("canvas");
			canvas.width = 16;
			canvas.height = 16;
			const context = canvas.getContext("2d");
			const gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width /
				2);
			gradient.addColorStop(0, "rgba(255,255,255,1)");
			gradient.addColorStop(0.2, "rgba(0,255,255,1)");
			gradient.addColorStop(0.4, "rgba(0,0,64,1)");
			gradient.addColorStop(1, "rgba(0,0,0,1)");
			context.fillStyle = gradient;
			context.fillRect(0, 0, canvas.width, canvas.height);
			return canvas;
		},

		initParticle(particle) {
			particle.position.set(0, 0, 0);
			particle.scale.x = particle.scale.y = Math.random() * 32 + 16;
			const duration = 1000;
			new TWEEN.Tween(particle)
				.to({}, duration)
				.start();
			new TWEEN.Tween(particle.position)
				.to({
					x: Math.random() * 4000 - 2000,
					y: Math.random() * 1000 - 500,
					z: Math.random() * 4000 - 2000
				}, duration)
				.start();
			new TWEEN.Tween(particle.scale)
				.to({
					x: 0.01,
					y: 0.01
				}, duration)
				.start();
		}
	});

	return ArAssets;
});
