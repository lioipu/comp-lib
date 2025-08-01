import testimonialIcon from './testimonialAssets/office-building.png'
import './testimonial.css'


export default function Testimonial(
{
    children,
    icon = testimonialIcon,
    title = {first: 'Work', second: 'cation'},
    name = 'May Andersons',
    level = 'CTO'
}) {

    return (
        <div className='testimonial-container'>
            <div className='logo'>
                <img className="logo-image" src={icon} alt="company-logo"></img>
                <span>{title.first}</span>
                <span style={{color:"#2E59F3"}}>{title.second}</span>
            </div>
            <div className='testimonial-content-container'>
                <p className='testimonial-content'>{children}</p>
                <p className='name'>{name}</p>
                <p className='level'>{title.first}{title.second} , {level}</p>
            </div>
        </div>
    )
}