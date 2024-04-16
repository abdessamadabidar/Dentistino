import {z} from "zod";
export const laboratoryReceiptFormSchema = z.object({
    patient: z.string({
        required_error: "Le nom de patient est requis.",
        invalid_type_error: "Le nom de patient doit être une chaîne de caractères.",
        })
        .min(2, {message:'Le nom de patient doit contenir au moins 3 caractères.'})
        .max(50, {message: 'Le nom de patient ne doit pas dépasser 50 caractères.'})
        .regex(new RegExp('^[A-Za-z\\s]+$'), {message: 'Le nom de patient  ne doit pas contenir de caractères spéciaux.'}),
    age: z.number({
        required_error: "l'age de patient est requis",
        invalid_type_error: "l'age de patient doit être un chiffre",
        })
        .int({
            message: "l'age de patient doit être entier"
        })
        .positive({
            message: "l'age de patient doit être positif"
        }),
    gender: z.string({
        required_error: "Le genre est requis."
    }).min(1, {message: "Le genre est requis."}),
    sendDate: z.date({
        required_error: "Le date d'envoi de reçu est requis.",
        }
    ),
    shade: z.string({
        required_error: "La teinte est requis.",
        invalid_type_error: "La teinte doit être une chaîne de caractères.",
        })
        .regex(new RegExp('^[A-Z]{1}[0-9]+(\\.[0-9]+)?$'), {message: "La teinte est invalide"}),
    workType: z.string().optional(),
    PEIAndCO: z.string().optional(),
    ICAndPROVISIONAL: z.string().optional(),
    tryOn: z.array(
        z.object({
            value: z.string()
        })
    )
});