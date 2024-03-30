
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
			<Card  className="max-w-xl">
				<CardHeader>
					<CardTitle className="font-semibold flex flex-nowrap items-center gap-x-2 text-primary">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
						</svg>
						S'authentifier</CardTitle>
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
		</section>
	);
}