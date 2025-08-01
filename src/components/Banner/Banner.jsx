import checkMark from './BannerAssets/checkMark.png'
import error from './BannerAssets/error.png'
import exclamation from './BannerAssets/exclamation.png'
import neutral from './BannerAssets/neutral.png'


export default function Banner({children, variant, title}) {

    const bannerVariant = 
    variant === 'success'
    ? {defaultTitle: 'Congratulations!', class: 'success',icon: checkMark} :
    variant === 'warning'
    ? {defaultTitle: 'Attention', class: 'warning',icon:  exclamation} :
    variant === 'error'
    ? {
        defaultTitle: 'There is a problem with your application',
        class: 'error',
        icon:error
    } :
    {defaultTitle: 'Update available', class: 'neutral', icon: neutral}

    const customTitle = title ? title : bannerVariant.defaultTitle

    return (

            <div className={`${bannerVariant.class} banner`}>
                <img className='banner-icon' src={bannerVariant.icon}  alt="banner-icon" />
                <div className='text'>
                    <h1>{customTitle}</h1>
                    {children && <p>{children}</p>}
                </div>
            </div>
    )
}