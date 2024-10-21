import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChefHatIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-3">
			<ChefHatIcon className="text-red-400 mb-2 fill-red-100" />
			<span className="text-xs font-extrabold text-slate-700">WELCOME TO</span>
			<h1 className="text-3xl font-bold text-red-400">RECIPE STORE</h1>
			<Separator className="h-1 w-16 my-2 mb-3" />
			<Link href={'/recipes'}>
				<Button>Explore Recipes</Button>
			</Link>
		</div>
	);
}
