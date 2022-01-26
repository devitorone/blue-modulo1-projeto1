var prompt = require("prompt-sync")();

var wrgmsg = 'reposta precisa ser "s" ou "n"';

console.log(`O confronto

Dong Zhuo está morto. A China clama por um governante que traga paz.
Você é o famigerado general Caocao em sua batalha final pelo controle da China contra o lendário guerreiro Lü Bu.
Sua jornada foi longa e está proxima de seu fim. Derrotaste a rainha bandoleira ao norte,
os reclamantes ao trono do Sul não foram o suficiente para lhe parar. Até mesmo Liu Bei jurou lealdade a você.
Mas ainda resta um obstaculo à supremacia do seu governo, o fim da era dos 3 reinos e inicio de uma paz duradoura.
Durante os preparativos da batalha, seu conselheiro de maior confiança percebe que está se formando um clima chuvoso.
Ele o procura afim de mitigar a sua inferioridade numérica e propor uma estratégia.
"Meu Rei, estamos enfretando números muito altos, mas temos uma chance. Devemos usar armaduras leves"

Usar armaduras leves nos flancos e nas infantarias ( unidades escondidas no início da batalha)?
`);
// pergunta 1
do {
  if (q1 != null) {
    console.log(wrgmsg);
  }
  var q1 = prompt("[s] sim ou [n] não => ");
} while (q1 != `s` && q1 != `n`);

switch (q1) {
  case "s":
    armaduraG = "leves";
    break;
  case "n":
    armaduraG = "pesadas";
    break;
}

console.log(`
***Você escolheu usar armaduras ${armaduraG}***
`);

console.log(
  `Após decidir por armaduras ${armaduraG}, seus generais expõem uma preocupação:`
);

console.log(`O inimigo tem o terreno alto;
A infantaria que formará a primeira interface de confronto (1º batalhão)
não tem o costume de usar armaduras leves, pois deve resistir a batalha pelo maior periodo.
Dito isso, seus generais aguardam uma decisão.
Usar armadura pesada no 1º batalhão?`);

// Questão 2
do {
  if (q2 != null) {
    console.log(wrgmsg);
  }

  var q2 = prompt("[s] sim ou [n] não => ");
} while (q2 != `s` && q2 != `n`);

switch (q2) {
  case "s":
    armadura1B = "pesada";
    break;
  case "n":
    armadura1B = "leve";
    break;
}

console.log(`
*** O primeiro batalhão usará armadura ${armadura1B} ***
`);

console.log(`
A BATALHA SE INICIA

Seu inimigo envia o primeiro batalhão, de armaduras pesadas. O restante da infataria aguarda junto da cavalaria.
Seu conselheiro de maior confiança, seu amigo, está liderando o 1ºB.

A batalha é sangrenta, suja e árdua, mas seus soldados estão resistindo à superioridade numérica.
Seu amigo então sinaliza que você deve esperar mais para enviar o restante do exército.
...
Após um tempo, você percebe que o 1ºB está começando a ceder. Porém, para a emboscada e o ataque 
flanqueado funcionar, seu inimigo tem que enviar o restante de seu exército para a lama, formada
pela chuva, onde ficará com a mobilidade prejudicada.

Esperar mais poderá causar um dano expressivo no 1ºB (50% de canhce)
`);

do {
  if (q3 != null) {
    console.log(wrgmsg);
  }

  var q3 = prompt("Esperar mais? [s] sim ou [n] não => ");
} while (q3 != `s` && q3 != `n`);

if (q3 == "s") {
  let dano = Math.random();
  // Porque essa é a historia do unificador de um império. Game is HARD.
  if (dano < 0.5) {
    console.log(`
Você sacrificou o batalhão de seu amigo, e com isso, ele também. 

Vejamos se valerá a pena!`);
  } else if (dano > 0.5) {
    console.log(
      `O 1ºB resiste de forma gloriosa. Canções serão cantadas sobre estes soldados.`
    );
  }

  console.log(`Você esperou e seu inimigo, com arrogância e inexperiência no comando, atacou 
prematuramente com o restante do exército na esperança de finalizar logo e com poucas baixas. 

O inimigo está onde você quer. Seus flanqueadores aguardam seu comando.
Atacar com os arqueiros antes de enviar a infantaria?
`);
  do {
    if (q4 != null) {
      console.log(wrgmsg);
    }

    var q4 = prompt(`[s] sim ou [n] não => `);
  } while (q4 != `s` && q4 != `n`);

  if (q4 == "s") {
    console.log(`*** Você atacou, antes de mais nada, com seus arqueiros, dizimando centenas. ***
        
        Após o ataque dos arqueiros, o restante de seu exército tomou conta do campo de batalha.
    Falta ainda finalizar o líder inimigo. O poderoso Lu Bu. Todos os seus soldados estão com a 
    atenção voltada para vocês. Lu Bu solicita um duelo.
    Aceitar desafio de Lu Bu? 
    `);
    do {
      if (q5 != null) {
        console.log(wrgmsg);
      }

      var q5 = prompt(`[s] sim ou [n] não => `);
    } while (q5 != `s` && q5 != `n`);

    if (q5 == "s") {
      console.log(`Ao aceitar o duelo de Lu Bu, você diz para que ele venha de encontro com
o destino. Mas ele nao consegue sair do lugar. Está de armadura pesada, sobre a lama.
Entao, no chao, ajoelhado, ele implora por sua vida. Seus soldados riem da cena.

Um soldado desconhecido pega a espada de Lu Bu e diz: Esse imundo não é digno de Vossa Majestade.
Todos gritam para que o soldado mate Lu Bu, mas esse aguarda sua ordem. Você apenas acena que sim.`);
    } else if (q5 == "n") {
      console.log(`Você se recusa a duelar contra Lu Bu. Seus soldados ficam receosos sobre o motivo.
Estão dizendo que falta honra em um covarde e que somente um covarde recusa um duelo. Isso não afeta
sua batalha, mas certamente prejudicará a estabilidade e legitimidade de seu governo.`);
    }
  } else if (q4 == "n") {
    do {
      if (q5 != null) {
        console.log(wrgmsg);
      }

      var q5 = prompt(`[s] sim ou [n] não => `);
    } while (q5 != `s` && q5 != `n`);
  }
} else if (q3 == "n") {
  //q3=n

  console.log(
    `Você priorizou as vidas de seus soldados, e principalmente, a de seu amigo.`
  );
}
