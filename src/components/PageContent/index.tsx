import styles from './styles.module.css';

export function PageContent() {
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
            <button className={styles.button}>
                Fazer Pergunta
            </button>
        </div>
    );
}