import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { FigmaSquircle } from "@/components/ui/figma-squircle";
import { Separator } from "@/components/ui/separator";
import { createSupabaseServerClient } from "@/lib/supabase/server"
import { Tables } from "@/lib/supabase/types";
import { avatarStorageUrl } from "@/utils/constants";
import { getErrorRedirect } from "@/utils/toast";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ShareButton } from "./share-button";
import { Metadata, ResolvingMetadata } from "next";
import { Icons } from "@/components/icons";

export async function generateMetadata(
    { params }: { params: { username: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    const supabase = createSupabaseServerClient()
    const { data: user, error } = await supabase.from('users')
    .select('*')
    .eq('username', params.username)
    .single()

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
        title: user.full_name + " - Blog",
        description: `Blog de cuisine de ${user.full_name}, proposant des recettes faciles et savoureuses.`,
        openGraph: {
            images: [avatarStorageUrl + user.avatar_url],
        },
    }
}

const FullCard = ({ username, recipe }: { username: string, recipe?: Tables<"recipes"> }) => (
    <>
        {recipe && <article className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:gap-8 group mt-20">
                <Link href={`/recettes/${recipe.slug}`} className="col-span-1">
                    <FigmaSquircle className="w-full h-full relative md:aspect-auto aspect-square flex items-center justify-center">
                        <Image src={recipe.image_url} quality={100} alt={username ?? "Avatar"} width={2000} height={1000} className="object-cover w-full h-full scale-100 group-hover:scale-105 duration-500 object-center absolute" />
                    </FigmaSquircle>
                </Link>
                <div className="col-span-1 py-4 lg:py-4 md:py-0 flex flex-col gap-4 underline-offset-4">
                    <Badge variant="secondary" className="w-fit">{(new Date(recipe.created_at)).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
                    <header>
                        <h2 className="text-4xl font-serif font-black">
                            <Link className="group-hover:underline" href={`/recettes/${recipe.slug}`}>{recipe.title}</Link>
                        </h2>
                    </header>
                    <p className="body-regular text-muted-foreground line-clamp-3">{recipe.caption}</p>
                </div>
            </article>}
    </>
)

const Card = ({ username, recipe }: { username: string, recipe: Tables<"recipes"> }) => (
    <article className="flex flex-col gap-4 group">
        <Link href={`/recettes/${recipe.slug}`} className="bg-muted rounded-3xl">
            <FigmaSquircle className="aspect-square">
                <Image src={recipe.image_url} quality={100} alt={recipe.title} width={2000} height={1000} className="object-cover w-full h-full scale-100 group-hover:scale-105 duration-500 object-center" />
            </FigmaSquircle>
        </Link>
        <div className="flex flex-col gap-3">
            <Badge variant="secondary" className="w-fit">{(new Date(recipe.created_at)).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</Badge>
            <header className="w-full">
                <h2 className="text-2xl font-serif line-clamp-2 font-black w-full">
                    <Link className="w-full group-hover:underline block" href={`/recettes/${recipe.slug}`}>{recipe.title}</Link>
                </h2>
            </header>
            <p className="body-regular text-muted-foreground line-clamp-3">{recipe.caption}</p>
        </div>
    </article>
)

export default async function page({ params }: { params: { username: string } }) {

    const supabase = createSupabaseServerClient()

    const { data: user, error } = await supabase.from('users')
        .select('*, recipes(*)')
        .order('created_at', { referencedTable: "recipes", ascending: false })
        .eq('username', params.username)
        .single()

    if (error && error.code === "PGRST116") redirect(getErrorRedirect(`/`, "Aucun utilisateur trouvé.", "Cet utilisateur n'existe pas ou a changé de nom."))
    if (error) redirect(getErrorRedirect(`/`, "Une erreur est survenue.", error.message))
    if (!user.recipes.length) redirect(getErrorRedirect(`/`, "Cet utilisateur n'a pas de blog."))

    return (
        <section className="w-full pb-20">
            <div className="mt-[150px] w-full flex flex-col justify-center relative z-10 items-center">
                <div className="h-[200px] flex items-center justify-center w-[200px] bg-muted border-white border-8 rounded-full overflow-hidden">
                    {user.avatar_url ? <Image src={avatarStorageUrl + user.avatar_url} alt={user.username ?? "Avatar"} width={300} height={300} className="object-cover h-full w-full" />
                    : <Icons.logo2 className="text-muted-foreground h-28 w-28" />}
                </div>
                <div className="text-3xl mt-4 font-black font-serif">{user.full_name}</div>
                <p className="mt-2 text-muted-foreground">@{user.username} • {user.recipes.length + " Recettes"}</p>
                <ShareButton className="mt-4" />
            </div>
            <MaxWidthWrapper className="flex flex-col gap-14">
                <FullCard username={user.username ?? ""} recipe={user.recipes[0]} />
                <div className="grid -mb-4 gap-2 text-sm">
                    <h2 className=" text-muted-foreground uppercase font-bold">Dernières recettes</h2>
                    <Separator />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16">
                    {user.recipes.slice(1, 6).map((recipe, key) => <Card key={key} username={user.username ?? ""} recipe={recipe} />)}
                </div>
                <FullCard username={user.username ?? ""} recipe={user.recipes[6]} />
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16">
                    {user.recipes.slice(7).map((recipe, key) => <Card key={key} username={user.username ?? ""} recipe={recipe} />)}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}
