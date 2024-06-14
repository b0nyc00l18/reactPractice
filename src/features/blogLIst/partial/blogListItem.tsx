import './blogListItem.scss'

export function BlogListItem(props: any) {
    return (
        <>
            <div className='col-md-3 col-sm-6 col-xs-12'>
                <a href="/blogPost" className='blogList__box'>
                    <div className='blogList__image'>
                        <img src={props.blogThumbnail} alt='' />
                    </div>
                    <div className='blogList__content'>
                        <h3>{props.blogHeading}</h3>
                        <p>{props.blogContent}</p>
                    </div>
                </a>
            </div>
        </>
    )
}