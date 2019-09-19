/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)

        (c) Copyright 2009-2015 SAP SE. All rights reserved
    
 */
sap.ui.define(["jquery.sap.global","../library","./thirdparty/three","./PolylineGeometry","./PolylineMaterial"],function(q,c,d,P,e){"use strict";function f(g,m){THREE.Mesh.call(this);this.type="PolylineMesh";this.geometry=g!==undefined?g:new P();this.material=m!==undefined?m:new e();}f.prototype=Object.assign(Object.create(THREE.Mesh.prototype),{constructor:f,isPolylineMesh:true,computeLineDistances:(function(){var a=new THREE.Vector4();var b=new THREE.Vector4();var g=new THREE.Vector2();var h=new THREE.Vector2();return function(m,v,n){var k=this.geometry;var o=k.attributes.instanceDistance.data;var p=o.array;var r=k.vertices;var s=0,t;a.copy(r[0]).applyMatrix4(m);for(var i=0,j=0,l=o.count;i<l;i++,j+=2){b.copy(r[i+1]).applyMatrix4(m);if(a.w>=n){g.copy(a).multiplyScalar(1/a.w);if(b.w>=n){h.copy(b).multiplyScalar(1/b.w);}else{t=(a.w-n)/(a.w-b.w);h.copy(b).sub(a).multiplyScalar(t).add(a).multiplyScalar(1/n);}}else if(b.w>=n){h.copy(b).multiplyScalar(1/b.w);t=(b.w-n)/(b.w-a.w);g.copy(a).sub(b).multiplyScalar(t).add(b).multiplyScalar(1/n);}else{g.set(0,0,0);h.set(0,0,0);}p[j]=s;s+=h.sub(g).multiply(v).length()*0.5;p[j+1]=s;a.copy(b);}this.material.lineLength=s;o.needsUpdate=true;return this;};}())});return f;});
