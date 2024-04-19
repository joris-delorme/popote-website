'use server'

import { ConfirmEmail } from "@/components/emails/confirmation";
import { randomUUID } from "crypto";
import { Resend } from "resend";


export const sendConfirmEmail = async (email: string, name: string) => {

    if (!email || !name) throw new Error('Email and name are required')

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.contacts.list({
        audienceId: "74ff7349-2938-4403-9eaf-83eb9e04e6ab"
    })

    if (error) throw new Error(error.message)

    console.log(data);

    if (data?.data.find((contact) => contact.email === email)) throw new Error('Cet email est déjà inscrit.')

    return await resend.emails.send({
        from: 'Popote <hello@popote.app>',
        headers: {
            'X-Entity-Ref-ID': randomUUID(),
        },
        to: email,
        subject: `Encore une chose ${name}...`,
        react: <ConfirmEmail name={name} email={email} />
    })
}