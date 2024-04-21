import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "@/components/ui/dialog"
import {Upload} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";
import {Input} from "@/components/ui/input.tsx";

export default function UploadImageDialog() {


	const [currentImages, setcurrentImages] = useState<File[]>([]);
	const [previewImages, setPreviewImages] = useState<string[]>([]);
	const fileInputRef = useRef<HTMLInputElement>(null);


	const selectImage = (event: React.ChangeEvent<HTMLInputElement>) : void => {
		const selectedFiles = event.target.files as FileList;
		setcurrentImages((prevState) => [...prevState, ...selectedFiles]);

	};


	useEffect(() => {
		setPreviewImages(currentImages.map((file) => URL.createObjectURL(file)));
	}, [currentImages]);

	const handleReselectFiles = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click()
		}
	};





	return <Dialog>
		<DialogTrigger>
			<button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
				<Upload className="h-4 w-4 text-muted-foreground"/>
				<span className="sr-only">upload</span>
			</button>
		</DialogTrigger>
		<DialogContent>
			<div className="flex  w-full mt-5 min-h-64">
				{previewImages.length !== 0 ?
					<div className="flex items-start justify-start flex-wrap gap-2">
						{previewImages.map((url: string, key) => (
							<div key={key} className="w-32 aspect-square rounded-lg border">
								<img src={url} alt="" className="w-full h-full object-cover rounded-lg"/>
							</div>
						))}
						<button className="flex w-32 aspect-square items-center justify-center rounded-lg border border-dashed" onClick={handleReselectFiles}>
							<Upload className="h-4 w-4 text-muted-foreground"/>
							<Input accept="image/*" type="file" className="hidden" multiple onChange={selectImage} ref={fileInputRef} />
							<span className="sr-only">upload</span>
						</button>
					</div>
					:
					<label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2  border-dashed rounded-lg cursor-pointer bg-muted/80 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-muted/40 dark:bg-muted/30 dark:hover:bg-muted/40">
						<div className="flex flex-col items-center justify-center pt-5 pb-6">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 mb-4">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
							</svg>
							<p className="mb-2 text-sm dark:text-gray-400"><span className="font-semibold">Cliquez pour importer</span> ou glisser-déposer</p>
							<p className="text-xs dark:text-gray-400">SVG, PNG, JPG ou GIF (MAX. 800x400px)</p>
						</div>
						<Input id="dropzone-file" accept="image/*" type="file" className="hidden" multiple onChange={selectImage} ref={fileInputRef} />
					</label>
				}


			</div>

		</DialogContent>
	</Dialog>

}