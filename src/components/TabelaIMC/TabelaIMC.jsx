import React from 'react';
import styles from './TabelaIMC.module.css';

function TabelaIMC() {
    return (
        <div className={styles.tabelaContainer}>
        <h2>Tabela de Referência IMC</h2>
        <table className={styles.tabela}>
            <thead>
            <tr>
                <th>IMC</th>
                <th>Classificação</th>
            </tr>
            </thead>
            <tbody>
            <tr><td>Menor que 18.5</td><td>Abaixo do peso</td></tr>
            <tr><td>18.5 – 24.9</td><td>Peso normal</td></tr>
            <tr><td>25.0 – 29.9</td><td>Sobrepeso</td></tr>
            <tr><td>30.0 – 34.9</td><td>Obesidade grau I</td></tr>
            <tr><td>35.0 – 39.9</td><td>Obesidade grau II</td></tr>
            <tr><td>40.0 ou mais</td><td>Obesidade grau III</td></tr>
            </tbody>
        </table>
        </div>
    );
}

export default TabelaIMC;
