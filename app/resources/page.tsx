'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'

export default function ResourcesPage() {
    const { setUniverse } = useUniverse()
    const [resources, setResources] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setUniverse('scale')

        const fetchResources = async () => {
            try {
                const { data, error } = await supabase
                    .from('blogs')
                    .select('id, title, slug, short_description, featured_image, status')
                    .eq('status', 'published')

                if (error) throw error
                if (data) setResources(data)
            } catch (error) {
                console.error('Error fetching resources:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchResources()
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
                        className="text-center max-w-5xl mx-auto mb-20"
                    >
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 bg-white border border-[#E0E0E0] rounded-full shadow-sm mx-auto">
                            <span className="w-2 h-2 rounded-full bg-[#39FF14]"></span>
                            <span className="text-[12px] font-semibold tracking-[2px] text-[#666] uppercase font-mono">THE RESOURCE CENTER</span>
                        </div>

                        {/* Main Title */}
                        <h1 className="font-black tracking-[-2px] mb-8 leading-[1.1] text-[clamp(28px,6vw,72px)]">
                            <span className="block text-[#050505]">RESOURCES</span>
                            <span className="block text-[#39FF14] whitespace-nowrap">POWER PRODUCTIVITY</span>
                        </h1>

                        {/* Description */}
                        <p className="text-[18px] text-[#666] max-w-[800px] mx-auto leading-[1.7]">
                            Most teams collect resources randomly — scattered links, outdated tools, and generic recommendations that slow real work.
                        </p>
                    </motion.div>

                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#39FF14]"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {resources.map((resource, i) => (
                                <Link href={`/resources/${resource.id}`} key={resource.id} className="block group h-full">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex flex-col h-full bg-white rounded-[24px] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#39FF14]/50 relative isolate"
                                    >
                                        {/* Image Container */}
                                        <div className="aspect-[1.5/1] relative overflow-hidden bg-gray-50">
                                            <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/5 transition-colors duration-500 z-10" />
                                            <img
                                                src={resource.featured_image}
                                                alt={resource.title}
                                                className="object-cover w-full h-full transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 will-change-transform"
                                            />

                                        </div>

                                        {/* Content */}
                                        <div className="p-8 flex flex-col flex-grow relative">
                                            <h3 className="text-2xl font-black text-[#050505] leading-[1.2] mb-4 group-hover:text-[#39FF14] transition-colors duration-300 line-clamp-2">
                                                {resource.title}
                                            </h3>
                                            <p className="text-[#666] text-base leading-relaxed line-clamp-3 mb-8 flex-grow font-medium">
                                                {resource.short_description}
                                            </p>

                                            {/* Bottom Action */}
                                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 group-hover:border-[#39FF14]/20 transition-colors duration-300">
                                                <span className="text-xs font-bold tracking-widest text-[#050505] uppercase group-hover:text-[#39FF14] transition-colors">Read Article</span>
                                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#39FF14] transition-all duration-300 group-hover:scale-110">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
