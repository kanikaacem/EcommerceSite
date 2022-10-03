import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function CustomizeCarousel(){
 return (<>
        <Carousel
        autoPlay={true}
        infiniteLoop={true} 
        interval={2000}
        showThumbs={false}
        showStatus={false}>
            <div>
                <img src="https://preview.colorlib.com/theme/makeupartist/img/hero/hero-1.jpg.webp" />
            </div>
            <div>
                <img src="https://preview.colorlib.com/theme/makeupartist/img/hero/hero-1.jpg.webp" />
            </div>
            <div>
                <img src="https://preview.colorlib.com/theme/makeupartist/img/hero/hero-1.jpg.webp" />
            </div>
        </Carousel>
 </>)
}
export default CustomizeCarousel;