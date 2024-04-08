


type Medicament = {
	nom: string;
	posologies: string[]
}

interface TypeMedicament  {
	type: string;
	medicaments: Medicament[]
}

const medicaments: TypeMedicament[] = [
	{
		type: 'Antalgique',
		medicaments: [
			{
				nom: 'Cedol',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				nom: 'Brufen',
				posologies: [
					'1 cuillère à café 3 fois par jour pendant 3 jours'
				]
			},
			{
				nom: 'Codoliprane',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				nom: 'Doliprane 1 g',
				posologies: [
					'1 comprimé 2 fois par jour pendant 3 jours'
				]
			},
			{
				nom: 'Doliprane 500',
				posologies: [
					'1/2 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				nom: 'Pandol extra',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			},
			{
				nom: 'Parental',
				posologies: [
					'1 comprimé 3 fois par jour pendant 3 jours'
				]
			}
		]
	},
	{
		type: 'Antibiotique',
		medicaments: [
			{
				nom: 'Zyrdol 500mg',
				posologies: []
			},
			{
				nom: 'Test',
				posologies: [
					'3 fois par jour pendant 7 jours'
				]
			},
			{
				nom: 'Rodogyl',
				posologies: [
					'2 comprimés 2 fois par jour pendant 6 jours',
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Levamox 1g',
				posologies: [
					'1 sachet 2 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Flagyl 500 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Ery 250',
				posologies: [
					'1 sachet 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Dispamox',
				posologies: [
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Clavulin 500mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Clavulin 1g',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Bispirazole',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Birodogyl',
				posologies: [
					'2 comprimés 2 fois par jour pendant 6 jours',
					'1 comprimé 3 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Aximycine 1g',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Augmentin1g',
				posologies: [
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Augmentin 500 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Augmentin 250 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Amoxil500 mg',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Amoxil 1 g',
				posologies: [
					'1 comprimé 3 fois par jour pendant 6 jours',
					'1 comprimé 2 fois par jour pendant 6 jours'
				]
			},
			{
				nom: 'Algixene 250mg',
				posologies: []
			}
		]
	}
];

