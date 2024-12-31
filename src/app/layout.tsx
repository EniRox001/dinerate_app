import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import RecoilContextProvider from "@/providers/RecoilRootProvider";
import Web3ContextProvider from "@/providers/web3ReactProvider";
import { Toaster } from "@/components/ui/toaster";
import "bootstrap-icons/font/bootstrap-icons.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/components/ui/theme_provider";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'DineRate - Restaurant Rating Platform',
  description: 'Rate and discover restaurants on the blockchain',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <RecoilContextProvider>
            <Web3ContextProvider>
              <NavBar />
              {children}
              <Toaster />
              <ToastContainer
                position="bottom-left"
              />
            </Web3ContextProvider>
          </RecoilContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
