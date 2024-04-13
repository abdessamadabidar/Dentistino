import {useState} from "react";
import {Medicine} from "@/data/medicines.ts";

export const useMedicine = () => {

	const [selectedMedicines, setSelectedMedicines] = useState<Medicine[]>([])

	const appendItem = (medicineName: string, posologie: string) : void => {

		const index = selectedMedicines.findIndex((med: Medicine) => med.name === medicineName);
		if (index === -1) {
			setSelectedMedicines((prevState) => [...prevState, {name: medicineName, posologies: [posologie]}])
		}
		else {
			const updatedState = [...selectedMedicines];
			updatedState[index] = {
				...updatedState[index],
				posologies: [...updatedState[index].posologies, posologie]
			}
			setSelectedMedicines(updatedState)
		}
	}

	const removeItem = (medicineName: string, posologie: string): void =>  {
		const index = selectedMedicines.findIndex((med: Medicine) => med.name === medicineName);
		if (index !== -1) {
			if (selectedMedicines[index].posologies.includes(posologie)) {
				const updatedState = [...selectedMedicines];
				updatedState[index] = {
					...updatedState[index],
					posologies: [...updatedState[index].posologies.filter((pos) => pos !== posologie)]
				}

				setSelectedMedicines(updatedState)
			}
		}

	}

	const posologieIsChecked = (medicine: Medicine, posologie: string) : boolean => {
		let isChecked = false;
		selectedMedicines.forEach((selectedMedicine: Medicine) => {
				if (selectedMedicine.name === medicine.name) {
					isChecked = selectedMedicine.posologies.includes(posologie);
				}
			}
		);


		return isChecked;

	}


	return {selectedMedicines, appendItem, removeItem, posologieIsChecked};
}