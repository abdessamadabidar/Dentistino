import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@/components/Theme/theme-provider";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthenticationPage from "@/pages/authentication-page";
import DashboardPage from "@/pages/dashboard-page";
import AddPatientPage from "@/pages/add-patient-page.tsx";
import PatientsPage from "@/pages/patients-page.tsx";
import AppointmentsPage from "@/pages/appointments-page.tsx";
import WaitingRoomPage from "@/pages/waiting-room-page.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import VerificationPage from "@/pages/verification-page.tsx";
<<<<<<< HEAD
import DefaultLayout from "@/layout/default-layout.tsx";
import AddAppointmentPage from "@/pages/add-appointment-page.tsx";
=======
import DefaultLayout from "@/components/default-layout.tsx";
import UsersPage from "@/pages/users-page.tsx";
>>>>>>> 0d4dbd6d9903eb04fa79f18e6325f8f311750936

const router = createBrowserRouter([
    {
        path: '/auth',
        element: <AuthenticationPage />
    },
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <DashboardPage />
            },
            {
                path: 'add-patient',
                element: <AddPatientPage />
            },
            {
                path: 'patients',
                element: <PatientsPage />
            },
            {
                path: '/users',
                element: <UsersPage />
            },
            {
                path: 'appointments',
                element: <AppointmentsPage />
            },
            {
                path: 'waiting-room',
                element: <WaitingRoomPage />
            },
            {
                path: 'add-appointment',
                element: <AddAppointmentPage />
            },
        ]
    },
    {
        path: '/check',
        element: <VerificationPage />
    },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
            <Toaster />
        </ThemeProvider>
    </React.StrictMode>,
)
