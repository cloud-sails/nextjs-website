import Link from "next/link"

import { Icons } from "@/icons"

const Brand = () => {
	return (
		<>
			<Link href="/">
				<Icons.notebookPen aria-label="note icon" color="#9333ea"/>
			</Link>
		</>
	)
}

export { Brand }
