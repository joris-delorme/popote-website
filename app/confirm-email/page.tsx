import Link from "next/link";
import { RefreshButton } from "./refresh-button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resend } from "@/lib/resend";

export default async function page({ searchParams }: { searchParams: { email: string, name: string } }) {
    const { data, error } = await resend.contacts.create({
        email: searchParams.email,
        firstName: searchParams.name,
        unsubscribed: false,
        audienceId: '74ff7349-2938-4403-9eaf-83eb9e04e6ab'
    })

    console.log(data);


    if (error) {
        console.error(error)
        return (
            <>
                <h1 className="font-serif text-xl font-black mb-2">{searchParams.name}, une erreur s&apos;est produite...</h1>
                <p className="text-sm mb-6">Aïe aïe aïe... Il semble que nous ayons rencontré un problème lors de votre inscription à notre newsletter avec {searchParams.email}.</p>
                <div className=" bg-red-200 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold">{error.name}</p>
                    <p className="text-sm">{error.message}</p>
                </div>
                <RefreshButton />

                <p className="text-muted-foreground text-sm mt-10">
                    Pas de panique, si l&apos;erreur persiste, nous avons déjà été prévenus et nous mettons tout en oeuvre pour que cette erreur disparaisse...
                    <br />
                    <br />
                    En attendant vous pouvez découvrir <Link className="underline" href="/#recipesOfTheWeek">les recettes de la semaines</Link>.
                </p>
            </>
        )
    }

    return (
        <div className="">
            <h1 className="font-serif text-xl font-black mb-2">Super {searchParams.name}, vous êtes enfin inscrit !</h1>
            <p className="mb-6 text-sm text-muted-foreground">Bienvenue dans l’équipe, il y a toi, Hervé mon associé, moi (Joris), et quelques autres personnes qui :</p>

            <ol className="list-disc text-sm list-inside gap-2 grid text-muted-foreground">
                <li>Veulent faire des gâteaux au yaourt sans avoir de yaourts </li>
                <li>Veulent cuisiner sans avoir un téléphone plus sale que leur planche à découper</li>
                <li>Savent pas quoi manger (un vrai problème ça d’ailleurs)</li>
                <li>Et pleins d&apos;autres trucs autour de la cuisine !</li>
            </ol>
            <br />
            <p className="font-medium text-center">C&apos;est pour vous et toutes ces personnes que j&apos;ai créé Popote.</p>
            <Link className={cn(buttonVariants({size: "lg"}), "w-full mt-6")} href={"/"}>En découvrir plus</Link>
        </div>
    )
}