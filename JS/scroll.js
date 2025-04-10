
  const models = [
    'Logos3d/javascript.gltf',
    'Logos3d/bootstrap.gltf',
    'Logos3d/java.gltf',
    'Logos3d/css.gltf',
    'Logos3d/cSharp.gltf'
  ];

  const modelViewer = document.getElementById('modelViewer');
  const section = document.getElementById('tech-section');
  const totalScrollItems = models.length;
  const scrollPerItem = window.innerHeight * 0.5; // 50vh por item
  let lastIndex = -1;

  window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    const isFullyVisible =
      scrollY >= sectionTop &&
      scrollY + viewportHeight <= sectionBottom;

    if (!isFullyVisible) return;

    const scrollInsideSection = scrollY + viewportHeight - sectionTop;
    const index = Math.floor(scrollInsideSection / scrollPerItem);

    if (index !== lastIndex && index >= 0 && index < models.length) {
      modelViewer.setAttribute('src', models[index]);
      lastIndex = index;
    }
  });

