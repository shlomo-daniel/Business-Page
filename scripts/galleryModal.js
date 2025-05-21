document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("modalWrapper");
  const modalImg = document.getElementById("modalImage");
  const closeModal = document.querySelector(".close-modal");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentIndex = 0;

  function openModal(index) {
    const item = galleryItems[index];
    const img = item.querySelector("img");

    modalImg.src = img.src;
    modal.classList.add("show");
    currentIndex = index;

    document.body.style.overflow = "hidden";
  }

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openModal(index));
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex = currentIndex - 1;
      const currentItem = galleryItems[currentIndex];
      const img = currentItem.querySelector("img");

      modalImg.src = img.src;
      console.log("prev");
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < galleryItems.length - 1) {
      currentIndex = currentIndex + 1;
      const currentItem = galleryItems[currentIndex];
      const img = currentItem.querySelector("img");

      modalImg.src = img.src;
      console.log("next");
    }
  });
});
