'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function ResourcesPage() {
    const { setUniverse } = useUniverse()

    useEffect(() => {
        setUniverse('scale')
    }, [setUniverse])

    return (
        <main className="min-h-screen bg-[var(--architectural-white)]">
            <Header />

            <section className="pt-32 pb-16 px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="section-title">Resources</h1>
                        <p className="section-subtitle mx-auto">
                            Insights, updates, and knowledge from the Intelous team.
                        </p>
                    </motion.div>

                    <div className="text-center py-20 bg-white rounded-xl border border-[var(--gray-lighter)]">
                        <h3 className="text-xl font-bold text-[var(--obsidian)] mb-2">Coming Soon</h3>
                        <p className="text-[var(--gray-medium)]">We are curating the best resources for you.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
