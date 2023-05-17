import { Button, Container, Select } from './components';
import { difficulties } from './data/Difficulty';
import { subjects } from './data/Subject';
import { useState } from 'react';
import { areas } from './data';
import './App.css';

function App() {
  const LIMIT_OF_QUESTIONS = 5;
  const [data, setData ] = useState({
    area: '',
    subject: '',
    difficulty: '',
    numberOfQuestions: 0,
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    if (data.area === '') alert('Informe a disciplina');
    else if (data.subject === '') alert('Informe a matéria');
    else if (data.difficulty === '') alert('Informe a dificuldade');
    else if (data.numberOfQuestions === 0) alert('Informe o número de questões');
  }

  return (
    <div className="App">
      <Container>
        <form className='form-area' onSubmit={handleSubmit}>
          <div className='select-area'>
            <Select
              label="Disciplina"
              name='area'
              defaultValue='Selecione a disciplina'
              options={areas}
              onChange={(event) => setData({ ...data, area: event.target.value })}
            />
            <Select
              label="Matéria"
              name='subject'
              defaultValue='Selecione a matéria'
              options={!!data.area ? subjects[data.area] : []}
              onChange={(event) => setData({ ...data, subject: event.target.value })}
            />
            <Select
              label="Dificuldade"
              name='difficulty'
              defaultValue='Informe a dificuldade'
              options={difficulties}
              onChange={(event) => setData({ ...data, difficulty: event.target.value })}
            />
            <Select
              label="Número de questões"
              name='number-of-questions'
              defaultValue='Número de questões'
              options={
                Array.from(Array(LIMIT_OF_QUESTIONS).keys())
                  .map((_, index) => ({ value: String(index + 1), text: `${index + 1}` }))
              }
              onChange={(event) => setData({ ...data, numberOfQuestions: Number(event.target.value) })}
            />
          </div>
          
          <div className='button-area'>
            <Button
              className='blue'
              type='submit'
            >
              CONFIRMAR
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default App;
