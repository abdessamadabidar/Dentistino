import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {TabsContent} from "@radix-ui/react-tabs";
import ArchivedPatients from "@/components/archived-patients.tsx";
import ArchivedAppointments from "@/components/archived-appointments.tsx";

export default function Archive() {

	return <Tabs defaultValue="patients" className="space-y-4">
		<TabsList className="rounded-lg">
			<TabsTrigger className="rounded-md" value="patients">Patients</TabsTrigger>
			<TabsTrigger className="rounded-md" value="appointments" >
				Rendez-vous
			</TabsTrigger>
		</TabsList>
		<TabsContent value="patients" className="space-y-4">
			<ArchivedPatients />
		</TabsContent>
		<TabsContent value="appointments">
			<ArchivedAppointments />
		</TabsContent>
	</Tabs>
}