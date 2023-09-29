import Layout from "@/components/Layout";
import Link from "next/link";

const Products = () => {
    return (
        <Layout>
            <Link href={"/products/new"} className="text-white bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Add New Product
            </Link>
            
            <Link href={"/products/new"} className="transition ease-in-out delay-250 bg-teal-400 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-500">
                Add New Product
            </Link>

            
        </Layout>
    )
}

export default Products;