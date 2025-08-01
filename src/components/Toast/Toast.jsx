import './toast.css'
import { HiOutlineExclamationCircle } from "react-icons/hi"
import { FaRegCircleXmark } from "react-icons/fa6"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { LuCircleCheck } from "react-icons/lu"
import { usePopup } from '../../hooks/usePopup'

export default function Toast(
{
    children,
    variant,
    position,
    message,
    duration = 3000,
    eventTrigger = 'click'
}) {

    const [ isPopup, eventHandlers ] = usePopup(duration, eventTrigger)
    console.log(isPopup)
    
    const toastVariant = 
    variant === 'success'
    ? {
        defaultTitle: 'Success',
        class: 'success',
        Icon: LuCircleCheck,
        content: "Your work has been saved"
    } :
    variant === 'warning'
    ? {
        defaultTitle: 'Attention',
        class: 'warning',
        Icon:  HiOutlineExclamationCircle,
        content: "A network error was detected"
    } :
    variant === 'error'
    ? {
        defaultTitle: 'Error',
        class: 'error',
        Icon:FaRegCircleXmark,
        content: "Please re-save your work again"
    } :
    {
        defaultTitle: 'Information',
        class: 'info',
        Icon: HiOutlineInformationCircle,
        content: "Please read updated information"
    }

    const positionClass = (
        position === 'top-right' ?
        'top-right' :
        position === 'top-left' ?
        'top-left' :
        position === 'bottom-right' ?
        'bottom-right' : 'bottom-left'   
    )

    console.log(positionClass)

    const customTitle = message ? message : toastVariant.defaultTitle
    const textBody = message ? message : toastVariant.content
    


    return (
        <div {...eventHandlers}>
            {
            isPopup && 
            <div className={`${toastVariant.class} toast ${positionClass}`}>
                <toastVariant.Icon className='toast-icon'/>
                <div>
                    <h1>{customTitle}</h1>
                    <p>{textBody}</p>
                </div>
            </div>
            }
            {children}
        </div>
    )
}