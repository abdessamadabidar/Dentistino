import { Input } from "@/components/ui/input.tsx"
import {cn} from "@/lib/utils.ts";
import { LucideSearch } from "lucide-react";

interface SearchProps {
	placeholder?: string,
	value?: string | number,
	onChange: (query: string) => void,
	className?: string
}

function Search({placeholder, value, onChange, className} : SearchProps) {
	return (
		<div className="relative">
			<LucideSearch className="size-4 absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
			<Input
				type="search"
				placeholder={placeholder}
				value={value}
				className={cn("", className)}
				onChange={(event) => onChange(event.target.value)}
			/>
		</div>
	)
}

export default Search