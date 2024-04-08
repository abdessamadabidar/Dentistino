import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { YearRevenueStatistics } from "@/components/dashboard/year-revenue-statistics"
import { WaitingRoom } from "@/components/dashboard/waiting-room"
import WeekRevenueStatistics from "@/components/dashboard/week-revenue-statistics";
import MonthRevenueStatistics from "@/components/dashboard/month-revenue-statistics";
import PatientsAgeStatistics from "@/components/dashboard/patients-age-statistics";
import {NewPatients} from "@/components/dashboard/new-patients";

export default function DashboardPage() {
	return (
		<>
			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Aperçu</TabsTrigger>
					<TabsTrigger value="analytics" >
						Statistiques
					</TabsTrigger>
				</TabsList>
				<TabsContent value="overview" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Revenu total
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">10,000 MAD</div>
								<p className="text-xs text-muted-foreground">
									+20,1% par rapport au mois précédent
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Patients inscrits
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">56</div>
								<p className="text-xs text-muted-foreground">
									22,1% par rapport au mois précédent
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">Patients en attente</CardTitle>
								<svg className="h-4 w-4 text-muted-foreground" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor">
									<path d="M12 12C15.866 12 19 8.86599 19 5H5C5 8.86599 8.13401 12 12 12ZM12 12C15.866 12 19 15.134 19 19H5C5 15.134 8.13401 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
									<path d="M5 2L12 2L19 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
									<path d="M5 22H12L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">6</div>
								<p className="text-xs text-muted-foreground">
									patients vous attendent
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Tâches incomplets
								</CardTitle>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-muted-foreground">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
								</svg>

							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">11</div>
								<p className="text-xs text-muted-foreground">
									tâches que vous n'avez pas encore terminée
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
						<Card className="col-span-3">
							<CardHeader>
								<CardTitle className="flex flex-nowrap items-center justify-between gap-x-2">
									<div className="flex flex-nowrap items-center gap-x-2">
										<svg className="size-5 text-foreground" viewBox="0 0 24 24" strokeWidth="1.5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" color="currentColor">
											<path d="M12 12C15.866 12 19 8.86599 19 5H5C5 8.86599 8.13401 12 12 12ZM12 12C15.866 12 19 15.134 19 19H5C5 15.134 8.13401 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M5 2L12 2L19 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
											<path d="M5 22H12L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
										</svg>
										Salle d'attente
									</div>
									<a className="text-sm text-end flex flex-nowrap items-center gap-x-2 group" href={"#"}>
										voir plus
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-all duration-500">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
										</svg>
									</a>
								</CardTitle>
								<CardDescription>Les patients qui vous attendent.</CardDescription>
							</CardHeader>
							<CardContent >
								<WaitingRoom />
							</CardContent>
						</Card>
						<Card className="col-span-3">
							<CardHeader>
								<CardTitle className="flex flex-nowrap items-center justify-between gap-x-2">
									<div className="flex flex-nowrap items-center gap-x-2">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
											<path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
										</svg>

										Nouveaux patients
									</div>
									<a className="text-sm text-end flex flex-nowrap items-center gap-x-2 group" href={"#"}>
										voir tous
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5} stroke="currentColor" className="size-4 group-hover:translate-x-1 transition-all duration-500">
											<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
										</svg>
									</a>
								</CardTitle>
								<CardDescription>
									Les patients qui ont été inscrits récemment.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<NewPatients />
							</CardContent>
						</Card>
					</div>
				</TabsContent>
				<TabsContent value="analytics">
					<div className="grid gap-4 md:grid-cols-1 lg:grid-cols-4">
						<Card className="col-span-2">
							<CardHeader>
								<CardTitle>Week</CardTitle>
							</CardHeader>
							<CardContent className="pl-2">
								<WeekRevenueStatistics />
							</CardContent>
						</Card>
						<Card className="col-span-2">
							<CardHeader>
								<CardTitle>Month</CardTitle>
							</CardHeader>
							<CardContent className="pl-2">
								<MonthRevenueStatistics />
							</CardContent>
						</Card>
						<Card className="col-span-4">
							<CardHeader>
								<CardTitle>Year</CardTitle>
							</CardHeader>
							<CardContent className="pl-2">
								<YearRevenueStatistics />
							</CardContent>
						</Card>
						<Card className="col-span-2">
							<CardHeader>
								<CardTitle>Age</CardTitle>
							</CardHeader>
							<CardContent className="pl-2">
								<PatientsAgeStatistics />
							</CardContent>
						</Card>
					</div>
				</TabsContent>
			</Tabs>
		</>
	)
}