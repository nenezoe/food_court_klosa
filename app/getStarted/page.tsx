
"use client"
import { Button } from "@material-tailwind/react";
import FeaturesCard from "../ui/FeaturesCard/page";
import LinkBar from "../ui/LinkBar/page";
import ListCard from "../ui/ListCard/page"
import { FaCheckCircle, FaEuroSign, FaGlobe, FaGripLines, FaHandHolding, FaHandHoldingUsd, FaShuttleVan, FaTimes } from 'react-icons/fa';
import FadedOverlayImage from "../ui/FadedOverlayImage/page";
import Footer from "../ui/Footer/page";

import ExploreHeader from "../pages/components/exploreHeader"

const getStarted = () => {
    const exampleData = [
        {
            title: 'JBL Headset 7280 wireless bluetooth speaker',
            description: 'Product Description',
            rating: 5,
            price: 256,
            progress: 75,
            img: "/desktop.svg"
        },
        {
            title: 'Logitech MX Master 3 Wireless Mouse',
            description: 'Ergonomic mouse with customizable buttons for productivity.',
            rating: 4.8,
            price: 99,
            progress: 85,
            img: "/headphone.png"
        },
        {
            title: 'Sony WH-1000XM4 Noise-Canceling Headphones',
            description: 'Premium over-ear headphones with industry-leading noise cancellation.',
            rating: 4.9,
            price: 349,
            progress: 95,
            img: "/desktop.svg"
        },
        {
            title: 'Dell XPS 13 Ultrabook',
            description: 'Powerful and sleek laptop for professional use.',
            rating: 4.7,
            price: 1299,
            progress: 80,
            img: "/headphone.png"
        },

    ];
    return (
        <>
            <div>
                <ExploreHeader />
                {/* <h1>Let's get started. What type of account would you like to create </h1> */}
            </div>
            <div className="listItems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-16">
                {exampleData.map((item, index) => (
                    <div key={index} className="bg-white-200">
                        <ListCard
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            progress={item.progress}
                            img={item.img}
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row p-10  text-white">
                <div className="md:mr-3 w-auto">
                    <FadedOverlayImage
                        imageUrl="/Group52.png"
                        title="Save Energy, Money & Time"
                        description="Shop from our wide range of categories"
                        bgProp="bg-yellow"
                        svgPath=""
                    /></div>
                <div className="w-auto">
                    <FadedOverlayImage
                        imageUrl="/rec2.png"
                        title="Featured Products"
                        description="Phone and Phone Accessories"
                        bgProp="bg-black"
                        svgPath="/rec34.svg"
                    /></div>
            </div>

            <LinkBar />

            <div className="listItems grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-16">
                {exampleData.map((item, index) => (
                    <div key={index} className="bg-white-200">
                        <ListCard
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            progress=""
                            img={item.img}
                        />
                    </div>
                ))}
            </div>

            <div className="bg-brown-900 text-center p-20 ">
                <p className="text-4xl mb-5 text-white">Why Chose Us?</p>
                <h2 className="text-white">
                    Hospitallite is recognised as the leading supplier of catering equipment in the UK ,supplying professional kitchen equipment ro restaurants , bars and more. From the latest professional kitchen equipment such as a  utensils and
                    others  Hospitallite is recognised as the leading supplier of catering equipment in the UK ,supplying professional kitchen equipment ro restaurants , bars and more. From the latest professional kitchen equipment such as a  utensils and
                    others Hospitallite is recognised as the leading supplier of catering equipment in the UK ,supplying professional kitchen equipment ro restaurants , bars and more. From the latest professional kitchen equipment such as a  utensils and
                    others carefully selected for your taste and we assure you a money back guarantee on shopping from our products . We promise to deliver quality and nothing but quality ,so shop from us and enjoy plenty freebies as you shop .
                </h2>
            </div>

            <div className="featureCard  p-10 md:p-20 flex flex-col md:flex-row text-center">
                <FeaturesCard icon="/check.svg"
                    title="PROMISE"
                    subtext="PRICE MATCH"
                    description="Quality products at the best possible
                    price. If you find the same product at 
                    a lower price , in stock ,we promise to
                    match it. Simple as that."
                />
                <FeaturesCard icon="/euro.svg"
                    title="GUARANTEE"
                    subtext="30 DAYS MONEY BACK"
                    description="Quality products at the best possible
                    price. If you find the same product at 
                    a lower price , in stock ,we promise to
                    match it. Simple as that.."
                />
                <FeaturesCard icon="/van.svg"
                    title="DELIVERY"
                    subtext="NEXT DAY"
                    description="Quality products at the best possible
                    price. If you find the same product at 
                    a lower price , in stock ,we promise to
                    match it. Simple as that."
                />
                <FeaturesCard icon="/envi.svg"
                    title="SUSTAINABILITY"
                    subtext="ENVIRONMENTAL"
                    description="Quality products at the best possible
                    price. If you find the same product at 
                    a lower price , in stock ,we promise to
                    match it. Simple as that."
                />
            </div>

            <div className="contactSection bg-orange-700 text-center flex flex-col align-middle justify-center text-white p-36">
                <p className="text-3xl font-bold mb-5">Sign up to emails and get 10% off</p>
                <p className="text-1xl mb-5">Enjoy exclusive offers , hot deals and super cool products by subscribing our daily mail list with just one click</p>
                <div className="flex flex-row w-auto justify-center">
                    <input type="email" placeholder="Enter your email" className="w-2/5 mr-3 rounded-3xl p-3 text-center text-sm" />
                    <Button className="rounded-3xl w-64 text-white font-bold bg-green-200">Submit</Button>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default getStarted