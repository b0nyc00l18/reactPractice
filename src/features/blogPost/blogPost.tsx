import './blogPost.scss'
import { importImages } from '../../assets/img'
import { MainHeader } from '../../common/header/header'
import { MainFooter }  from '../../common/footer/footer'

export function BlogPost() {
    return (
        <>
            <MainHeader />
            <div className='blogPost'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='blogPost__img'>
                                <img src={importImages.bannerImage1} alt=''/>
                            </div>
                            <div className='blogPost__content'>
                                <h3>Heading 01</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit iste beatae minus a quod molestias, praesentium veniam dolor saepe corporis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}