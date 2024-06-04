import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Image from "next/image";

export default function Home() {

    return (
        <header className="min-h-[100svh] relative w-full overflow-hidden flex flex-col gap-4 items-center justify-center">
            <MaxWidthWrapper className="flex justify-center pt-[175px] lg:flex-row flex-col sm:gap-[60px] gap-16 relative z-[3] pb-10">
                <div className="w-full sm:flex-1 flex flex-col gap-8">
                    <h1 className="font-bold lg:text-left sm:text-4xl md:text-6xl text-center text-balance text-[26px] md:leading-[1.1] lg:leading-[1.1] sm:leading-[1.1]">Popote vous crée des recettes sur mesure grâce à la science et l&apos;IA.</h1>
                    <Link href="https://apps.apple.com/fr/app/popote/id6478100865" target="_blank" className={cn(buttonVariants(), "w-full max-w-[350px] items-center lg:mx-0 gap-2 mx-auto font-semibold rounded-2xl h-12 text-lg")}>Dispo sur l&apos;App Store <Icons.apple className="h-5 w-5 -mt-[2px]" /></Link>
                </div>
                <Image src="/assets/hero.png" alt="Hero" width={800} height={800} quality={100} className="object-cover sm:max-w-[500px] max-w-[400px] sm:flex-1 w-full will-change-transform drop-shadow-[0_10px_50px_rgba(0,0,0,1)]" />
            </MaxWidthWrapper>
            <div className="rotate-45 pointer-events-none absolute sm:top-[-97px] sm:right-[-432px] sm:h-[648px] sm:w-[1305px] top-[-47px] right-[-189px] h-[249px] w-[516px] z-20">
                <div
                    style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 11.872%, rgba(0, 0, 0, 0.1) 22.496%, rgba(0, 0, 0, 0.22) 32.184%, rgba(0, 0, 0, 0.35) 41.248%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.65) 58.752%, rgba(0, 0, 0, 0.78) 67.816%, rgba(0, 0, 0, 0.9) 77.504%, rgba(0, 0, 0, 0.97) 88.128%, rgb(0, 0, 0) 100%)" }}
                    className="w-full h-full"
                />
            </div>

            <div
                style={{ background: "linear-gradient(rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)" }}
                className="z-[2] inset-[64px_0px_1535px] sm:h-[600px] h-[238px] absolute pointer-events-none"
            />

            <div className="opacity-[0.06] absolute pointer-events-none inset-0 z-[1]">
                <div className="inset-0 absolute">
                    <div
                        style={{ backgroundImage: "url(/assets/noise.png)" }}
                        className="w-full h-full bg-repeat bg-size bg-[length:100px]"
                    ></div>
                </div>
            </div>

            <div
                style={{ background: "radial-gradient(211.5% 113.1% at -66.4% 35.9%, #000000 39.13195153221485%, rgb(0, 0, 0) 51.424349881796694%, rgb(102, 0, 255)  67.59505338573997%, rgb(153, 0, 255) 84.18320664414415%)" }}
                className="inset-[70px_0px_0px] absolute pointer-events-none"
            />
        </header>
    );
}
