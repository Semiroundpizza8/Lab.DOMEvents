let draggingElement;

let onMouseDown = (e) => {
  console.log("mouse is down");
  e.preventDefault();
  if (event.target.matches('.draggable-item')) {
    draggingElement = event.target
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
  }
};

let onMouseMove = (e) => {
  console.log("mouse is moving");
  draggingElement.style.top = e.y + 'px';
  draggingElement.style.left = e.x + 'px';
};

let onMouseUp = (e) => {
  console.log("mouse is up")
  document.removeEventListener('mouseup', onMouseUp);
  document.removeEventListener('mousemove', onMouseMove);
};

document.addEventListener('mousedown', onMouseDown);

