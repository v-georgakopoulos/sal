import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

import "./backToTop.scss"

const BackToTop = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (

        <button
            className={`back-to-top ${visible ? "show" : ""}`}
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
        >
            <ArrowUp size={24} />
        </button>
    )
}

export default BackToTop