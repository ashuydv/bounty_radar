"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import './page.module.css'
import { NextUIProvider } from '@nextui-org/react'
import { AnimatePresence, motion, Spring } from "framer-motion";
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "deepskyblue";


  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <Toaster />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div>
              <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  width: "100vw",
                  zIndex: 1000,
                  bottom: 0,
                }}
                transition={transitionSpringPhysics}
                animate={{ height: "0vh" }}
                exit={{ height: "100vh" }}
              />

              <motion.div
                style={{
                  backgroundColor: transitionColor,
                  position: "fixed",
                  width: "100vw",
                  zIndex: 1000,
                  top: 0,
                }}
                transition={transitionSpringPhysics}
                initial={{ height: "100vh" }}
                animate={{ height: "0vh", transition: { delay: 0.2 } }}
              />
              <Header />
              <main className='main w-5/6 mx-auto'>
                {children}
              </main>
              <Footer />
            </motion.div>
          </AnimatePresence>
        </NextUIProvider>
      </body>
    </html>
  )
}
