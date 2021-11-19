import Carousel, { slidesToShowPlugin ,arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Button from "@mui/material/Button"

export default function Carusel(props) {
return(
    <div style={{ margin: "auto", width: "80%" }}>
        <Carousel
          plugins={[
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <Button> <FaArrowCircleLeft size="50" color="#C03228" /></Button>,
                arrowLeftDisabled:<Button> <FaArrowCircleLeft size="50" color="gray"/></Button>,
                arrowRight: <Button> <FaArrowCircleRight size="50" color="#C03228"/></Button>,
                arrowRightDisabled: <Button> <FaArrowCircleRight size="50" color="gray"/></Button>,
                addArrowClickHandler: true,
              }},
              "infinite",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 4,
              },
            },
          ]}
          breakpoints={{
            710: {
              plugins: [
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 1
                 }
                 
               },
               "infinite"
             ]
            },
            870: {
              plugins: [
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 2
                 }
               },
               "infinite"
             ]
            },
            1190: {
              plugins: [
               {
                 resolve: slidesToShowPlugin,
                 options: {
                  numberOfSlides: 3
                 }
               },
               "infinite"
             ]
            }
          }}
          slides={props.lista}
        >
        </Carousel>

      </div>
);
}