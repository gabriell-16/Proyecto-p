import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../css/Carrusel.css";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function CarruselMenu() {
    return (
        <>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                ssr={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <div>
                    <img src="https://i.imgur.com/d05ku7F.png" alt="Licuados Frutales" />
                </div>
                <div>
                    <img src="https://i.imgur.com/MOeYsZj.png" alt="Tostada" />
                </div>
                <div>
                    <img src="https://i.imgur.com/2xElWN5.jpeg" alt="Tostada 2" />
                </div>
                <div>
                    <img src="https://i.imgur.com/N664m5e.jpeg" alt="Tostada 4" />
                </div>
                <div>
                    <img src="https://i.imgur.com/wefdd08.png" alt="Yogurt Multifrutal" />
                </div>
            </Carousel>
        </>
    );
}

