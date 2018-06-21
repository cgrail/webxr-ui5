/*global THREE TWEEN*/
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"webar-test/assets/ArAssets"
], function(Controller, MessageToast, ArAssets) {
	"use strict";

	return Controller.extend("webar-test.controller.Game", {
		onInit: function() {
			this.arView = this.byId("arView");
			this.assets = new ArAssets();
			this.assets.loadTieFigher(function(fighter) {
				this.fighter = fighter;
				this.spawnFighter();
			}.bind(this));
		},

		spawnFighter: function() {
			var fighter = this.fighter;
			var target = this.getPositionWithOffset(1);
			target.x -= Math.random();
			var initialPos = target.clone();
			initialPos.z -= 10;
			fighter.position.copy(initialPos);
			fighter.quaternion.copy(this.arView.getOrientation());
			this.arView.getScene().add(fighter);
			var tween = new TWEEN.Tween(initialPos).to(target, 2000);
			tween.onUpdate(function() {
				fighter.position.z = initialPos.z;
			});
			tween.start();
		},

		shoot: function() {
			this.assets.playLaserFireSound();
			var scene = this.arView.getScene();
			var geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
			var material = new THREE.MeshBasicMaterial({
				color: "red"
			});
			var laser = new THREE.Mesh(geometry, material);
			var startPosition = this.getPositionWithOffset(0.5);
			startPosition.y -= 0.2;
			var endPosition = this.getPositionWithOffset(10);
			laser.position.copy(startPosition);
			laser.quaternion.copy(this.arView.getOrientation());
			var tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
			tween.onUpdate(function() {
				laser.position.x = startPosition.x;
				laser.position.y = startPosition.y;
				laser.position.z = startPosition.z;
				var laserBox = new THREE.Box3().setFromObject(laser);
				var tieFighterBox = new THREE.Box3().setFromObject(this.fighter);
				if (tieFighterBox.intersectsBox(laserBox)) {
					scene.remove(laser);
					this.assets.explode(scene);
					this.assets.playExplosionSound();
					this.spawnFighter();
					tween.stop();
				}

			}.bind(this));
			tween.onComplete(function() {
				scene.remove(laser);
			});
			tween.start();
			scene.add(laser);
		},

		getPositionWithOffset: function(offset) {
			var dirMtx = new THREE.Matrix4();
			dirMtx.makeRotationFromQuaternion(this.arView.getOrientation());
			var push = new THREE.Vector3(0, 0, -1.0);
			push.transformDirection(dirMtx);
			var pos = this.arView.getPosition();
			pos.addScaledVector(push, offset);
			return pos;
		}

	});
});