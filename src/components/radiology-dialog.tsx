import {
	Dialog,
	DialogContent,
	DialogTrigger
} from "@/components/ui/dialog.tsx";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "@/components/Embla/embla-carousel.tsx";


export type Slide = {
	image: string;
}
interface RadiologyDialogProps {
	slides: Slide[]
}

export default function RadiologyDialog({slides}: RadiologyDialogProps) {
	const OPTIONS: EmblaOptionsType = {}
	return <Dialog>
		<DialogTrigger disabled={slides.length === 0}>
			<button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
				{/*<Upload className="h-4 w-4 text-muted-foreground"/>*/}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-muted-foreground">
					<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
				</svg>
				<span className="sr-only">view</span>
			</button>
		</DialogTrigger>
		<DialogContent className="p-0 max-w-6xl ">
			<EmblaCarousel slides={slides} options={OPTIONS} />
		</DialogContent>
	</Dialog>

}