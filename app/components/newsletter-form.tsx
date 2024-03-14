"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendConfirmEmail } from "../actions";
import { toast } from "sonner";
import { FormEvent, useState } from "react";
import { Confetti } from "@/components/confetti";
import { Loader } from "@/components/ui/loader";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function NewsletterForm() {

    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [informations, setInformations] = useState({
        email: "",
        name: ""
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSuccess(false)

        try {
            //const { error } = await sendConfirmEmail(informations.email, informations.name)
            //if (error) throw new Error(error.message)
            toast.success('Votre inscription à été prise en compte.', { description: `Un email a été envoyé à ${informations.email}.` })
            setShow(false)
            setSuccess(true)
            setInformations({ email: "", name: "" })
        } catch (error) {
            toast.error('Une erreur est survenue.', { description: (error as Error).message })
        }
        setIsLoading(false)
    }

    return (
        <div className="flex gap-2">
            <Input
                id="email"
                type="email"
                name="email"
                required={true}
                placeholder="perceval38@exemple.com"
                value={informations.email}
                onChange={(e) => setInformations({ ...informations, email: e.target.value })}
            />
            <Dialog open={show} onOpenChange={setShow}>
                <DialogTrigger asChild>
                    <div>
                        <Confetti success={success} />
                        <Button disabled={isLoading} className="gap-2" type="button">{isLoading && <Loader />}Envoyer</Button>
                    </div>
                </DialogTrigger>
                <DialogContent className=" max-w-sm">
                    <form onSubmit={handleSubmit}>
                        <DialogHeader>
                            <DialogTitle className="mb-6">Il ne manque plus que votre prénom</DialogTitle>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                required={true}
                                placeholder="Perceval"
                                value={informations.name}
                                onChange={(e) => setInformations({ ...informations, name: e.target.value })}
                            />
                        </DialogHeader>
                        <DialogFooter className="mt-4">
                            <Button disabled={isLoading} className="gap-2" type="submit">{isLoading && <Loader />}Envoyer</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}