import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@/components/Theme/theme-provider";
import {RouterProvider} from "react-router-dom";
import {Toaster} from "@/components/ui/toaster.tsx";
import { router } from '@/router/routes';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
                <Toaster />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
