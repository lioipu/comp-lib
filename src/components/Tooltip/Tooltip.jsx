import './tooltip.css'
import { useHover } from '../../hooks/useHover';
import { TbInbox } from "react-icons/tb";

export default function Tooltip(
{
    children,
    title = 'Archive notes',
    Icon = TbInbox,
    color = 'dark',
    content

}) {

    const [isHovering, hoverHandlers] = useHover()

    console.log("sss")
    return (
        <>
            <div {...hoverHandlers} className='sss'>
                {children}
                {isHovering && <div className='tmp' {...hoverHandlers}>
                    <div className={`tooltip-container ${color}` }  >
                        <Icon className={`icon-${color}`} size={26}/>
                        <div className='tooltip-content' >
                            <h1 className={`header-${color}`}>{title}</h1>
                            <p>{content}</p>
                        </div>
                        <div className={ `triangle ${color}`}></div>
                    </div>
                </div>
                }
            </div>
        </>
    )
    
}