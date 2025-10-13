import Link from "next/link";
import TextLogo from "../components/icons/logo";



export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header className="flex justify-between items-center h-16 px-8 relative top-2">
                <TextLogo />
                <p className="text-muted-foreground">Beta v1</p>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
}
