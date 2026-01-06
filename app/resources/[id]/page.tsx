'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const { setUniverse } = useUniverse()
    const [post, setPost] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setUniverse('scale')

        const fetchPost = async () => {
            try {
                const { data, error } = await supabase
                    .from('blogs')
                    .select('*')
                    .eq('id', params.id)
                    .single()

                if (error) throw error
                if (data) setPost(data)
            } catch (error) {
                console.error('Error fetching post:', error)
            } finally {
                setIsLoading(false)
            }
        }

        if (params.id) {
            fetchPost()
        }
    }, [params.id, setUniverse])

    if (isLoading) {
        return (
            <main className="min-h-screen bg-[var(--architectural-white)] flex flex-col">
                <Header />
                <div className="flex-grow flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#39FF14]"></div>
                </div>
                <Footer />
            </main>
        )
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-[var(--architectural-white)] flex flex-col">
                <Header />
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link href="/resources" className="text-[#39FF14] hover:underline font-bold">
                        ← Back to Resources
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[var(--architectural-white)]">
            <Header />

            <article className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    {/* Back Link */}
                    <div className="mb-10">
                        <Link href="/resources" className="inline-flex items-center text-[#666] hover:text-[#39FF14] transition-colors font-mono text-sm font-bold tracking-wider">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                                <path d="M19 12H5"></path>
                                <path d="M12 19l-7-7 7-7"></path>
                            </svg>
                            BACK TO RESOURCES
                        </Link>
                    </div>

                    {/* Header Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="mb-6">
                            <span className="text-[11px] font-mono font-bold text-[#39FF14] uppercase tracking-wider bg-[#39FF14]/10 px-3 py-1 rounded-full">
                                ARTICLE
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#050505] leading-[1.1] mb-8 tracking-tight">
                            {post.title}
                        </h1>
                    </motion.div>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl overflow-hidden mb-16 shadow-lg border border-gray-100 max-w-4xl mx-auto"
                    >
                        <div className="aspect-[21/9] relative bg-gray-50">
                            <img
                                src={post.featured_image}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="prose prose-lg prose-gray max-w-none">
                            <style jsx global>{`
                                .prose p {
                                    margin-bottom: 1.5em;
                                    line-height: 1.8;
                                    font-size: 1.125rem;
                                    color: #333;
                                }
                                .prose h2 {
                                    font-size: 1.875rem;
                                    font-weight: 800;
                                    color: #050505;
                                    margin-top: 2.5em;
                                    margin-bottom: 1em;
                                    letter-spacing: -0.025em;
                                }
                                .prose h3 {
                                    font-size: 1.5rem;
                                    font-weight: 700;
                                    color: #050505;
                                    margin-top: 2em;
                                    margin-bottom: 1em;
                                }
                                .prose strong {
                                    font-weight: 700;
                                    color: #050505;
                                }
                                .prose ul {
                                    list-style-type: disc;
                                    padding-left: 1.5em;
                                    margin-bottom: 1.5em;
                                }
                                .prose li {
                                    margin-bottom: 0.5em;
                                }
                            `}</style>
                            <div className="whitespace-pre-wrap font-serif sm:font-sans">
                                {post.content}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-20 p-8 md:p-12 bg-[#050505] rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#39FF14] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
                                Ready to scale your GTM?
                            </h3>
                            <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                                Stop relying on manual labor and start deploying automated pods today.
                            </p>
                            <Link href="/managed-lead-gen" className="inline-flex items-center justify-center px-8 py-4 bg-[#39FF14] text-[#050505] font-bold rounded-lg hover:bg-white transition-all duration-300 relative z-10">
                                Deploy Your Pod
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </main>
    )
}
