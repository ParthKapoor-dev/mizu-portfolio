import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import ModalProvider from "./modal-provider";
import ToastProvider from "./toast-provider";


export default function Providers({ children } : { children : ReactNode}) {

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <ModalProvider />
            <ToastProvider />
            {children}
        </ThemeProvider>
    )
}