import styles from '../style/Cadastro.css'


import {useState, useEffect} from 'react';

const EdicaoAluno = () => {
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
                <span>Nome:</span>
                <input 
                type="text"
                name="displayName"
                required
                placeholder="Nome do usuário"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                />
            </label>
            <label>
                <span>Mãe:</span>
                <input 
                type="NomeDaMãe"
                name="Nome da mãe"
                required
                placeholder="Nome da mãe"
                value={mae}
                onChange={(e) => setMae(e.target.value)}/>
            </label>
            <label>
                <span>Pai:</span>
                <input 
                type="Pai"
                name="Nome do pai"
                required
                placeholder="Nome do pai"
                
                />
            </label>
            <button className='btn'>Editar</button>
        </form>
    </div>
  )
}

export default EdicaoAluno;