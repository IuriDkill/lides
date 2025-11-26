import './index.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";

import { ToastProvider } from '@/ToastProvider.tsx';
import { store } from '@/redux/Store';
import AppRouter from '@/routes/AppRouter.tsx'
import i18n from '@/config/i18n.ts';

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ToastProvider>
        <AppRouter />
      </ToastProvider>
    </Provider>
  </I18nextProvider>
)