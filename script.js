const bodyE1 = document.querySelector('body');
const toggleE1 = document.querySelector('.fa-moon');

toggleE1.addEventListener("click", () => {
    bodyE1.classList.toggle("dark");

    if (bodyE1.classList.contains("dark")) {
        toggleE1.classList.replace("fa-moon", "fa-sun");
    } else {
        toggleE1.classList.replace("fa-sun", "fa-moon");
    }
});