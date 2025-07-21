import React from 'react';
import styles from './Result.module.css';

function Result({ imcData }) {
    const { imc, classificacao } = imcData;

    const getImage = () => {
        if (classificacao === 'Abaixo do peso') return '/imagens/abaixo-peso.png';
        if (classificacao === 'Peso normal') return '/imagens/peso-normal.png';
        if (classificacao === 'Sobrepeso') return '/imagens/sobrepeso.png';
        return '/imagens/obesidade.png'; // para todas as obesidades
    };

    return (
        <div className={styles.resultado}>
        <h2>Resultado</h2>
        <p><strong>IMC:</strong> {imc}</p>
        <p><strong>Classificação:</strong> {classificacao}</p>
        <img src={getImage()} alt={classificacao} className={styles.imagem} />
        </div>
    );
}

export default Result;