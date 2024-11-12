import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <main>
            <header>
                <Link href="/">Home</Link>
            </header>
            <article>{children}</article>
        </main>
    );
}
