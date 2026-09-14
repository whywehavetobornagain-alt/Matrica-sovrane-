function runAgent(agentId) {
    const outputElement = document.getElementById(`out${agentId}`);
    outputElement.innerHTML = "Gjendja: Duke ekzekutuar detyrën... ⚡";
    
    setTimeout(() => {
        outputElement.innerHTML = "Gjendja: Detyra u krye me sukses! ✅";
    }, 1200);
}
