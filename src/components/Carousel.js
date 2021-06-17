import React, {useState} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';

const items = [
    {
        id: 1,
        Text: 'O‘zingizga mos kursni tanlsh',
        caption: 'Biz nafaqat yurtimizdagi balki butun dunyoda eng rivojlangan sohalar bo\'yicha kurslarni taqdim etamiz va tanlash imkonini beramiz.\n'
    },
    {
        id: 2,
        Text: 'O‘quv jarayoni',
        caption: 'O\'quv jarayoni video darslar, amaliy mashqlar, mentor bilan ishlash imkoniyati hamda live meetinglar orqali olib boriladi.'
    },
];

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag rounded-1"
                tag="div"

                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img src="images/CardImages/7.png" className="card-img cover rounded-0" alt="#"/>
                <CarouselCaption className="text-white" captionText={item.caption} captionHeader={item.Text}/>
            </CarouselItem>
        );
    });

    return (
        <div>
            <style>
                {
                    `.custom-tag {
              max-width: 100%;
              height: 100%;
              background: black;
            }`
                }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
            </Carousel>
        </div>
    );
};

export default Example;