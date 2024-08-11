import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex items-center">
            <ul className="flex gap-4">
                <li><Link href="/">Over The Board </Link></li>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </div>
    );
}