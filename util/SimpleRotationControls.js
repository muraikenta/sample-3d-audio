const SimpleRotationControls = (() => {
  // eslint-disable-line no-unused-vars

  class _Class {
    constructor(camera) {
      window.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowUp":
            camera.position.z += 0.3;
            break;
          case "ArrowDown":
            camera.position.z -= 0.3;
            break;
          case "ArrowLeft":
            camera.position.x += 0.3;
            break;
          case "ArrowRight":
            camera.position.x -= 0.3;
            break;
          default:
            return;
        }
      });
    }

    update() {}
  }

  return _Class;
})();
