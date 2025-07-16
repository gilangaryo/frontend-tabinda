'use client'
import CarouselPastEvent from "./CarouselPastEvent";

export default function CollaboartionSection() {
    return (
        <section className=" py-10 md:px-10 my-10">
            <h1 className="text-4xl md:text-6xl text-center text-primary mb-10">
                Past-Event Collaboration
            </h1>
            <div className="max-w-full md:mx-auto ">
                <CarouselPastEvent />
            </div>
        </section>
    );
}