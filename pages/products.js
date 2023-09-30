import Layout from "@/components/Layout";
import Link from "next/link";

const Products = () => {
    return (
        <Layout>
            <Link href={"/products/new"} className="btn-accept">
                Add New Product
            </Link>

            
        </Layout>
    )
}

export default Products;