import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Form, useForm} from "react-hook-form";
import {z} from "zod";
import {laboratoryReceiptFormSchema} from "@/zod/schemas/create-laboratory-receipt-form-schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

export type LaboratoryReceiptSchema = z.infer<typeof laboratoryReceiptFormSchema>
export default function CreateNewLaboratoryReceiptForm() {

    const laboratoryReceiptForm = useForm<LaboratoryReceiptSchema>({
        resolver: zodResolver(laboratoryReceiptFormSchema),
        defaultValues: {
            patient: "",
            age: undefined,
            gender: "",
            sendDate: undefined,
            shade: "",

        }
    })
    function onSubmit(values: LaboratoryReceiptSchema) {
        console.log(values)
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex gap-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                    </svg>
                    <span className="text-xl">Ajouter Laboratoire Recu</span></CardTitle>
                <CardDescription>Saisir avec précision toutes les informations requises sur le recu de laboratoire</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...laboratoryReceiptForm}>
                    <form onSubmit={laboratoryReceiptForm.handleSubmit(onSubmit)}>
                        <div>
                            <div className="flex flex-nowrap items-center gap-x-4 mb-5">
                                <div className="border-b w-[50px]"/>
                                <span
                                    className="text-sm whitespace-nowrap text-foreground/80">Informations générales</span>
                                <div className="border-b w-full"/>
                            </div>
                            <div>
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="patient"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Patient</FormLabel>
                                            <FormControl>
                                                <Input  type="text" {...field}/>
                                            </FormControl>
                                            <FormMessage className="text-xs font-normal" />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="justify-end grid mt-10">
                                <Button className="dark:bg-secondary w-[150px]">Ajouter</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}