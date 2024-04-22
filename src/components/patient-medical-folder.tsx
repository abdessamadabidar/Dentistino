import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import RadiologyDialog from "@/components/radiology-dialog.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {slides} from "@/data/slides.ts";

const observation = "bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."


export default function PatientMedicalFolder() {


	return (
		<div className="min-h-screen w-full space-y-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-x-3">
					<Link to="/patient">
						<Button size="icon" variant="outline" className="size-7">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
							</svg>
						</Button>
					</Link>
					<h1 className="text-lg font-semibold">Dossier du patient(e)</h1>
					<Badge variant="outline" className="py-1.5 bg-muted">Dossier N° 2024365487</Badge>
				</div>
				<div className="flex items-center flex-nowrap gap-x-2">
					<Link to="/patient/edit-medical-folder">
						<Button size="sm" variant="outline" className="flex flex-nowrap items-center gap-x-1.5 px-3 text-sm">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
							</svg>
							Modifier
						</Button>
					</Link>
					<Link to="#">
						<Button size="sm" variant="default" className="flex flex-nowrap items-center gap-x-1.5 px-3 text-sm dark:bg-secondary dark:text-white">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
							</svg>
							Télécharger
						</Button>
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-5">
				<div className="col-span-3">
					<Card>
						<CardHeader className="space-y-0">
							<CardTitle className="text-lg">À propos du patient</CardTitle>
							<CardDescription>État de santé du patient</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-6">
								<div className="space-y-2">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Observation ou Motif de Consultation</h1>
									<p className="text-sm text-gray-600 dark:text-gray-200">{observation}</p>
								</div>
								<div className="space-y-2">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Traitements</h1>
									<div className="flex flex-wrap items-center gap-2 ">
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80 py-1.5 border-0 bg-slate-100 text-gray-600">composition et la
											mise en page</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">assembla
											ensemble</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">morceaux </Badge>
									</div>
								</div>
								<div className="space-y-2">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Pathologies</h1>
									<div className="flex flex-wrap items-center gap-2 ">
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">composition et la
											mise en page</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">assembla
											ensemble</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">possède une
											distribution de lettres</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">morceaux </Badge>
									</div>
								</div>
								<div className="space-y-2">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Allergies</h1>
									<div className="flex flex-wrap items-center gap-2 ">
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">composition et la
											mise en page</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">morceaux </Badge>
									</div>
								</div>
								<div className="space-y-2">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Anesthésies</h1>
									<div className="flex flex-wrap items-center gap-2 ">
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">composition mise en page</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">assembla ensemble</Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">possède </Badge>
										<Badge variant="outline" className="dark:bg-muted dark:text-white/80  py-1.5 border-0 bg-slate-100 text-gray-600">morceaux </Badge>
									</div>
								</div>
								<div className="space-y-3">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Saignement</h1>
									<RadioGroup disabled className="flex flex-nowrap items-center gap-x-4">
										<div className="flex items-center space-x-2">
											<RadioGroupItem checked={true} value="oui" id="r1" />
											<Label htmlFor="r1">Oui</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="non" id="r2" />
											<Label htmlFor="r2">Non</Label>
										</div>
									</RadioGroup>
								</div>
								<div className="space-y-3">
									<h1 className="block text-sm font-semibold text-primary dark:text-secondary">Enceinte/Allaitante</h1>
									<RadioGroup disabled className="flex flex-nowrap items-center gap-x-4">
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="oui" id="r1" />
											<Label htmlFor="r1">Oui</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem checked={true} value="non" id="r2" />
											<Label htmlFor="r2">Non</Label>
										</div>
									</RadioGroup>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div>
					<Card className="overflow-hidden">
						<CardHeader className="space-y-0">
							<CardTitle className="text-lg">Radiologie</CardTitle>
							<CardDescription>
								Lipsum dolor sit amet, consectetur adipiscing elit
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-2">
								<img
									alt="radio image"
									className="aspect-square w-full rounded-md object-cover"
									height="300"
									src={!slides[0]?.image ? "https://ui.shadcn.com/placeholder.svg" : slides[0].image}
									width="300"/>
								<div className="grid grid-cols-3 gap-2">
									<img
										alt="radio image"
										className="aspect-square w-full rounded-md object-cover"
										height="84"
										src={!slides[1]?.image ? "https://ui.shadcn.com/placeholder.svg" : slides[1].image}
										width="84"/>
									<img
										alt="radio image"
										className="aspect-square w-full rounded-md object-cover"
										height="84"
										src={!slides[2]?.image ? "https://ui.shadcn.com/placeholder.svg" : slides[2].image}
										width="84"/>
									<RadiologyDialog slides={slides} />
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="col-span-2">
					<Card>
						<CardHeader className="space-y-0">
							<CardTitle className="text-lg">Les médecins traitants</CardTitle>
							<CardDescription>Tous les médecins qui s'occupent de ce patient</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-3">
								<div className="flex items-center border rounded-xl bg-muted p-3.5">
									<Avatar className="h-9 w-9 rounded-xl">
										<AvatarImage src="/avatars/01.png" alt="Avatar"/>
										<AvatarFallback
											className="bg-gradient-to-l from-indigo-400 to-indigo-500 text-white rounded-xl">OM</AvatarFallback>
									</Avatar>
									<div className="ml-4 space-y-1">
										<p className="text-sm font-medium leading-none">Olivia Martin</p>
										<p className="text-xs text-muted-foreground">
											0611379552
										</p>
									</div>

								</div>
								<div className="flex items-center border rounded-xl bg-muted p-3.5">
									<Avatar className="h-9 w-9 rounded-xl">
										<AvatarImage src="/avatars/01.png" alt="Avatar"/>
										<AvatarFallback
											className="bg-gradient-to-l from-indigo-400 to-indigo-500 text-white rounded-xl">OM</AvatarFallback>
									</Avatar>
									<div className="ml-4 space-y-1">
										<p className="text-sm font-medium leading-none">Olivia Martin</p>
										<p className="text-xs text-muted-foreground">
											0611379552
										</p>
									</div>

								</div>
								<div className="flex items-center border justify-between rounded-xl bg-muted p-3.5">
									<div className="flex items-center">
										<Avatar className="h-9 w-9 rounded-xl">
											<AvatarImage src="/avatars/01.png" alt="Avatar"/>
											<AvatarFallback
												className="bg-gradient-to-l from-indigo-400 to-indigo-500 text-white rounded-xl">OM</AvatarFallback>
										</Avatar>
										<div className="ml-4 space-y-1">
											<p className="text-sm font-medium leading-none">Olivia Martin</p>
											<p className="text-xs text-muted-foreground">
												0611379552
											</p>
										</div>
										<Badge variant="outline" className="text-primary border-primary dark:text-secondary self-start ml-3 dark:border-secondary">spécialité</Badge>
									</div>
									<span className="text-xs font-medium text-primary italic dark:text-secondary me-2">Addressé par</span>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="col-span-2">
					<Card>
						<CardHeader className="space-y-0">
							<CardTitle className="text-lg">Traitements effectués</CardTitle>
							<CardDescription>Tous les traitements effectués à ce patient</CardDescription>
						</CardHeader>
						<CardContent>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Date</TableHead>
										<TableHead>Dents</TableHead>
										<TableHead>Obserervation</TableHead>
										<TableHead>Prix</TableHead>
										<TableHead>Reçu</TableHead>
										<TableHead>Reste</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="font-medium">02/04/2024</TableCell>
										<TableCell>82, 11</TableCell>
										<TableCell>contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page</TableCell>
										<TableCell>200</TableCell>
										<TableCell>150</TableCell>
										<TableCell>50</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-medium">02/04/2024</TableCell>
										<TableCell>82, 11</TableCell>
										<TableCell>contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page</TableCell>
										<TableCell>200</TableCell>
										<TableCell>150</TableCell>
										<TableCell>50</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}