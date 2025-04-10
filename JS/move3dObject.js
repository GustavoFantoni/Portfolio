const modelViewer = document.getElementById("jsLogo");
const wrapper = document.getElementById("wrapper");
let targetAzimuth = 30;
let targetElevation = 100;

let currentAzimuth = 30;
let currentElevation = 100;

const defaultAzimuth = 30;
const defaultElevation = 100;
const radius = 1.5;

// animação suave
function animate() {
  currentAzimuth += (targetAzimuth - currentAzimuth) * 1;
  currentElevation += (targetElevation - currentElevation) * 30;

  modelViewer.setAttribute(
    "camera-orbit",
    `${currentAzimuth.toFixed(2)}deg ${currentElevation.toFixed(2)}deg ${radius}m`
  );

  requestAnimationFrame(animate);
}

wrapper.addEventListener("mouseenter", () => {
  modelViewer.removeAttribute("auto-rotate");
});

wrapper.addEventListener("mouseleave", () => {
  // volta pra posição padrão
  targetAzimuth = defaultAzimuth;
  targetElevation = defaultElevation;
});

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const percentX = x / rect.width;
  const percentY = y / rect.height;


  targetAzimuth = (percentX - 0.5) * 10; 
  targetElevation = (0,5 - percentY) * 10; 
});

animate();
