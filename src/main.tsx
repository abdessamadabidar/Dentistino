import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@/components/Theme/theme-provider";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AuthenticationPage from "@/pages/authentication-page";
import DashboardPage from "@/pages/dashboard-page";
import CreateNewPatientPage from "@/pages/create-new-patient-page.tsx";
import PatientsPage from "@/pages/patients-page.tsx";
import AppointmentsPage from "@/pages/appointments-page.tsx";
import WaitingRoomPage from "@/pages/waiting-room-page.tsx";
import {Toaster} from "@/components/ui/toaster.tsx";
import VerificationPage from "@/pages/verification-page.tsx";
import DefaultLayout from "@/layout/default-layout.tsx";
import CreateNewAppointmentPage from "@/pages/create-new-appointment-page.tsx";
import UsersPage from "@/pages/users-page.tsx";
import CreateNewUserPage from "@/pages/create-new-user-page.tsx";
import NotificationsPage from "@/pages/notifications-page.tsx";
import CreateNewPrescriptionPage from "@/pages/create-new-prescription-page.tsx";


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
                path: 'create-patient',
                element: <CreateNewPatientPage />
            },
            {
                path: 'patients',
                element: <PatientsPage />
            },
            {
                path: 'users',
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
                path: 'create-appointment',
                element: <CreateNewAppointmentPage />
            },
            {
                path: 'create-new-user',
                element: <CreateNewUserPage />
            },
            {
                path: 'notifications',
                element: <NotificationsPage />
            },
            {
                path: 'create-prescription',
                element: <CreateNewPrescriptionPage />
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
