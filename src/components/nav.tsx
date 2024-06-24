import {Link} from "react-router-dom";

export default function Nav() {

	return (
		<div className="ml-4 flex items-center justify-between gap-x-5">
			<Link to="insurance" className="text-sm italic font-medium text-foreground/80 hover:text-foreground dark:text-white/80">Assurances</Link>
			<Link to="nomenclatures" className="text-sm italic font-medium text-foreground/80 hover:text-foreground dark:text-white/80">Nomenclature générale des actes</Link>
		</div>
	);
}