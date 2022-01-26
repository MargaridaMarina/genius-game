const botaoVerde = document.querySelector(".button-green")
const botaoVermelho = document.querySelector(".button-red")
const botaoAmarelo = document.querySelector(".button-yellow")
const botaoAzul = document.querySelector(".button-blue")

const botoes = [botaoVerde, botaoVermelho, botaoAmarelo, botaoAzul]

function Game() {

    let dificulty = 3;
    let i = 0;

    let result = [];// guardar o que myLoop fez
    let usuario = []; // resultados do usuario
    let score = 0;

    let lastResult = "Não jogou"
    
    function myLoop() {
        setTimeout(function () {
    
            let index = getRandomNumber(0, botoes.length - 1)//min=0 max=botoes.length-1
            let posicaoAdicionaClasse = botoes[index]
            posicaoAdicionaClasse.classList.add("pisca")
            setTimeout(function () {
                posicaoAdicionaClasse.classList.remove("pisca")
            }, 400)
            i++;
            if (i < dificulty) {
                myLoop();
            }
            result.push(index)// guardar o que myLoop fez
            console.log(result)// guardar o que myLoop fez
        }, 1000)
    }
    
    function atualizarScore() {
        document.querySelector("#score").innerHTML = score;
        document.querySelector("#last-result").innerHTML = lastResult;
    }

    function start() {
         // resetar valors anteriores
        i = 0;
        result = [];
        usuario = [];
        // aumentar o tamanho da rodada

        atualizarScore();
        myLoop();
    }

    function addEventListeners() {
        // vez do usuario
        botoes.forEach(function (x, index) {
            x.addEventListener("click", () => {
                usuario.push(index)
                console.log(usuario)
                comparar()
            })
        })
    }

    //comparar
    function comparar() {
        if (result.length == usuario.length) {
            if (result.join("") === usuario.join("")) {
                lastResult = "Acertou!"
                score++;
                dificulty++; 
            } else {
                lastResult = "Errou!"
            }
            start();
        }
    }

    addEventListeners();
    start();
}


function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}


Game()