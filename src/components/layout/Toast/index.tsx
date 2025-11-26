import styles from './style.module.css';
import { motion } from 'framer-motion';
import { Error, Info, Success } from '@/assets/icons';

export default function Toast({ message, type, onClose }:{
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}) {
    return (
        <motion.div
            className={`${styles.toastContainer} ${styles[type]}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            onClick={onClose}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            <div className={styles.toastIcon}>
                {type === 'success' && <Success />}
                {type === 'error' && <Error />}
                {type === 'info' && <Info />}
            </div>
            <h1>{message}</h1>
        </motion.div>
    );
}