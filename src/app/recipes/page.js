"use client";

import Recipe from "@/components/recipe";
import { Button } from "@/components/ui/button";
import { ArrowBigLeftDashIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function fetchRecipes() {
    try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        return data?.recipes;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function Recipes() {
    const router = useRouter();
    const recipes = await fetchRecipes();

    return (
        <>
            <div className="w-full h-1 bg-red-200 absolute top-0"></div>
            <div className="mt-8">
                <div className="max-w-full lg:max-w-6xl md:max-w-4xl mx-auto p-4">
                    <div className="flex items-center gap-3 mb-8">
                        <Button size="icon" className="bg-slate-900 hover:bg-slate-950 rounded-full" title="Back" onClick={() => router.back()}>
                            <ArrowBigLeftDashIcon className="fill-slate-100 stroke-slate-200" />
                        </Button>
                        <h2 className="text-2xl font-bold text-gray-800">Our Recipes</h2>
                    </div>
                    {
                        recipes && recipes.length > 0 ?
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {
                                    recipes.map((recipe, i) => (
                                        <Link key={i} href={`/recipes/${recipe.id}`}>
                                            <Recipe recipe={recipe} />
                                        </Link>
                                    ))
                                }
                            </div> : <div>
                                <p className="">No recipes found!</p>
                            </div>
                    }
                </div>
            </div>
        </>
    );
}
