const dimensions = {
    home: `
        <h1 class="glitch-title">COSMIC PLAYGROUND</h1>
        <p style="font-size: 10px; margin-top:20px;">SYSTEM STATUS: MEMORY LOADED</p>
        <div style="border: 2px solid white; padding: 20px; margin-top: 40px;">
           <p>WELCOME TO THE 1990-2077 ARCHIVE</p>
        </div>
    `,
    merch: `
        <h2 style="font-size: 15px;">DROP 01: ARTIFACTS</h2>
        <div style="display:flex; gap:20px; margin-top:30px;">
            <div style="border:1px solid #444; padding:10px;">
                <div style="width:150px; height:150px; background:#222;"></div>
                <p style="font-size:8px; margin-top:10px;">VOID HOODIE</p>
            </div>
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