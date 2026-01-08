'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useUniverse } from '@/context/UniverseContext'
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
            <main className="min-h-screen bg-[#FAFAFA] flex flex-col">
                <Header />
                <div className="flex-grow flex justify-center items-center">
                    <div className="w-8 h-8 border-2 border-[#FF007F] border-t-transparent rounded-full animate-spin"></div>
                </div>
            </main>
        )
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-[#FAFAFA] flex flex-col text-slate-900">
                <Header />
                <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
                    <Link href="/resources" className="text-[#FF007F] hover:text-[#e00070] transition-colors">
                        ← Back to Resources
                    </Link>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-[#FF007F] selection:text-white">
            <Header />

            <div className="pt-24 pb-20">
                <article className="container mx-auto px-6 max-w-7xl">

                    {/* Breadcrumbs */}
                    <div className="flex items-center space-x-2 text-sm text-slate-500 mb-8 font-medium">
                        <Link href="/" className="hover:text-[#FF007F] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/resources" className="hover:text-[#FF007F] transition-colors">Resources</Link>
                        <span>/</span>
                        <span className="text-slate-900 truncate max-w-[200px]">{post.title}</span>
                    </div>

                    {/* Header Content */}
                    <div className="max-w-4xl mb-12">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#050505] leading-tight mb-6 tracking-tight">
                            {post.title}
                        </h1>

                        {post.short_description && (
                            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                                {post.short_description}
                            </p>
                        )}
                    </div>

                    {/* Featured Image */}
                    <div className="w-full relative aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-slate-200 bg-slate-100 shadow-sm">
                        <img
                            src={post.featured_image}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Content Column */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-lg max-w-none">
                                <style jsx global>{`
                                    .prose {
                                        color: #334155; /* slate-700 */
                                    }
                                    .prose h2, .prose h3, .prose h4 {
                                        color: #0f172a; /* slate-900 */
                                        scroll-margin-top: 100px;
                                    }
                                    .prose h2 {
                                        font-size: 1.75rem;
                                        font-weight: 800;
                                        margin-top: 2.5em;
                                        margin-bottom: 0.75em;
                                        position: relative;
                                        padding-left: 0;
                                    }
                                    .prose h2::before {
                                        content: "";
                                        position: absolute;
                                        left: -1.5rem;
                                        top: 0.25em;
                                        bottom: 0.25em;
                                        width: 4px;
                                        background: #FF007F;
                                        border-radius: 2px;
                                        opacity: 0;
                                    }
                                    @media (min-width: 1024px) {
                                        .prose h2::before {
                                            opacity: 1;
                                        }
                                    }
                                    .prose p {
                                        margin-bottom: 1.75em;
                                        line-height: 1.8;
                                    }
                                    .prose a {
                                        color: #FF007F;
                                        text-decoration: none;
                                        border-bottom: 1px solid rgba(255, 0, 127, 0.3);
                                        transition: all 0.2s;
                                    }
                                    .prose a:hover {
                                        border-color: #FF007F;
                                    }
                                    .prose code {
                                        color: #0f172a;
                                        background: #f1f5f9;
                                        padding: 0.2em 0.4em;
                                        border-radius: 4px;
                                        font-size: 0.875em;
                                        font-weight: 500;
                                    }
                                    .prose pre {
                                        background: #1e293b;
                                        color: #f8fafc;
                                        border: 1px solid #334155;
                                        border-radius: 0.75rem;
                                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                                    }
                                    .prose blockquote {
                                        border-left-color: #FF007F;
                                        background: rgba(255, 0, 127, 0.05);
                                        padding: 1rem 1.5rem;
                                        border-radius: 0 0.5rem 0.5rem 0;
                                        font-style: normal;
                                        color: #334155;
                                    }
                                `}</style>
                                <div className="whitespace-pre-wrap font-sans">
                                    {post.content}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column */}
                        <div className="lg:col-span-4 space-y-8">

                            {/* Sticky Wrapper */}
                            <div className="sticky top-28 space-y-8">

                                {/* Table of Contents */}
                                <div className="hidden lg:block">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-[#FF007F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                        </svg>
                                        Table of Contents
                                    </h4>
                                    <nav className="space-y-1 border-l-2 border-slate-200 pl-4 relative">
                                        {/* Mock TOC Items - In a real app these would be generated from headings */}
                                        <a href="#" className="block text-sm text-[#FF007F] font-medium py-1.5 -ml-[1.125rem] border-l-2 border-[#FF007F] pl-4">Introduction</a>
                                        <a href="#" className="block text-sm text-slate-500 hover:text-slate-900 py-1.5 transition-colors">Understanding the Waterfall</a>
                                        <a href="#" className="block text-sm text-slate-500 hover:text-slate-900 py-1.5 transition-colors">Caching Strategies</a>
                                        <a href="#" className="block text-sm text-slate-500 hover:text-slate-900 py-1.5 transition-colors">Optimization Techniques</a>
                                        <a href="#" className="block text-sm text-slate-500 hover:text-slate-900 py-1.5 transition-colors">Conclusion</a>
                                    </nav>
                                </div>

                                {/* Newsletter Card */}
                                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50">
                                    <div className="w-10 h-10 bg-[#FF007F] rounded-lg flex items-center justify-center mb-4 text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-slate-900 font-bold text-lg mb-2">Weekly Dev Digest</h3>
                                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                                        Get the latest engineering insights delivered to your inbox using our GTM AI.
                                    </p>
                                    <div className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-[#FAFAFA] border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF007F] focus:ring-1 focus:ring-[#FF007F] transition-all"
                                        />
                                        <button className="w-full bg-[#FF007F] hover:bg-[#e00070] text-white font-bold py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-[#FF007F]/20">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </article>
            </div>

            <Footer />
        </main>
    )
}
