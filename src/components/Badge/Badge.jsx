import React from 'react'



export default function Badge( { children, variant, color='gray' } ) {
    
    return (
        <span className={`badge ${variant} ${color}`} >
            {children ? children : 'Badge'}
        </span>
)
}