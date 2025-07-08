'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import Mission from '../components/Mission';
import { Pagination } from 'swiper/modules';
import CollaborationSlider from '../components/CollaborationSlider';

export default function About() {
    return (
        <div className="text-primary ">
            <Navbar />
            <section className="px-6 md:px-10">
                <div className="text-center ">
                    <h1 className="text-[34px] md:text-[110px] xl:text-[180px] tracking-wide ">
                        Past Event Collaboration
                    </h1>
                </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-18 md:grid-rows-2 gap-3 px-6 md:px-10 mb-16 h-[600px]">
                <div className="col-span-1 md:col-span-4 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/1.png" alt="event1" fill className="object-cover" />
                </div>

                <div className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/2.png" alt="event2" fill className="object-cover" />
                </div>

                <div className="col-span-1 md:col-span-6 md:row-span-2 relative overflow-hidden">
                    <Image src="/collaboration/head/4.png" alt="event3" fill className="object-cover" />
                </div>

                <div className="col-span-1 md:col-span-6 relative overflow-hidden">
                    <Image src="/collaboration/head/5.png" alt="event4" fill className="object-cover" />
                </div>

                <div className="col-span-1 md:col-span-5 md:col-start-2  row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/3.png" alt="event5" fill className="object-cover" />
                </div>

                <div className="col-span-1 md:col-span-6 row-span-1 relative overflow-hidden">
                    <Image src="/collaboration/head/6.png" alt="event6" fill className="object-cover" />
                </div>
            </section>


            <section className="px-6 md:px-10 mb-16">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div>
                        <h2 className="text-2xl md:text-6xl mb-3">
                            About Collaboration
                        </h2>
                        <p className="italic text-xl tracking-wider leading-8">
                            Mendorong pertumbuhan ekonomi lokal dan pelestarian <br className="hidden md:block" />
                            keterampilan tradisional melalui kolaborasi komunitas.
                        </p>
                    </div>

                    <div>
                        <h2 className='mt-10 text-xl tracking-wider leading-8'>
                            Melalui kolaborasi ini, Tabinda tidak hanya menghadirkan busana yang memesona,
                            tetapi juga menjadi bagian dari perjalanan hijrah yang lebih luas: sebuah perjalanan
                            menuju kehidupan yang lebih bermakna, berkelanjutan, dan penuh berkah.
                        </h2>
                    </div>
                </div>
            </section>



            <section className="px-6 md:px-10 mb-24">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                />
                <CollaborationSlider />
            </section>

            <Mission />
            <br />
            <Footer />
        </div>
    );
}
