import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface MenuProps {
    href: string,
    children: ReactNode
}

export default function Menu({ href, children }: MenuProps) {
    let isActive = usePathname() === href

    return (
        <li>
            <Link
                href={href}
                className={`relative block px-3 py-2 transition ${isActive ? 'text-teal-500 dark:text-teal-400' : 'hover:text-teal-500 dark:hover:text-teal-400'}`}
            >
                {children}
                {isActive && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                )}
            </Link>
        </li>
    )
}