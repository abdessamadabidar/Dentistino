import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ToggleGroup, ToggleGroupItem} from "@/components/ui/toggle-group.tsx";
import {cn} from "@/lib/utils.ts";
import {UseFormReturn} from "react-hook-form";
import {PatientForm} from "@/components/create-new-patient-form.tsx";
import {useState} from "react";

interface TeethSelectionProps {
	fieldIndex: number,
	form: UseFormReturn<PatientForm>,
}

export default function TeethSelection({form, fieldIndex}: TeethSelectionProps) {

	const [selectedToothNumbers, setSelectedToothNumbers] = useState<Set<number>>(new Set());

	return (
		<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<Button type="button" variant="outline" className="focus-visible:ring-0  px-3">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-5">
					<path fill="currentColor" d="M7 2C4 2 2 5 2 8c0 2.11 1 5 2 6s2 8 4 8c4.54 0 2-7 4-7s-.54 7 4 7c2 0 3-7 4-8s2-3.89 2-6c0-3-2-6-5-6s-3 1-5 1s-2-1-5-1m0 2c2 0 3 1 5 1s3-1 5-1c1.67 0 3 2 3 4c0 1.75-.86 4.11-1.81 5.06c-.86.86-2.13 6.88-2.69 6.88c-.21 0-.5-1.06-.5-2.35c0-2.04-.57-4.59-3-4.59s-3 2.55-3 4.59c0 1.29-.29 2.35-.5 2.35c-.56 0-1.83-6.02-2.69-6.88C4.86 12.11 4 9.75 4 8c0-2 1.33-4 3-4"></path>
				</svg>
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent>
			<ToggleGroup
				type="multiple"
				variant="outline"
				className="flex flex-col gap-y-3 py-1"
				onValueChange={(value) => {
					const numbers = value.map(Number)
					setSelectedToothNumbers(new Set(numbers))


				}}
				onBlur={() => {
					form.setValue(`teeth.${fieldIndex}.numbers`, [...selectedToothNumbers])
				}}
			>
				<div className="space-y-2">
					<span className="text-xs font-normal text-foreground/80  text-start">Haut-Droite:  Adulte & Enfant</span>
					<div className="grid grid-cols-8 gap-1">
						{Array.from({length: 8}, (_, index) => index + 11)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
						<DropdownMenuSeparator className="col-span-8" />
						{Array.from({length: 5}, (_, index) => index + 51)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
					</div>
				</div>
				<div className="space-y-2">
					<span className="text-xs font-normal text-foreground/80 italic text-start">Haut-Gauche:  Adulte & Enfant</span>
					<div className="grid grid-cols-8 gap-1">
						{Array.from({length: 8}, (_, index) => index + 21)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
						<DropdownMenuSeparator className="col-span-8" />
						{Array.from({length: 5}, (_, index) => index + 61)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
					</div>
				</div>
				<div className="space-y-2">
					<span className="text-xs font-normal text-foreground/80 italic text-start">Bas-Droite:  Adulte & Enfant</span>
					<div className="grid grid-cols-8 gap-1">
						{Array.from({length: 8}, (_, index) => index + 41)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
						<DropdownMenuSeparator className="col-span-8" />
						{Array.from({length: 5}, (_, index) => index + 81)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
					</div>
				</div>
				<div className="space-y-2">
					<span className="text-xs font-normal text-foreground/80 italic text-start">Bas-Gauche:  Adulte & Enfant</span>
					<div className="grid grid-cols-8 gap-1">
						{Array.from({length: 8}, (_, index) => index + 31)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
						<DropdownMenuSeparator className="col-span-8" />
						{Array.from({length: 5}, (_, index) => index + 71)
							.map((e, key) => <ToggleGroupItem className={cn(selectedToothNumbers.has(e) && "bg-muted")} key={key} value={e.toString()}>{e}</ToggleGroupItem>)}
					</div>
				</div>

			</ToggleGroup>
		</DropdownMenuContent>
	</DropdownMenu>
	);
}