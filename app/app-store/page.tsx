import { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "Popote dans l'App Store"
}

export default function page () { redirect("https://apps.apple.com/fr/app/popote/id6478100865") }