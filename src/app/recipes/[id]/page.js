"use client";

import RecipeTiles from "@/components/recipe-tiles";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowBigLeftDashIcon, ArrowRightIcon, CornerDownRightIcon, StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

async function fetchRecipeDetails(id) {
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

export default async function RecipeDetails({ params }) {
    const router = useRouter();
    const recipe = await fetchRecipeDetails(params.id);

    return (
        recipe &&
        <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-4">
                    <div className="w-full aspect-square relative group">
                        <img className="h-fit object-cover rounded-lg" src={recipe.image} alt={recipe.name} />
                        <div className="text-slate-50 p-6 rounded-lg absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button size="icon" className="bg-slate-100 hover:bg-slate-200 rounded-full" title="Back" onClick={() => router.back()}>
                                <ArrowBigLeftDashIcon className="fill-slate-800 stroke-slate-800" />
                            </Button>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-3 px-4 text-xs font-semibold italic rounded-lg">
                        <span className="text-muted-foreground">Tags: </span>
                        {recipe.tags.join(", ")}
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4">
                    <div className="p-6 bg-slate-200 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h2 className="text-2xl font-bold mb-1">{recipe.name}</h2>
                                <p className="text-md font-semibold relative top-0.5 mb-2 text-muted-foreground">{recipe.cuisine} - {recipe.mealType.join(" / ")}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <StarIcon className="fill-amber-400 stroke-amber-300 h-4.5" />
                                    <p className="text-[18px] font-semibold relative top-0.5">{recipe.rating}</p>
                                </div>
                                <span className="text-xs font-semibold text-muted-foreground">({recipe.reviewCount} Reviews)</span>
                            </div>
                        </div>
                    </div>

                    <RecipeTiles recipe={recipe} />

                    <div className="p-6 bg-slate-100 h-full rounded-lg">
                        <h3 className="text-lg font-semibold relative top-0.5">Ingredients</h3>
                        <Separator className="w-12 h-1 bg-gray-300 my-4 mb-6" />
                        {
                            recipe.ingredients &&
                            <div className={`${recipe.ingredients.length > 7 ? "columns-2" : "columns-1"} space-y-3 max-h-[400px] overflow-y-auto`}>
                                {
                                    recipe.ingredients.map((ingredient, i) => (
                                        <div key={i} className="flex items-center gap-2 mb-3 ml-2">
                                            <div className="w-6">
                                                <ArrowRightIcon size={14} className="text-blue-500" />
                                            </div>
                                            <span className="text-sm">{ingredient}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="p-6 bg-slate-100 rounded-lg">
                <h3 className="text-lg font-semibold relative top-0.5">Instructions</h3>
                <Separator className="w-12 h-1 bg-gray-300 my-4 mb-6" />
                {
                    recipe.instructions &&
                    recipe.instructions.map((instruction, i) => (
                        <div key={i} className="flex items-center gap-2 mb-3 ml-2">
                            <div className="w-6">
                                <CornerDownRightIcon size={14} className="text-blue-500" />
                            </div>
                            <span className="text-sm">{instruction}</span>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}
