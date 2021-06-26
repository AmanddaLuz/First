var fs = require('fs');
var arquivofuncionario = "funcionarios.json";
var consultaSetor = "Comercial";
var mediaSalarial=0;
var soma=0;
var setor= consultaSetor;
var nomeMaior = "";
var nomeMenor = "";
var nomeSetorMaior = "";
var nomeSetorMenor = "";
var mediaSetor = 0;
var somaSetor = 0;
var mediaSalarialSetor = 0;
var qtdSetor = 0;

fs.readFile(arquivofuncionario, "UTF-8", function(err, data){
    if(err){
        console.log(err);
    }
    var obj = JSON.parse(data);
    var maiorSalario = obj.funcionarios[0].salario; 
    var menorSalario = obj.funcionarios[0].salario; 
    var maiorSalarioSetor = obj.funcionarios[0].salario; 
    var menorSalarioSetor = obj.funcionarios[0].salario; 
    

    for (let i = 0; i < obj.funcionarios.length; i++) {
        if (obj.funcionarios[i].salario > maiorSalario){
            maiorSalario = obj.funcionarios[i].salario;
            nomeMaior = obj.funcionarios[i].nome;
        }
        if (obj.funcionarios[i].salario < menorSalario){
            menorSalario = obj.funcionarios[i].salario;
            nomeMenor = obj.funcionarios[i].nome;
        }
        soma+= obj.funcionarios[i].salario;
        mediaSalarial = soma / obj.funcionarios.length; 

        if(obj.funcionarios[i].setor == setor && obj.funcionarios[i].salario > maiorSalarioSetor){
            maiorSalarioSetor = obj.funcionarios[i].salario;
            nomeSetorMaior = obj.funcionarios[i].nome;
        }
        if(obj.funcionarios[i].setor == setor && obj.funcionarios[i].salario < menorSalarioSetor){
            menorSalarioSetor = obj.funcionarios[i].salario;
            nomeSetorMenor = obj.funcionarios[i].nome;
        }
        if(obj.funcionarios[i].setor == setor){
            somaSetor+= obj.funcionarios[i].salario;
            qtdSetor++;
        }
    }
    mediaSalarialSetor = somaSetor / qtdSetor;

    console.log("O maior salario da empresa é do(a) " +nomeMaior +" valor de " +menorSalario);
    console.log("O menor salario da empresa é do(a) " +nomeMenor +" valor de " +menorSalario);
    console.log("A média salarial é " + mediaSalarial);
    console.log("O maior salário do setor " + setor +" é do funcionario(a) " +nomeSetorMaior);
    console.log("O menor salário do setor " + setor +" é do funcionario(a) " +nomeSetorMenor);
    console.log("A média salarial do setor "+ setor +" é " + mediaSalarialSetor);
    })