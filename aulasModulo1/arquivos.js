var fs = require("fs");
//posivel criar uma vaariavel com o nome do arquivo para facilitar a inclusao no codigo
var nomeArquivo = "meuArquivo.txt";

console.log("1");

fs.writeFile(nomeArquivo, "um texto qualquer", function(err) {
    if(err !== null) {
        console.log(err);
    } else {
        console.log("arquivo escrito com sucesso");

        // Se quiser acrescentar (concatenar) texto Use:
        fs.appendFile(nomeArquivo , "\nnova linha no texto" , function(err) {
            if (err){
                console.log(err);
            } else {
                fs.readFile("meuArquivo.txt", "utf-8", function(err, data){
                    if(err){
                        console.log(err);
                    }else {
                        console.log(data);
                        // data refere-se ao conteudo.
            }
        })
            }
        })
    }
});

console.log("2");
