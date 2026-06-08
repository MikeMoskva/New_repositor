document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector('.card');
    
    if (block) {
        document.addEventListener('mousemove', function(e) {
            let dx = e.pageX - window.innerWidth / 2
            let dy = e.pageY - window.innerHeight / 2
            let angleX = 20 * dx / window.innerWidth / 2
            let angleY = 20 * dy / window.innerHeight / 2
            block.style.transform = `perspective(1200px) rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
        });
    }
});
