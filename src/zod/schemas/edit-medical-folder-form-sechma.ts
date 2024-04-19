import {z} from "zod";


export const editMedicalFolderFormSechma = z.object({
	isPregnantOrlactating: z.boolean().default(false).optional(),
	bleeding: z.boolean().default(false).optional(),
	treatingDoctors: z.array(
		z.object({
			firstName: z.string({
				required_error: "Le prénom est requis.",
				invalid_type_error: "Le prénom doit être une chaîne de caractères.",
			})
				.min(2, {message:'Le prénom doit contenir au moins 3 caractères.'})
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
			phone: z.string({
				required_error: "Numéro de téléphone est requis.",
			})
				.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
				.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
				.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),
			speciality: z.string().optional(),
			adressant: z.boolean().default(false).optional()
		})
	).optional(),
	pathologies: z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	treatments: z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	anesthesia:  z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	allergies:  z
		.array(
			z.object({
				value: z.string(),
			})
		)
		.optional(),
	comment: z.string().max(160).min(4).optional(),
	teeth: z
		.array(
			z.object({
				date: z.date(),
				numbers: z.array(z.number()).optional(),
				observation: z.string(),
				price: z.number(),
				received: z.number(),
				remain: z.number(),
			})
		).optional()
})