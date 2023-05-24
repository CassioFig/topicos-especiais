import { Button, Card, Container, Select } from './components';
import { difficulties } from './data/Difficulty';
import { QuestionService } from './services';
import { TypeOfQuestions } from './types';
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
    typeOfQuestions: '',
  });
  const [questions, setQuestions] = useState<string[]>([]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    if (data.area === '') alert('Informe a disciplina');
    else if (data.subject === '') alert('Informe a matéria');
    else if (data.difficulty === '') alert('Informe a dificuldade');
    else if (data.numberOfQuestions === 0) alert('Informe o número de questões');
    else {
      const questionService = new QuestionService(
        data.area,
        data.subject,
        data.difficulty,
        data.numberOfQuestions,
        data.typeOfQuestions as TypeOfQuestions
      );
      
      questionService.generateQuestions()
        .then((questions) => setQuestions(questions))
    }
  }

  return (
    <div className="App">
      <Container>
        {
          !!questions.length ? (
            <>
             {
              questions.map((question, index) => (
                <Card>
                  { question }
                </Card>
              ))
             }
             <div className='button-area' style={{ marginBottom: 30}}>
                <Button
                  className='blue'
                  type='button'
                  onClick={() => setQuestions([])}
                >
                  Voltar
                </Button>
              </div>
            </>
          ) :
          (
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
                <Select
                  label="Tipo de questões"
                  name='type-of-questions'
                  defaultValue='Tipo de questões'
                  options={[
                    { value: TypeOfQuestions.Theory, text: 'Teórica' },
                    { value: TypeOfQuestions.Practice, text: 'Prática' },
                  ]}
                  onChange={(event) => setData({ ...data, typeOfQuestions: event.target.value })}
                />
              </div>
              
              <div className='button-area' style={{ marginBottom: 30}}>
                <Button
                  className='blue'
                  type='submit'
                >
                  CONFIRMAR
                </Button>
              </div>
            </form>
          )
        }
      </Container>
    </div>
  );
}

export default App;
