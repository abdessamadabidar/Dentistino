import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Sidebar from "@/components/sidebar.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";
import {UserNav} from "@/components/user-nav.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {DataTable} from "@/components/data-table.tsx";
import {columns} from "@/patient-columns.tsx";
import {patients} from "@/patients-data.ts";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Button} from "@/components/ui/button.tsx";


export default function AppointmentsPage() : JSX.Element {

	return (
		<main className="w-full">
			<ResizablePanelGroup direction="horizontal">
				<ResizablePanel defaultSize={20}>
					<Sidebar />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel  defaultSize={80}>
					<div className="flex-col flex">
						<div className="border-b">
							<div className="flex h-16 items-center px-4">
								<div className="ml-auto flex items-center space-x-4">
									<ModeToggle />
									<UserNav />
								</div>
							</div>
						</div>
						<div className="flex-1 space-y-4 p-8 pt-6">
							<Tabs defaultValue="overview" className="space-y-4">
								<TabsList>
									<TabsTrigger value="all">Tous</TabsTrigger>
									<TabsTrigger value="today" >
										Aujourd'hui
									</TabsTrigger>
								</TabsList>
								<TabsContent value="all" className="space-y-4">
									<Card>
										<CardHeader className="flex flex-row flex-nowrap justify-between items-start">
											<div>
												<CardTitle className="flex flex-nowrap items-center gap-x-2">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
														<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
													</svg>
													Rendez-vous
												</CardTitle>
												<CardDescription className="ml-8">Tous les patients prévus pour la consultation</CardDescription>
											</div>
											<Button size="sm" variant="default" className="flex items-center text-white flex-nowrap gap-x-2 dark:bg-secondary">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
												</svg>
												Ajouter patient
											</Button>
										</CardHeader>
										<CardContent className="px-14">
											<DataTable columns={columns} data={patients} />
										</CardContent>
									</Card>
								</TabsContent>
								<TabsContent value="today" className="space-y-4">
									<Card>
										<CardHeader>
											<CardTitle className="flex flex-nowrap items-center gap-x-2">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
													<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
												</svg>
												Aujourd'hui
											</CardTitle>
											<CardDescription className="ml-8">Tous les patients programmés pour une consultation aujourd'hui</CardDescription>
										</CardHeader>
										<CardContent className="px-14">
											<DataTable columns={columns} data={patients} />
										</CardContent>
									</Card>
								</TabsContent>
							</Tabs>


						</div>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</main>
	);
}