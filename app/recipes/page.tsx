import { FigmaSquircle } from "@/components/ui/figma-squircle"
import { getRecipes } from "@/lib/supabase/actions/getRecipe"
import { RecipeUser } from "@/lib/supabase/custom-types"
import { formatDate } from "@/utils/format-date"
import { UserCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { avatarStorageUrl } from "@/utils/constants"
import { Badge } from "@/components/ui/badge"
import { Tables } from "@/lib/supabase/types"
import MaxWidthWrapper from "@/components/max-width-wrapper"

export const metadata = {
    title: "Recettes",
}

const RecipeCard = ({ recipe }: { recipe: RecipeUser }) => (
    <Link href={`/blog/${recipe.user?.username}/${recipe.id}`} className="hover:drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:scale-105 hover:z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] transition-all duration-500 w-[305px] h-[480px]">
        <FigmaSquircle className="bg-background w-full h-full p-6">
            {recipe.user && <div className="mb-4 gap-2 flex items-center">
                <div className="h-[35px] w-[35px]">
                    {recipe.user.avatar_url ? <Image className="rounded-full w-full h-full object-cover" src={avatarStorageUrl + recipe.user.avatar_url} alt={recipe.title} width={35} height={35} /> : <UserCircle2 className="text-muted-foreground h-8 w-8" />}
                </div>
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

const Card = ({ recipe }: { recipe: RecipeUser }) => (
    <article className="flex flex-col gap-4 group">
        {recipe.user && <div className="gap-2 flex items-center">
            <div className="h-[35px] w-[35px]">
                {recipe.user.avatar_url ? <Image className="rounded-full w-full h-full object-cover" src={avatarStorageUrl + recipe.user.avatar_url} alt={recipe.title} width={35} height={35} /> : <UserCircle2 className="text-muted-foreground h-8 w-8" />}
            </div>
            <div className="">
                <p className="font-semibold text-sm">{recipe.user.username || "Joris Delorme"}</p>
                <p className="text-xs text-muted-foreground">{formatDate(new Date(recipe.created_at))}</p>
            </div>
        </div>}
        <Link href={`/blog/${recipe.user?.username}/${recipe.id}`} className="bg-muted rounded-3xl">
            <FigmaSquircle className="aspect-square">
                <Image src={recipe.low_image_url != "" ? recipe.low_image_url ?? recipe.image_url : recipe.image_url} quality={100} alt={recipe.title} width={2000} height={1000} className="object-cover w-full h-full scale-100 group-hover:scale-105 duration-500 object-center" />
            </FigmaSquircle>
        </Link>
        <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit">{(new Date(recipe.created_at)).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
            <header className="w-full">
                <h2 className="text-2xl font-serif font-black line-clamp-2 w-full">
                    <Link className="w-full group-hover:underline block" href={`/blog/${recipe.user?.username}/${recipe.id}`}>{recipe.title}</Link>
                </h2>
            </header>
            <p className="body-regular text-muted-foreground line-clamp-3">{recipe.caption}</p>
        </div>
    </article>
)


export default async function page() {

    const { data: recipes, error } = await getRecipes(1)

    if (error) {
        console.log(error)
        //toast.error("Erreur lors de la récupération des recettes.")
    }

    return (
        <MaxWidthWrapper className="mt-60 mb-20">
            <div className=""></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16">
                {recipes?.map((recipe) => <Card key={recipe.id} recipe={recipe} />)}
            </div>
        </MaxWidthWrapper>
    )
}