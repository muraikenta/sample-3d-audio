const SimpleRotationControls = (() => {
  // eslint-disable-line no-unused-vars

  class _Class {
    constructor(camera) {
      window.addEventListener("keydown", (event) => {
        switch (event.key) {
          case "ArrowUp":
            camera.position.z += 1;
            break;
          case "ArrowDown":
            camera.position.z -= 1;
            break;
          case "ArrowLeft":
            camera.position.x += 1;
            break;
          case "ArrowRight":
            camera.position.x -= 1;
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
