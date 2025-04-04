import { JSX } from 'react';
import Title from '@/components/Title';
import ServiceCard from './ServiceCard';

import { FaCode, FaCreditCard, FaCloud, FaPalette, FaTachometerAlt, FaSyncAlt } from 'react-icons/fa';

export default function Services(): JSX.Element {
    return (
        <section className="max-w-7xl mx-auto" aria-labelledby="my-services-title" role="list">
            <Title id="my-services-title" text="My Services" />
            <ul className="mt-12 md:mt-16 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <ServiceCard icon={ <FaCode className="text-xl md:text-2xl text-[var(--primary)]" aria-hidden="true" /> } title="Full Stack Development" text="Developing robust, scalable, and high performance applications from frontend to backend." />
                <ServiceCard icon={ <FaCreditCard className="text-xl md:text-2xl text-[var(--primary)]" aria-hidden="true" /> } title="Payment Gateway Solutions" text="Integrating secure and seamless payment systems like Stripe, PayPal, and more." />
                <ServiceCard icon={ <FaCloud className="text-xl md:text-2xl text-[var(--primary)]" aria-hidden="true" /> } title="Cloud Deployment & Management" text="Hosting, scaling, and maintaining applications on cloud platforms like AWS for optimal performance." />
                <ServiceCard icon={ <FaTachometerAlt className="text-xl md:text-2xl text-[var(--primary)]" aria-hidden="true" /> } title="Performance Optimization" text="Boosting speed, responsiveness, and SEO to ensure a smooth and efficient user experience." />
                <ServiceCard icon={ <FaPalette className="text-xl md:text-2xl text-[var(--primary)]" aria-hidden="true" /> } title="UI/UX Design & Development" text="Designing intuitive and visually stunning interfaces that enhance user engagement." />
                <ServiceCard icon={ <FaSyncAlt className="text-xl md:text-2xl text-[var(--primary)]" aria-hidden="true" /> } title="Support, Maintenance & Upgrades" text="Ensuring smooth updates, bug fixes, and migrations to modern frameworks and technologies." />
            </ul>
        </section>
    );
}
