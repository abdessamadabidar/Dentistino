import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Table,TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";



export default function PatientProfile() {

	const patientIsINWaitingRoom = true;
	return (
		<div className="min-h-screen w-full space-y-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-3">
					<Button size="icon" variant="outline" className="size-7">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
						</svg>

					</Button>
					<h1 className="text-lg font-semibold">Profil du patient(e)</h1>
					<Badge variant="outline" className="bg-blue-200 dark:bg-blue-400 text-blue-700 dark:text-white">en cours</Badge>
				</div>
				<div className="flex items-center flex-nowrap gap-x-2">
					<Link to="edit-patient">
						<Button size="sm" variant="outline" className="flex flex-nowrap items-center gap-x-1.5 h-8 px-3 text-sm">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
							</svg>
							Modifier
						</Button>
					</Link>
					<Link to="#">
						<Button variant="default" className="flex flex-nowrap items-center gap-x-1.5 h-8 px-3 text-sm bg-destructive hover:bg-destructive dark:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
							</svg>
							Supprimer
						</Button>
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-4 grid-rows-4 gap-5">
				<div className="col-span-3 row-span-4">
					<Card>
						<CardHeader className='space-y-0'>
							<CardTitle className="text-lg">Les informations personnelles</CardTitle>
							<CardDescription>Voici toutes les informations personnelles du patient.</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="">
								<div className="grid grid-cols-2 gap-x-4 gap-y-5">
									<div className="space-y-2">
										<span className="text-sm font-medium block">Prénom</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg ">Abdessamad</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Nom</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg ">Abidar</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">CIN</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg ">JB514457</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Genre</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">Homme</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Adresse</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">Rue 729 N°7 Tarrast</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Ville</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">Inzegane</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Profession</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">Etudiant</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Mutuelle</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">CNOPS</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Date de naissance</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">02/02/2002</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Age</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">22 ans</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Tuteur</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">Mohammed Abidar</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Lien</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">Père</div>
									</div>
									<div className="space-y-2">
										<span className="text-sm font-medium block">Téléphone</span>
										<div className="px-4 py-2.5 bg-muted text-sm rounded-lg">0611376395</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="col-span-1 row-span-4 flex flex-col justify-between">
					<div className="">
						<Card>
							<CardHeader className="space-y-0">
								<CardTitle className="text-lg flex flex-nowrap items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
									</svg>
									Dossier médicale
								</CardTitle>
								<CardDescription>Cliquez sur le bouton pour afficher les informations médicales du patient.</CardDescription>
							</CardHeader>
							<CardContent>
								<Link to="patient-folder">
									<Button variant="outline" className="flex flex-nowrap items-center gap-x-1.5 px-3  w-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
											<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
										</svg>
										voir le dossier
									</Button>
								</Link>
							</CardContent>
						</Card>
					</div>
					<div className="">
						<Card>
							<CardHeader className="space-y-0">
								<CardTitle className="text-lg flex flex-nowrap items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
									</svg>
									Salle d'attente
								</CardTitle>
								<CardDescription>
									{patientIsINWaitingRoom ? "Le patient existe déjà dans la salle d'attente.": "Le patient n'existe pas encore dans la salle d'attente."}
								</CardDescription>
							</CardHeader>
							<CardContent>
								{patientIsINWaitingRoom ? <Button variant="outline" className="flex flex-nowrap items-center gap-x-1.5 px-3 border-destructive text-destructive hover:text-white hover:bg-destructive w-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
										</svg>
										Sortir de la salle d'attente
								</Button> :
									<Button variant="default" className="flex flex-nowrap items-center gap-x-1.5 px-3 dark:bg-secondary dark:text-white w-full">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
										</svg>
										Entrer à la salle d'attente
									</Button>
								}

							</CardContent>
						</Card>
					</div>
					<div className="">
						<Card>
							<CardHeader className="space-y-0">
								<CardTitle className="text-lg flex flex-nowrap items-center gap-x-2">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
									</svg>
									Facture
								</CardTitle>
								<CardDescription>Le patient n'existe pas encore dans la salle d'attente.</CardDescription>
							</CardHeader>
							<CardContent className="px-0">
								<div className="flex flex-col ">
									<div className="flex flex-nowrap items-center justify-between py-2  px-6">
										<div className="font-semibold">Total :</div>
										<div className="font-semibold"> 2500 DH</div>
									</div>
									<div className="flex flex-nowrap items-center justify-between py-2  px-6">
										<div className="font-semibold">Reçu :</div>
										<div className="font-semibold text-green-600"> 1500 DH</div>
									</div>
									<div className="flex flex-nowrap items-center justify-between border-y py-2 bg-muted px-6">
										<div className="font-semibold">Reste :</div>
										<div className="font-semibold text-red-600"> 1000 DH</div>
									</div>

								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-4 grid-rows-1 gap-x-2">
				<div className="row-span-1">
					<Card className="h-full">
						<CardHeader>
							<CardTitle className="text-lg flex flex-nowrap items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
								</svg>
								Laboratoire
							</CardTitle>
						</CardHeader>
						<CardContent></CardContent>
					</Card>
				</div>
				<div className="col-span-3 row-span-1">
					<Card>
						<CardHeader className="space-y-0">
							<CardTitle className="text-lg flex flex-nowrap items-center gap-x-2">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
								</svg>
								Les rendez-vous
							</CardTitle>
							<CardDescription>La list des rendez-vous de ce patient</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[100px]">Date</TableHead>
										<TableHead>Heure</TableHead>
										<TableHead>Status</TableHead>
										<TableHead>Motif</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="font-medium">02/05/2024</TableCell>
										<TableCell>14:50 PM</TableCell>
										<TableCell>
											<Badge variant="outline" className="bg-blue-200 dark:bg-blue-400 text-blue-700 dark:text-white">en cours</Badge>
										</TableCell>
										<TableCell>Extraction dent de sagesse</TableCell>
										<TableCell className="flex flex-nowrap items-center gap-x-1">
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link to="#">
															<Button size="icon" variant="outline"  className="text-primary hover:text-primary dark:text-secondary dark:hover:text-secondary">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
																</svg>
															</Button>
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-primary dark:text-secondary">Modifier le rendez-vous</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link to="#">
															<Button size="icon" variant="outline"  className="text-destructive hover:text-destructive">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																</svg>
															</Button>
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-destructive dark:text-red-500">Annuler le rendez-vous</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">11/04/2024</TableCell>
										<TableCell>11:00 AM</TableCell>
										<TableCell>
											<Badge variant="outline" className="bg-amber-200 dark:bg-amber-400 text-amber-700 dark:text-white whitespace-nowrap">reporté par le médecin</Badge>
										</TableCell>
										<TableCell>Composite</TableCell>
										<TableCell className="flex flex-nowrap items-center gap-x-1">
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link to="#">
															<Button size="icon" variant="outline"  className="text-primary hover:text-primary dark:text-secondary dark:hover:text-secondary">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
																</svg>
															</Button>
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-primary dark:text-secondary">Modifier le rendez-vous</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
											<TooltipProvider>
												<Tooltip>
													<TooltipTrigger>
														<Link to="#">
															<Button size="icon" variant="outline"  className="text-destructive hover:text-destructive">
																<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
																	<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
																</svg>
															</Button>
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p className="text-destructive dark:text-red-500">Annuler le rendez-vous</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>

						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	)
}
