let salvarFormulario = () => {
    	
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade');
    const email = document.getElementById('email');
    const endereço = document.getElementById('endereço');

    
    let data = 
        '\r Nome: ' + nome.value + ' \r\n ' + 
        'Idade: ' +idade.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Endereço: ' + endereço.value;
    
    const textoParaBlob = new Blob([data], { type: 'text/plain' });
    const nomeArquivo = 'formulário.txt';

    let newLink = document.createElement("a");
    newLink.download = nomeArquivo;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textoParaBlob);
    }
    else {
        newLink.href = window.URL.createObjectURL(textoParaBlob);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}