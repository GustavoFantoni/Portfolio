const logos3D = [
    {
      nome: "JavaScript",
      src: "Logos3d/javascript.gltf",
      alt: "Logo JavaScript 3D",
      id: "jsLogo"
    },
    {
      nome: "java",
      src: "Logos3d/java.gltf",
      alt: "Logo java 3D",
      id: "javaLogo"
    },
    {
      nome: "CSS",
      src: "Logos3d/css.gltf",
      alt: "Logo CSS 3D",
      id: "cssLogo"
    },
    {
      nome: "cSharp",
      src: "Logos3d/cSharp.gltf",
      alt: "Logo cSharp 3D",
      id: "cSharpLogo"
    },
    {
      nome: "bootstrap",
      src: "Logos3d/bootstrap.gltf",
      alt: "Logo bootstrap 3D",
      id: "bootstrapLogo"
    },
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
    

    const areaTech = document.querySelector(".area-tech");
  
  

    const maskTop = document.querySelector(".mask-top");
    const maskBottom = document.querySelector(".mask-bottom");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const visible = entry.isIntersecting;
        maskTop.style.opacity = visible ? "1" : "0";
        maskBottom.style.opacity = visible ? "1" : "0";
      });
    }, {
      threshold: 0.1
    });
  
    observer.observe(areaTech);






    logos3D.forEach(logo => {
      const card = document.createElement("div");
      card.className = "card-tech";
  
      const wrapper = document.createElement("div");
      tamIcon(wrapper); 
  
      const modelViewer = document.createElement("model-viewer");
      modelViewer.id = logo.id;
      modelViewer.setAttribute("src", logo.src);
      modelViewer.setAttribute("alt", logo.alt);
      modelViewer.setAttribute("camera-controls", "");
      modelViewer.setAttribute("auto-rotate", "");
      modelViewer.setAttribute("disable-zoom", "");
      modelViewer.setAttribute("interaction-prompt", "none");
      modelViewer.setAttribute("interaction-policy", "none");
      modelViewer.setAttribute("background-color", "transparent");
      modelViewer.style.width = "100%";
      modelViewer.style.height = "100%";
  
      wrapper.appendChild(modelViewer);
      card.appendChild(wrapper);
      areaTech.appendChild(card);
    });

    window.addEventListener("resize", () => {
      document.querySelectorAll(".area-tech > .card-tec > div").forEach(wrapper => {
        tamIcon(wrapper);
      });
    });
  });
  
  function tamIcon(wrapper) {
    const isLargeScreen = window.innerWidth >= 991;
    wrapper.style.width = isLargeScreen ? "400px" : "150px";
    wrapper.style.height = isLargeScreen ? "400px" : "150px";
  }
  


