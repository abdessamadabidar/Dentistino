import {z} from "zod";

export const createPatientFormSchema = z.object({
	firstName: z
		.string({
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

	cin: z.string({
		required_error: "CIN est requis.",
	})
		.length(8, {message:'CIN doit contenir 8 caractères.'})
		.regex(new RegExp('^[A-Za-z]+\\d+'), {message: 'CIN est invalid'})
		.toLowerCase(),

	phone: z.string({
		required_error: "Numéro de téléphone est requis.",
	})
		.min(10, {message:'Le numéro de téléphone doit contenir au moins 10 caractères.'})
		.max(13, {message: 'Le numéro de téléphone ne doit pas dépasser 13 caractères.'})
		.regex(new RegExp('^\\+?\\d{1,3}\\d{1,9}$'), {message: 'Le numéro de téléphone est invalid.'}),

	address: z.string({
		required_error: "L'adresse est requis.",
	})
		.min(5, {message:"L'addresse doit contenir au moins 5 caractères."})
		.max(60, {message: "L'addresse ne doit pas dépasser 60 caractères."})
		.toLowerCase(),

	city: z.string({required_error: "La ville est requis."}),
	dateOfBirth: z.date({
		required_error: "Le date de naissance est requis.",
	}),
	profession: z.string().optional(),
	gender: z.string({
		required_error: "Le genre est requis."
	}),
	mutual: z.string({
		required_error: "La mutuelle est requis."
	}),

	isPregnantOrlactating: z.boolean().default(false).optional(),
	bleeding: z.boolean().default(false).optional(),
	parent: z.object({
		fullName: z.string({
			invalid_type_error: "Le nom complet doit être une chaîne de caractères.",
		})
			.min(2, {message:'Le nom complet doit contenir au moins 3 caractères.'})
			.max(50, {message: 'Le nom complet ne doit pas dépasser 50 caractères.'})
			.regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom complet ne doit pas contenir de caractères spéciaux.'})
			.toLowerCase().optional(),

		relation: z.string({
			invalid_type_error: "Le relation doit être significative.",
		}).optional(),
	}).optional(),
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
});
