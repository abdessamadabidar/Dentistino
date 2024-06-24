import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import _6th_chapeter from '@/data/nomenclatures/_6th_chapeter.json'
import _7th_chapeter from '@/data/nomenclatures/_7th_chapeter.json'
import _8th_chapeter from '@/data/nomenclatures/_8th_chapeter.json'
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Search from "@/components/search";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NomenclaturePage() {

	const [filtered6thChapeter, setFiltered6thChapeter] = useState(_6th_chapeter);
	const [filtered7thChapeter, setFiltered7thChapeter] = useState<typeof _7th_chapeter>(_7th_chapeter);
	const [filtered8thChapeter, setFiltered8thChapeter] = useState<typeof _8th_chapeter>(_8th_chapeter);
	

	const filter6thChapeter = (criteria: string) => {
		const filteredArticles = _6th_chapeter.aricles.map(article => ({
			...article,
			actes: article.actes.map(acte => ({
				...acte,
				elements: acte.elements.filter(element => element.description.includes(criteria))
			})).filter(acte => acte.elements.length > 0)
		})).filter(article => article.actes.length > 0);
	
		setFiltered6thChapeter({
			aricles: filteredArticles
		});
	};
	
	const filter7thChapeter = (criteria: string) => {
		const filteredSections = _7th_chapeter.sections.map(section => ({
			...section,
			articles: section.articles.map(article => ({
				...article,
				sousArticles: article.sousArticles.map(sousArticle => ({
					...sousArticle,
					actes: sousArticle.actes.map(acte => ({
						...acte,
						elements: acte.elements.filter(element => element.description.includes(criteria))
					})).filter(acte => acte.elements.length > 0)
				})).filter(sousArticle => sousArticle.actes.length > 0)
			})).filter(article => article.sousArticles.length > 0)
		})).filter(section => section.articles.length > 0);
	
		setFiltered7thChapeter({
			sections: filteredSections
		});
	};
	



	const filter8thChapeter = (criteria: string) => {
		const filteredActs = _8th_chapeter.actes.filter(
			acte => acte.description.includes(criteria)
		)
		
		setFiltered8thChapeter({
			..._8th_chapeter,
			"actes": filteredActs
		})
	}
	

	const onInputChange = (criteria: string) => {
		filter6thChapeter(criteria);
		filter7thChapeter(criteria);
		filter8thChapeter(criteria)
		
	}




	return <div className="space-y-4">
		<div className="flex flex-nowrap justify-between items-center">
			<h1 className="text-xl font-semibold text-primary dark:text-secondary">Nomenclature générale des actes</h1>
			<Search className="w-80" onChange={onInputChange} />
		</div>
		{(filtered6thChapeter.aricles.length === 0 && filtered7thChapeter.sections.length === 0 && filtered8thChapeter.actes.length === 0) && <p className="text-sm text-muted-foreground italic text-center">Aucun acte trouvé</p>}
		<Tabs defaultValue="_6th_chapeter" className="space-y-4">
			<TabsList className="rounded-lg">
				<TabsTrigger className={cn("rounded-md italic", filtered6thChapeter.aricles.length === 0 && "hidden")} value="_6th_chapeter">Chapitre &#8549; : Maxillaires</TabsTrigger>
				<TabsTrigger className={cn("rounded-md italic", filtered7thChapeter.sections.length === 0 && "hidden")} value="_7th_chapeter">Chapitre &#8550; :  Dents, gencives</TabsTrigger>
				<TabsTrigger className={cn("rounded-md italic", filtered8thChapeter.actes.length === 0 && "hidden")} value="_8th_chapeter">Chapitre &#8551; :  Prothèse restauratrice maxillo-faciale</TabsTrigger>
			</TabsList>
			<TabsContent value="_6th_chapeter" className="space-y-4 bg-white dark:bg-background rounded-md shadow-sm">
				<Accordion type="single" collapsible className="w-full">
					{filtered6thChapeter?.aricles?.map((article, index) => (
						<AccordionItem key={index} value={article?.titre}>
							<AccordionTrigger className="hover:no-underline hover:bg-muted px-5">Article { index + 1 } : { article?.titre }</AccordionTrigger>
							<AccordionContent className="p-5">
								<ul className="space-y-8">
									{article?.actes?.map((acte, key) => (
										<li key={key} className="space-y-5">
											{(acte?.titre == '' && acte?.description == '') || 
												<div className="space-y-1">
													<h2 className="font-semibold">{acte?.titre}</h2>
													<p className="text-sm text-muted-foreground">{ acte?.description }</p>
												</div>
											}
											
											<Table className="border-collapse border">
												<TableBody>
													{acte?.elements?.map((element, subKey) => (
														<TableRow key={subKey}>
															<TableCell className="font-medium border w-11">{ element?.code }</TableCell>
															<TableCell className="border">{ element?.description }</TableCell>
															<TableCell className="border w-9 text-center">{ element?.tarif1 }</TableCell>
															<TableCell className="border w-9 text-center">{ element?.tarif2 }</TableCell>
														</TableRow>
													))}
												</TableBody>
											</Table>
										</li>
									)) }	
								</ul>						
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</TabsContent>
			<TabsContent value="_7th_chapeter" className="space-y-4">
				<ul className="space-y-5">
					{filtered7thChapeter?.sections?.map((section, index) => (
						<li key={index}>
							<Card className="rounded-md">
								<CardHeader className="space-y-0">
									<CardTitle className="text-md text-primary">Section {index + 1} : { section?.titre }</CardTitle>
									<CardDescription>{ section?.description }</CardDescription>
								</CardHeader>
								<CardContent className="px-0 pb-0">
									<Accordion type="single" collapsible className="w-full">
										{section?.articles?.map((article, subIndex) => (
											<AccordionItem key={subIndex} value={article?.titre}>
												<AccordionTrigger className="hover:no-underline hover:bg-muted px-5">Article {subIndex + 1} : {article?.titre}</AccordionTrigger>
												<AccordionContent className="p-5">
													<ul className="space-y-8">
														{article?.sousArticles?.map((sousArticle, key) => (
															<li key={key} className="space-y-3">
																<h2 className="font-semibold">{sousArticle?.sousTitre}</h2>
																<div className="space-y-5">
																	{sousArticle?.actes?.map((acte, subKey) => (
																		<Table key={subKey} className="border-collapse border">
																			<TableBody>
																				{acte?.elements?.map((element, subKey) => (
																					<TableRow key={subKey}>
																						<TableCell className="font-medium border w-11">{ element?.code }</TableCell>
																						<TableCell className="border">{ element?.description }</TableCell>
																						<TableCell className="border w-9 text-center">{ element?.tarif1 }</TableCell>
																						<TableCell className="border w-9 text-center">{ element?.tarif2 }</TableCell>
																					</TableRow>
																				))}
																			</TableBody>
																		</Table>
																	))}
																</div>
															</li>
														))}
													</ul>		
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</CardContent>
							</Card>
						</li>
					))}
				</ul>
			</TabsContent>
			<TabsContent value="_8th_chapeter" className={cn("space-y-4 bg-white dark:bg-background rounded-md shadow-sm p-5", filtered8thChapeter.actes.length === 0 && "hidden")}>
				<p className="text-sm">{_8th_chapeter.description }</p>
				<Table className="border-collapse border">
					<TableBody>
						{filtered8thChapeter.actes.map((acte, subKey) => (
							<TableRow key={subKey}>
								<TableCell className="font-medium border w-11">{ acte?.code }</TableCell>
								<TableCell className="border">{ acte?.description }</TableCell>
								<TableCell className="border w-9 text-center">{ acte?.tarif1 }</TableCell>
								<TableCell className="border w-9 text-center">{ acte?.tarif2 }</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TabsContent>
		</Tabs>
	</div>
}