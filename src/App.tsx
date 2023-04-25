import { Button, Container, Select } from './components';
import { subjects } from './data';
import './App.css';
import { difficulties } from './data/Difficulty';

function App() {
  const LIMIT_OF_QUESTIONS = 5;

  return (
    <div className="App">
      <Container>
        <form className='form-area'>
          <div className='select-area'>
            <Select
              label="Matéria"
              name='subject'
              defaultValue='Selecione a matéria'
              options={subjects}
            />
            <Select
              label="Dificuldade"
              name='difficulty'
              defaultValue='Informe a dificuldade'
              options={difficulties}
            />
            <Select
              label="Número de questões"
              name='number-of-questions'
              defaultValue='Número de questões'
              options={
                Array.from(Array(LIMIT_OF_QUESTIONS).keys())
                  .map((_, index) => ({ value: String(index + 1), text: `${index + 1}` }))
              }
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
