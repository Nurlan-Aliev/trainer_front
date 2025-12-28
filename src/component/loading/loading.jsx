import {animate, stagger} from "motion";
import styles from "./Loading.module.css";
import {useEffect, useRef} from "react";


export function Loading() {
    const dotsRef = useRef([])


    useEffect(()=>{
        animate(
            dotsRef.current,
            {scale: [1, 1.5, 1]},
            {
                duration: 1.2,
                repeat: Infinity,
                delay: stagger(0.2),
                ease: "easeInOut",
            }
        )
    })

    return (
        <div className={styles.container}>
            {[0, 1, 2].map((_, i) => (
                <div
                    key={i}
                    ref={el => dotsRef.current[i] = el}
                    className={styles.dot}
                />
            ))}
        </div>
    )

}