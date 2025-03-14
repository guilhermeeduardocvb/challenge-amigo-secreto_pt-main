//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

        function adicionarAmigo() {
            let nome = document.getElementById("amigo").value;
            if (nome === "") {
                alert("Por favor, insira um nome válido.");
            }
            else{
                amigos.push(nome);
                console.log(nome);
                limparCampo();
            }

            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nome => {
                let item = document.createElement("li");
                item.textContent = nome;
                lista.appendChild(item);
            });
        }

        function limparCampo(){
            let nome = document.getElementById("amigo");
            nome.value = "";
            }