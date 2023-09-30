import Layout from "@/components/Layout";
import Link from "next/link";

const Products = () => {
    return (
        <Layout>
            <Link href={"/products/new"} className="transition-all ease-in-out delay-250 bg-gradient-to-b from-teal-400 via-teal-500 to-teal-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  duration-500 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 hover:dark:shadow-teal-600/80  hover:bg-gradient-to-t hover:from-teal-500 hover:via-teal-400 hover:to-teal-400">
                Add New Product
            </Link>

            
        </Layout>
    )
}

export default Products;