import './blogList.scss'
import { importImages } from '../../assets/img'
import { MainHeader } from '../../common/header/header'
import { MainFooter }  from '../../common/footer/footer'
import { BlogListItem } from './partial/blogListItem'

export function BlogList() {
    return (
        <>
            <MainHeader />
            <div className='blogList'>
                <div className='container'>
                    <div className='row'>
                        <BlogListItem blogThumbnail={importImages.bannerImage1} blogHeading='Heading 1' blogContent='Content 1'></BlogListItem>
                        <BlogListItem blogThumbnail={importImages.bannerImage2} blogHeading='Heading 2' blogContent='Content 2'></BlogListItem>
                        <BlogListItem blogThumbnail={importImages.bannerImage3} blogHeading='Heading 3' blogContent='Content 3'></BlogListItem>
                        <BlogListItem blogThumbnail={importImages.bannerImage4} blogHeading='Heading 4' blogContent='Content 4'></BlogListItem>
                    </div>
                </div>
            </div>
            <MainFooter />
        </>
    )
}