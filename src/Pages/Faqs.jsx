import React, { useState, useEffect, useRef } from 'react';
import "../styles/FAQ.css"; // Import the CSS file

function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqImageRef = useRef(null);

    const faqItems = [
        {
            question: 'What types of oilfield equipment do you provide?',
            answer: 'We offer a wide range of oilfield equipment, including drilling tools, production equipment, safety gear, and various other essential items for oil and gas exploration and production.',
        },
        {
            question: 'How can I request a quote or place an order?',
            answer: 'You can request a quote or place an order by contacting our sales team directly through our website, email, or phone. Our team will assist you in selecting the right products and provide pricing information.',
        },
        {
            question: 'Do you offer customized solutions for unique project requirements?',
            answer: 'Yes, we specialize in providing customized solutions to meet your specific project needs. Contact our experts to discuss your requirements, and we\'ll work to tailor a solution for you.',
        },
        {
            question: 'What is your standard lead time for product delivery?',
            answer: 'Our lead time varies depending on the product and quantity. We aim to provide accurate delivery estimates when you request a quote or place an order. We also offer expedited shipping options when necessary.',
        },
        {
            question: 'What are Flanges and why are they used?',
            answer: 'Flanges are used to connect pipes, fittings, valves, pumps, and compressors to create a complete piping system.',
        },
        {
            question: 'Common Types of Flanges',
            answer: (
                <>
                    <p>There are various types of flanges. The most common include:</p>
                    <ul>
                        <li>Weld Neck Flanges</li>
                        <li>Slip On Flanges</li>
                        <li>Socket Weld Flanges</li>
                        <li>Threaded Flanges</li>
                        <li>Blind Flanges</li>
                    </ul>
                    <p>Generally, size of pipe is above 2inch, also, where Pressure is high and Flanged Joints are required to be long lasting, then Weld Neck, Slip On or Socket Weld Flanges are used.<br/>
                        Wherever pressure is low and mechanical forces (Vibration, Expansion, Oscillation, Contraction) are absent and pipe connection is less than 2”, Threaded Flanges are used. Further, it is imperative to use Threaded Flanges in Explosive Areas.
                        <br/>
                        Blind Flanges are used to curtail the flow of the fluid.
                        <br/>
                        Person needs to be trained to carry out Flanged Joints. Standard TSE-TS EN 1591 Part 1-4 is the reference to execute Flange Joint.</p>
                </>
            ),
        },
        {
            question: 'Special Types of Flanges',
            answer: (
                <ul>
                    There are specific or special type of Flanges such as
                    <li>Swivel Flanges</li>
                    <li>Expander/Reducer Flanges</li>
                    <li>Nippo Flange</li>
                    <li>Weldo Flange</li>
                    <li>Orifice Flange</li>
                </ul>
            ),
        },
        {
            question: 'Flange Grade and its Corresponding Pipe Grade',
            answer: (
                <>
                    <ul>
                        <li>Flanges conforming to ASTM A105N (Carbon Steel High Temperature). These Flanges can be used along with Pipes conforming to ASTM A53, A106, API 5L</li>
                        <li>Flanges conforming to ASTM A350 Grade LF1/2/3 (Carbon Steel Low Temperature). These Flanges can be used along with Pipes conforming to ASTM A333</li>
                        <li>Flanges conforming to ASTM A694 Grades F42 to F80(High Yield Carbon Steel). These Flanges can be used along with Pipes conforming to API 5L Pipe Grades</li>
                        <li>Flanges conforming to ASTM A182 Grades F1 to F91(Alloy Steel Flanges). These Flanges can be used along with Pipes conforming to ASTM A335.</li>
                        <li>Flanges conforming to ASTM A182 Grade F304, F316, F321. These Flanges can be used along with Pipes conforming to ASTM A312 SS Pipes</li>
                        <li>Flanges conforming to ASTM A182 Grade F44/F51/F53/F55 (Duplex/Super Duplex). These Flanges can be used along with Pipes conforming to ASTM A790/A928, Inconel, Incoloy, Hastelloy, Monel.</li>
                    </ul>
                </>
            ),
        },
        {
            question: 'How to order a Flange?',
            answer: (
                <>
                    <p>When ordering flanges, provide the following details:</p>
                    <ul>
                        <li>Type of Flange<br/> Eg: Weld Neck, Socket Weld, etc</li>
                        <li>Size of Pipe (NPS-Nominal Pipe Size)<br/> Eg:2”,3”,etc.</li>
                        <li>Schedule of the Pipe<br/> Eg: Sch 10,Sch,20,Sch30,Sch Std, Sch 40,etc</li>
                        <li>Rating or Class<br/> Eg: As per Standard such as ASME (150 – 2500),JIS B2220/KS1503(5k – 30k), DIN/UNI/EN 1092-1/GOST 12820,12821-80(PN6 – PN100),SANS/SABS(Class 600/3 – 4000/3),etc.</li>
                        <li>Face of the Flange<br/> Eg: FF(Flat Face),RF(Raised Face),RTJ (Ring Type Joint),etc.</li>
                        <li>Surface Finish of the Flange<br/> Eg: Smooth, Stock, Concentric Serrated, etc</li>
                        <li>Grade of the Material<br/> Eg: Ferrous such as Forged Carbon Steel, Stainless Steel, Duplex,etc or</li>
                        <li>Non-Ferrous such as CuproNickel,Copper,Aluminium, Bronze.</li>
                        <li>Specification of the Flange<br/> Eg: ASME B16.5,ASME B16.47 Type A,EN 1092-1,JIS,UNI,DIN, etc</li>
                    </ul>
                </>
            ),
        },
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        if (faqImageRef.current) {
            const img = faqImageRef.current;
            const textContainer = document.createElement('div');
            textContainer.style.position = 'absolute';
            textContainer.style.top = '60%';
            textContainer.style.left = '50%';
            
            textContainer.style.transform = 'translate(-50%, -50%)';
            img.style.position = 'relative';
            img.appendChild(textContainer);

            const letters = 'FAQs'.split('');
            letters.forEach((letter, index) => {
                const letterSpan = document.createElement('span');
                letterSpan.textContent = letter;
                letterSpan.style.color = 'white';
                letterSpan.style.fontSize = '3em';
                letterSpan.style.fontWeight = 'bold';
               
                letterSpan.style.opacity = '0';
                letterSpan.style.transform = 'translateX(-20px)'; // Start slightly left
                textContainer.appendChild(letterSpan);

                setTimeout(() => {
                    letterSpan.style.transition = 'opacity 2s ease-out, transform 2s ease-out';
                    letterSpan.style.opacity = '1';
                    letterSpan.style.transform = 'translateX(0)';
                }, 100 * index); // Delay based on letter index
            });
        }
    }, []);

    return (
        <div className="faq-container">
            <div className="faq-image" ref={faqImageRef}></div>
            <div className="faq-content">
                <div className="faq-right">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="faq-question">{item.question}</div>
                            {activeIndex === index && (
                                <div className="faq-answer">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faqs;