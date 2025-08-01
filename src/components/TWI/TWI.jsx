import pic from './TWIAssets/example-profile-pic.jpg'
import './twi.css'

export default function TWI( 
{
    children,
    image = pic,
    info = { name: 'May Andersons', company: 'Worcation', level: 'CTO' } 
} ) {
    return (

        <div className='twi-container'>
            <div className='image-wrapper'>
                <img className='profile-pic' src={image} alt="profile-picture" />
            </div>
            <div className='twi-content-container'>
                <p className='twi-content'>{children}</p>
                <p className='twi-name'>{info.name}</p>
                <p className='twi-company'>{info.company}, {info.level}</p>
            </div>

        </div>
    )
    
}