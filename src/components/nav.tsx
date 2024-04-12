import {Link} from "react-router-dom";

export default function Nav() {

	return (
		<div className="ml-4 flex items-center justify-between gap-x-3">
			<Link to="#" className="text-sm dark:text-white/80">Assurances</Link>
		</div>
	);
}