import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {TabsContent} from "@radix-ui/react-tabs";
import DeletedPatients from "@/components/deleted-patients.tsx";
import DeletedAppointments from "@/components/deleted-appointments.tsx";
import DeletedLaboratories from "@/components/deleted-laboratories.tsx";

export default function DeletePage() {
    return(
        <Tabs defaultValue="patients" className="space-y-4">
            <TabsList className="rounded-lg">
                <TabsTrigger className="rounded-md" value="patients">Patients</TabsTrigger>
                <TabsTrigger className="rounded-md" value="appointments" >Rendez-vous</TabsTrigger>
                <TabsTrigger className="rounded-md" value="laboratories" >Laboratoires</TabsTrigger>
            </TabsList>
            <TabsContent value="patients" className="space-y-4">
                <DeletedPatients/>
            </TabsContent>
            <TabsContent value="appointments">
                <DeletedAppointments/>
            </TabsContent>
            <TabsContent value="laboratories">
                <DeletedLaboratories/>
            </TabsContent>
        </Tabs>
    )
}