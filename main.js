onload = () => {
  document.body.classList.remove("container");

  const text = "I will always love you, Aubs... 💕 - CY";
  const target = document.getElementById("typewriter");
  let index = 0;

  // wait until flower animation finishes
  setTimeout(() => {
    const type = () => {
      if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, 80); // typing speed
      }
    };
    type();
  }, 6500);
};
