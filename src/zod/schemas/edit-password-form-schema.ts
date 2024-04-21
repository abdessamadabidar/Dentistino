import {z} from "zod";

export const editPasswordFormSchema = z.object({
	oldPassword: z.string({
		required_error: "Ancien mot de passe est requis"
	}),
	newPassword: z.string({
		required_error: "Nouveau mot de passe est requis"
	}).min(8, {message:'Le mot de passe doit contenir au moins 8 caractères.'}),

	newPasswordConfirmation: z.string({
		required_error: "Confirmation de nouveau mot de passe est requis"
	})

})