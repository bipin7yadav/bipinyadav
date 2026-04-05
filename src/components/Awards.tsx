import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Icon } from '@iconify/react';
import udemyNodecertificate from "../../public/UdemyNodeCertificate.jpg";
import versionControlCertificate from "../../public/VersionControlCertificate.jpg";
import reactNativeCertificate from "../../public/ReactNativeCertificate.jpeg";

const Awards = () => {
    const [selectedImage, setSelectedImage] = useState<string | StaticImageData | null>(null);

    const certificates = [
        {
            id: 1,
            title: "React Native",
            organization: "Coursera",
            date: "Sept 17, 2023",
            description: "Completed by Bipin Yadav. 38 hours (approximately). Grade Achieved: 86%. Bipin Yadav's account is verified. Coursera certifies their successful completion of React Native.",
            image: reactNativeCertificate
        },
        {
            id: 2,
            title: "Version Control",
            organization: "Coursera",
            date: "Sept 3, 2023",
            description: "Completed by Bipin Yadav. 15 hours (approximately). Grade Achieved: 88.75%. Bipin Yadav's account is verified. Coursera certifies their successful completion of Version Control.",
            image: versionControlCertificate
        },
        {
            id: 3,
            title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
            organization: "Udemy",
            date: "Mar 2023",
            description: "This certificate above verifies that Bipin Yadav successfully completed the course Node.js, Express, MongoDB & More: The Complete Bootcamp on 03/18/2023 as taught by Jonas Schmedtmann on Udemy.",
            image: udemyNodecertificate
        },
        {
            id: 4,
            title: "Advanced Node.js",
            organization: "Coursera",
            date: "2022",
            description: "Deep dive into Node.js internals, streams, and performance optimization.",
            image: "https://placehold.co/600x400/png"
        },
        {
            id: 6,
            title: "AWS Certified Developer",
            organization: "Amazon Web Services",
            date: "Mar 2022",
            description: "Validated expertise in developing and maintaining applications on AWS.",
            image: "https://placehold.co/600x400/png"
        }
    ];

    return (
        <section id="awards" className="py-20 bg-bg-secondary">
            <div className="container mx-auto px-4">
                <h2 className="heading-secondary text-center !mb-16">
                    Courses & <span className="text-accent">Certificates</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-bg p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-dark-3/20 hover:border-accent group"
                        >
                            <div className="flex flex-col h-full">
                                <div
                                    className="w-full h-48 relative mb-6 rounded-lg overflow-hidden cursor-pointer"
                                    onClick={() => setSelectedImage(cert.image)}
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                        <Icon icon="carbon:zoom-in" className="text-white text-4xl drop-shadow-lg" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-5xl text-accent/20 font-bold group-hover:text-accent/40 transition-colors">
                                        0{cert.id}
                                    </span>
                                    <span className="text-sm font-medium text-dark-3 bg-dark-2/5 px-3 py-1 rounded-full">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-dark-1 mb-2 group-hover:text-accent transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-accent font-medium text-sm mb-4">
                                    {cert.organization}
                                </p>

                                <p className="text-text text-sm leading-relaxed mt-auto">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                        onClick={() => setSelectedImage(null)}
                    >
                        <Icon icon="carbon:close" width={40} height={40} />
                    </button>
                    <div
                        className="relative max-w-5xl w-full h-auto max-h-[90vh] flex justify-center items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Certificate Full View"
                            width={1000}
                            height={800}
                            className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                            unoptimized
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Awards;