'use client'

import { useEffect, useState } from 'react'

type VideoPlayerProps = {
    src: string
    className?: string
}

export function VideoPlayer({ src, className }: VideoPlayerProps) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={className}
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
