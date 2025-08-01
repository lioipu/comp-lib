import brandIcon from './cardAssets/brand-icon.png'
import React from 'react'
import clsx from 'clsx'
import { useHover } from '../../hooks/useHover'

export default function Card(
{
    children,
    title='Easy Deployment',
    icon = brandIcon
}) {

    const [ isHovering, hoverHandlers ] = useHover()
    
    return (
        <div
        className={clsx("card-container",{hover: isHovering})} {...hoverHandlers}
        
        >
            <img className='brand-img' src={icon} alt="brand-icon" />
            <div className="card-content">
                <h1>{title}</h1>
                {children && <p>{children}</p>}
            </div>
        </div>
    )
}