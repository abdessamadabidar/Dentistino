import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import { FileDown } from "lucide-react";


export default function InsurancePage() {


	return <section>
		<div className="grid grid-cols-3 gap-5">
			<Card className="w-fit">
				<CardHeader className="grid space-y-5 place-items-center">
					<div className="aspect-square w-40 ">
						<img
							src="/src/assets/cnops-seeklogo.png"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<CardDescription className="">
						Vous pouvez imprimer la feuille de soins dentaire en cliquant sur la button ci-dessous
					</CardDescription>
				</CardHeader>
				<CardContent>
					<a href="/src/assets/feuille_dentaire_CNOPS.pdf" download>
						<Button variant="default"  className="flex items-center gap-x-2 w-full dark:bg-secondary dark:text-white dark:hover:bg-secondary/80">
							<FileDown className="size-5" />
							Télécharger
						</Button>
					</a>
				</CardContent>
			</Card>
			<Card className="w-fit">
				<CardHeader className="grid space-y-5 place-items-center">
					<div className="aspect-square w-40 ">
						<img
							src="/src/assets/axa-logo.png"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<CardDescription className="">
						Vous pouvez imprimer la feuille de soins dentaire en cliquant sur la button ci-dessous
					</CardDescription>
				</CardHeader>
				<CardContent>
					<a href="#" download>
						<Button variant="default"  className="flex items-center gap-x-2 w-full dark:bg-secondary dark:text-white dark:hover:bg-secondary/80">
							<FileDown className="size-5" />
							Télécharger
						</Button>
					</a>
				</CardContent>
			</Card>
			<Card className="w-fit">
				<CardHeader className="grid space-y-5 place-items-center">
					<div className="aspect-square w-40 ">
						<img
							src="/src/assets/cnss-seeklogo.png"
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<CardDescription className="">
						Vous pouvez imprimer la feuille de soins dentaire en cliquant sur la button ci-dessous
					</CardDescription>
				</CardHeader>
				<CardContent>
					<a href="/src/assets/feuille_dentaire_CNSS.pdf" download>
						<Button variant="default"  className="flex items-center gap-x-2 w-full dark:bg-secondary dark:text-white dark:hover:bg-secondary/80">
							<FileDown className="size-5" />
							Télécharger
						</Button>
					</a>
				</CardContent>
			</Card>
		</div>
	</section>
}