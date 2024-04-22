import {LaboratoryReceiptSchema} from "@/components/create-new-laboratory-receipt-form.tsx";
import {UseFormReturn} from "react-hook-form";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {cn} from "@/lib/utils.ts";

const shades : {A: string[], B: string[], BL: string[], C: string[], D: string[]} = {
    A: ["A1", "A2", "A3", "A3.5", "A4"],
    B: ["B1", "B2", "B3", "B4"],
    BL: ["BL1", "BL2", "BL3", "BL4"],
    C: ["C1", "C2", "C3", "C4"],
    D: ["D1", "D2", "D3"]
}
interface shadeSelectionProps {
    shade: string,
    form: UseFormReturn<LaboratoryReceiptSchema>
}
export default function ShadeSelection({form, shade}: shadeSelectionProps) {

    const [selectedShade, setSelectedShade] = useState<string>(shade);

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2 flex flex-nowrap items-center gap-x-1 w-full py-5"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4">
                    <path fill="currentColor"
                          d="M7 2C4 2 2 5 2 8c0 2.11 1 5 2 6s2 8 4 8c4.54 0 2-7 4-7s-.54 7 4 7c2 0 3-7 4-8s2-3.89 2-6c0-3-2-6-5-6s-3 1-5 1s-2-1-5-1m0 2c2 0 3 1 5 1s3-1 5-1c1.67 0 3 2 3 4c0 1.75-.86 4.11-1.81 5.06c-.86.86-2.13 6.88-2.69 6.88c-.21 0-.5-1.06-.5-2.35c0-2.04-.57-4.59-3-4.59s-3 2.55-3 4.59c0 1.29-.29 2.35-.5 2.35c-.56 0-1.83-6.02-2.69-6.88C4.86 12.11 4 9.75 4 8c0-2 1.33-4 3-4"></path>
                </svg>
                Selectionner la teinte {selectedShade !== "" ? "(" + shade + ")" : ""}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-60">
            <DropdownMenuGroup>
                <ToggleGroup type="single" className="flex flex-col p-1.5" onValueChange={(shade: string) => {
                    setSelectedShade(shade)
                }
                }
                             onBlur={() => {
                                 form.setValue("shade", selectedShade)
                             }}>
                <div className="grid grid-cols-5 gap-x-1.5">
                        {shades.A.map((item, index) => (
                            <ToggleGroupItem className={cn({ "bg-muted": selectedShade === item }, "border")} key={index} value={item} aria-label="Toggle bold">
                                {item}
                            </ToggleGroupItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator/>
                    <div className="grid grid-cols-5 gap-x-1.5">
                        {shades.B.map((item, index) => (
                            <ToggleGroupItem className={cn({ "bg-muted": selectedShade === item }, "border")} key={index} value={item} aria-label="Toggle bold">
                                {item}
                            </ToggleGroupItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator/>
                    <div className="grid grid-cols-5 gap-x-1.5">
                        {shades.BL.map((item, index) => (
                            <ToggleGroupItem className={cn({ "bg-muted": selectedShade === item }, "border")} key={index} value={item} aria-label="Toggle bold">
                                {item}
                            </ToggleGroupItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator/>
                    <div className="grid grid-cols-5 gap-x-1.5">
                        {shades.C.map((item, index) => (
                            <ToggleGroupItem className={cn({ "bg-muted": selectedShade === item }, "border")} key={index} value={item} aria-label="Toggle bold">
                                {item}
                            </ToggleGroupItem>
                        ))}
                    </div>
                    <DropdownMenuSeparator/>
                    <div className="grid grid-cols-5 gap-x-1.5">
                        {shades.D.map((item, index) => (
                            <ToggleGroupItem className={cn({ "bg-muted": selectedShade === item }, "border")} key={index} value={item} aria-label="Toggle bold">
                                {item}
                            </ToggleGroupItem>
                        ))}
                    </div>
                </ToggleGroup>
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}