import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Toast from './components/layout/Toast';

type ToastItem = {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
};

type ToastContextType = {
    showToast: (message: string, type: 'success' | 'error' | 'info', duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const showToast = (message: string, type: 'success' | 'error' | 'info', duration: number = 3000) => {
        const id = new Date().getTime().toString();
        setToasts((prev) => {
            // verifica se já existe toast com a mesma mensagem
            if (prev.some((toast) => toast.message === message)) {
                return prev; // não adiciona outro igual
            }
            return [...prev, { id, message, type }];
        });

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    };
    
    const removeToastById = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: 'fit-content',
                alignItems: 'center',
            }}>
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <Toast key={toast.id} message={toast.message} type={toast.type} onClose={() => removeToastById(toast.id)}/>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}