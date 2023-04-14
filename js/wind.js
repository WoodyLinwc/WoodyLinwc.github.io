function initWind() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("wind-canvas"), antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var windGeometry = new THREE.BufferGeometry();
    var vertices = [];

    for (var i = 0; i < 10000; i++) {
        vertices.push(Math.random() * 400 - 200);  // x
        vertices.push(Math.random() * 400 - 200);  // y
        vertices.push(Math.random() * 200 - 100);  // z
    }

    windGeometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    var windMaterial = new THREE.PointsMaterial({
        color: 0xd6e7f5,
        size: 0.5,
        transparent: true
    });

    var wind = new THREE.Points(windGeometry, windMaterial);
    scene.add(wind);

    function render() {
        requestAnimationFrame(render);

        var positions = windGeometry.getAttribute("position").array;
        for (var i = 0; i < positions.length; i += 3) {
            positions[i] -= 0.2;
            positions[i + 1] += Math.random() * 0.1 - 0.05;
            if (positions[i] < -200) {
                positions[i] = 200;
            }
            if (positions[i + 1] < -200) {
                positions[i + 1] = 200;
            }
        }
        windGeometry.getAttribute("position").needsUpdate = true;

        renderer.render(scene, camera);
    }
    render();
}

window.onload = function() {
    initWind();
}