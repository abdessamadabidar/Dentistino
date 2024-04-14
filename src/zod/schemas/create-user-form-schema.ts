import {z} from "zod";

export const userFormSechma = z.object({
	firstName: z.string({
		required_error: "Le prénom est requis.",
		invalid_type_error: "Le prénom doit être une chaîne de caractères.",
	}).min(2, {message:'Le prénom doit contenir au moins 3 caractères.'})
		.max(50, {message: 'Le prénom ne doit pas dépasser 50 caractères.'})
		.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le prénom ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),


	lastName: z.string({
		required_error: "Le nom est requis.",
		invalid_type_error: "Le nom doit être une chaîne de caractères.",
	})
		.min(2, {message:'Le non doit contenir au moins 3 caractères.'})
		.max(50, {message: 'Le nom ne doit pas dépasser 50 caractères.'})
		.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom ne doit pas contenir de caractères spéciaux.'})
		.toLowerCase(),

	email: z.string({
		required_error: "L'adresse email est requis.",
	}),

	phone: z.string({
		required_error: "Numéro de téléphone est requis.",
	})
		.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
		.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
		.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),

	password: z.string({
		required_error: "Mot de passe est requis.",
	})
		.min(8, {message:'Le mot de passe doit contenir au moins 8 caractères.'}),

	passwordConfirmation: z.string({
		required_error: "Mot de passe est requis.",
	})
		.min(8, {message:'Le mot de passe doit contenir au moins 8 caractères.'})
})
