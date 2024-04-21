import {z} from "zod";
export const laboratoryReceiptFormSchema = z.object({

    idPatient: z.number({
        required_error: "Le patient est requis."
    }).min(0, {message: "Le patient est requis."}),
    laboratoryName: z.string({
        required_error: "Le laboratoire est requis.",
        invalid_type_error: "Le nom laboratoire doit être une chaîne de caractères.",
        }
    ),
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