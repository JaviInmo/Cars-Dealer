import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Calendar, 
  Car, 
  DollarSign, 
  Gauge, 
  Palette,
  Settings,
  Fuel,
  ChevronDown
} from 'lucide-react';

interface FilterState {
  years: string[]
  makes: string[]
  models: string[]
  bodyTypes: string[]
  priceRanges: string[]
  drivetrains: string[]
  transmissions: string[]
  mileageRanges: string[]
  exteriorColors: string[]
  highwayMpg: string[]
  cityMpg: string[]
}

interface ModernCarFilterProps {
  activeFilters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

const filterData = {
  years: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"],
  makes: ["Toyota", "Chevrolet", "Ford", "Honda", "Nissan", "Hyundai", "Kia", "Mazda"],
  models: {
    Toyota: ["Camry", "Corolla", "RAV4", "Highlander", "Prius", "Tacoma"],
    Chevrolet: ["Silverado", "Equinox", "Malibu", "Traverse", "Tahoe"],
    Ford: ["F-150", "Explorer", "Escape", "Mustang", "Edge"],
  },
  bodyTypes: ["Sedan", "SUV", "Truck", "Hatchback", "Coupe", "Convertible"],
  priceRanges: ["0-10K", "10K-20K", "20K-30K", "30K-40K", "40K-50K", "50K+"],
  drivetrains: ["FWD", "RWD", "AWD", "4WD"],
  transmissions: ["Automatic", "Manual", "CVT"],
  mileageRanges: ["0-50K", "50K-100K", "100K-150K", "150K+"],
  exteriorColors: ["White", "Black", "Silver", "Gray", "Red", "Blue", "Green"],
  mpgRanges: ["15-20", "20-25", "25-30", "30-35", "35-40", "40+"],
}

const quickFilters = [
  { label: "Bajo Millaje", key: "lowMileage", icon: Gauge },
  { label: "Económico", key: "affordable", icon: DollarSign },
  { label: "SUVs", key: "suv", icon: Car },
  { label: "Nuevos", key: "new", icon: Calendar },
]

export function ModernCarFilter({ activeFilters, onFiltersChange }: ModernCarFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    const currentValues = activeFilters[category]
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value]
    
    onFiltersChange({
      ...activeFilters,
      [category]: newValues
    })
  }

  const clearAllFilters = () => {
    onFiltersChange({
      years: [],
      makes: [],
      models: [],
      bodyTypes: [],
      priceRanges: [],
      drivetrains: [],
      transmissions: [],
      mileageRanges: [],
      exteriorColors: [],
      highwayMpg: [],
      cityMpg: [],
    })
  }

  const getActiveCount = () => {
    return Object.values(activeFilters).reduce((total, arr) => total + arr.length, 0)
  }

  const applyQuickFilter = (filterKey: string) => {
    switch (filterKey) {
      case 'lowMileage':
        handleFilterChange('mileageRanges', '0-50K')
        break
      case 'affordable':
        handleFilterChange('priceRanges', '0-10K')
        break
      case 'suv':
        handleFilterChange('bodyTypes', 'SUV')
        break
      case 'new':
        handleFilterChange('years', '2024')
        break
    }
  }

  const FilterChip = ({ value, onRemove }: { value: string, onRemove: () => void }) => (
    <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
      {value}
      <X className="h-3 w-3 cursor-pointer hover:bg-blue-200 rounded-full" onClick={onRemove} />
    </div>
  )

  const CategoryButton = ({ 
    title, 
    icon: Icon, 
    count, 
    isActive, 
    onClick 
  }: { 
    title: string
    icon: any
    count: number
    isActive: boolean
    onClick: () => void
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 ${
        isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="font-medium">{title}</span>
      {count > 0 && (
        <span className={`text-xs px-2 py-0.5 rounded-full ${
          isActive ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
        }`}>
          {count}
        </span>
      )}
    </button>
  )

  const OptionGrid = ({ options, category }: { options: string[], category: keyof FilterState }) => (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {options
        .filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()))
        .map((option) => {
          const isSelected = activeFilters[category].includes(option)
          return (
            <button
              key={option}
              onClick={() => handleFilterChange(category, option)}
              className={`p-3 rounded-lg text-left transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium text-sm">{option}</div>
            </button>
          )
        })
      }
    </div>
  )

  const categories = [
    { key: 'years', title: 'Año', icon: Calendar, options: filterData.years },
    { key: 'makes', title: 'Marca', icon: Car, options: filterData.makes },
    { key: 'bodyTypes', title: 'Tipo', icon: Car, options: filterData.bodyTypes },
    { key: 'priceRanges', title: 'Precio', icon: DollarSign, options: filterData.priceRanges },
    { key: 'mileageRanges', title: 'Millaje', icon: Gauge, options: filterData.mileageRanges },
    { key: 'exteriorColors', title: 'Color', icon: Palette, options: filterData.exteriorColors },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-gray-900/10 border border-gray-100">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-xl">
              <SlidersHorizontal className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
            {getActiveCount() > 0 && (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {getActiveCount()}
              </span>
            )}
          </div>
          {getActiveCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-gray-500 hover:text-red-600 transition-colors text-sm font-medium"
            >
              Limpiar todo
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar marca, modelo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {quickFilters.map((filter) => {
            const Icon = filter.icon
            return (
              <button
                key={filter.key}
                onClick={() => applyQuickFilter(filter.key)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 rounded-xl transition-all duration-200 text-sm font-medium text-gray-700"
              >
                <Icon className="h-4 w-4" />
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active Filters */}
      {getActiveCount() > 0 && (
        <div className="p-6 bg-gray-50 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters).map(([category, values]) =>
              values.map((value: string) => (
                <FilterChip
                  key={`${category}-${value}`}
                  value={value}
                  onRemove={() => handleFilterChange(category as keyof FilterState, value)}
                />
              ))
            )}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-3 mb-6">
          {categories.map((category) => (
            <CategoryButton
              key={category.key}
              title={category.title}
              icon={category.icon}
              count={activeFilters[category.key as keyof FilterState].length}
              isActive={activeCategory === category.key}
              onClick={() => setActiveCategory(activeCategory === category.key ? null : category.key)}
            />
          ))}
        </div>

        {/* Selected Category Options */}
        {activeCategory && (
          <div className="animate-in slide-in-from-top-4 duration-200">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                {categories.find(cat => cat.key === activeCategory)?.title}
              </h3>
              <OptionGrid
                options={categories.find(cat => cat.key === activeCategory)?.options || []}
                category={activeCategory as keyof FilterState}
              />
            </div>
          </div>
        )}

        {/* Advanced Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-6 flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-gray-600"
        >
          <Settings className="h-4 w-4" />
          Filtros Avanzados
          <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {/* Advanced Filters */}
        {isExpanded && (
          <div className="mt-4 space-y-4 animate-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Tracción
                </h4>
                <div className="space-y-2">
                  {filterData.drivetrains.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange('drivetrains', option)}
                      className={`w-full p-2 rounded-lg text-left transition-colors ${
                        activeFilters.drivetrains.includes(option)
                          ? 'bg-blue-600 text-white'
                          : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                  <Fuel className="h-4 w-4" />
                  Consumo MPG
                </h4>
                <div className="space-y-2">
                  {filterData.mpgRanges.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleFilterChange('highwayMpg', option)}
                      className={`w-full p-2 rounded-lg text-left transition-colors ${
                        activeFilters.highwayMpg.includes(option)
                          ? 'bg-blue-600 text-white'
                          : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      {option} MPG
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}