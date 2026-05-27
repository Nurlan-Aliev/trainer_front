import styles from './trainParent.module.css';
import {Success} from "/src/component/Words/Success/Success";
import {Progress} from "/src/component/progress/progress"


export function TrainParent({child, currentWord, count, know_count, toLearn_count, lenWord, continueBtn} ){
    return (
        <div>
            {currentWord?
                <div>

                    <Progress count={count} len={lenWord}/>

                    <div className={`${styles.container} justify-center align-items-center`}>
                        {child}
                    </div>

                </div>
                :
                <Success
                    know_count={know_count}
                    toLearn_count={toLearn_count}
                    lenWord={lenWord}
                    continueBtn={async () => {
                        await continueBtn()
                    }}
                />
            }
        </div>
    )
}