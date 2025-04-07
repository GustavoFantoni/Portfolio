document.addEventListener("DOMContentLoaded", () => {
    const draggableBtn = document.getElementById("draggable-btn");
    const mobileDropdown = document.getElementById("mobileDropdown");

    let isDragging = false;
    let startX, startY, offsetX = 0, offsetY = 0;
    let currentX, currentY;

    const dropdownWidth = 70;
    const dropdownHeight = 230;

    const colorOptions = document.querySelectorAll(".color-option");

    colorOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedColor = option.getAttribute("data-color");
            document.documentElement.style.setProperty("--details-color", selectedColor);
        });
    });

    function setInitialPosition() {
        draggableBtn.style.left = '10px';
        draggableBtn.style.top = '80px';
    }

    function updateDropdownPosition() {
        const screenHeight = window.innerHeight;
        const dropdownTop = currentY + draggableBtn.offsetHeight + 5;
        const dropdownBottom = dropdownTop + dropdownHeight;

        mobileDropdown.style.width = `${dropdownWidth}px`;
        mobileDropdown.style.height = `${dropdownHeight}px`;

        if (dropdownBottom > screenHeight) {
            mobileDropdown.style.top = `${currentY - dropdownHeight - 5}px`;
        } else {
            mobileDropdown.style.top = `${dropdownTop}px`;
        }

        const screenWidth = window.innerWidth;
        let dropdownLeft = currentX;
        if (dropdownLeft + dropdownWidth > screenWidth) {
            dropdownLeft = screenWidth - dropdownWidth - 10;
        }
        mobileDropdown.style.left = `${dropdownLeft}px`;
    }

    function closeDropdown() {
        mobileDropdown.style.opacity = "0";
        setTimeout(() => { mobileDropdown.style.display = "none"; }, 300);
    }

    function startDrag(e) {
        isDragging = true;
        document.body.style.overflow = "hidden";
        if (e.type === "touchstart") {
            startX = e.touches[0].clientX - currentX;
            startY = e.touches[0].clientY - currentY;
        } else {
            startX = e.clientX - currentX;
            startY = e.clientY - currentY;
        }
        draggableBtn.style.cursor = "grabbing";
    }

    function drag(e) {
        if (!isDragging) return;
        let moveX, moveY;
        if (e.type === "touchmove") {
            moveX = e.touches[0].clientX - startX;
            moveY = e.touches[0].clientY - startY;
        } else {
            moveX = e.clientX - startX;
            moveY = e.clientY - startY;
        }
        currentX = moveX;
        currentY = moveY;
        draggableBtn.style.left = `${currentX}px`;
        draggableBtn.style.top = `${currentY}px`;
        updateDropdownPosition();
    }

    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.overflow = "";
        draggableBtn.style.cursor = "grab";
        
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight - 100;
        const btnRect = draggableBtn.getBoundingClientRect();

        let finalX = (btnRect.left + btnRect.width / 2) < screenWidth / 2 ? 10 : screenWidth - btnRect.width - 10;
        let finalY = Math.min(Math.max(10, btnRect.top), screenHeight - btnRect.height - 10);
        
        currentX = finalX;
        currentY = finalY;
        
        draggableBtn.style.transition = "left 0.3s ease-out, top 0.3s ease-out";
        draggableBtn.style.left = `${currentX}px`;
        draggableBtn.style.top = `${currentY}px`;
        updateDropdownPosition();

        setTimeout(() => {
            draggableBtn.style.transition = "";
        }, 300);
    }

    draggableBtn.style.position = "fixed";
    setInitialPosition();

    draggableBtn.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);

    draggableBtn.addEventListener("touchstart", startDrag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("touchend", stopDrag);

    draggableBtn.addEventListener("click", () => {
        if (!isDragging) {
            if (mobileDropdown.style.display === "block") {
                closeDropdown();
            } else {
                mobileDropdown.style.display = "block";
                setTimeout(() => { mobileDropdown.style.opacity = "1"; }, 10);
                updateDropdownPosition();
            }
        }
    });

    document.addEventListener("click", (e) => {
        if (!draggableBtn.contains(e.target) && !mobileDropdown.contains(e.target)) {
            closeDropdown();
        }
    });

    document.querySelectorAll(".color-option").forEach(item => {
        item.addEventListener("click", closeDropdown);
    });

    let lastWindowWidth = window.innerWidth;

window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if (currentWidth !== lastWindowWidth) {
        setInitialPosition();
        closeDropdown();
        lastWindowWidth = currentWidth;
    }
});


    mobileDropdown.style.transition = "opacity 0.3s ease-in-out";
    mobileDropdown.style.opacity = "0";
    mobileDropdown.style.display = "none";
});
