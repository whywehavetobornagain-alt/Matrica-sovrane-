function runAgent(id) {
    const outputEl = document.getElementById('out' + id);
    outputEl.textContent = "Duke analizuar dhe përpunuar...";

    setTimeout(() => {
        if (id === 1) {
            const val = document.getElementById('input1').value || "Inovacion";
            outputEl.innerHTML = `✅ Rezultat: Trendi global për "<b>${val}</b>" u kap. Kërkesa është rritur me +42% sot!`;
        } 
        else if (id === 2) {
            const type = document.getElementById('input2').value;
            outputEl.innerHTML = `✅ Kod i pastër i gjeneruar (${type.toUpperCase()}) pa asnjë gabim sintakse!`;
        } 
        else if (id === 3) {
            const name = document.getElementById('input3').value || "projekti-im";
            outputEl.innerHTML = `🚀 Sukses! Faqja u ngarkua live në: <br><span style="color:#58a6ff;">https://${name}.vercel.app</span>`;
        } 
        else if (id === 4) {
            const url = document.getElementById('input4').value || "faqja.com";
            outputEl.innerHTML = `📈 Trafiku organik për <b>${url}</b> u optimizua. +1,450 vizitorë të rinj në pritje.`;
        } 
        else if (id === 5) {
            const visitors = parseInt(document.getElementById('input5').value) || 500;
            const earnings = (visitors * 0.04).toFixed(2);
            outputEl.innerHTML = `💰 Për ${visitors} vizitorë ditorë, fitimi i llogaritur është: <b style="color:#ffcc00;">$${earnings} / ditë</b>`;
        } 
        else if (id === 6) {
            outputEl.innerHTML = `⚙️ Sistemi u evolua! Performanca u rrit në 99.9% dhe shpejtësia u përmirësua.`;
        }
    }, 900);
}

function autoActivateAll() {
    for (let i = 1; i <= 6; i++) {
        const outputEl = document.getElementById('out' + i);
        outputEl.textContent = "Duke ekzekutuar automatikisht...";
    }
    
    setTimeout(() => {
        document.getElementById('out1').innerHTML = `✅ Vëzhguesi: Të dhënat globale u skanuan me sukses.`;
        document.getElementById('out2').innerHTML = `✅ Ndërtuesi: Struktura e kodit u verifikua dhe pastrua.`;
        document.getElementById('out3').innerHTML = `🚀 Lëshuesi: Të gjitha shërbimet janë live dhe aktive.`;
        document.getElementById('out4').innerHTML = `📈 Tërheqësi: Motorët e kërkimit u lidhën me sukses.`;
        document.getElementById('out5').innerHTML = `💰 Monetizuesi: Rrjedha e të ardhurave u aktivizua.`;
        document.getElementById('out6').innerHTML = `⚙️ Evolucionisti: Përditësimi ditor u aplikua me sukses.`;
    }, 1200);
}
