'use client'

import { motion } from 'framer-motion'
import { useUniverse } from '@/context/UniverseContext'

export default function UniverseToggle() {
    const { universe, setUniverse } = useUniverse()

    return (
        <div className="relative inline-flex items-center bg-black/5 dark:bg-white/5 backdrop-blur-xl rounded-full p-1 border border-black/10 dark:border-white/10">
            <button
                onClick={() => setUniverse('scale')}
                className={`relative z-10 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${universe === 'scale' ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                    }`}
            >
                Intelous.ai
                {universe === 'scale' && (
                    <motion.div
                        layoutId="activeUniverse"
                        className="absolute inset-0 bg-[#FF007F] rounded-full -z-10 shadow-lg shadow-[#FF007F]/20"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                )}
            </button>

            <button
                onClick={() => setUniverse('build')}
                className={`relative z-10 px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${universe === 'build' ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                    }`}
            >
                IntelousLabs
                {universe === 'build' && (
                    <motion.div
                        layoutId="activeUniverse"
                        className="absolute inset-0 bg-[#FF007F] rounded-full -z-10 shadow-lg shadow-[#FF007F]/20"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                )}
            </button>
        </div>
    )
}
