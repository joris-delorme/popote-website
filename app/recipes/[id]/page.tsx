import { FigmaSquircle } from "@/components/ui/figma-squircle"
import { Separator } from "@/components/ui/separator"
import { getRecipe, getRecipeMetadata, getUserRecipe } from "@/lib/supabase/actions/getRecipe"
import { formatDate } from "@/utils/format-date"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { notFound, redirect } from "next/navigation"

export async function generateMetadata(
    { params }: { params: { id: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const { data: recipe, error } = await getRecipeMetadata(params.id)

    const newParent = await parent

    if (error) return {
        title: newParent.title,
        description: newParent.description,
        openGraph: {
            images: newParent.openGraph?.images || []
        }
    }

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: recipe.title,
        description: recipe.caption,
        openGraph: {
            images: [recipe.image_url, ...previousImages],
        },
    }
}

export default async function page({ params }: { params: { id: string } }) {

    const { data: recipe, error } = await getRecipe(params.id)

    if (error) {
        if (["PGRST116", "22P02"].includes(error.code)) {
            return notFound()
        }
        console.log(error)
        //toast.error("Erreur lors de la récupération de la recette.")
        return redirect("/recipes")
    }

    const { data: author } = await getUserRecipe(recipe.user_id)

    return (
        <>
            <div className="mb-4 gap-2 flex">
                <Image className="rounded-full" src={recipe.image_url} alt={recipe.title} width={50} height={50} />
                <div className="">
                    <p className="font-semibold">{author?.username || "Joris Delorme"}</p>
                    <p className="text-sm text-muted-foreground">{formatDate(new Date(recipe.created_at))}</p>
                </div>
            </div>
            <FigmaSquircle>
                <Image className="object-cover w-full h-[400px] mb-4" src={recipe.image_url} alt={recipe.title} width={400} height={400} />
            </FigmaSquircle>
            <div className="sm:text-lg text-base">
                <h1 className="font-black font-serif text-5xl">{recipe.title}</h1>
                <p className="text-muted-foreground mt-2 mb-10">{recipe.caption}</p>

                <div className="">
                    {
                        recipe.ingredients.map((ingredient, index) => (
                            <div key={index} className="grid gap-2">
                                <h3 className="font-semibold">{ingredient.name}</h3>
                                <p className="text-muted-foreground">{ingredient.quantity}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="grid gap-10">
                    {
                        recipe.steps.map((step, index) => (
                            <div key={index} className="grid gap-2">
                                <p className="font-bold text-xl">Étape {index + 1}</p>
                                <Separator />
                                <h3 className="font-black text-2xl font-serif">{step.name}</h3>
                                <p className="text-muted-foreground">{step.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}