'use server'

import { ConfirmEmail } from "@/components/emails/confirmation";
import { Resend } from "resend";


export const sendConfirmEmail = async (email: string, name: string) => {

    if (!email || !name) {
        throw new Error('Email and name are required');
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    return await resend.emails.send({
        from: 'hello@popote.app',
        to: email,
        subject: `Encore une chose ${name}...`,
        react: <ConfirmEmail name={name} email={email} />
    })
}