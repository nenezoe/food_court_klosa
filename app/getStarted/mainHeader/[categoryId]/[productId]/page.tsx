import Product from "@/app/pages/components/product";
import SubCategories from "@/app/pages/components/subcategories";

const ProductScreen = ({params, } : {params: {productId: string}}) => {
    return(
        <Product params={{
            productId: ""
        }}/>
        
    )
}

export default ProductScreen;