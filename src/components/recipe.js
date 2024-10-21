import { StarIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Recipe({ recipe }) {
    return (
        <Card className="hover:scale-105 transition-all">
            <CardContent className="overflow-hidden cursor-pointer p-1">
                <div className="w-full aspect-square relative group">
                    <img className="w-full h-full object-cover rounded-lg" src={recipe.image} alt={recipe.name} />
                    <div className="text-slate-50 drop-shadow-md p-4 rounded-lg absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-start justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-center bg-black bg-opacity-30 p-1 pr-2.5 rounded-sm">
                            <StarIcon className="fill-amber-400 stroke-amber-300 h-3.5" />
                            <span className="text-[12px] font-semibold">{recipe.rating}</span>
                        </div>
                        <h3 className="text-md font-bold text-slate-50 drop-shadow-md w-[90%] overflow-hidden whitespace-nowrap overflow-ellipsis" title={recipe.name}>{recipe.name}</h3>
                        <p className="text-xs">{recipe.cuisine} - {recipe.mealType.join(" / ")}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
