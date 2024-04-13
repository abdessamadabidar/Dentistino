
export type Medicine = {
	name: string;
	posologies: string[]
}

export interface MedicineType  {
	type: string;
	medicines: Medicine[]
}

export const medicineTypes: MedicineType[] = [
	{
		type: 'Antalgique',
		medicines: [
			{
				name: 'Cedol',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				name: 'Brufen',
				posologies: [
					'1 cuillère à café 3 fois par jour pendant 3 jours'
				]
			},
			{
				name: 'Codoliprane',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				name: 'Doliprane 1 g',
				posologies: [
					'1 comprimé 2 fois par jour pendant 3 jours'
				]
			},
			{
				name: 'Doliprane 500',
				posologies: [
					'1/2 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				name: 'Pandol extra',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				name: 'Parental',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			}
		]
	},
	{
		type: 'Antibiotique',
		medicines: [
			{
				name: 'Zyrdol 500mg',
				posologies: []
			},
			{
				name: 'Test',
				posologies: [
					'3 fois par jour pendant 7 jours'
				]
			},
			{
				name: 'Rodogyl',
				posologies: [
					'2 comprimés 2 fois par jour pendant 6 jours',
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Levamox 1g',
				posologies: [
					'1 sachet 2 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Flagyl 500 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Ery 250',
				posologies: [
					'1 sachet 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Dispamox',
				posologies: [
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Clavulin 500mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Clavulin 1g',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Bispirazole',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Birodogyl',
				posologies: [
					'2 comprimés 2 fois par jour pendant 6 jours',
					'1 comprimé 3 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Aximycine 1g',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Augmentin1g',
				posologies: [
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Augmentin 500 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Augmentin 250 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Amoxil500 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Amoxil 1 g',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				name: 'Algixene 250mg',
				posologies: []
			}
		]
	}
];

