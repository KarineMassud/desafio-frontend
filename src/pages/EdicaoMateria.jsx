import styles from '../style/Cadastro.css'


import {useState, useEffect} from 'react';

const EdicaoMateria = () => {
  const [displayName, setDisplayName] = useState("");
  const [mae, setMae] = useState("");
  const [pai, setPai] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault ();


    const user = {
      displayName,
      mae,
      pai
    }
  };
  return (
    <div className={styles.cadastro}>
        <h1>Editar</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Diciplina:</span>
                <input 
                type="text"
                name="displayName"
                required
                placeholder="Nome da Diciplina"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            <label>
                <span>Aluno:</span>
                <input 
                type="NomeAluno"
                name="Nome do Aluno"
                required
                placeholder="Nome do Aluno"
                value={mae}
                onChange={(e) => setMae(e.target.value)}/>
            </label>
            
            <button className='btn'>Editar</button>
        </form>
    </div>
  )
}

export default EdicaoMateria;