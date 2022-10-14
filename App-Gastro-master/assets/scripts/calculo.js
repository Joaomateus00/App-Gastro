let qtdPessoas = document.getElementById('pessoas').value;
let select = document.querySelector('#foodtype');
let food = select.options[select.selectedIndex].text;
console.log(food)
console.log(select)
const resultado = document.getElementById('resultado').value

function calc(){
    
    // let resultado = document.getElementById('resultado');
    if (qtdPessoas >= 4  && qtdPessoas <= 8 && food ==='comida-tailandesa'){
        resultado.innerHTML = `<p> O rodizio de Comida Tailandesa sai a ${qtdPessoas * 70} Reais para ` + qtdPessoas + ` Pessoas</p>`;
    }
    else if (qtdPessoas > 9 && qtdPessoas <=12 && food ==='comida-tailandesa'){
        resultado.innerHTML = `<p> O rodizio de Comida Tailandesa sai a ${qtdPessoas * 65} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    } else {
        resultado.innerHTML = `<p> O rodizio de Comida Tailandesa sai a ${qtdPessoas * 60} Reais para ` + qtdPessoas; + ` Pessoas </p>`
    }
    
}

