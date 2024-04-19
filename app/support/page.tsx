"use client"

import { z } from 'zod'
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Loader } from '@/components/ui/loader'
import { toast } from 'sonner'
import { sendSupportRequest } from './actions'

const formSchema = z.object({
    nom: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
    prenom: z.string().min(3, "Le prénom doit contenir au moins 3 caractères"),
    email: z.string().email("L'adresse email n'est pas valide"),
    message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
})


export default function Page() {

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    const handler = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true)
        await sendSupportRequest(values.nom, values.prenom, values.email, values.message)
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        toast.promise(handler(values).finally(() => {
            setIsLoading(false)
        }), {
            loading: 'Envoi du message...',
            success: 'Message envoyé avec succès, nous vous répondrons dans les plus brefs délais.',
            error: 'Une erreur est survenue lors de l\'envoi du message.'
        })
    }

    return (
        <section className="min-h-[100svh] w-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-black">Support</h1>
            <p className="text-muted-foreground text-center max-w-md mb-10 mt-4">Vous avez une question ou un problème ? Remplissez le formulaire ci-dessous pour nous contacter.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
                    <div className="flex gap-4">
                        <FormField
                            control={form.control}
                            name='nom'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Dupond" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='prenom'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Prénom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Dupont" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="dupond.dupont@exemple.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea className='h-56' placeholder="Votre message..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading} type="submit" className='gap-2'>{isLoading && <Loader />}Envoyer</Button>
                </form>
            </Form>
        </section>
    )
}