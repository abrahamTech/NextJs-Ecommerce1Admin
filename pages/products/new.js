import Layout from "@/components/Layout";
import { useState } from "react";

const NewProduct = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");

    const createProduct = () => {

    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1 className="font-light">New Product</h1>
                <div>
                    <label htmlFor="prodName" >Product Name</label>
                    <input 
                        type="text" 
                        placeholder="Laptop..." 
                        id="prodName" 
                        value={title} 
                        onChange={eventInp => setTitle(eventInp.target.value)} />
                </div>
                <div>
                    <label htmlFor="prodPrice" >Price ($USD)</label>
                    <input 
                        type="number" 
                        placeholder="54.99" 
                        id="prodPrice"
                        value={price}
                        onChange={eventInp => setPrice(eventInp.target.value)} />
                </div>
                <div>
                    <label htmlFor="prodDesc" >Description</label>
                    <textarea 
                        placeholder="It's a product with..." 
                        id="prodDesc" 
                        value={desc}
                        onChange={eventText => setDesc(eventText.target.value)} />
                </div>

                <button 
                    type="submit"
                    className="btn-primary">
                        Save
                </button>
            </form>
        </Layout>
    )
}

export default NewProduct;