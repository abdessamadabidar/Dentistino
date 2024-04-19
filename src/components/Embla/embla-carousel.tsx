import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.css'
import {
	PrevButton,
	NextButton,
	usePrevNextButtons
} from './embla-carousel-arrow-buttons.tsx'
import useEmblaCarousel from 'embla-carousel-react'
import {Slide} from "@/components/radiology-dialog.tsx";

type PropType = {
	slides: Slide[]
	options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	return (
		<section className="embla h-[90vh] ">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div className="embla__slide relative" key={index}>
							<PrevButton className="absolute left-5 top-[50%] translate-y-[-50%] " onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
							<NextButton className="absolute right-5 top-[50%] translate-y-[-50%]" onClick={onNextButtonClick} disabled={nextBtnDisabled} />
							<div className="grid place-items-center h-[90vh] rounded-lg">
								<img src={slide.image} className="w-full h-full object-cover rounded-lg" alt=""/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default EmblaCarousel
