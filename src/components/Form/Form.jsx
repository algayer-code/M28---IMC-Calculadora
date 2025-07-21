import React, { useState } from 'react';
import styles from './Form.module.css';
import { calcularIMC } from '../../utils/imc';

function Form({ setImcData }) {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!altura || !peso || altura <= 0 || peso <= 0) {
        setErro('Preencha valores válidos para peso e altura.');
        return;
        }

        const imc = calcularIMC(altura, peso);
        setImcData(imc);
        setErro('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.campo}>
            <label htmlFor="altura">Altura (cm):</label>
            <input
            type="number"
            id="altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Ex: 170"
            />
        </div>

        <div className={styles.campo}>
            <label htmlFor="peso">Peso (kg):</label>
            <input
            type="number"
            id="peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Ex: 70"
            />
        </div>

        {erro && <p className={styles.erro}>{erro}</p>}

        <button type="submit">Calcular</button>
        </form>
    );
}

export default Form;