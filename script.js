document.addEventListener('DOMContentLoaded', () => {
    const sendFlowersBtn = document.getElementById('send-flowers-btn');
    const flowersContainer = document.querySelector('.flowers-container');
    const music = document.getElementById('music');
    const gifContainer = document.getElementById('gif-and-flowers-container');

    sendFlowersBtn.addEventListener('click', () => {
        // Desactiva el botón para que no se pueda hacer clic de nuevo
        sendFlowersBtn.disabled = true;

        // Reproduce la música
        music.play();

        // 1. Muestra la primera flor
        const firstFlower = document.createElement('span');
        firstFlower.classList.add('flower');
        firstFlower.innerHTML = '🌻'; 
        flowersContainer.appendChild(firstFlower);

        // 2. Después de 0.5 segundos, muestra el GIF
        setTimeout(() => {
            gifContainer.style.display = 'flex';
        }, 500);

        // 3. Después de 1.5 segundos, comienza a mostrar el resto de las flores
        setTimeout(() => {
            const numberOfFlowers = 19; 
            const flowerEmoji = '🌻'; 

            for (let i = 0; i < numberOfFlowers; i++) {
                const delay = i * 150; 
                setTimeout(() => {
                    const flower = document.createElement('span');
                    flower.classList.add('flower');
                    flower.innerHTML = flowerEmoji; 
                    flowersContainer.appendChild(flower);
                    
                    if (i === numberOfFlowers - 1) {
                        // Una vez que la última flor aparece, habilita el botón
                        sendFlowersBtn.disabled = false;
                    }
                }, delay);
            }
        }, 1500); // 1.5 segundos
    });
});