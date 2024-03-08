import { FigmaSquircle } from "@/components/ui/figma-squircle"
import { getRecipes } from "@/lib/supabase/actions/getRecipe"
import { Tables } from "@/lib/supabase/types"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Recettes",
}

const RecipeCard = ({ recipe }: { recipe: Tables<"recipes"> }) => (
    <Link href={`/recipes/${recipe.id}`} className="hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-105 hover:z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] transition-all duration-500 w-[305px] h-[420px]">
        <FigmaSquircle className="bg-background w-full h-full p-6">
        <FigmaSquircle>
                    <Image className="object-cover w-full h-full mb-4" src={recipe.image_url} alt={recipe.title} width={400} height={400} />
                </FigmaSquircle>
                <h2 className=" font-serif text-xl font-black">{recipe.title}</h2>
                <p className="text-sm text-muted-foreground line-clamp-3">{recipe.caption}</p>
        </FigmaSquircle>
    </Link>
)

export default async function page() {
    
    const { data: recipes } = await getRecipes(1)
    
    return (
        <div className="flex max-w-6xl mx-auto flex-wrap gap-4 py-[100px] items-center justify-center">
            {recipes?.map((recipe) => <RecipeCard recipe={recipe} />)}
        </div>
    )
}