var prompt = require("prompt-sync")();

var wrgmsg = 'reposta precisa ser "s" ou "n"';

var rslt = 0

console.log(`O confronto

Dong Zhuo está morto. A China clama por um governante que traga paz.
Você é o famigerado general Caocao em sua batalha final pelo controle da China contra o lendário guerreiro Lü Bu.
Sua jornada foi longa e está proxima de seu fim. Derrotaste a rainha bandoleira ao norte,
os reclamantes ao trono do Sul não foram o suficiente para lhe parar. Até mesmo Liu Bei jurou lealdade a você.
Mas ainda resta um obstaculo à supremacia do seu governo, o fim da era dos 3 reinos e inicio de uma paz duradoura.
Durante os preparativos da batalha, seu conselheiro de maior confiança percebe que está se formando um clima chuvoso.
Ele o procura afim de mitigar a sua inferioridade numérica e propor uma estratégia.
"Meu Rei, estamos enfretando números muito altos, mas temos uma chance. Devemos usar armaduras leves"

Usar armaduras leves nos flancos e nas infantarias ( unidades escondidas no início da batalha)?`);
// pergunta 1
do {
  if (q1 != null) {
    console.log(wrgmsg);
  }
  var q1 = prompt(`
  [s] sim ou [n] não => `);
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

console.log(
  `O inimigo tem o terreno alto;
A infantaria que formará a primeira interface de confronto (1º batalhão)
não tem o costume de usar armaduras leves, pois deve resistir a batalha pelo maior periodo.
Dito isso, seus generais aguardam uma decisão.
Usar armadura pesada no 1º batalhão?`);

// Questão 2
do {
  if (q2 != null) {
    console.log(wrgmsg);
  }

  var q2 = prompt(`
  [s] sim ou [n] não => `);
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
Esperar mais? `);

do {
  if (q3 != null) {
    console.log(wrgmsg);
  }

  var q3 = prompt(`
  [s] sim ou [n] não => `);
} while (q3 != `s` && q3 != `n`);

if (q3 == "s") {
  var dano = Math.random();
  // Porque essa é a historia do unificador de um império. Game is HARD.
  if (dano > 0.5) {
    console.log(`
Você sacrificou o batalhão de seu amigo, e com isso, ele também. 

Vejamos se valerá a pena!`);
  } else if (dano < 0.5) {
    console.log(
      `O 1ºB resiste de forma gloriosa. Canções serão cantadas sobre estes soldados fiéis ao 
      Grandioso Profeta RNGesus que lhes favorece em meio ao caos da batalha.`
    );
  }

  console.log(`
  Você esperou e seu inimigo, com arrogância e inexperiência no comando, atacou 
prematuramente com o restante do exército na esperança de finalizar logo e com poucas baixas. 

O inimigo está onde você quer. Seus flanqueadores aguardam seu comando.
Atacar com os arqueiros antes de enviar a infantaria?`);
  do {
    if (q4 != null) {
      console.log(wrgmsg);
    }

    var q4 = prompt(`
    [s] sim ou [n] não => `);
  } while (q4 != `s` && q4 != `n`);

  if (q4 == "s") {
    console.log(`
    *** Você atacou, antes de mais nada, com seus arqueiros, dizimando centenas. ***
        
        Após o ataque dos arqueiros, o restante de seu exército tomou conta do campo de batalha.
    Falta ainda finalizar o líder inimigo. O poderoso Lu Bu. Todos os seus soldados estão com a 
    atenção voltada para vocês. Lu Bu solicita um duelo.
    Aceitar desafio de Lu Bu?`);
    do {
      if (q5 != null) {
        console.log(wrgmsg);
      }

      var q5 = prompt(`
      [s] sim ou [n] não => `);
    } while (q5 != `s` && q5 != `n`);

    if (q5 == "s") {
      console.log(`
      Ao aceitar o duelo de Lu Bu, você diz para que ele venha de encontro com
o destino. Mas ele nao consegue sair do lugar. Está de armadura pesada, sobre a lama.
Entao, no chao, ajoelhado, ele implora por sua vida. Seus soldados riem da cena.

Um soldado desconhecido pega a espada de Lu Bu e diz: Esse imundo não é digno de Vossa Majestade.
Todos gritam para que o soldado mate Lu Bu, mas esse aguarda sua ordem. Você apenas acena que sim.`);
    } else if (q5 == "n") {
      console.log(
        `Você se recusa a duelar contra Lu Bu. Seus soldados ficam receosos sobre o motivo.
Estão dizendo que falta honra em um covarde e que somente um covarde recusa um duelo. Isso não afeta
sua batalha, mas certamente prejudicará a estabilidade e legitimidade de seu governo.`);
    }
  } else if (q4 == "n") {
    console.log(`
    *** Você atacou com a infantaria antes dos arqueiros ***
    
    Essa não foi a escolha mais sábia. Sua infantaria está desprotegida contra as flechas. Seus arqueiros
    se tornaram inúteis com essa decisão. Houve um dano significativo em seu exército, que ja tinha
    desvantagem numérica.
    ...
    Mesmo perante essa desvantagem, seu exército domina o inimigo. 
    Falta ainda finalizar o líder. O poderoso Lu Bu. Todos os soldados estão com a 
    atenção voltada para vocês. Lu Bu solicita um duelo.
    Aceitar desafio de Lu Bu? `);
    do {
      if (q5 != null) {
        console.log(wrgmsg);
      }

      var q5 = prompt(`[s] sim ou [n] não => `);
    } while (q5 != `s` && q5 != `n`);

    if (q5 == "s") {
      console.log(`
      Você aceita o desafio de Lü Bü.
  Vocês estão em um terreno mais firme, ainda cheio de lama. Lu Bu está com a mobilidade levemente 
  reduzida. A luta dura por um longo período, entre esquivas e cruzamento de espadas. Até que Lu Bu
  consegue feri-lo na perna com sua espada enferrujada. Mas se recupera rapidamente e dá um golpe
  final no pescoço de Lu Bu.`);
    } else if (q5 == "n") {
      console.log(`
      Você se recusa a duelar contra Lu Bu. Seus soldados ficam receosos sobre o motivo.
Estão dizendo que falta honra em um covarde e que somente um covarde recusa um duelo. Isso não afeta
sua batalha, mas certamente prejudicará a estabilidade e legitimidade de seu governo.`);
    }
  }
} else if (q3 == "n") {
  //q3=n

  console.log(
    `Você priorizou as vidas de seus soldados, e principalmente, a de seu amigo.
O campo de batalha infla. Sua infantaria ataca e rapidamente elimina o 1ºB inimigo.
Seu adversário logo reage com uma saraivada de flechas na área dominado por você.
O momento não poderia ser mais crucial. Você deve escolher se defende sua posição e espera
o inimigo descer, ou persegui-lo morro acima.
Perseguir o inimigo?`);

  do {
    if (q4 != null) {
      console.log(wrgmsg);
    }

    var q4 = prompt(`[s] sim ou [n] não => `);
  } while (q4 != `s` && q4 != `n`);

  if (q4 == 's') {
    console.log(`
    Você ordena que seus soldados entrem em formação de defesa contra ataques a 
distância, e que persigam o exército inimigo até Grande Muralha, se for preciso. Seu adversário
recua os arqueiros para um ponto mais alto do morro e começa a formar uma linha de resistência
ao seu avanço. Você ainda tem a cavalaria aguardando a infantaria os alcançar para engajarem na
perseguição. A escolha é clara:
Ordenar que a cavalaria tente furar o bloqueio inimigo antes da infantaria os alcançar?`)
  do {
    if (q5 != null) {
      console.log(wrgmsg);
    }

    var q5 = prompt(`
    [s] sim ou [n] não => `);
  } while (q5 != `s` && q5 != `n`);

  if (q5=='s') {

    console.log(`
    Sua cavalaria fura o bloqueio, dizimando o batalhão de arqueiros inimigos. Um dano
expressivo.`)

  }else if(q5=='n'){

    console.log(`
    Sua infantaria alcança a cavalaria, porém você se encontra em uma posição de muita
  desvantagem do terreno. Tudo agora depende do quão bem você escolheu sua estratégia para mitigar
  os números adversários.`)
  }

  }else if (q4=='n'){

    console.log(`
    Você escolhe não perseguir o inimigo em terreno alto e mantém sua posição.
  O adversário marcha em sua direçao descendo o morro, sem perceber sua cavalaria escondida.
  Seus generais logo veem a oportunidade se desenvolver. Você deve atacar os arqueiros ou a infantaria.
  Atacar os arqueiros inimigos?`);

    do {
      if (q5 != null) {
        console.log(wrgmsg);
      }

      var q5 = prompt(`
      [s] sim ou [n] não => `);
    } while (q5 != `s` && q5 != `n`);
// --------------------------------------------------------// 
    if(q5=='s') {
      console.log(`
      A cavalaria surge como uma cena apocaliptica para os arqueiros. Estavam completamente
      expostos. A morte era certa.
      
      Agora você tem a cavalaria atacando atrás das linhas inimigas. `)

    }else if(q5=='n') {
      console.log(`
      Você se precipitou `)

    }

  }
}

if (q1=='s'){
  rslt++
}
if (q2=='s') {
    rslt++
}
if (q3=='s'){
  rslt++
}
if (q4=='s'){
  rslt++
}
if (q5=='s'){
  rslt++  
}

if (rslt==0){
  console.log(`
  Você claramente não estava sóbrio. Tomou todas as decisões erradas. Essa batalha sozinha
  desmerece todas as suas conquistas anteriores`);
}
if (rslt==1 || rslt==2){
  console.log(`
  Você perdeu a batalha, mas sobrevive para lutar um outro dia pelo trono.`)
}
if (rslt==3){
  console.log(`
  Seus esforços foram notórios. Porém a ultima batalha foi muito violenta para seu exército
  e foi praticamente um empate.  
  Os soldados remanescentes não foram suficientes para impor uma unificação em todo o território`)
}
if (rslt==4){
  console.log(`
  A batalha foi dura, mas sua superioridade como comandante foi crucial.
  Suas escolhas o levaram a mitigar os números inimigos e vencer com tranquilidade`)
}
if (rslt==5){
  console.log(`
  Sucesso não faz juz essa batalha. Ela foi ímpar em todos os quesitos. Você escolheu
  o equipamento ideal. O fluxo da batalha estava em suas mãos. Sua bravura e inteligência serão
  lembrados por gerações a seguir. Seu império é uma vontade dos Céus. Sua dinastia será duradoura 
  e próspera. `);
  if (dano<0){
    console.log(`
    Séculos mais tarde descobriu-se que até mesmo SunTzu foi seu seguidor (o comandante do 1ºB).`)
  }else{

  }
}

console.log(`
************ GAME OVER *********************`)