import { useRef } from 'react';
import styles from './styles.module.css';


const ANSWERS = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

export function PageContent() {
    const answer = useRef<HTMLParagraphElement>(null!);


    function handleMakeQuestion() {
        // Gerar numero aleatório
        const totalAnswers = ANSWERS.length;
        const randomNumber = Math.floor(Math.random() * totalAnswers);

        const newAnswer = ANSWERS[randomNumber];

        answer.current.innerHTML = newAnswer;
    }


    return (
        <div className={styles.container}>
            <img 
                src="https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg" 
                alt="Imagem de uma bola de cristal" 
                className={styles.image}
            />
            <h1 className={styles.title}>Vou revelar o seu destino!</h1>
            <p className={styles.subtitle}>
                Clique em fazer pergunta para que seu destino seja revelado.
            </p>
            <input 
                type="text"
                placeholder='Digite sua pergunta'
                className={styles.input}
            />
            <button 
                className={styles.button}
                onClick={handleMakeQuestion}
            >
                Fazer Pergunta
            </button>

            <h3 className={styles.answer}>
                <div>Pergunta que fiz</div>
                <p ref={answer}>

                </p>
            </h3>
        </div>
    );
}