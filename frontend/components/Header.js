import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <Image src="/logo.svg" alt="Karate Klub Klatovy" width={218} height={30}/>
                </div>
            </div>
        </header>
    )
}