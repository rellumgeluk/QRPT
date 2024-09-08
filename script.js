function changeMessages() {
    const output = document.getElementById('output');
    
    output.textContent = "Bem-vindo";
    
    
    setTimeout(() => {
        output.innerHTML = "Você foi hackeado!"
    }, 3000);

    setTimeout(() => {
        output.innerHTML = "Brincadeira,<br>"+
                            "mas evite escaner QR codes de fontes desconhecidas<br>"+
                            "para a sua própria segurança. <3"
    }, 6000); // 7000 milissegundos = 3 segundos da primeira + 4 segundos da segunda
}

// Chama a função quando a página for carregada
window.onload = changeMessages;