document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('generate-btn');
    const grid = document.getElementById('palette-grid');
    const sizeSelect = document.getElementById('size-select');
    const toast = document.getElementById('toast');

    // 1. Generador de HEX aleatorio //
    function generateRandomHex() {
        const chars = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += chars[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 2. Conversor HEX a HSL //
    function hexToHSL(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;
        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) { h = s = 0; } 
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
    }

    // 3. Función para copiar y mostrar el Toast //
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Mostramos el mensaje
            toast.classList.add('show');
            
            // Lo ocultamos despues de 2 segundos //
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        }).catch(err => {
            console.error('Error al copiar: ', err);
        });
    }

    // 4. Función Principal de Renderizado //
    function renderPalette() {
        // Limpiamos el contenedor //
        grid.innerHTML = '';
        
        // Obtenemos valores actuales de los controles //
        const count = parseInt(sizeSelect.value);
        const format = document.querySelector('input[name="format"]:checked').value;

        for (let i = 0; i < count; i++) {
            const hex = generateRandomHex();
            const displayCode = (format === 'hex') ? hex : hexToHSL(hex);

            // Creamos el elemento <article> //
            const article = document.createElement('article');
            article.className = 'color-card';
            
            // Estructura interna de la tarjeta //
            article.innerHTML = `
                <div class="color-block" style="background-color: ${hex}"></div>
                <code>${displayCode}</code>
            `;

            // Asignar el evento click a la tarjeta //
            article.addEventListener('click', () => {
                copyToClipboard(displayCode);
            });

            // Agregar la tarjeta al grid //
            grid.appendChild(article);
        }
    }

    // 5. Eventos de inicio //
    btn.addEventListener('click', renderPalette);

    // Generar una paleta automática al abrir la página //
    renderPalette();
});