import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp"
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";

export default function VerificationPage(): JSX.Element {
	const [value, setValue] = useState("");
	const [counter, setCounter] = useState<number>(30);


	useEffect(() => {
		if (counter > 0) {
			setTimeout(() => {
				setCounter(counter - 1)
			}, 1000)
		}
		else setCounter(30)
	}, [counter]);

	// TODO - Problem: page being rendered each time counter change
	console.log("page rendered")
	return (
		<section className='h-screen grid place-items-center'>
			<Card className="max-w-xl grid gap-y-4 place-items-center py-3">
				<CardHeader className="space-y-2">
					<CardTitle className="dark:text-secondary text-primary text-center">Code de vérification</CardTitle>
					<CardDescription>
						Veuillez saisir le code de vérification envoyé à <span className="font-semibold">+212611376395</span>
					</CardDescription>
				</CardHeader>
				<CardContent className="self-center">
					<InputOTP
						maxLength={6}
						value={value}
						onChange={(value) => setValue(value)}
					>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={2} />
							<InputOTPSlot index={3} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</CardContent>
				<CardFooter className="grid space-y-2">

					<p className="text-sm font-normal text-muted-foreground">
						Vous n'avez pas reçu de code ?
						<Link className="ml-1 dark:text-secondary text-primary font-medium" to="#">renvoyer</Link>
					</p>
					<span className="block text-center text-xs text-muted-foreground">Le code expirera dans {counter}s</span>
				</CardFooter>

			</Card>
		</section>
	);
}