import './testimonialCarousel.css';
import { useState } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
    const [current, setCurrent] = useState(0);

    const nextTestimonial = () => {
        setCurrent((current + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-carousel">
            <button onClick={prevTestimonial}>&lt;</button>
            <div className="testimonial-carousel__content">
                <p>"{testimonials[current].quote}"</p>
                <h4>- {testimonials[current].author}</h4>
            </div>
            <button onClick={nextTestimonial}>&gt;</button>
        </div>
    );
}

export const metadata = {
    "title": "Testimonial Carousel",
    "description": "A carousel displaying customer testimonials",
    "props": [
        { "name": "testimonials", "type": "array", "description": "Array of testimonials", "props": [
            { "name": "quote", "type": "string", "description": "Testimonial quote" },
            { "name": "author", "type": "string", "description": "Author of the testimonial" }
        ]}
    ],
    "child": false
}

export const template = {
    "type": "carousel/testimonialCarousel",
    "testimonials": [
        { "quote": "This is the best service I've ever used!", "author": "John Doe" },
        { "quote": "Amazing experience, highly recommend.", "author": "Jane Smith" },
        { "quote": "Exceptional quality and customer service.", "author": "Bob Johnson" }
    ]
}

export default TestimonialCarousel;