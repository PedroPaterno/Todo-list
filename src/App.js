import React, { useEffect, useState } from 'react'; 
import { IoMdAdd } from "react-icons/io"; 
import { FaRegTrashAlt } from "react-icons/fa";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md"; 
import { Container,TaskInputContainer,TaskInput,AddButton,TaskList,TaskItem,CheckBox,TaskText,DeleteButton} from './styles'; 

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputUsuario, setInputUsuario] = useState('');

  function adicionarTarefaDigitada() {
    setTarefas([...tarefas, { texto: inputUsuario, feita: false }]);
    setInputUsuario('');
  }

  function marcarComoFeita(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].feita = !novasTarefas[index].feita;
    setTarefas(novasTarefas);
  }

  function excluirTarefa(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  useEffect(() => {
    const TarefaStorage = localStorage.getItem('tarefas');
    if (TarefaStorage) {
      setTarefas(JSON.parse(TarefaStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <Container>

      <h1>Lista de Tarefas</h1>
      
      <TaskInputContainer>

        <TaskInput type='text' placeholder='Digite sua tarefa' value={inputUsuario} onChange={e => setInputUsuario(e.target.value)}/>

        <AddButton type='button' onClick={adicionarTarefaDigitada}><IoMdAdd /></AddButton>

      </TaskInputContainer>

      <TaskList>

        {tarefas.map((tarefa, index) => (
          <TaskItem key={index} feita={tarefa.feita}>

            <CheckBox onClick={() => marcarComoFeita(index)}>{tarefa.feita ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</CheckBox>

            <TaskText>{tarefa.texto}</TaskText><DeleteButton onClick={() => excluirTarefa(index)}><FaRegTrashAlt /></DeleteButton>

          </TaskItem>
        ))}
      </TaskList>

    </Container>
  );
}

export default App;
