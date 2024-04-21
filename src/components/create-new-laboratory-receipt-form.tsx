import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useFieldArray, useForm} from "react-hook-form";
import {z} from "zod";
import {laboratoryReceiptFormSchema} from "@/zod/schemas/create-laboratory-receipt-form-schema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {cn} from "@/lib/utils.ts";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar.tsx";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group.tsx";
import SelectPatientDialog from "@/components/select-patient-dialog.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import ShadeSelection from "@/components/shade-selection.tsx";
import {Patient} from "@/data/patients-data.ts";
import {useState} from "react";

export type LaboratoryReceiptSchema = z.infer<typeof laboratoryReceiptFormSchema>
export default function CreateNewLaboratoryReceiptForm() {

    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const laboratoryReceiptForm = useForm<LaboratoryReceiptSchema>({
        resolver: zodResolver(laboratoryReceiptFormSchema),
        defaultValues: {
            idPatient: undefined,
            laboratory: "",
            sendDate: undefined,
            shade: "",
            tryOn: [{value: ""}]
        }
    })
    const { fields: tryOnFields , append: appendPTryOn, remove: removeTryOn } = useFieldArray({
        name: "tryOn",
        control: laboratoryReceiptForm.control,
    })
    function onSubmit(values: LaboratoryReceiptSchema) {
        console.log(values)
    }
    const handlePatientSelection = (patient: Patient | undefined) => {
        if (patient) {
            laboratoryReceiptForm.setValue("idPatient", patient.id)
            setSelectedPatient(patient)
        }
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
                    <span className="text-xl">Ajouter Laboratoire Reçu</span></CardTitle>
                <CardDescription>Saisir avec précision toutes les informations requises sur le reçu de laboratoire</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...laboratoryReceiptForm}>
                    <form onSubmit={laboratoryReceiptForm.handleSubmit(onSubmit)}>
                        <div className="mb-20">
                            <div className="flex flex-nowrap items-center gap-x-4 mb-5">
                                <div className="border-b w-[50px]"/>
                                <span
                                    className="text-sm whitespace-nowrap text-foreground/80">Informations de patient</span>
                                <div className="border-b w-full"/>
                            </div>
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="idPatient"
                                    render={() => (
                                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-3.5">
                                            <div className="space-y-2">
                                                <span className="text-sm font-medium">Patient</span>
                                                <Input type="text" value={selectedPatient ? selectedPatient.firstName + " " + selectedPatient.lastName : ""} disabled/>
                                                <FormMessage className="text-xs font-normal"/>
                                            </div>
                                            <div className="space-y-2">
                                                <span className="text-sm font-medium">Age</span>
                                                <Input type="number" disabled/>
                                            </div>
                                            <div className="space-y-2">
                                                <span className="text-sm font-medium">Sexe</span>
                                                <RadioGroup className="flex flex-row items-center gap-x-5 space-y-1">
                                                    <div className="flex items-center space-x-3 space-y-0">
                                                        <RadioGroupItem value="H" checked={!!(selectedPatient && selectedPatient.gender === "H")} disabled/>
                                                        <span className="font-normal">Homme</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3 space-y-0">
                                                        <RadioGroupItem value="F" checked={!!(selectedPatient && selectedPatient.gender === "F")} disabled/>
                                                        <span className="font-normal">Femme</span>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <FormItem className="lg:col-span-3">
                                                <FormControl>
                                                    <SelectPatientDialog trigger={
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            size="sm"
                                                            className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                                 className="size-4">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M12 4.5v15m7.5-7.5h-15"/>
                                                            </svg>
                                                            Selectionner un patient
                                                        </Button>
                                                    } onConfirm={handlePatientSelection}/>
                                                </FormControl>
                                            </FormItem>
                                        </div>)}
                                />
                        </div>
                        <div className="mb-20">
                            <div className="flex flex-nowrap items-center gap-x-4 my-5">
                            <div className="border-b w-[50px]"/>
                                <span
                                    className="text-sm whitespace-nowrap text-foreground/80">Informations de médicaux</span>
                                <div className="border-b w-full"/>
                            </div>
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-3.5">
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="shade"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Teinte</FormLabel>
                                            <FormControl>
                                                <ShadeSelection shade={field.value} form={laboratoryReceiptForm}/>
                                            </FormControl>
                                            <FormMessage className="text-xs font-normal"/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="sendDate"
                                    render={({field}) => (
                                        <FormItem className="">
                                            <FormLabel>Date d'envoi</FormLabel>
                                            <FormControl>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Sélectionner une date</span>
                                                            )}
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                 viewBox="0 0 24 24" strokeWidth={1.5}
                                                                 stroke="currentColor" className="ml-auto h-4 w-4 ">
                                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                                                            </svg>

                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date > new Date() || date < new Date("1900-01-01")
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage className="text-xs font-normal"/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="ICAndPROVISIONAL"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>IC + PROVISIORE</FormLabel>
                                            <FormControl>
                                                <Input type="text" {...field}/>
                                            </FormControl>
                                            <FormMessage className="text-xs font-normal"/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="PEIAndCO"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>PEI + CO</FormLabel>
                                            <FormControl>
                                                <Input type="text" {...field}/>
                                            </FormControl>
                                            <FormMessage className="text-xs font-normal"/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="laboratory"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Laboratoire</FormLabel>
                                            <FormControl>
                                                <Input type="text" {...field}/>
                                            </FormControl>
                                            <FormMessage className="text-xs font-normal"/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={laboratoryReceiptForm.control}
                                    name="workType"
                                    render={({field}) => (
                                        <FormItem className="col-start-1">
                                            <FormLabel>Nature de travail</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="veuillez indiquer le type de travail"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <div className="col-start-1" >
                                    {tryOnFields.map((field, index) => (
                                        <FormField
                                            control={laboratoryReceiptForm.control}
                                            key={field.id}
                                            name={`tryOn.${index}.value`}
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                                                        Essayages
                                                    </FormLabel>
                                                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                                                        Cliquez sur le bouton Ajouter un essayage s'il y a plusieurs
                                                        essayages.
                                                    </FormDescription>
                                                    <FormControl>
                                                        <div className="flex flex-nowrap gap-x-2">
                                                            <Input type="text" {...field} />
                                                            <Button variant="outline"
                                                                    className="focus-visible:ring-0 px-3 text-red-500 hover:text-destructive"
                                                                    onClick={() => removeTryOn(index)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                                     stroke="currentColor" className="size-5">
                                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                                                </svg>
                                                            </Button>
                                                        </div>

                                                    </FormControl>
                                                    <FormMessage className="text-xs font-normal"/>
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
                                        onClick={() => appendPTryOn({value: ""})}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 4.5v15m7.5-7.5h-15"/>
                                        </svg>
                                        Ajouter un essayage
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="justify-end grid mt-10">
                            <Button className="dark:bg-secondary w-[150px]">Ajouter</Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}