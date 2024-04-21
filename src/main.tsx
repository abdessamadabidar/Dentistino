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
import UserProfilePage from "@/pages/user-profile-page.tsx";
import EditUserPage from "@/pages/edit-user-page.tsx";
import PatientProfilePage from "@/pages/patient-profile-page.tsx";
import PatientMedicalFolderPage from "@/pages/patient-medical-folder-page.tsx";
import InsurancePage from "@/pages/insurance-page.tsx";
import EditPatientPage from "@/pages/edit-patient-page.tsx";
import EditMedicalFolderPage from "@/pages/edit-medical-folder-page.tsx";
import EditPasswordPage from "@/pages/edit-password-page.tsx";
import ArchivePage from "@/pages/archive-page.tsx";
import CreateNewLaboratoryReceiptPage from "@/pages/create-new-laboratory-receipt-page.tsx";
import LaboratoryPage from "@/pages/laboratory-page.tsx";
import LaboratoryDetailsPage from "@/pages/laboratory-details-page.tsx";



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
                path: 'patient/create-laboratory-receipt',
                element: <CreateNewLaboratoryReceiptPage/>
            },
            {
                path: 'laboratory-page',
                element: <LaboratoryPage/>
            },
            {
                path: 'laboratory-details',
                element: <LaboratoryDetailsPage/>
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
                path: 'patient/create-prescription',
                element: <CreateNewPrescriptionPage />
            },
            {
                path: 'profile',
                element: <UserProfilePage />
            },
            {
                path: 'edit-user',
                element: <EditUserPage />
            },
            {
                path: 'patient',
                element: <PatientProfilePage />
            },
            {
                path: 'patient/medical-folder',
                element: <PatientMedicalFolderPage />
            },
            {
                path: 'patient/edit-patient',
                element: <EditPatientPage />
            },
            {
                path: 'patient/edit-medical-folder',
                element: <EditMedicalFolderPage />
            },
            {
                path: 'insurance',
                element: <InsurancePage />
            },
            {
                path: 'edit-password',
                element: <EditPasswordPage />
            },
            {
                path: 'archive',
                element: <ArchivePage />
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
