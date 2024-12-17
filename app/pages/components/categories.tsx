'use client'

import Image from "next/image";
import { Card } from "@material-tailwind/react";
import Link from "next/link";
import CategoryCard from "@/app/ui/categoryCard";
import { useRouter } from 'next/navigation'

const Categories = () => {
    const router = useRouter();

    const products = [
        { id: 1, title: "phones & tablets", imageUrl: "/phone_case.svg",},
        { id: 2, title: "Groceries", imageUrl: "/grocery.svg", },
        { id: 2, title: "Computing Deals", imageUrl: "/laptop_sale.svg", },
        { id: 2, title: "Televisions", imageUrl: "", },
        { id: 2, title: "Fridges", imageUrl: "  ", },
        { id: 2, title: "Sneakers", imageUrl: "/sneakers.svg", },
        { id: 2, title: "Watches", imageUrl: "/watches.svg", },
        { id: 2, title: "Mobile Accessories", imageUrl: "/headset.svg", }
        
        // Add more product data as needed
      ];

     
    

    return (
        <div className="">
        <
        div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-5 pb-6 m-5">
        {products.map((product) => (
            <CategoryCard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              
            />
          ))}
        </div>
        </div>
        // <div>
        // <div className="flex flex-wrap pb-9 ">
        //     <div className="pl-5 sm:pb-8 sm:pr-12">
        //         <Link href='/getStarted/mainHeader/categoryId'>
        //     <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden " >
        //         <div className="">
        //         <Image src='/phone_case.svg' alt='' width='60' height='10' />
        //         </div>
        //     </div>
        //     </Link>
        //     <div className=" flex items-center justify-center">Phones & Tablets</div>
        //     </div>
        //     {/*  */}

        //     <div className="pl-5 ">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/grocery.svg' alt='' width='100' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Groceries</div>
        //     </div>

        //     <div className="pl-5 sm:pb-8 sm:pr-12">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/laptop_sale.svg' alt='' width='100' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Computing Deals</div>
        //     </div>

        //     <div className="pl-5">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         {/* <Image src='/laptop_sale.svg' alt='' width='100' height='10' /> */}
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Televisions</div>
        //     </div>

        //     <div className="pl-5 sm:pb-8 sm:pr-12">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         {/* <Image src='/laptop_sale.svg' alt='' width='100' height='10' /> */}
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Fridges</div>
        //     </div>

        //     {/*  */}
        //     <div className="pl-5">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/sneakers.svg' alt='' width='100' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Sneakers</div>
        //     </div>
        // </div>


        // <div className="flex flex-wrap">
        //     <div className="pl-5 sm:pb-8 sm:pr-12">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/headset.svg' alt='' width='70' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Mobile Accessories </div>
        //     </div>
        //     {/*  */}

        //     <div className="pl-5">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/grocery.svg' alt='' width='100' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Groceries</div>
        //     </div>

        //     <div className="pl-5 sm:pb-8 sm:pr-12">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/shopping.svg' alt='' width='100' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Computing Deals</div>
        //     </div>

        //     <div className="pl-5">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         {/* <Image src='/laptop_sale.svg' alt='' width='100' height='10' /> */}
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Televisions</div>
        //     </div>

        //     <div className="pl-5 sm:pb-8 sm:pr-12">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         {/* <Image src='/laptop_sale.svg' alt='' width='100' height='10' /> */}
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Fridges</div>
        //     </div>

        //     {/*  */}
        //     <div className="pl-5">
        //     <Card className="w-40 h-20  flex items-center justify-center bg-[#D9D9D9] ">
        //         <div className="">
        //         <Image src='/watches.svg' alt='' width='100' height='10' />
        //         </div>
        //     </Card>
        //     <div className=" flex items-center justify-center">Watches</div>
        //     </div>
        // </div>
        // </div>
    )
}


export default Categories;