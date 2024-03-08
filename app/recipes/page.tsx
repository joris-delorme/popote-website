import { FigmaSquircle } from "@/components/ui/figma-squircle"
import { getRecipes } from "@/lib/supabase/actions/getRecipe"
import { RecipeUser } from "@/lib/supabase/custom-types"
import { formatDate } from "@/utils/format-date"
import { UserCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
    title: "Recettes",
}

const RecipeCard = ({ recipe }: { recipe: RecipeUser }) => (
    <Link href={`/recipes/${recipe.id}`} className="hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-105 hover:z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] transition-all duration-500 w-[305px] h-[480px]">
        <FigmaSquircle className="bg-background w-full h-full p-6">
            {recipe.user && <div className="mb-4 gap-2 flex items-center">
                {recipe.user.avatar_url ? <Image className="rounded-full" src={recipe.user.avatar_url} alt={recipe.title} width={35} height={35} /> : <UserCircle2  className="text-muted-foreground h-8 w-8" />}
                <div className="">
                    <p className="font-semibold text-sm">{recipe.user.username || "Joris Delorme"}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(new Date(recipe.created_at))}</p>
                </div>
            </div>}
            <FigmaSquircle>
                <Image className="object-cover w-full h-full mb-4" src={recipe.image_url} alt={recipe.title} width={400} height={400} />
            </FigmaSquircle>
            <h2 className=" font-serif text-xl font-black">{recipe.title}</h2>
            <p className="text-sm text-muted-foreground line-clamp-3">{recipe.caption}</p>
        </FigmaSquircle>
    </Link>
)

export default async function page() {

    const { data: recipes, error } = await getRecipes(1)

    if (error) {
        console.log(error)
        //toast.error("Erreur lors de la récupération des recettes.")
    }

    return (
        <div className="flex max-w-6xl mx-auto flex-wrap gap-4 py-[100px] items-center justify-center">
            {recipes?.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    )
}