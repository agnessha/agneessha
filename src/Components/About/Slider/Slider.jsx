import React, {useEffect, useState} from 'react'
import s from './Slider.module.css'

const Slider = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

// Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === props.img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 3000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])

// Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : props.img.length - 1
// Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === props.img.length - 1 ? 0 : activeIndex + 1
    return (
        <div>
            <div className={s.slider}>
                <div className={[s.sliderImg, s.sliderImgPrev].join(' ')}
                     key={prevImgIndex}>
                    {props.img[prevImgIndex]}
                </div>
                <div className={s.sliderImg}
                     key={activeIndex}>
                    {props.img[activeIndex]}
                </div>
                <div className={[s.sliderImg, s.sliderImgNext].join(' ')}
                     key={nextImgIndex}>
                    {props.img[nextImgIndex]}
                </div>
            </div>
        </div>
    );
}

export default Slider;