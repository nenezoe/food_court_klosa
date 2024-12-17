import SubCategories from "@/app/pages/components/subcategories";

const SubcategoryPage = ({params, } : {params: {categoryId: string}}) => {
    return(
        <SubCategories params={{
            categoryId: ""
        }}/>
        
    )
}

export default SubcategoryPage;