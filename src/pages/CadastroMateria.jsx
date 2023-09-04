import styles from '../style/Cadastro.css'


import {useState, useEffect} from 'react';

const CadastroMateria = () => {
  const [displayDisciplina, setDisplayDisciplina] = useState("");
  const [aluno, setAluno] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault ();
    const user = {
      displayDisciplina,
      aluno
    }
  };
  return (
    <div className={styles.cadastro}>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Disciplina:</span>
                <input 
                type="text"
                name="displayName"
                required
                placeholder="Disciplina"
                value={displayDisciplina}
                onChange={(e) => setDisplayDisciplina(e.target.value)}
                />
            </label>
            <label>
                <span>Aluno:</span>
                <input 
                type="NomeAluno"
                name="Nome do Aluno"
                required
                placeholder="Nome do Aluno"
                value={aluno}
                onChange={(e) => setAluno(e.target.value)}/>
            </label>
           
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default CadastroMateria;