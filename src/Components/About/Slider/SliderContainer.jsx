import * as React from 'react'
import slide1 from './../../../img/mask-5932015.png'
import slide2 from './../../../img/cows-1789577.png'
import slide3 from './../../../img/mask-5932015.png'
import Slider from "./Slider";


const SliderContainer = (props) => {

    const img = [
        <img key={slide1} src={slide1} />,
        <img key={slide2} src={slide2} />,
        <img key={slide3} src={slide3} />,
    ]
    return (
        <div>
            <Slider img={img} />
        </div>
    );
}

export default SliderContainer;