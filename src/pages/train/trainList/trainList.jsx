import styles from './trainList.module.css'
import {Link} from "react-router-dom";



export function TrainList() {
    const trains = [
        { src: '/images/vocab/translate.svg', title: 'Multiple Choice Test', desc: 'Choose the correct translation from multiple options', link:'/test/translate', time: '5-10' },
        { src: '/images/vocab/rev_translate.svg', title: 'Multiple Choice Reverse', desc: 'Choose the correct word from multiple options',link:'/test/rev_translate', time: '5-10' },
        { src: '/images/vocab/constructor.svg', title: 'Fill in the Blank', desc: 'Type the English word for the given translation',link:'/test/constructor',time: '10-15' },
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.title}>
                <h2>Learn English Words</h2>
                <p>Master English vocabulary with interactive tests</p>
            </div>

            <div className={styles.trainList}>
                {trains.map((train, i) => (
                    <div key={i} className={styles.constructor}>
                        <img src={train.src} alt="" />
                        <h3>{train.title}</h3>
                        <p className={styles.description}>{train.desc}</p>
                        <div className={styles.duration}>
                            <p>Duration:</p>
                            <p>{train.time} min</p>
                        </div>
                        <Link to={train.link} className={styles.button}>Start Test</Link>
                    </div>
                ))}
            </div>

            <div className={styles.info}>
                <h3>How It Works</h3>
                <div className={styles.rules}>
                    <div className={styles.rule}>
                        <h4>1</h4>
                        <p>Choose your preferred test type</p>
                    </div>
                    <div className={styles.rule}>
                        <h4>2</h4>
                        <p>Answer questions with translations</p>
                    </div>
                    <div className={styles.rule}>
                        <h4>3</h4>
                        <p>See your results and learn new words</p>
                    </div>
                </div>
            </div>

        </div>
    )
}