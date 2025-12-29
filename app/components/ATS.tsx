import React from 'react'

interface Suggestion {
    type: 'good' | 'improve'
    tip: string
}

interface ATSProps {
    score: number
    suggestions: Suggestion[]
}

const ATS: React.FC<ATSProps> = ({ score, suggestions }) => {
    // Determine gradient background based on score
    const getGradientClass = () => {
        if (score > 69) return 'from-green-100'
        if (score > 49) return 'from-yellow-100'
        return 'from-red-100'
    }

    // Determine icon based on score
    const getIconPath = () => {
        if (score > 69) return '/icons/ats-good.svg'
        if (score > 49) return '/icons/ats-warning.svg'
        return '/icons/ats-bad.svg'
    }

    // Get suggestion icon based on type
    const getSuggestionIcon = (type: 'good' | 'improve') => {
        return type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'
    }

    return (
        <div className={`bg-gradient-to-br ${getGradientClass()} to-white rounded-lg shadow-lg p-6`}>
            {/* Top Section */}
            <div className="flex items-center gap-4 mb-6">
                <img
                    src={getIconPath()}
                    alt="ATS Status"
                    className="w-16 h-16"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                    ATS Score - {score}/100
                </h2>
            </div>

            {/* Description Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {score > 69 ? 'Great Job!' : score > 49 ? 'Keep Improving!' : 'Needs Attention!'}
                </h3>
                <p className="text-gray-600 mb-4">
                    This score represents how well your resume is likely to perform in Applicant Tracking Systems used by employers.
                </p>

                {/* Suggestions List */}
                <div className="space-y-3">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <img
                                src={getSuggestionIcon(suggestion.type)}
                                alt={suggestion.type === 'good' ? 'Good' : 'Improve'}
                                className="w-5 h-5 mt-0.5 flex-shrink-0"
                            />
                            <p className="text-gray-700 text-sm">{suggestion.tip}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing Line */}
            <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                    Keep improving your resume to maximize your chances of landing your dream job!
                </p>
            </div>
        </div>
    )
}

export default ATS