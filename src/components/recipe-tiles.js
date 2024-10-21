import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Clock4Icon, CookingPotIcon, HandPlatterIcon, UtensilsIcon } from "lucide-react";

export default function RecipeTiles({ recipe }) {
    return (
        <TooltipProvider>
            <div className="grid grid-cols-4 gap-4 cursor-pointer">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg" >
                            <Clock4Icon />
                            <span className="text-xs font-semibold">{recipe.prepTimeMinutes} Min's</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Preperation Time</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg">
                            <CookingPotIcon />
                            <span className="text-xs font-semibold">{recipe.cookTimeMinutes} Min's</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Cooking Time</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg">
                            <HandPlatterIcon />
                            <span className="text-xs font-semibold">{recipe.servings} Heads</span>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Servings</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="flex flex-col gap-3 items-center justify-center p-5 bg-slate-100 rounded-lg">
                            <UtensilsIcon />
                            <span className="text-xs font-semibold">{recipe.difficulty}</span>
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
