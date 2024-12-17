import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-wrap justify-center p-8 bg-brown-900 text-white">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <h2 className="text-xl font-bold mb-4">About Us</h2>
                <ul className="list-none">
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">What we offer</a></li>
                    <li><a href="#">Why choose us</a></li>
                </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <ul className="list-none">
                    <li><a href="#">Installations</a></li>
                    <li><a href="#">Global export</a></li>
                    <li><a href="#">Request a catalogue</a></li>
                </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <h2 className="text-xl font-bold mb-4">Support</h2>
                <ul className="list-none">
                    <li><a href="#">Customer support</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Feedbacks</a></li>
                </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
                <h2 className="text-xl font-bold mb-4">Community</h2>
                <ul className="list-none">
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Telegram</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
