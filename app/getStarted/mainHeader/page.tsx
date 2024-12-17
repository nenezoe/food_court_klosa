import DashboardHeader from "@/app/pages/components/dashboardHeader"
import CollectionCard from "@/app/ui/CollectionCard/page"
import Footer from "@/app/ui/Footer/page"
import SalesCard from "@/app/ui/SalesCard/page"

const mainHeader = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="mx-auto w-5/6 h-16 bg-orange-600 flex flex-row items-center p-6 text-white justify-between align-center text-center">
                <p className="font-bold">Flash Sales</p>
                <p>Time Left:<span className="font-bold">10hr : 58min : 25s</span>  </p>
                <p>See All</p>
            </div>
            <SalesCard title="O2 Sports Drink Can 35ml" subtext="20 items left" description="1,400" />
            <div className="mx-auto w-5/6 h-16 bg-orange-600 font-bold text-white flex flex-row items-center justify-center align-center text-center p-6">
                <p>Shop From Our Collections</p>
            </div>

            <div>
                <div className="relative bg-cover bg-center rounded-lg overflow-hidden background-image: url('/can.svg'); height: 300px;">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                            <h2 className="text-3xl font-semibold mb-2">Card Title</h2>
                            <p className="text-lg">Your centered text goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <CollectionCard
                        imageUrl="/can.svg"
                        title="Card Title"
                        description="Your centered text goes here."
                    />
                </div>
            </div>  
            <Footer />
        </div>
    )
}

export default mainHeader