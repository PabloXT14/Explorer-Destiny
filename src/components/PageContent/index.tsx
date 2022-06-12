import { useRef } from 'react';
import styles from './styles.module.css';

import { toast } from 'react-toastify';

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
    const answerElement = useRef<HTMLParagraphElement>(null!);
    const inputQuestion = useRef<HTMLInputElement>(null!);
    const buttonQuestion = useRef<HTMLButtonElement>(null!);

    function handleMakeQuestion() {

        if (inputQuestion.current.value.trim() == "") {
            toast.warning("Digite sua pergunta!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
            return;
        }

        buttonQuestion.current.setAttribute("disabled", "true");

        const question = `<div>${inputQuestion.current.value}</div>`

        // Gerar numero aleatório
        const totalAnswers = ANSWERS.length;
        const randomNumber = Math.floor(Math.random() * totalAnswers);
        answerElement.current.innerHTML = question + ANSWERS[randomNumber];
        answerElement.current.style.opacity = "1";

        // Sumir a reposta depois de 3 segundos
        setTimeout(() => {
            answerElement.current.style.opacity = "0";
            buttonQuestion.current.removeAttribute("disabled");
        }, 3000);
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
                ref={inputQuestion}
                type="text"
                placeholder='Digite sua pergunta'
                className={styles.input}
            />
            <button
                ref={buttonQuestion}
                className={styles.button}
                onClick={handleMakeQuestion}
            >
                Fazer Pergunta
            </button>

            <h3 className={styles.answer} ref={answerElement}>
            </h3>
        </div>
    );
}