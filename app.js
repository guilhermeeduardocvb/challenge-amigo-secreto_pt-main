let amigos = [];

    function adicionarAmigo() {
        let nome = document.getElementById("amigo").value;
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        amigos.push(nome);
        limparCampo();
        atualizarLista();
    }

    function limparCampo() {
        document.getElementById("amigo").value = "";
    }

    function atualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        amigos.forEach(nome => {
            let item = document.createElement("li");
            item.textContent = nome;
            lista.appendChild(item);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Todos os amigos já foram sorteados!");
            reiniciarSorteio();
            return;
        }

        let indice = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indice];

        document.getElementById("resultado").innerHTML = "Seu amigo secreto é: " + amigoSorteado;

        amigos.splice(indice, 1);

        atualizarLista();
    }

    function reiniciarSorteio() {
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        limparCampo();
    }
