import {MedicalProcedure} from "@/types/MedicalProcedure.ts";

export const procedures : MedicalProcedure[] = [
	{ code: "D600", description: "Traitement des fractures du procès alvéolaires avec conservation des dents mobiles et déplacées, traitement radiculaire non compris", price1: 50, price2: 20 },
	{ code: "D601", description: "Traitement orthopédique d'une fracture complète sans déplacement (appareillage compris)", price1: 60, price2: 20 },
	{ code: "D602", description: "Traitement orthopédique d'une fracture complète avec déplacement (appareillage compris)", price1: 100, price2: 40 },
	{ code: 'D603', description: "Réduction d'une fracture ouverte (appareillage compris)", price1: 150, price2: 60},
	{ code: 'D604', description: "Ostéosynthèse d'une fracture par broches, vis, cerclages, etc. (matériel compris)", price1: 200, price2: 80},
	{ code: 'D605', description: "Traitement chirurgical d'une fracture ouverte (appareillage compris)", price1: 150, price2: 80},
	{ code: "D607", description: "Curetage et ablation des séquestres pour ostéite et nécrose des maxillaires circonscrites à la région alvéolaire", price1: 10 },
	{ code: "D608", description: "Curetage et ablation des séquestres pour ostéite ou nécrose du corps maxillaire (radiographie indispensable)", price1: 50, price2: 20 },
	{ code: "D609", description: "Prélèvement osseux important ou trépanation d'un maxillaire pour examen histologique", price1: 30, price2: 20 },
	{ code: "D610", description: "Ablation d'une tumeur bénigne des maxillaires ayant entraîné un vaste délabrement osseux", price1: 80, price2: 30 },
];

