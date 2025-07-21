import React from 'react';
import styles from './styles/App.module.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result';
import TabelaIMC from './components/TabelaIMC/TabelaIMC';

function App() {
    const [imcData, setImcData] = React.useState(null);

    return (
        <div className={styles.container}>
        <h1>Calculadora de IMC</h1>
        <Form setImcData={setImcData} />
        {imcData && <Result imcData={imcData} />}
        <TabelaIMC />
        </div>
    );
}

export default App;