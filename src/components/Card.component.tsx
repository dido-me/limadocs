"use client"

import { useState } from "react"

interface CardProps {
  title: string
  description: string
  thumbnail: string
  hoverMedia: string
  isVideo?: boolean
}

export default function Card({ title, description, thumbnail, hoverMedia, isVideo = false }: CardProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="relative w-full h-full">

      <div className="w-full aspect-[390/211]"></div>

    
      <div
        className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${isActive ? "z-20" : ""}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div
          className={`w-full bg-white rounded-xl overflow-hidden shadow-lg 
          transition-all duration-300 origin-center
          ${isActive ? "scale-110 shadow-xl" : ""}`}
        >
         
          <div className="relative w-full aspect-[390/211]">
            
            <div
              className={`absolute inset-0 transition-opacity duration-300 
              ${isActive ? "opacity-0" : "opacity-100"}`}
            >
              <img src={thumbnail || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
            </div>

        
            <div
              className={`absolute inset-0 transition-opacity duration-300 
              ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {isVideo ? (
                <video autoPlay muted loop className="h-full w-full object-cover">
                  <source src={hoverMedia} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={hoverMedia || "/placeholder.svg"}
                  alt={`${title} hover`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>

   
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-lg text-white font-apercu-bold font-bold">{title}</h3>
            </div>
          </div>

        
          {isActive && (
            <div className="bg-white">
              <p className="p-6 text-gray-700 text-base leading-relaxed font-apercu-mono">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

