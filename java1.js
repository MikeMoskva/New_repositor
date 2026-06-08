document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const change_button = document.getElementById("button_theme");

    function isItBlack() {
        return body.classList.contains("black_theme");
    }

    function changeTheme() {
        const nowBlack = isItBlack();

        if (nowBlack) {
            body.classList.remove("black_theme");
            body.classList.add("white_theme");
            change_button.innerHTML = "🌙";
        }

        else { 
            body.classList.remove("white_theme");
            body.classList.add("black_theme");
            change_button.innerHTML = "☀️";
        }
    }

    if (change_button) {
        change_button.addEventListener("click", changeTheme);
    }
})

/* document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');

    if (card) {
        document.addEventListener('mousemove', function(e) {
            let dx = e.pageX - window.innerWidth / 2;
            let dy = e.pageY - window.innerHeight / 2;
            let angleX = 15 * dx / (window.innerWidth / 2);
            let angleY = 15 * dy / (window.innerHeight / 2);
            block.style.transform = `perspective(400px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
        }
    }
})*/

