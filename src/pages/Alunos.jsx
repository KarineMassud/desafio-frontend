import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../style/Tabela.css';
import {Link} from "react-router-dom";
import CadastroAlunos from './CadastroAluno';
import EdicaoAluno from '../pages/EdicaoAluno';
import { useNavigate } from 'react-router-dom';


export default function BasicTable() {
  const navigate = useNavigate();

  return <BasicTableClass navigate={navigate} />;
}

 class BasicTableClass extends React.Component {


  constructor(props) {
    super(props);

    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    
  }

  createData(id, name, father, mother, created_at, updated_at, deleted_at ) {
    return { id, name, father, mother, created_at, updated_at, deleted_at };
  }

  rows = [
    this.createData('1', 'Fulano da Silva', 'Beltrano Silva e Silva', 'Cicrana da Silva Silva', 'ontem', 'hoje', 'amanha'),
    this.createData('2', 'Fulano da Silva', 'Beltrano Silva e Silva', 'Cicrana da Silva Silva', 'ontem', 'hoje',),
    this.createData('3', 'Fulano da Silva', 'Beltrano Silva e Silva', 'Cicrana da Silva Silva', 'ontem', 'hoje',),
    this.createData('4', 'Fulano da Silva', 'Beltrano Silva e Silva', 'Cicrana da Silva Silva', 'ontem', 'hoje',),
  ];

  deleteItem(id) {
    console.log(`TO DO: chamar service para apagar o item de id ${id} da tabela`)
  }

  editItem(id) {
    this.props.navigate('/edicaoAluno');
  }

  cadastrarItem = () => {
    //<Link to={'/cadastroAluno'}>cadastroAluno</Link>  
    this.props.navigate('/cadastroAluno');
  
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h2>Alunos</h2>
          <button className='btn' onClick={this.cadastrarItem}>Cadastrar</button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell>Pai</TableCell>
                <TableCell>Mãe</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.rows.filter((row) => !row.deleted_at).map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"> {row.name}</TableCell>
                  <TableCell>{ row.father }</TableCell>
                  <TableCell>{ row.mother }</TableCell>
                  <TableCell className='buttons'>
                    <FontAwesomeIcon className='icon green' onClick={ () => this.editItem(row.id) } icon={ faEdit } />
                    <FontAwesomeIcon className='icon red' onClick={ () => this.deleteItem(row.id) } icon={ faTrash } />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      
    );
  }
}