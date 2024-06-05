import { ShareButton } from "@/app/blog/[username]/share-button"
import { FigmaSquircle } from "@/components/ui/figma-squircle"
import { Separator } from "@/components/ui/separator"
import { getRecipe, getRecipeMetadata } from "@/lib/supabase/actions/getRecipe"
import { avatarStorageUrl } from "@/utils/constants"
import { formatDate } from "@/utils/format-date"
import { UserCircle2 } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const { data: recipe, error } = await getRecipeMetadata(params.slug)

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
            images: [recipe.low_image_url, ...previousImages],
        },
    }
}

export default async function page({ params }: { params: { slug: string } }) {
    const { data: recipe, error } = await getRecipe(params.slug)

    if (error) {
        if (["PGRST116", "22P02"].includes(error.code)) {
            return notFound()
        }
        return redirect("/recettes")
    }

    return (
        <>
            <Link href={`/blog/${recipe.users.username}`} className="mb-4 gap-2 flex items-center">
                <div className="h-[50px] w-[50px]">
                    {recipe.users?.avatar_url ? <Image className="rounded-full object-cover h-full w-full" src={avatarStorageUrl + recipe.users.avatar_url} alt={recipe.title} width={50} height={50} /> : <UserCircle2 className="text-muted-foreground w-[50px] h-[50px]" />}
                </div>
                <div className="">
                    <p className="font-semibold" itemProp="author">{recipe.users?.username || "Joris Delorme"}</p>
                    <p className="text-sm text-muted-foreground" itemProp="datePublished">{formatDate(new Date(recipe.created_at))}</p>
                </div>
            </Link>
            <FigmaSquircle>
                <Image className="object-cover w-full h-[400px] mb-4" src={recipe.image_url} alt={recipe.title} width={400} height={400} itemProp="image" />
            </FigmaSquircle>
            <div className="sm:text-lg text-base">
                <h1 className="font-black font-serif text-5xl" itemProp="name">{recipe.title}</h1>
                <p className="text-muted-foreground mt-2 mb-10" itemProp="description">{recipe.caption}</p>
                <h2 className="font-black text-5xl font-serif mt-20 mb-10">Ingrédients</h2>
                <fieldset className="space-y-3">
                    {
                        recipe.ingredients.map((ingredient, key) => (
                            <label key={key} className="peer grid grid-cols-[auto_1fr] items-center gap-3 rounded-md hover:bg-slate-100" itemProp="recipeIngredient">
                                <input type="checkbox" className="peer size-3.5 appearance-none rounded-sm border border-slate-300 accent-black checked:appearance-auto" />
                                <p className="flex gap-4 justify-between peer-checked:opacity-20 peer-checked:line-through">
                                    <span className="">{ingredient.name[0].toUpperCase() + ingredient.name.slice(1)}</span>
                                    <span className="text-muted-foreground">{ingredient.quantity} {ingredient.unit.replace("cuillère à café", "c.à.c")}</span>
                                </p>
                            </label>
                        ))
                    }
                </fieldset>

                <h2 className="font-black text-5xl font-serif mt-20 mb-10">Étapes</h2>
                <div className="grid gap-10" itemProp="recipeInstructions">
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
                <div className="w-full flex justify-center">
                    <ShareButton className="mt-20" text="la recette" />
                </div>
            </div>
        </>
    )
}