import { Configuration, OpenAIApi } from "openai";
import { TypeOfQuestions } from "../types";


export class QuestionService {
    private area: string;
    private subject: string;
    private difficulty: string;
    private numberOfQuestions: number;
    private typeOfQuestions: TypeOfQuestions;
    private openAi = new OpenAIApi(new Configuration({
        apiKey: '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'
    }));
    
    constructor(area: string, subject: string, difficulty: string, numberOfQuestions: number, typeOfQuestions: TypeOfQuestions) {
        this.area = area;
        this.subject = subject;
        this.difficulty = difficulty;
        this.numberOfQuestions = numberOfQuestions;
        this.typeOfQuestions = typeOfQuestions;
    }

    public async generateQuestions(): Promise<string[]> {
        const questions = await this.openAi.createCompletion({
            model: "text-davinci-003",
            prompt: this.generatePrompt(),
            max_tokens: 1000,
            temperature: 0.6,
        })
        
        return questions.data.choices[0].text?.split('\n').filter(question => !!question) ?? [];
    }

    private generatePrompt(): string {
        return `Escreva ${this.numberOfQuestions} questões ${this.typeOfQuestions} em português da disciplina ${this.area} do assunto "${this.subject}" com a dificuldade ${this.difficulty}.`
    }
}