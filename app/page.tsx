"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Image from "next/image";
import {FaGripLines,FaTimes} from 'react-icons/fa';

export default function page() {
  const [open, setOpen] = useState(0);
  const [isToggle, toggle]: any = useToggle();
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  // const [formData, setFormData] = useState({
  //   email: "",
  // });

  // const [response, setResponse] = useState("");
  // const [loading, setLoading] = useState(false);

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   axios
  //     .post("https://klosa-api-390b63f4ae67.herokuapp.com/api/email", formData)
  //     .then((response) => {
  //       console.log("Response:", response.data);
  //       setResponse(JSON.stringify(response.data));
  //       toast.success("Thank you for joining the waiting list");
  //     })
  //     .catch((error) => {
  //       toast.error("Error occurred.");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  return (
    <div className="w-full ">
      <nav className="flex flex-row justify-between px-8 lg:px-12 md:px-14 items-center bg-[#21A0AA] h-20">
        <div>
          <Image
            src="/klosa.svg"
            width={150}
            height={150}
            objectFit="cover"
            alt="logo"
            className="mb-10"
          />
        </div>
        <div className='flex lg:hidden relative'>
					<div
						className=' lg:hidden text-white text-3xl cursor-pointer'
						onClick={toggle}>
						{isToggle ? <FaTimes /> : <FaGripLines />}
					</div>
				</div>
        <ul className="lg:flex lg:flex-row lg:items-center font-bold text-white gap-8 hidden">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/log-in">Log In</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
        </ul>
      </nav>
      <header className="px-8 lg:px-12 flex flex-col md:flex-col lg:flex-row justify-between items-center">
        <div className="text-left space-y-6 flex flex-col justify-center mt-8 md:mt-24">
          <strong className="text-[40px] md:text-[45px] lg:text-[50px]">
            <span className="font-bold">Shop,Order,Track and Pay</span>
            <br />
            for goods on <span className=" font-bold">Klosa</span>
          </strong>
          <p className="text-[14px] md:text-[20px] font-medium text-gray-700">
            We know you can’t do it all alone , we are here to help
            <br />
            by giving you close & fast delivery
          </p>
          <Link href="/getStarted">
          <button className="bg-[#FF7D55] w-full px-2 lg:w-64 h-14 text-[18px] rounded-md text-white font-bold transition delay-150 duration-300 ease-in-out">
            Get Started
          </button>
          </Link>
        </div>
        <div className="pt-14">
          <Image
            src="/klosa-banner.svg"
            width={500}
            height={250}
            objectFit="cover"
            alt="banner"
          />
        </div>
      </header>
      <main className="pt-44">
        <div className="text-center pb-12">
          <strong className="text-[30px] md:text-[45px] lg:text-[45px]">
            What are we offering you ?
          </strong>
        </div>
        <div className="flex lg:flex-row flex-col gap-20 justify-around">
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/iconKlosa3.svg"
              width={100}
              height={50}
              objectFit="cover"
              alt="logo"
            />
            <strong>Easy shopping</strong>
            <p className="text-[14px] font-medium text-gray-700 w-52 text-center">
              Our web platform is tailored to suit your needs and provide the
              services and products.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/iconKlosa2.svg"
              width={100}
              height={50}
              objectFit="cover"
              alt="logo"
            />
            <strong>Convenient store </strong>
            <p className="text-[14px] font-medium text-gray-700 w-52 text-center">
              We have partnered with stores closer to you to give you the best
              products.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/iconklosa1.svg"
              width={100}
              height={50}
              objectFit="cover"
              alt="logo"
            />
            <strong>Flexible payment </strong>
            <p className="text-[14px] font-medium text-gray-700 w-52 text-center">
              Payment made easy with our blockchain powered system and also fait
              payment.
            </p>
          </div>
        </div>
      </main>
      <section className="pt-24 flex flex-col items-center">
        <div className="text-center pb-12">
          <strong className="text-[30px] md:text-[45px] lg:text-[45px]">
            Who we are
          </strong>
        </div>
        <div className="lg:max-w-[1000px] max-w-[700px] px-12">
          <p className="text-[16px] lg:text-[20px] text-gray-700 font-medium text-center">
            AT KLOSA , we believe that shopping should be an experience, not a
            chore.That’s why we’ve curated a vast and diverse selection of
            products, spanning from fashion and electronics to home essentials
            and beyond. Our mission is to make every aspect of your life easier
            and more enjoyable by offering a one-stop shopping solution.
          </p>
        </div>
      </section>
      <section className="pt-44 flex px-8 gap-14 flex-col lg:flex-row lg:justify-around items-center">
        <div>
          <Image
            src="/klosaSection.svg"
            width={500}
            height={250}
            objectFit="cover"
            alt="section-image"
          />
        </div>
        <div className="max-w-md space-y-4">
          <strong className="text-[18px] md:text-[24px] lg:text-[24px]">
            Enjoy our professional customer support and get help with any issue.
          </strong>
          <p className="text-[14px] md:text-[20px] font-medium text-gray-700">
            Some hardworking people are working day and night to provide
            scalable product for you and yours.
          </p>
          <button className="bg-[#FF7D55] w-full px-2 md:w-64 h-14 text-[18px] rounded-md text-white font-bold transition delay-150 duration-300 ease-in-out">
            Contact us
          </button>
        </div>
      </section>
      <section className="pt-44 flex flex-col items-center px-8">
        <div>
          <strong className="text-[30px] md:text-[45px] lg:text-[45px]">
            Frequently Asked Questions
          </strong>
        </div>
        <div className="max-w-3xl py-20">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is klosa ?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How does Klosa works?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              Can I make crypto on klosa App ?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              Does Klosa have a reward system?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              How Is Klosa wallet truly decentralized?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(6)}>
              How Is Klosa wallet truly decentralized?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(7)}>
              How many crypto currency does Swyppe wallet support
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
            <AccordionHeader onClick={() => handleOpen(8)}>
              What blockchain is swyype built on?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </section>
      <footer className="bg-[#21A0AA] h-20 flex flex-row gap-6 justify-center items-center">
        <Image
          src="/facebook-s.svg"
          width={30}
          height={30}
          objectFit="cover"
          alt="logo"
        />
        <Image
          src="/linkedin-s.svg"
          width={30}
          height={30}
          objectFit="cover"
          alt="logo"
        />
        <Image
          src="/telegram-l.svg"
          width={30}
          height={30}
          objectFit="cover"
          alt="logo"
        />
        <Image
          src="/twitter-s.svg"
          width={30}
          height={30}
          objectFit="cover"
          alt="logo"
        />
        <Image
          src="/whatsapp-s.svg"
          width={30}
          height={30}
          objectFit="cover"
          alt="logo"
        />
      </footer>
      <div
				onClick={toggle}
				className='md:block lg:hidden  fixed top-16 z-50'>
				{isToggle && 
					<div className='w-screen  bg-[#21A0AA] p-8 rounded-lg relative z-40'>
             <ul className="flex flex-col items-center font-bold text-white gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/log-in">Log In</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign up</Link>
          </li>
        </ul>
            </div>}
          </div>
    </div>
  );
}

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}


export const useToggle = (intialState = false) => {
	const [state, setState] = useState(intialState);

	const toggle = () => {
		setState((prev) => !prev);
	};

	return [state, toggle];
};