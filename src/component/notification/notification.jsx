import { AnimatePresence, motion } from "motion/react"
import styles from "./notification.module.css"
import {usePushMessage} from "../../hook/usePushMessage";

export default function PushMessage() {
    const {notification, hideNotification} = usePushMessage();


    return (
        <div className={styles.page}>
            <AnimatePresence mode="wait">
                {notification && (
                    <motion.div
                        key={notification.id}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={styles.push}
                    >
                        <span>{notification.text}</span>

                        <button
                            className={styles.close}
                            onClick={() => hideNotification()}
                        >
                            ✕
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
