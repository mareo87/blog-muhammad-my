import { useState } from 'react';

export default function Search({ onSearch }) {
    return (
        <div className="relative max-w-lg mx-auto mb-12">
            <input
                type="text"
                placeholder="Search posts..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full py-4 px-6 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <svg
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
}
