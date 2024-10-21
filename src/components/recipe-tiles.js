import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Clock4Icon, CookingPotIcon, HandPlatterIcon, UtensilsIcon } from "lucide-react";

export default function RecipeTiles({ recipe }) {
    return (
        <TooltipProvider>
            <div className="grid grid-cols-4 gap-4 cursor-pointer">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg" >
                            <Clock4Icon className="text-red-400" />
                            <span className="text-xs font-semibold text-slate-600">{recipe.prepTimeMinutes} Min's</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Preperation Time</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg">
                            <CookingPotIcon className="text-red-400" />
                            <span className="text-xs font-semibold text-slate-600">{recipe.cookTimeMinutes} Min's</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Cooking Time</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg">
                            <HandPlatterIcon className="text-red-400" />
                            <span className="text-xs font-semibold text-slate-600">{recipe.servings} Heads</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Servings</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg">
                            <UtensilsIcon className="text-red-400" />
                            <span className="text-xs font-semibold text-slate-600">{recipe.difficulty}</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Difficulty</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    )
}
