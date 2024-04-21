import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {ReactNode} from "react";


interface IConfirmationAlertDialogProps {
	trigger: ReactNode,
	title: string,
	description: string,
	color?: string
}

export default function ConfirmationAlertDialog({trigger, title, description, color}: IConfirmationAlertDialogProps) {

	return <AlertDialog>
		<AlertDialogTrigger className="w-full">{trigger}</AlertDialogTrigger>
		<AlertDialogContent>
			<AlertDialogHeader>
				<AlertDialogTitle className={`text-[${color}]`}>{title}</AlertDialogTitle>
				<AlertDialogDescription>{description}</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel>Annuler</AlertDialogCancel>
				<AlertDialogAction style={{backgroundColor: color}}>Continue</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>

}