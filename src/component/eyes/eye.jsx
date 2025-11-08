import styles from "./eyes.module.css";


export function Eye({circle, position,innerRef, state,state2}){

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


    return (
        <>
            {state ? eye : !state && !state2 && circle.id % 2 ? eye : <img
                src={circle.closeEye}
                alt={circle.closeEye}
                style={{
                    left: circle.x,
                    top: circle.y+45,
                }}
            />
            }
        </>
    )
}