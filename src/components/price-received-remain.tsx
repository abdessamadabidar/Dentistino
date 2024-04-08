import {TableCell} from "@/components/ui/table.tsx";
import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {UseFormReturn} from "react-hook-form";
import {PatientForm} from "@/components/add-new-patient-form.tsx";
import {useEffect, useState} from "react";

interface Props {
	rowIndex: number,
	fieldId: string,
	form: UseFormReturn<PatientForm>
}
export default function PriceReceivedRemain({rowIndex, fieldId, form}: Props) {

	const [price, setPrice] = useState<number>(0);
	const [received, setReceived]  = useState<number>(0);
	const [remain, setRemain] = useState<number>(0)

	useEffect(() => {
		setRemain(price - received)
	}, [price, received]);

	return (
		<>
			<TableCell>
				<FormField
					control={form.control}
					key={fieldId}
					name={`teeth.${rowIndex}.price`}
					render={() => (
						<FormItem>
							<FormControl>
								<Input
									type="number"
									value={price}
									onChange={(event) => setPrice(Number(event.target.value))}
									onBlur={() => form.setValue(`teeth.${rowIndex}.price`, price)}
								/>
							</FormControl>
							<FormMessage className="text-xs font-normal" />
						</FormItem>
					)}
				/>
			</TableCell>
			<TableCell>
				<FormField
					control={form.control}
					key={fieldId}
					name={`teeth.${rowIndex}.received`}
					render={() => (
						<FormItem>
							<FormControl>
								<Input
									type="number"
									onChange={(event) => setReceived(Number(event.target.value))}
									value={received}
									onBlur={
									() => {
										form.setValue(`teeth.${rowIndex}.received`, received)
										form.setValue(`teeth.${rowIndex}.remain`, remain)
									}}
								/>
							</FormControl>
							<FormMessage className="text-xs font-normal" />
						</FormItem>
					)}
				/>
			</TableCell>
			<TableCell>
				<FormField
					control={form.control}
					key={fieldId}
					name={`teeth.${rowIndex}.remain`}
					render={() => (
						<FormItem>
							<FormControl>
								<Input
									type="number"
									value={remain}
								/>
							</FormControl>
							<FormMessage className="text-xs font-normal" />
						</FormItem>
					)}
				/>
			</TableCell>
		</>
	);
}