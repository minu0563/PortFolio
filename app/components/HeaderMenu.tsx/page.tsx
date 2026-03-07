"use client"

import { useState } from "react"
import Link from "next/link"
import ColorChange from "../animation/ColorChange"
import AnimatedSection from "../animation/AnimatedSection"

export default function HeaderMenu() {
    const [open, setOpen] = useState(false)

    return (
        <header className="flex justify-between items-center border-b border-gray-700 py-2 px-8 relative">
            <Link href='/' className="text-2xl ml-5 sm:ml-21 lg:ml-45">
                <h1 className="cursor-pointer font-bold">
                    <ColorChange className="maintext" delay={0}>CoCoNuT</ColorChange>
                </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex mr-30 gap-20">
                <Link href='/websitepage'>
                    <h4><ColorChange className="texthovercolor" delay={500}>website</ColorChange></h4>
                </Link>
                <Link href='/extensionpage'>
                    <h4><ColorChange className="texthovercolor" delay={1000}>extensions</ColorChange></h4>
                </Link>
                <Link href='/newspage'>
                    <h4><ColorChange className="texthovercolor" delay={1500}>news</ColorChange></h4>
                </Link>
                <Link href='/aboutpage'>
                    <h4><ColorChange className="texthovercolor" delay={2000}>about</ColorChange></h4>
                </Link>
            </div>

            {/* Hamburger Button */}
            <button
                className="lg:hidden text-3xl"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-full right-8 mt-3 border border-gray-700 rounded-lg shadow-lg flex flex-row sm:flex-col items-center gap-4 px-4 py-3 lg:hidden z-50">
                    <AnimatedSection delay={100} anitype={1}>
                        <Link href='/websitepage' onClick={() => setOpen(false)}>website</Link>
                    </AnimatedSection>

                    <AnimatedSection delay={200} anitype={1}>
                        <Link href='/extensionpage' onClick={() => setOpen(false)}>extensions</Link>
                    </AnimatedSection>

                    <AnimatedSection delay={300} anitype={1}>
                        <Link href='/newspage' onClick={() => setOpen(false)}>news</Link>
                    </AnimatedSection>

                    <AnimatedSection delay={400} anitype={1}>
                        <Link href='/aboutpage' onClick={() => setOpen(false)}>about</Link>
                    </AnimatedSection>
                </div>
            )}

        </header>
    )
}