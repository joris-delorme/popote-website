import { FigmaSquircle } from "@/components/ui/figma-squircle"
import { Separator } from "@/components/ui/separator"
import { getRecipe, getRecipeMetadata, getUserRecipe } from "@/lib/supabase/actions/getRecipe"
import { formatDate } from "@/utils/format-date"
import { UserCircle2 } from "lucide-react"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import { notFound, redirect } from "next/navigation"
import { avatarStorageUrl } from "@/utils/constants"
import { ShareButton } from "../share-button"
import Link from "next/link"

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

export default async function page({ params }: { params: { username: string, id: string } }) {

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

    
}