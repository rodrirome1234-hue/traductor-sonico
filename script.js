const button = document.getElementById("generateBtn");

button.addEventListener("click", function() {

    const input = document.getElementById("soundInput");
    const userSound = input.value.toLowerCase();

    const result = document.getElementById("result");

    let analysis = "";

    if (userSound.includes("mercurio")) {

        analysis = `
            <h3>Oscillator</h3>
            <p>Metallic Wavetable</p>

            <h3>Filter</h3>
            <p>Low Pass con resonancia moderada</p>

            <h3>LFO</h3>
            <p>Movimiento lento y fluido</p>

            <h3>FX</h3>
            <p>Chorus + Reverb corta</p>
        `;

    } else if (userSound.includes("espacial") || userSound.includes("space")) {

        analysis = `
            <h3>Oscillator</h3>
            <p>Saw + Sine</p>

            <h3>Filter</h3>
            <p>Low Pass abierto</p>

            <h3>LFO</h3>
            <p>Movimiento estéreo amplio</p>

            <h3>FX</h3>
            <p>Delay largo + Reverb atmosférica</p>
        `;

    } else if (userSound.includes("agresivo") || userSound.includes("distorsionado")) {

        analysis = `
            <h3>Oscillator</h3>
            <p>Square + Saw</p>

            <h3>Filter</h3>
            <p>Low Pass resonante</p>

            <h3>Drive</h3>
            <p>Saturación media-alta</p>

            <h3>FX</h3>
            <p>Distortion + Compression</p>
        `;

    } else {

        analysis = `
            <h3>Oscillator</h3>
            <p>Wavetable híbrida</p>

            <h3>Filter</h3>
            <p>Low Pass estándar</p>

            <h3>LFO</h3>
            <p>Movimiento moderado</p>

            <h3>FX</h3>
            <p>Chorus + Reverb</p>
        `;
    }

    result.innerHTML = `
        <h2>Analizando</h2>

        <p><strong>${input.value}</strong></p>

        <h2>Traducción Sonora</h2>

        ${analysis}
    `;

});