function runAgent(agentId) {
    const outputElement = document.getElementById('out' + agentId);
    if (outputElement) {
        outputElement.innerHTML = "Gjendja: Duke ekzekutuar...";
        setTimeout(() => {
            outputElement.innerHTML = "Gjendja: Detyra u krye me sukses! ✅";
        }, 1200);
    }
}

// Funksioni për vetë-aktivizimin e të 6 agjentëve automatikisht
function autoActivateAll() {
    for (let i = 1; i <= 6; i++) {
        setTimeout(() => {
            runAgent(i);
        }, i * 400); // Aktivizohen me radhë bukur
    }
}
