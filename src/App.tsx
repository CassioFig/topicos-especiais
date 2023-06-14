import { Button, Card, Container, Select } from './components';
import { difficulties } from './data/Difficulty';
import { QuestionService } from './services';
import { TypeOfQuestions } from './types';
import { subjects } from './data/Subject';
import { useState } from 'react';
import { areas } from './data';
import './App.css';
import { questionsMock } from './data/Questions';

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
  const [page, setPage] = useState(0);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    if (data.area === '') alert('Informe a disciplina');
    else if (data.subject === '') alert('Informe a matéria');
    else if (data.difficulty === '') alert('Informe a dificuldade');
    else if (data.numberOfQuestions === 0) alert('Informe o número de questões');
    else {
      // const questionService = new QuestionService(
      //   data.area,
      //   data.subject,
      //   data.difficulty,
      //   data.numberOfQuestions,
      //   data.typeOfQuestions as TypeOfQuestions
      // );
      
      // questionService.generateQuestions()
      //   .then((questions) => setQuestions(questions))
      if (data.area === 'matemática') setQuestions(questionsMock['matemática']['regra de três']['prática']['difícil'])
      if (data.area === 'programação') setQuestions(questionsMock['programação']['estruturas de dados']['teórica']['fácil'])
    }
  }

  return (
    <div className="App">
      <Container>
        {
          page === 0 && (
            <>
              <div className='presentation'>
                <h1>Gerador de questões</h1>
                <p>
                  Seja bem-vindo(a) ao nosso inovador sistema de geração de questões baseado na tecnologia ChatGPT! Com essa poderosa ferramenta, você terá acesso a um vasto conjunto de questões em diferentes níveis de dificuldade para uma variedade de disciplinas acadêmicas. Nosso objetivo é fornecer a você uma experiência de aprendizado personalizada, estimulante e eficaz.
                </p>
                <p>
                  Uma das principais vantagens do nosso sistema é a capacidade de gerar questões em vários níveis de dificuldade. Isso significa que você pode selecionar o grau de desafio que melhor se adequa ao seu nível de conhecimento e se aprimorar gradualmente. Se você é um iniciante procurando se familiarizar com um determinado assunto, ou um estudante avançado buscando desafios mais complexos, nosso sistema tem o que você precisa.
                </p>

                <Button
                  className='blue'
                  type='button'
                  onClick={() => setPage(1)}
                >
                  Gerar Questões
                </Button>
              </div>
            </>
          )
        }
        {
          page === 1 && (
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
          )
        }
      </Container>
    </div>
  );
}

export default App;
