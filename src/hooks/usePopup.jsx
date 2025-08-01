import { useState } from 'react'

function usePopup(duration, eventTrigger) {
    
    const [isPopup, setIsPopup] = useState(false)

    const showToast = () => {
        console.log("showToast triggered")
        setIsPopup(true)
        setTimeout( () => setIsPopup(false), duration)
    }


    const eventTriggerHandlers = {
        onClick: eventTrigger === 'click' ? showToast : undefined,
        onMouseEnter: eventTrigger === 'hover' ? showToast : undefined
    }


    return [isPopup, eventTriggerHandlers]
    
}

export {usePopup}