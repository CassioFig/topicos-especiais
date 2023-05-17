import { TField } from "../types";

type Subjects = { [key: string]: TField[] }
export const subjects: Subjects = {
    'matemática': [
        { value: 'regra de três', text: 'Regra de três' },
        { value: 'equações lineares', text: 'Equações lineares' },
        { value: 'geometria analítica', text: 'Geometria analítica' },
    ],
    'programação': [
        { value: 'algoritmos', text: 'Algoritmos' },
        { value: 'estruturas de dados', text: 'Estruturas de Dados' },
        { value: 'programação orientada a objetos', text: 'Programação Orientada a Objetos' },
    ],
    'inglês': [
        { value: 'gramática', text: 'Gramática' },
        { value: 'vocabulário', text: 'Vocabulário' },
        { value: 'leitura', text: 'Leitura' },
    ],
};