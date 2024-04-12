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
import DefaultLayout from "@/layout/default-layout.tsx";
import AddAppointmentPage from "@/pages/add-appointment-page.tsx";
import UsersPage from "@/pages/users-page.tsx";
import AddNewUserPage from "@/pages/add-new-user-page.tsx";
import NotificationsPage from "@/pages/notifications-page.tsx";


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
                path: 'add-appointment',
                element: <AddAppointmentPage />
            },
            {
                path: 'add-new-user',
                element: <AddNewUserPage />
            },
            {
                path: 'notifications',
                element: <NotificationsPage />
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
