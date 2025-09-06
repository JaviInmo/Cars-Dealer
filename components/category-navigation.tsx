"use client"

import { useState } from "react"

export interface Category {
    id: string
    label: string
    count?: number
}

interface CategoryNavigationProps {
    categories: Category[]
    defaultActiveId?: string
    onCategoryChange?: (categoryId: string) => void
    className?: string
}

export function CategoryNavigation({
                                       categories,
                                       defaultActiveId,
                                       onCategoryChange,
                                       className = "",
                                   }: CategoryNavigationProps) {
    const [activeId, setActiveId] = useState(defaultActiveId || categories[0]?.id || "")

    const handleCategoryClick = (categoryId: string) => {
        setActiveId(categoryId)
        onCategoryChange?.(categoryId)
    }

    return (
        <nav className={`w-full ${className}`}>
            <div className="flex space-x-8">
                {categories.map((category) => {
                    const isActive = activeId === category.id

                    return (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category.id)}
                            className={`
                relative cursor-pointer transition-all duration-300 ease-in-out py-3 px-4
                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-opacity-50
                hover:text-gray-900 transform hover:scale-105
                ${isActive ? "text-gray-900 font-semibold" : "text-gray-600 hover:text-gray-800"}
              `}
                        >
              <span className="flex items-center gap-2 relative z-10">
                {category.label}
                  {category.count !== undefined && (
                      <span
                          className={`
                      text-xs px-2 py-0.5 rounded-full transition-all duration-300
                      ${isActive ? "bg-gray-100 text-gray-600 scale-110" : "bg-gray-200 text-gray-500"}
                    `}
                      >
                    {category.count}
                  </span>
                  )}
              </span>

                            {/* Línea indicadora inferior */}
                            <div
                                className={`
                  absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 transition-all duration-300 ease-in-out
                  ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                `}
                            />

                            {/* Efecto de hover sutil */}
                            <div
                                className={`
                  absolute inset-0 bg-gray-50 rounded-md transition-all duration-300 ease-in-out -z-10
                  ${isActive ? "opacity-0" : "opacity-0 hover:opacity-100"}
                `}
                            />
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
