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
shoot: function() {
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  this.assets.playLaserFireSound();
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
}
```
[Runnable Step 6](http://grails.de/webxr-ui5-solution/steps/6/)

[Code Step 6](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/6/controller/Game.controller.js)

## Step 7: Create Laser

Extend shoot function to create a static laser 3D object:

```javascript
shoot: function() {
  this.assets.playLaserFireSound();
  
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  var scene = this.arView.getScene();
  var geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  var material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  var laser = new THREE.Mesh(geometry, material);
  laser.position.copy(this.arView.getCamera().getWorldPosition());
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  scene.add(laser);
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
}
```

[Runnable Step 7](http://grails.de/webxr-ui5-solution/steps/7/)

[Code Step 7](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/7/controller/Game.controller.js)

## Step 8: Set correct start position

Instead of setting the current camera world position to the laser object, we are adding an offset of 0.5 meters towards the direction we are currently looking at and we're moving the 3d laser object 20cm downwards, so that you can directly see it.

```javascript
shoot: function() {
  this.assets.playLaserFireSound();
  var scene = this.arView.getScene();
  var geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  var material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  var laser = new THREE.Mesh(geometry, material);
  
  // Remove: laser.position.copy(this.arView.getCamera().getWorldPosition());
  
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  var startPosition = this.arView.getPositionWithOffset(0.5);
  startPosition.y -= 0.2;
  laser.position.copy(startPosition);
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  scene.add(laser);
}
```


[Runnable Step 8](http://grails.de/webxr-ui5-solution/steps/8/)

[Code Step 8](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/8/controller/Game.controller.js)

## Step 9: Animate laser fire

```javascript
shoot: function() {
  this.assets.playLaserFireSound();
  var scene = this.arView.getScene();
  var geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  var material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  var laser = new THREE.Mesh(geometry, material);
  var startPosition = this.arView.getPositionWithOffset(0.5);
  startPosition.y -= 0.2;
  laser.position.copy(startPosition);
  laser.quaternion.copy(this.arView.getCamera().quaternion);

  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  var endPosition = this.arView.getPositionWithOffset(10);
  var tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
  tween.onUpdate(function() {
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

[Runnable Step 9](http://grails.de/webxr-ui5-solution/steps/9/)

[Code Step 9](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/9/controller/Game.controller.js)

## Step 10: Remove laser object after animation has finished

```javascript
shoot: function() {
  this.assets.playLaserFireSound();
  var scene = this.arView.getScene();
  var geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  var material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  var laser = new THREE.Mesh(geometry, material);
  var startPosition = this.arView.getPositionWithOffset(0.5);
  startPosition.y -= 0.2;
  laser.position.copy(startPosition);
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  var endPosition = this.arView.getPositionWithOffset(10);
  var tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
  tween.onUpdate(function() {
    laser.position.x = startPosition.x;
    laser.position.y = startPosition.y;
    laser.position.z = startPosition.z;
  });
  tween.start();
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  tween.onComplete(function() {
    scene.remove(laser);
  });
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
  scene.add(laser);
}
```

[Runnable Step 10](http://grails.de/webxr-ui5-solution/steps/10/)

[Code Step 10](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/10/controller/Game.controller.js)

## Step 11: Load TIE Fighter

Enhance onInit method and load the 3D model of the tie fighter.

```javascript
onInit: function() {
  this.arView = this.byId("arView");
  this.assets = new ArAssets();
  // O------------------------------------------------------------O
  // |                  INSERT THIS                               |
  // O------------------------------------------------------------O
  this.assets.loadTieFighter(function(fighter) {
    this.fighter = fighter;
    this.spawnFighter();
  }.bind(this));
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O
}
``` 

Insert the complete function to spawn a new TIE Fighter

```javascript
spawnFighter: function() {
  var fighter = this.fighter;
  var target = this.arView.getPositionWithOffset(1);
  target.x -= Math.random();
  var initialPos = target.clone();
  initialPos.z -= 10;
  fighter.position.copy(initialPos);
  fighter.quaternion.copy(this.arView.getCamera().quaternion);
  this.arView.getScene().add(fighter);
  var tween = new TWEEN.Tween(initialPos).to(target, 2000);
  tween.onUpdate(function() {
    fighter.position.z = initialPos.z;
  });
  tween.start();
},
```

[Runnable Step 11](http://grails.de/webxr-ui5-solution/steps/11/)

[Code Step 11](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/11/controller/Game.controller.js)

## Step 12: Add Laser/Tie Fighter collision detection

Finally we need to enhance the shoot function again to detect when a laser hits the TIE Fighter

```javascript
shoot: function() {
  this.assets.playLaserFireSound();
  var scene = this.arView.getScene();
  var geometry = new THREE.BoxGeometry(0.03, 0.03, 2);
  var material = new THREE.MeshBasicMaterial({
    color: "red"
  });
  var laser = new THREE.Mesh(geometry, material);
  var startPosition = this.arView.getPositionWithOffset(0.5);
  startPosition.y -= 0.2;
  laser.position.copy(startPosition);
  laser.quaternion.copy(this.arView.getCamera().quaternion);
  var endPosition = this.arView.getPositionWithOffset(10);
  var tween = new TWEEN.Tween(startPosition).to(endPosition, 2000);
  tween.onUpdate(function() {
    laser.position.x = startPosition.x;
    laser.position.y = startPosition.y;
    laser.position.z = startPosition.z;
    // O------------------------------------------------------------O
    // |                  INSERT THIS                               |
    // O------------------------------------------------------------O
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
  // O------------------------------------------------------------O
  // |                      END                                   |
  // O------------------------------------------------------------O

  tween.start();
  tween.onComplete(function() {
    scene.remove(laser);
  });
  scene.add(laser);
}
```

[Runnable Step 12](http://grails.de/webxr-ui5-solution/steps/12/)

[Code Step 12](https://github.com/cgrail/webxr-ui5-solution/blob/master/steps/12/controller/Game.controller.js)
