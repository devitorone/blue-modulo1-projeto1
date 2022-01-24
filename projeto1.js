var prompt = require('prompt-sync')();

var wrgmsg = 'reposta precisa ser "s" ou "n"' 
/*console.log('O confronto');
console.log('')
console.log('Dong Zhuo está morto. A China clama por um governante que traga paz.');
console.log('Você é o famigerado general Caocao em sua batalha final pelo controle da China contra o lendário guerreiro Lü Bu.');
console.log('Sua jornada foi longa e está proxima de seu fim. Derrotaste a rainha bandoleira ao norte, ')
console.log('os reclamantes ao trono do Sul na foram o suficiente para lhe parar. Até mesmo Liu Bei jurou lealdade a você.')
console.log('Mas ainda resta um obstaculo à supremacia do seu governo, o fim da era dos 3 reinos e inicio de uma paza duradoura.')
console.log('')
console.log('O campo de batalha está posto. O clima está chuvoso ');*/

console.log(`O confronto

Dong Zhuo está morto. A China clama por um governante que traga paz.
Você é o famigerado general Caocao em sua batalha final pelo controle da China contra o lendário guerreiro Lü Bu.
Sua jornada foi longa e está proxima de seu fim. Derrotaste a rainha bandoleira ao norte,
os reclamantes ao trono do Sul não foram o suficiente para lhe parar. Até mesmo Liu Bei jurou lealdade a você.
Mas ainda resta um obstaculo à supremacia do seu governo, o fim da era dos 3 reinos e inicio de uma paz duradoura.
Durante os preparativos da batalha, seu conselheiro de maior confiança percebe que está se formando um clima chuvoso.
Ele o procura afim de mitigar a sua inferioridade numérica e propor uma estratégia.
"Meu Rei, estamos enfretando números muito altos, mas temos uma chance. Devemos usar armaduras leves"
 `);
// pergunta 1
do {
        if (q1 != null) {
            console.log(wrgmsg);
        }
        console.log('Usar armaduras leves nos flancos e nas infantarias ( unidades escondidas no início da batalha)? ');
        var q1 = prompt('[s] sim ou [n] não => ');

}while ( q1 != `s` && q1 != `n`);

switch (q1) {
    case 's':
        armaduraG = 'leves'
        break
    case 'n':
        armaduraG = 'pesadas'
        break      
}

console.log(`
***Você escolheu usar armaduras ${armaduraG}***
`);

console.log(`Após decidir por armaduras ${armaduraG}, seus generais expõem uma preocupação:`)

console.log(`O inimigo tem o terreno alto;
A infantaria que formará a primeira interface de confronto (1º batalhão)
não tem o costume de usar armaduras leves, pois deve resistir a batalha pelo maior periodo.
Dito isso, seus generais aguardam uma decisão.
'`);

 // Questão 2   
do {
    
    if (q2 != null) {

        console.log(wrgmsg);
    }            

    var q2 = prompt('Usar armadura pesada no 1º batalhão? [s] sim ou [n] não ');       
        
}while (q2 != `s` && q2 != `n`);

switch (q2) {
    case 's':
        armadura1B = 'pesada'
        break
    case 'n':
        armadura1B = 'leve'
        break
}

console.log(`
*** O primeiro batalhão usará armadura ${armadura1B} ***
`)
    

console.log(`
A BATALHA SE INICIA

Seu inimigo envia o primeiro batalhão, de armaduras pesadas. O restante da infataria 
aguarda junto da cavalaria.
Seu conselheiro de maior confiança, seu amigo, está liderando o 1ºB.

A batalha é sangrenta, suja e árdua, mas seus soldados estão resistindo à superioridade numérica.
Seu amigo então sinaliza que você deve esperar mais para enviar o restante do exército.
...
Após um tempo, você percebe que o 1ºB está começando a ceder. Porém, para a emboscada e o ataque 
flanqueado funcionar, seu inimigo tem que enviar o restante de seu exército para a lama, formada
pela chuva, onde ficará com a mobilidade prejudicada.

Esperar mais poderá causar um dano expressivo no 1ºB.
Existe uma chance de 50% para esse dano lhe atingir.
`);

do {
    
    if (q3 != null) {

        console.log(wrgmsg);
    }            

    var q3 = prompt('Esperar mais? [s] sim ou [n] não ');       
        
}while (q3 != `s` && q3 != `n`);

if (q3 == 's') {
    let dano = Math.random();
    // Porque essa é a historia do unificador de um império. Game is HARD.
    if (dano < 0.5) {
        console.log (`Você sacrificou o batalhão de seu amigo, e com isso, ele também. 
        Vejamos se valerá a pena!`)
    }else if (dano > 0.5) {
        console.log(`O 1ºB resiste de forma gloriosa. Canções serão cantadas sobre estes soldados.`)
    }

    console.log(`Você esperou e seu inimigo, em sua arrogância e inexperiência no comando, atacou 
prematuramente com o restante do exército na esperança de finalizar logo e com poucas baixas. 

O inimigo está onde você quer. Seus flanqueadores aguardam seu comando. `)
    do {
        
        if (q4 != null) {

            console.log(wrgmsg);
        }            

        let q4 = prompt(`Agora você deve escolher se ataca com os arqueiros primeiro.
        atacar com os arqueiros? sim [s] ou não [n] ?`)
        
    }while (q4 != `s` && q4 != `n`);

    if (q4 = 's') {
        

    }


}else if (q3 == 'n') {
    //q3=n

    console.log(`Você priorizou as vidas de seus soldados, e principalmente, a de seu amigo.`)
}

