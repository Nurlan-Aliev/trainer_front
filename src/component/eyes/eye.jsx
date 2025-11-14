import styles from "./eyes.module.css";
import {useEyeState} from "../../hook/useEyeState";


export function Eye({circle, position,innerRef}){
    const {openBothEyes, openOneEye} = useEyeState()

    const eye = <div
        ref={innerRef}
        className={`${styles.eye} ${circle.eyeStyle}`}
        style={{
            left: circle.x,
            top: circle.y,
        }}
    >
        <div
            className={styles.pupil}
            style={{
                transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
            }}>
            <div className={styles.glare}></div>
        </div>
    </div>


    if ( openBothEyes || (openOneEye && circle.id % 2) ){
        return eye
    }
    else{
        return <>
            <div
                ref={innerRef}
                className={`${styles.eye} ${circle.eyeStyle}`}
                style={{
                    left: circle.x,
                    top: circle.y,
                    display: 'none',
                }}
            >
                <div
                    className={styles.pupil}
                    style={{
                        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`
                    }}>
                    <div className={styles.glare}></div>
                </div>
            </div>
            <img
            src={circle.closeEye}
            alt={circle.closeEye}
            style={{
                left: circle.x,
                top: circle.y+45,
                width: circle.width,
            }}
        />
        </>
    }
}