import { useState, useEffect, useRef } from "react";
import styles from "./eyes.module.css";
import {Eye} from "./eye";


export function MultiCircles() {
    const x = 75
    const circles = [
            { id: 12, x: x + 20, y: 230, eyeStyle: styles.green_eye, width: 73 },
            { id: 11, x: x + 145, y: 230, eyeStyle: styles.green_eye, width: 73},
            { id: 22, x: x + 210, y: 380, eyeStyle: styles.d_blue_eye, width: 73},
            { id: 21, x: x + 320, y: 380, eyeStyle: styles.d_blue_eye, width: 73},
            { id: 32, x: x, y: 460, eyeStyle: styles.orange_eye, width: 60},
            { id: 31, x: x + 85, y: 460, eyeStyle: styles.orange_eye, width: 60},
            { id: 42, x: x +150, y: 530, eyeStyle: styles.blue_eye, width: 55},
            { id: 41, x: x + 240, y: 530, eyeStyle: styles.blue_eye, width: 55}
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
    }, []);

    return (
            <div className={styles.container}>


                <img src="/assets/images/group.svg" alt="Group 8"/>

                <div className={styles.eyes}>
                    {circles.map((circle, i) => (
                        <Eye key={circle.id} circle={circle} position={positions[i]} innerRef={(el) => (refs.current[i] = el)}/>
                    ))}
                </div>
            </div>
    );
}
