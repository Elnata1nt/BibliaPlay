export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Quem construiu a arca?",
    options: ["Moisés", "Noé", "Abraão", "Davi"],
    correctAnswer: 1,
  },
  {
    id: 2,
    text: "Quantos dias e noites choveu durante o dilúvio?",
    options: ["7", "14", "30", "40"],
    correctAnswer: 3,
  },
  {
    id: 3,
    text: "Quem derrotou o gigante Golias?",
    options: ["Sansão", "Saul", "Davi", "Samuel"],
    correctAnswer: 2,
  },
  {
    id: 4,
    text: "Quantos mandamentos Deus deu a Moisés?",
    options: ["5", "7", "10", "12"],
    correctAnswer: 2,
  },
  {
    id: 5,
    text: "Qual animal falou com Balaão?",
    options: ["Camelo", "Ovelha", "Jumento", "Pomba"],
    correctAnswer: 2,
  },
  {
    id: 6,
    text: "Qual era o nome da mãe de Jesus?",
    options: ["Marta", "Maria", "Miriam", "Ana"],
    correctAnswer: 1,
  },
  {
    id: 7,
    text: "Quantos livros há na Bíblia?",
    options: ["60", "61", "66", "70"],
    correctAnswer: 2,
  },
  {
    id: 8,
    text: "Quem foi jogado na cova dos leões?",
    options: ["José", "Daniel", "Elias", "Davi"],
    correctAnswer: 1,
  },
  {
    id: 9,
    text: "Quem foi o primeiro homem criado por Deus?",
    options: ["Adão", "Abraão", "Isaac", "Jacó"],
    correctAnswer: 0,
  },
  {
    id: 10,
    text: "Qual o nome do mar que foi aberto por Moisés?",
    options: ["Mar Vermelho", "Mar Mediterrâneo", "Mar da Galileia", "Mar Morto"],
    correctAnswer: 0,
  },
  {
    id: 11,
    text: "Quem foi engolido por um grande peixe?",
    options: ["Moisés", "Elias", "Jonas", "Noé"],
    correctAnswer: 2,
  },
  {
    id: 12,
    text: "Qual apóstolo andou sobre as águas com Jesus?",
    options: ["Pedro", "João", "Tiago", "Tomé"],
    correctAnswer: 0,
  },
  {
    id: 13,
    text: "Quantos discípulos Jesus tinha?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
  },
  {
    id: 14,
    text: "Quem traiu Jesus por 30 moedas de prata?",
    options: ["Pedro", "Judas", "João", "Tiago"],
    correctAnswer: 1,
  },
  {
    id: 15,
    text: "Qual era o trabalho de Zaqueu?",
    options: ["Fazendeiro", "Carpinteiro", "Cobrador de impostos", "Pastor"],
    correctAnswer: 2,
  },
  {
    id: 16,
    text: "Em que língua foi escrito o Novo Testamento?",
    options: ["Aramaico", "Latim", "Grego", "Hebraico"],
    correctAnswer: 2,
  },
  {
    id: 17,
    text: "Qual era o nome do primeiro irmão de Abel?",
    options: ["Caim", "Sete", "Noé", "Enoque"],
    correctAnswer: 0,
  },
  {
    id: 18,
    text: "Qual o menor versículo da Bíblia?",
    options: ["Jesus chorou.", "No princípio.", "Deus é amor.", "Amarás o próximo."],
    correctAnswer: 0,
  },
  {
    id: 19,
    text: "Qual o último livro da Bíblia?",
    options: ["Apocalipse", "João", "Êxodo", "Salmos"],
    correctAnswer: 0,
  },
  {
    id: 20,
    text: "Quem escreveu a maior parte das cartas do Novo Testamento?",
    options: ["Pedro", "João", "Paulo", "Tiago"],
    correctAnswer: 2,
  },
];
