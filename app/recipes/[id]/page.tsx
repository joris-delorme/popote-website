import { getRecipe, getRecipeMetadata } from "@/lib/supabase/actions/getRecipe"
import { Metadata, ResolvingMetadata } from "next"
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
            images: [recipe.low_image_url, ...previousImages],
        },
    }
}

export default async function page({ params }: { params: { id: string } }) {
    const { data: recipe, error } = await getRecipe(params.id)

    if (error) {
        if (["PGRST116", "22P02"].includes(error.code)) {
            return notFound()
        }
        return redirect("/recipes")
    }

    redirect(`/blog/${recipe.user_id}/${params.id}`)
}