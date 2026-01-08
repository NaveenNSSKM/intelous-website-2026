'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
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
                // Fetching all columns to ensure we get what we need and avoid column-not-found errors
                const { data, error } = await supabase
                    .from('blogs')
                    .select('*')
                    .eq('status', 'published')

                if (error) {
                    console.error('Supabase error:', error)
                    throw error
                }

                console.log('Fetched resources:', data)
                if (data) setResources(data)
            } catch (error) {
                console.error('Error fetching resources:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchResources()
    }, [setUniverse])

    const [searchQuery, setSearchQuery] = useState('')

    // Mock Categories for the UI as per the design reference
    const categories = ['All', 'Development', 'Security', 'AI & ML', 'Gadgets']

    const filteredResources = resources.filter(resource => {
        const title = resource.title ? resource.title.toLowerCase() : ''
        const query = searchQuery.toLowerCase()
        return title.includes(query)
    })

    return (
        <main className="min-h-screen bg-[#020617] text-white selection:bg-[#39FF14] selection:text-black">
            <Header />

            {/* Main Content Area */}
            <div className="pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto max-w-7xl">

                    <div className="bg-[#0f172a] rounded-3xl border border-slate-800 mb-16 relative overflow-hidden group">
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            {/* Content Side (Left) */}
                            <div className="flex flex-col justify-center order-2 lg:order-1 p-8 md:p-12">


                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                    The Future of Intelligence: Why It Matters Now
                                </h2>

                                <p className="text-slate-400 text-lg leading-relaxed mb-8 line-clamp-3">
                                    Quantum mechanics is poised to revolutionize how we process data. Explore the implications for security, AI, and beyond in this deep dive into the next generation of computing.
                                </p>

                                <button className="group/btn inline-flex items-center gap-2 bg-[#39FF14] text-black font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-[#39FF14]/20 self-start">
                                    <span>Read Featured Story</span>
                                    <svg className="transition-transform duration-300 ease-in-out group-hover/btn:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Image Side (Right) */}
                            <div className="relative h-full min-h-[300px] w-full bg-slate-900 order-1 lg:order-2">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent z-10" />
                                <img
                                    src="/hero-res.jpg"
                                    alt="Featured Story"
                                    className="w-full h-full object-cover transition-transform duration-700"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Filters Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat, i) => (
                                <button
                                    key={cat}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${i === 0
                                        ? 'bg-[#39FF14] text-black border-[#39FF14]'
                                        : 'bg-[#0f172a] text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full max-w-[300px] group">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-slate-500 group-hover:text-[#39FF14] group-focus-within:text-[#39FF14] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="block w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b-2 border-slate-800 text-slate-300 placeholder-slate-600 focus:outline-none focus:ring-0 rounded-none sm:text-sm peer font-sans"
                            />
                            {/* Animated Underline */}
                            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-[#39FF14] transition-all duration-300 ease-out -translate-x-1/2 group-hover:w-full peer-focus:w-full" />
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center py-40">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#39FF14]"></div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredResources.map((resource, i) => (
                                    <motion.div
                                        key={resource.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                    >
                                        <Link href={`/resources/${resource.id}`} className="flex flex-col h-full bg-[#0f172a] border border-slate-800 rounded-[2rem] overflow-hidden hover:border-[#39FF14]/50 hover:shadow-2xl hover:shadow-[#39FF14]/5 transition-all duration-300 group">

                                            {/* Card Image */}
                                            <div className="aspect-[1.2/1] relative overflow-hidden bg-slate-900 border-b border-slate-800">
                                                <div className="absolute inset-0 bg-[#020617]/0 group-hover:bg-[#020617]/20 transition-colors z-10" />
                                                <img
                                                    src={resource.featured_image}
                                                    alt={resource.title}
                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                />

                                            </div>

                                            {/* Card Content */}
                                            <div className="p-8 flex flex-col flex-grow">


                                                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#39FF14] transition-colors line-clamp-2">
                                                    {resource.title}
                                                </h3>

                                                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                                                    {resource.short_description}
                                                </p>

                                                <div className="mt-auto flex items-center gap-4 pt-4">
                                                    <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center text-black transform transition-transform duration-300 group-hover:scale-110">
                                                        <svg className="transition-transform duration-300 group-hover:rotate-45" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M7 17L17 7"></path>
                                                            <path d="M7 7h10v10"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="text-white font-bold text-sm tracking-wide group-hover:text-[#39FF14] transition-colors">
                                                        Read full article
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Load More Button */}
                            <div className="flex justify-center mt-20">
                                <button className="flex items-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold py-3 px-8 rounded-xl border border-slate-800 hover:border-slate-700 transition-all">
                                    Load More Articles
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    )
}
