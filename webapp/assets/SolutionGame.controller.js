sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "webar-test/assets/ArAssets"
], (Controller, MessageToast, ArAssets) => {
    "use strict";

    return Controller.extend("webar-test.controller.Game", {

        onInit() {
            this.arView = this.byId("arView");
            this.assets = new ArAssets();
            this.assets.loadTieFighter((fighter) => {
                this.fighter = fighter;
                this.spawnFighter();
            });
        },

        spawnFighter() {
            const target = this.arView.getPositionWithOffset(1);
            target.x -= Math.random();
            const initialPos = target.clone();
            initialPos.z -= 10;
            this.fighter.position.copy(initialPos);
            this.fighter.quaternion.copy(this.arView.getCamera().quaternion);
            this.arView.getScene().add(this.fighter);
            const tween = new TWEEN.Tween(initialPos).to(target, 2000);
            tween.onUpdate(() => {
                this.fighter.position.z = initialPos.z;
            });
            tween.start();
        },

        shoot() {
            this.assets.playLaserFireSound();
            const scene = this.arView.getScene();
            const geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
            const material = new THREE.MeshBasicMaterial({
                color: "red"
            });
            const laser = new THREE.Mesh(geometry, material);
            const startPosition = this.arView.getPositionWithOffset(0.5);
            startPosition.y -= 0.2;
            laser.position.copy(startPosition);
            laser.quaternion.copy(this.arView.getCamera().quaternion);
            const endPosition = this.arView.getPositionWithOffset(10);
            const tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
            tween.onUpdate(() => {
                laser.position.x = startPosition.x;
                laser.position.y = startPosition.y;
                laser.position.z = startPosition.z;
                const laserBox = new THREE.Box3().setFromObject(laser);
                const tieFighterBox = new THREE.Box3().setFromObject(this.fighter);
                if (tieFighterBox.intersectsBox(laserBox)) {
                    scene.remove(laser);
                    this.assets.explode(scene);
                    this.assets.playExplosionSound();
                    this.spawnFighter();
                    tween.stop();
                }
            });
            tween.start();
            tween.onComplete(() => {
                scene.remove(laser);
            });
            scene.add(laser);
        }
    });
});