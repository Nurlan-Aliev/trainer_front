import styles from './homePage.module.css'

function HomePage  ()  {
    return <div>
        <div className={styles.info}>
            <h2>How It Works</h2>
            <div className={styles.rules}>
                <div className={styles.rule}>
                    <h3>1</h3>
                    <p>Choose your preferred test type</p>
                </div>
                <div className={styles.rule}>
                    <h3>2</h3>
                    <p>Answer questions with translations</p>
                </div>
                <div className={styles.rule}>
                    <h3>3</h3>
                    <p>See your results and learn new words</p>
                </div>
            </div>
        </div>
    </div>
}

export default HomePage;