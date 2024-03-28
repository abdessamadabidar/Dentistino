import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button.tsx"
import { Input } from "@/components/ui/input"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"


export default function AuthenticationPage(): JSX.Element {


	return (
		<section className='h-screen grid place-items-center'>
			<Tabs defaultValue="account" className="max-w-xl">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="account">S'authentifier</TabsTrigger>
					<TabsTrigger value="password">S'inscrire</TabsTrigger>
				</TabsList>
				<TabsContent value="account">
					<Card>
						<CardHeader>
							<CardTitle className="font-semibold">S'authentifier</CardTitle>
							<CardDescription className="text-wrap">
								En cas d'oubli de votre mot de passe, veuillez cliquer sur le lien ci-dessous.
							</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-y-4">
							<div className="space-y-2">
								<div className="space-y-1">
									<Label htmlFor="email">Email</Label>
									<Input id="email" defaultValue="" type="email"/>
								</div>
								<div className="space-y-1">
									<Label htmlFor="password">Mot de passe</Label>
									<Input id="password" type="password" />
								</div>
							</div>
							<a className="text-xs underline text-end " href={"#"}>Mot de passe oublié ?</a>
						</CardContent>
						<CardFooter className="grid">
							<Button>S'authentifier</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="password">
					<Card>
						<CardHeader>
							<CardTitle>S'inscrire</CardTitle>
							<CardDescription className="text-wrap">
								Après l'inscription, veuillez vérifier votre boîte mail et confirmer votre inscription.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="flex items-center gap-x-2">
								<div className="space-y-1 flex-1">
									<Label htmlFor="firstname">Prénom</Label>
									<Input id="firstname" type="text" defaultValue="" />
								</div>
								<div className="space-y-1 flex-1">
									<Label htmlFor="nom">Nom</Label>
									<Input id="nom" type="text" defaultValue="" />
								</div>
							</div>
							<div className="space-y-1">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" defaultValue="" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="phone">Téléphone</Label>
								<Input id="phone" type="tel" defaultValue="+212" />
							</div>
							<div className="flex items-center gap-x-2">
								<div className="space-y-1 flex-1">
									<Label htmlFor="password">Mot de passe</Label>
									<Input id="password" type="password" />
								</div>
								<div className="space-y-1 flex-1">
									<Label htmlFor="password">Confirmer le mot de passe</Label>
									<Input id="password" type="password"/>
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Button>S'inscrire</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</section>
	);
}