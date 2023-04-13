function init() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
  
    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas"), antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    var rainGeometry = new THREE.BufferGeometry();
    var vertices = [];
  
    for (var i = 0; i < 5000; i++) {
      vertices.push(Math.random() * 400 - 200);
      vertices.push(Math.random() * 500 - 250);
      vertices.push(Math.random() * 400 - 200);
    }
  
    rainGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    var rainMaterial = new THREE.PointsMaterial({
      color: 0x88b9e1,
      size: 0.8,
      transparent: true
    });
  
    var rain = new THREE.Points(rainGeometry, rainMaterial);
    scene.add(rain);
  
    function render() {
      requestAnimationFrame(render);
  
      var positions = rainGeometry.getAttribute("position").array;
      for (var i = 1; i < positions.length; i += 3) {
        positions[i] -= 0.1;
        if (positions[i] < -250) {
          positions[i] = 250;
        }
      }
      rainGeometry.getAttribute("position").needsUpdate = true;
  
      renderer.render(scene, camera);
    }
    render();
  }
  
  window.onload = function() {
    init();
  }
  