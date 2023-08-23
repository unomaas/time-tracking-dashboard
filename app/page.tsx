import { ModeToggle } from '@/components/themes/theme-toggle'
import Image from 'next/image'

export default function Home() {

	return (
		<main className="flex flex-col min-h-screen p-24">

			<header className="flex justify-end">
				<ModeToggle />
			</header>

			<div className="flex-grow">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3  gap-5">
					<div className="border-2 border-red-100">1</div>
					<div className="border-2 border-red-100">2</div>
					<div className="border-2 border-red-100">3</div>
					<div className="border-2 border-red-100">4</div>
					<div className="border-2 border-red-100">5</div>
					<div className="border-2 border-red-100">6</div>
					<div className="border-2 border-red-100">7</div>
				</div>
			</div>

		</main>
	); // End return
}; // End Home
