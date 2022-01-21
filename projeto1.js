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

console.log('O confronto\n\
\n\
Dong Zhuo está morto. A China clama por um governante que traga paz.\n\
Você é o famigerado general Caocao em sua batalha final pelo controle da China contra o lendário guerreiro Lü Bu.\n\
Sua jornada foi longa e está proxima de seu fim. Derrotaste a rainha bandoleira ao norte,\n\
os reclamantes ao trono do Sul não foram o suficiente para lhe parar. Até mesmo Liu Bei jurou lealdade a você.\n\
Mas ainda resta um obstaculo à supremacia do seu governo, o fim da era dos 3 reinos e inicio de uma paz duradoura.\n\
Durante os preparativos da batalha, seu conselheiro de maior confiança percebe que está se formando um clima chuvoso.\n\
Ele o procura afim de mitigar a sua inferioridade numérica e propor uma estratégia.\n\
"Meu Rei, estamos enfretando números muito altos, mas temos uma chance. Devemos usar armaduras leves.');
// pergunta 1
do {
    if (q1=='s' || q1== 'n'){

        break

    }else {

        if ((q1 != `s` || q1 != `n`) && q1!=null) {
            console.log(wrgmsg);
        }   
        
        var q1 = prompt('Usar armaduras leves? [s] sim ou [n] não ');
    }

}while ( q1 != `s` || q1 != `n`);

//******************************* */
if (q1=='s') {
    console.log('\n\
    ***Você escolheu usar armaduras leves***\n\
    ');

    console.log('Após decidir por armaduras leves, seus generais expõe uma preocupação:')
}    
console.log('O inimigo tem o terreno alto.\n\
A infantaria, que formará a primeira interface de confronto, nao tem o costume de usar \n\
armaduras leves, pois deve resistir a batalha pelo maior periodo \n\
Seus generais aguardam uma decisão.');
    
do {
    if ((q2 == 's' || q2 == 'n')){
        break

    }else {

            if ((q2 != `s` || q2 != `n`) && q2 != null) {

                console.log(wrgmsg);
            }            
    
            var q2 = prompt('Usar armadura pesada na infantaria? [s] sim ou [n] não ');

               
        }
    }while (q2 != `s` || q2 != `n`);

    
console.log('Após decidir sobre a armadura da infantaria, um sufoco vem a mente:\n\
A infantaria precisa receber uma imensa baixa para que haja tempo de concluir a estratégia.')

do {
    if (q3=='s' || q3== 'n'){

        break

    }else {

        if ((q3 != `s` || q3 != `n`) && q3!=null) {
            console.log(wrgmsg);
        }   
        
        var q3 = prompt('Sacrificar? [s] sim ou [n] não ');
    }

}while ( q3 != `s` || q3 != `n`);