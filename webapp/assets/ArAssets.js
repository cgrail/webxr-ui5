/*global THREE TWEEN*/
sap.ui.define(['sap/ui/base/ManagedObject'], function(ManagedObject) {
	"use strict";
	var ArAssets = ManagedObject.extend("webar-test.assets.ArAssets", {

		loadTieFigher: function(doneHandler) {
			new THREE.MTLLoader()
				.load('assets/materials.mtl', function(materials) {
					materials.preload();
					new THREE.OBJLoader()
						.setMaterials(materials)
						.load('assets/tie.obj', function(object) {
							var scale = 0.1;
							object.scale.set(scale, scale, scale);
							doneHandler(object);
						});
				});
		},
		
		playExplosionSound: function() {
			var explosion = new Audio("assets/Explosion.mp3");
			explosion.play();
		},
		
		playLaserFireSound: function() {
			var laserFire = new Audio("assets/Laser.mp3");
			laserFire.play();
		},
		
		explode: function(scene) {

			var material = new THREE.SpriteMaterial({
				map: new THREE.CanvasTexture(this.generateSprite()),
				blending: THREE.AdditiveBlending
			});
			for (var i = 0; i < 100; i++) {
				var particle = new THREE.Sprite(material);
				this.initParticle(particle, i * 10);
				scene.add(particle);
			}
		},

		generateSprite: function() {
			var canvas = document.createElement('canvas');
			canvas.width = 16;
			canvas.height = 16;
			var context = canvas.getContext('2d');
			var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width /
				2);
			gradient.addColorStop(0, 'rgba(255,255,255,1)');
			gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
			gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
			gradient.addColorStop(1, 'rgba(0,0,0,1)');
			context.fillStyle = gradient;
			context.fillRect(0, 0, canvas.width, canvas.height);
			return canvas;
		},

		initParticle: function(particle) {
			particle.position.set(0, 0, 0);
			particle.scale.x = particle.scale.y = Math.random() * 32 + 16;
			var duration = 1000;
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