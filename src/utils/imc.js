export function calcularIMC(altura, peso) {
    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    return {
        imc: imc.toFixed(2),
        classificacao,
    };
}
