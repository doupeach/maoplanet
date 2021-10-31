import './productListTag.css'


const ProductListTag = (props)=>{
    return(
        <>
            <button>{props.children}</button>
        </>
    )
}

export default ProductListTag;