


function calc(){
    let qtdPessoas = document.getElementById('pessoas').value;
    let select = document.getElementById('foodtype');
    var optionText = select.options[select.selectedIndex];
    let food = optionText.value;

    if (qtdPessoas >= 4  && qtdPessoas <= 8 && food == "comidaTailandesa"){
        resultado.innerHTML = `<p> O rodizio de Comida Tailandesa sai a ${qtdPessoas * 70} Reais para ` + qtdPessoas + ` Pessoas</p>`;
    }
    else if (qtdPessoas >= 9 && qtdPessoas <= 12 && food == "comidaTailandesa"){
        resultado.innerHTML = `<p> O rodizio de Comida Tailandesa sai a ${qtdPessoas * 65} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    }else if (qtdPessoas >= 13 && food == "comidaTailandesa"){
        resultado.innerHTML = `<p> O rodizio de Comida Tailandesa sai a ${qtdPessoas * 60} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    }



    else if(qtdPessoas >= 4  && qtdPessoas <= 8 && food == "comidaOriental"){
        resultado.innerHTML = `<p> O rodizio de Comida Oriental sai a ${qtdPessoas * 120} Reais para ` + qtdPessoas + ` Pessoas</p>`;
    }
    else if (qtdPessoas >= 9 && qtdPessoas <= 12 && food == "comidaOriental"){
        resultado.innerHTML = `<p> O rodizio de Comida Oriental sai a ${qtdPessoas * 110} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    } else if (qtdPessoas >=13 && food == 'comidaOriental'){
        resultado.innerHTML = `<p> O rodizio de Comida Oriental sai a ${qtdPessoas * 105} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    }



    else if (qtdPessoas >= 4  && qtdPessoas <= 8 && food == "comidaFrancesa"){
        resultado.innerHTML = `<p> O rodizio de Comida Francesa sai a ${qtdPessoas * 100} Reais para ` + qtdPessoas + ` Pessoas</p>`;
    }
    else if (qtdPessoas >= 9 && qtdPessoas <= 12 && food =="comidaFrancesa"){
        resultado.innerHTML = `<p> O rodizio de Comida Francesa sai a ${qtdPessoas * 90} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    } else if (qtdPessoas >= 13 && food == "comidaFrancesa") {
        resultado.innerHTML = `<p> O rodizio de Comida Francesa sai a ${qtdPessoas * 85} Reais para ` + qtdPessoas + ` Pessoas </p>`
    }

    
    else if (qtdPessoas >= 4  && qtdPessoas <= 8 && food == "comidaItaliana"){
        resultado.innerHTML = `<p> O rodizio de Comida Italiana sai a ${qtdPessoas * 100} Reais para ` + qtdPessoas + ` Pessoas</p>`;
    }
    else if (qtdPessoas >= 9 && qtdPessoas <= 12 && food =="comidaItaliana"){
        resultado.innerHTML = `<p> O rodizio de Comida Italiana sai a ${qtdPessoas * 90} Reais para ` + qtdPessoas + ` Pessoas </p>`;
    } else if (qtdPessoas >= 13 && food == "comidaItaliana") {
        resultado.innerHTML = `<p> O rodizio de Comida Italiana sai a ${qtdPessoas * 85} Reais para ` + qtdPessoas + ` Pessoas </p>`
    }
    
}



function attSelect(){
    let select = document.getElementById('foodtype');
    var optionText = select.options[select.selectedIndex];
    var food = optionText.value;
    console.log(food)
}
attSelect()

