import Layout from "@/components/Layout";

const NewProduct = () => {
    return (
        <Layout>
            <h1 className="font-light">New Product</h1>
            <div>
                <label htmlFor="prodName" >Product Name</label>
                <input type="text" placeholder="Laptop..." id="prodName" className="" />
            </div>
            <div>
                <label htmlFor="prodPrice" >Price ($USD)</label>
                <input type="number" placeholder="54.99" id="prodPrice" />
            </div>
            <div>
                <label htmlFor="prodDesc" >Description</label>
                <textarea placeholder="It's a product with..." id="prodDesc"></textarea>
            </div>

            <button className="btn-primary">Save</button>
        </Layout>
    )
}

export default NewProduct;