import { useState, useEffect, useRef } from "react";
import styles from "./eyes.module.css";

export function MultiCircles() {
    const x = 75
    const circles = [
        { id: 11, x: x + 20, eye_style: styles.green_eye},
        { id: 12, x: x + 145, eye_style: styles.green_eye},
        { id: 21, x: x + 210, eye_style: styles.d_blue_eye},
        { id: 22, x: x + 320, eye_style: styles.d_blue_eye},
        { id: 31, x: x, eye_style: styles.orange_eye},
        { id: 32, x: x + 85, eye_style: styles.orange_eye},
        { id: 41, x: x +150, eye_style: styles.blue_eye},
        { id: 42, x: x + 240, eye_style: styles.blue_eye},
    ];


    const refs = useRef([]);
    const [positions, setPositions] = useState(
        circles.map(() => ({ x: 0, y: 0 }))
    );

    useEffect(() => {
        function handleMouseMove(e) {
            const newPositions = circles.map((circle, i) => {
                const el = refs.current[i];
                if (!el) return { x: 0, y: 0 };

                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

                const maxRadius = rect.width / 2 - 13;
                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
                const limitedDistance = Math.min(distance, maxRadius);
                const angle = Math.atan2(deltaY, deltaX);

                const x = Math.cos(angle) * limitedDistance;
                const y = Math.sin(angle) * limitedDistance;

                return { x, y };
            });

            setPositions(newPositions);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [circles]);

    return (
            <div className={styles.container}>
                <img src="/images/group.svg" alt="Group 8"/>

                <div className={styles.eyes}>
                    {circles.map((circle, i) => (
                        <div
                            key={circle.id}
                            ref={(el) => (refs.current[i] = el)}
                            className={`${styles.eye} ${circle.eye_style}`}
                            style={{
                                // width: circle.size,
                                // height: circle.size,
                                // backgroundColor: circle.bgc,
                                // top: circle.y,
                                left: circle.x,
                            }}
                        >
                            <div
                                className={styles.pupil}
                                style={{
                                    transform: `translate(${positions[i].x}px, ${positions[i].y}px) translate(-50%, -50%)`
                                 }}>
                                <div className={styles.glare}></div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
    );
}
