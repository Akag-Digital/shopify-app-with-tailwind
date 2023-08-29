"use client"
import { useCallback, useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { useGlobal } from "../../hooks/useGlobal";
import Link from "next/link";
import Menu from "../menu";

export default function Header() {
    const path = usePathname()
    const { resolvedTheme, setTheme } = useGlobal();
    const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
    const [mounted, setMounted] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleUserWantToggleTheme = useCallback(() => {
        setTheme(otherTheme)
    }, [otherTheme])

    return (
        <header className="pointer-events-none relative z-10 flex flex-none flex-col">

        </header>
    )
}