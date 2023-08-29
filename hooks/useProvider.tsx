import React, { ReactNode } from "react";
import { GlobalProvider } from "./useGlobal";

interface Props {
    children: ReactNode;
}

export default function Provider({ children }: Props) {
    return (
        <GlobalProvider>
            {children}
        </GlobalProvider>
    )
}