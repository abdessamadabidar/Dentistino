
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {useState} from "react";


export default function AuthenticationPage(): JSX.Element {

	const [passwordIsVisible, setPasswordIsVisible] = useState<boolean>(false);
	const passwordVisibilityToggle = () => {
		setPasswordIsVisible(!passwordIsVisible)
	}

	return (
		<section className='h-screen grid place-items-center'>
			<Card  className="max-w-md">
				<CardHeader>
					<CardTitle className="font-semibold flex flex-nowrap items-center gap-x-2 text-primary dark:text-secondary">
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
							<div className="relative">
								{
									passwordIsVisible ? (
										<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={passwordVisibilityToggle}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
												<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
												<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
											</svg>
										</Button>
									) : (
										<Button variant="outline" className="border-0 bg-transparent hover:bg-transparent absolute right-0 focus-visible:ring-0" onClick={passwordVisibilityToggle}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:scale-95 transition-all duration-500">
												<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
											</svg>
										</Button>
									)
								}
								<Input id="password" type={passwordIsVisible ? "text" : "password"} />
							</div>
						</div>
					</div>
					<a className="text-xs underline text-end " href={"#"}>Mot de passe oublié ?</a>
				</CardContent>
				<CardFooter className="grid">
					<Button className="dark:bg-secondary dark:text-white">S'authentifier</Button>
				</CardFooter>
			</Card>
		</section>
	);
}