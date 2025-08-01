
// irrelevant, its a private case of what useEventTrigger can do.
import { useState, useCallback } from 'react'

function useHover() {
    
    const [isHovering, setIsHovering] = useState(false)

    const onMouseEnter = useCallback(() => setIsHovering(true),[])
    const onMouseLeave = useCallback(() => setIsHovering(false),[])

    const hoverHandlers = {
        onMouseEnter, 
        onMouseLeave
    }

    return [isHovering, hoverHandlers]
    
}

export {useHover}