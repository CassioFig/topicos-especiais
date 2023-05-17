import { Configuration, OpenAIApi } from "openai";


export class QuestionService {
    private area: string;
    private subject: string;
    private difficulty: string;
    private numberOfQuestions: number;
    private openAi = new OpenAIApi(new Configuration({
        apiKey: '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'
    }));
    
    constructor(area: string, subject: string, difficulty: string, numberOfQuestions: number) {
        this.area = area;
        this.subject = subject;
        this.difficulty = difficulty;
        this.numberOfQuestions = numberOfQuestions;
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
        return `Crie e enumere ${this.numberOfQuestions} questões em português sobre ${this.area} sobre ${this.subject} de dificuldade ${this.difficulty}.`
    }
}