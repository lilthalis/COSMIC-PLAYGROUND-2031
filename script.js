const dimensions = {
    home: `
        <h1 class="glitch-title">COSMIC PLAYGROUND</h1>
        <p style="font-size: 10px; margin-top:20px;">SYSTEM STATUS: MEMORY LOADED</p>
        <div style="border: 2px solid white; padding: 20px; margin-top: 40px;">
           <p>WELCOME TO THE 1990-2077 ARCHIVE</p>
        </div>
    `,
  merch: `
    <div class="vcr-header">
        <h2 class="glitch-title" style="font-size: 1.5rem;">SUPPLY STORE</h2>
        <p style="font-size: 8px;">SELECT ARTIFACT TO INITIALIZE PURCHASE</p>
    </div>

    <div class="shop-grid">
        <a href="https://SEU-LINK-DE-COMPRA.com" target="_blank" class="item-link">
            <div class="item-box float-1">
                <img src="assets/hoodie-void.png" alt="Void Hoodie">
                <div class="item-info">
                    <h3>VOID HOODIE</h3>
                    <p>$85.00</p>
                </div>
            </div>
        </a>

        <a href="https://SEU-LINK-DE-COMPRA.com" target="_blank" class="item-link">
            <div class="item-box float-2">
                <img src="assets/tee-stargazer.png" alt="Stargazer Tee">
                <div class="item-info">
                    <h3>STARGAZER TEE</h3>
                    <p>$45.00</p>
                </div>
            </div>
        </a>

        <a href="" target="_blank" class="item-link">
            <div class="item-box float-3">
                <img src="assets/cap-cosmic.png" alt="Cosmic Cap">
                <div class="item-info">
                    <h3>COSMIC CAP</h3>
                    <p>$30.00</p>
                </div>
            </div>
        </a>
    </div>
    `,
    tour: `
        <h2 style="font-size: 15px;">TRACKING SIGNAL...</h2>
        <p style="font-size: 8px; color: #555;">DATA CORRUPTED - DATES LOST IN TIME</p>
    `
};

function warp(page) {
    const screen = document.getElementById('screen');
    // Efeito de "Flash" ao trocar de fita
    screen.style.filter = 'brightness(3) blur(10px)';
    
    setTimeout(() => {
        screen.innerHTML = dimensions[page];
        screen.style.filter = 'brightness(1) blur(0)';
    }, 200);
}

window.onload = () => warp('home');