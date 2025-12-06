"use client"

import React from "react"

type Category = { id: string; name: string }

export default function PortfolioFilter({ categories }: { categories: Category[] }) {
	// Minimal safe default: render a centered pill nav if categories are provided.
	if (!categories || categories.length === 0) return null

	return (
		<nav className="sticky top-16 z-40 w-full">
			<div className="container mx-auto px-4">
				<div className="mx-auto max-w-3xl flex justify-center">
					<div className="bg-white/5 rounded-full inline-flex gap-3 p-2">
						{categories.map((c) => (
							<a key={c.id} href={`#${c.id}`} className="px-4 py-2 rounded-full text-sm text-neutral-300">
								{c.name}
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	)
}
