import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from "@react-email/components"
import * as React from "react"

export const ConfirmEmail = ({ name, email }: { name: string, email: string }) => (
    <Html>
        <Head>
            <title>Confirmé votre inscription</title>
        </Head>
        <Preview>Enchanté {name}, je suis super content que tu nous rejoignes dans l’aventure Popote !</Preview>
        <Tailwind>
            <Body className="font-sans text-black bg-white">
                <Container className="mx-auto px-4">
                    <Section className=" max-w-md">
                        <Img
                            src={`https://www.popote.app/android-chrome-192x192.png`}
                            width="64"
                            height="64"
                            alt="Vercel"
                            className="mt-16 mb-10"
                        />
                        <Heading className="font-black">Une dernière chose...</Heading>
                        <Text className="text-zinc-500">
                            Enchanté {name}, je suis super content que tu nous rejoignes dans l’aventure Popote !
                            <br />
                            S’il te plaît une dernière chose avant qu’on puisse redécouvrir le goût des gâteaux au chocolat un peux trop cuit des week-end pluvieux.
                        </Text>
                        <Button
                            href={`https://dev-popote-website.vercel.app/confirm-email?email=${email}&name=${name}`}
                            className="bg-[#B125FF] text-center text-white font-semibold py-4 px-5 rounded-xl w-52 mt-4 text-sm hover:bg-[#B125FF]/80 transition-all"
                        >
                            Confirmer votre inscription
                        </Button>
                        <Text className="text-zinc-500 mt-10">
                            De la par de {" "}
                            <Link href="https://jorisdelorme.fr" className="text-zinc-500 underline">
                                Joris
                            </Link>
                            , fondateur de Popote.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
)