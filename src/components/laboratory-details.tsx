import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";


export default function LaboratoryDetails() {
    return(
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                    <Button size="icon" variant="outline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                        </svg>

                    </Button>
                    <h1 className="text-lg font-semibold">Détails de reçu de laboratoire</h1>
                </div>
                <div className="flex items-center flex-nowrap gap-x-2">
                    <Button size="sm" variant="outline"
                            className="flex flex-nowrap items-center gap-x-1.5 px-3 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                        </svg>
                        Archiver
                    </Button>
                    <Link to="edit-patient">
                        <Button size="sm" variant="outline"
                                className="flex flex-nowrap items-center gap-x-1.5 px-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                            </svg>
                            Modifier
                        </Button>
                    </Link>
                    <Link to="#">
                        <Button size="sm" variant="default"
                                className="flex flex-nowrap items-center gap-x-1.5 px-3 text-sm bg-red-500 hover:bg-destructive dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                            </svg>
                            Supprimer
                        </Button>
                    </Link>
                </div>
            </div>
            <Card>
                <CardHeader className="space-y-0">
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                            </svg>
                            <span className="text-lg">Informations de patient</span>
                        </div>
                        <a className="text-sm text-end flex font-medium flex-nowrap items-center gap-x-2 group" href={"#"}>
                            voir patient
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" strokeWidth={1.5}
                                 stroke="currentColor"
                                 className="size-4 group-hover:translate-x-1 transition-all duration-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                            </svg>
                        </a>
                    </CardTitle>
                    <CardDescription>Voici les informations de patient</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-x-4 gap-y-3.5">
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">Patient</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block">Abdessamad</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">Age</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block">21</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">Sexe</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block">Homme</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-3 col-start-1 row-start-1">
                <CardHeader className="space-y-0">
                    <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                            </svg>
                            <span className="text-lg">Informations Médicales</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Voici les informations médicales de reçu de laboratoire</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-y-5">
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">Date d'envoi</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block">10/12/2024</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">Teinte</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block">BL4</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">IC + PROVISIORE</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block min-h-[39px]"></span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">PEI + CO</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block h-[39px]"></span>
                        </div>
                        <div className="space-y-2 lg:col-span-2">
                            <span className="text-sm font-medium block">Nature de travail</span>
                            <textarea disabled
                                      className="min-h-[39px] px-4 py-2.5 bg-muted text-sm rounded-lg block w-full"></textarea>
                        </div>
                        <div className="space-y-2">
                            <span className="text-sm font-medium block">1er Essayage</span>
                            <span className="px-4 py-2.5 bg-muted text-sm rounded-lg block h-[39px]"></span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}