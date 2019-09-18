# Develop an augmented reality shooter with WebXR

## Step 1: Open SAP Web IDE

https://www.sap.com/developer/topics/sap-webide.html

## Step 2: Clone Git Repository into SAP Web IDE

https://github.com/cgrail/webxr-ui5

## Step 3: Install WebXR Viewer on your iPhone/iPad

https://itunes.apple.com/us/app/webxr-viewer/id1295998056

## Step 4: Run the app on your Desktop and WebXR Viewer

Open “index.html”
Press “run“ button

Expected behavior:
-	Desktop: white screen with fire button
-	WebXR Viewer: Camera background with fire button

When you click on the fire button you should see a toast message: „Please implement me…“

## Step 5: Open Game.Controller.js

Path:
```
Webxr-ui5/webapp/controller/Game.controller.js
```

## Step 6: Play laser fire sound

Remove Toast message and adapt shoot function to look like this:

```javascript
shoot() {
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  this.assets.playLaserFireSound();
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
}
```

## Step 7: Create Laser

Extend shoot function to create a static laser 3D object:

```javascript
shoot() {
  this.assets.playLaserFireSound();
  
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  const scene = this.arView.getScene();
  const geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  const material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  const laser = new THREE.Mesh(geometry, material);
  const startPosition = this.arView.getPositionWithOffset(0.5);
  laser.position.copy(startPosition);
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  scene.add(laser);
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
}
```

## Step 8: Set correct start position

Instead of setting the current camera world position to the laser object, we are adding an offset of 0.5 meters towards the direction we are currently looking at and we're moving the 3d laser object 20cm downwards, so that you can directly see it.

```javascript
shoot() {
  const scene = this.arView.getScene();
  const geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  const material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  const laser = new THREE.Mesh(geometry, material);
  const startPosition = this.arView.getPositionWithOffset(0.5);
  laser.position.copy(startPosition);
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  startPosition.y -= 0.2;
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  scene.add(laser);
}
```

## Step 9: Animate laser fire

```javascript
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

  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  const endPosition = this.arView.getPositionWithOffset(10);
  const tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
  tween.onUpdate(() => {
    laser.position.x = startPosition.x;
    laser.position.y = startPosition.y;
    laser.position.z = startPosition.z;
  });
  tween.start();
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
  scene.add(laser);
}
```

## Step 10: Remove laser object after animation has finished

```javascript
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
  });
  tween.start();
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  tween.onComplete(() => {
    scene.remove(laser);
  });
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
  scene.add(laser);
}
```

## Step 11: Load TIE Fighter

Enhance onInit method and load the 3D model of the tie fighter.

```javascript
onInit() {
  this.arView = this.byId("arView");
  this.assets = new ArAssets();
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  this.assets.loadTieFighter((fighter) => {
    this.fighter = fighter;
    this.spawnFighter();
  });
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
},
``` 

Insert the complete function to spawn a new TIE Fighter

```javascript
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
```

## Step 12: Add Laser/Tie Fighter collision detection

Finally we need to enhance the shoot function again to detect when a laser hits the TIE Fighter

```javascript

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
  const endPosition = this.arView.getPositionWithOffset(10);
  laser.position.copy(startPosition);
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  const tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
  tween.onUpdate(() => {
    laser.position.x = startPosition.x;
    laser.position.y = startPosition.y;
    laser.position.z = startPosition.z;
    // O------------------------------------------------------------O
    // |                  INSERT THIS                               |
    // O------------------------------------------------------------O
    const laserBox = new THREE.Box3().setFromObject(laser);
    const tieFighterBox = new THREE.Box3().setFromObject(this.fighter);
    if (tieFighterBox.intersectsBox(laserBox)) {
      scene.remove(laser);
      this.assets.explode(scene);
      this.assets.playExplosionSound();
      this.spawnFighter();
      tween.stop();
    }
    // O------------------------------------------------------------O
    // |                      END                                   |
    // O------------------------------------------------------------O
  });
  tween.onComplete(() => {
    scene.remove(laser);
  });
  tween.start();
  scene.add(laser);
}
```
