'use client';

import Image from 'next/image';
import Mission from '../components/Mission';
import CollaborationSlider from '../components/CollaborationSlider';

export default function About() {
    return (
        <div className="text-primary">
            {/* Title Section */}
            <section className="px-6 md:px-10 mb-6">
                <div className="text-center">
                    <h1 className="text-[35px] md:text-[70px] xl:text-[120px] tracking-wide mb-2">
                        Past Event Collaboration
                    </h1>
                </div>
            </section>

            {/* Image Grid Section */}
            <section className="grid grid-cols-2 md:grid-cols-18 md:grid-rows-2 gap-3 px-6 md:px-10 mb-16 h-[600px]">
                <div className="col-span-1 md:col-span-4 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/1.jpg" alt="event1" fill className="object-cover" />
                </div>
                <div className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/2.jpg" alt="event2" fill className="object-cover" />
                </div>
                <div className="col-span-1 md:col-span-6 md:row-span-2 relative overflow-hidden">
                    <Image src="/collaboration/head/4.jpg" alt="event3" fill className="object-cover" />
                </div>
                <div className="col-span-1 md:col-span-6 relative overflow-hidden">
                    <Image src="/collaboration/head/5.jpg" alt="event4" fill className="object-cover" />
                </div>
                <div className="col-span-1 md:col-span-5 md:col-start-2 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/3.jpg" alt="event5" fill className="object-cover" />
                </div>
                <div className="col-span-1 md:col-span-6 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/6.jpg" alt="event6" fill className="object-cover" />
                </div>
            </section>

            {/* About Collaboration Text */}
            <section className="px-6 md:px-10 mb-16">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div>
                        <h2 className="text-2xl md:text-6xl mb-3">About Collaboration</h2>
                        <h3 className="italic text-2xl tracking-wider leading-8">
                            Mendorong pertumbuhan ekonomi lokal dan pelestarian <br className="hidden md:block" />
                            keterampilan tradisional melalui kolaborasi komunitas.
                        </h3>
                    </div>
                    <div>
                        <h3 className="mt-10 text-xl tracking-wider leading-8">
                            Melalui kolaborasi ini, Tabinda tidak hanya menghadirkan busana yang memesona,
                            tetapi juga menjadi bagian dari perjalanan hijrah yang lebih luas: sebuah perjalanan
                            menuju kehidupan yang lebih bermakna, berkelanjutan, dan penuh berkah.
                        </h3>
                    </div>
                </div>
            </section>

            {/* Collaboration Slider */}
            <section className="px-6 md:px-10 mb-10">
                <CollaborationSlider />
            </section>

            {/* Mission Section */}
            <section className="px-6 md:px-10">
                <Mission />
            </section>
        </div>
    );
}
