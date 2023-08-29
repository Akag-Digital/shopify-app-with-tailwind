"use client"
import { useTheme } from "next-themes";
import React, {
    createContext,
    useContext,
    ReactNode,
    useEffect,
    useCallback
} from "react";

interface GlobalContextData {
    resolvedTheme: string | undefined;
    setTheme: (theme: string) => void;
}

interface Props {
    children: ReactNode;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

export function GlobalProvider({ children }: Props) {
    let { resolvedTheme, setTheme } = useTheme()

    useEffect(() => {
        let media = window.matchMedia('(prefers-color-scheme: dark)')

        function onMediaChange() {
            let systemTheme = media.matches ? 'dark' : 'light'
            if (resolvedTheme === systemTheme) {
                setTheme('system')
            }
        }

        onMediaChange()
        media.addEventListener('change', onMediaChange)

        return () => {
            media.removeEventListener('change', onMediaChange)
        }
    }, [resolvedTheme, setTheme])

    const values = {
        resolvedTheme,
        setTheme
    };

    return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
}

export function useGlobal() {
    const context = useContext(GlobalContext);

    return context;
}