import '../Styles/ProductListTag.scss'


const ProductListTag = (props)=>{
    return(
        <>
            <button class='ProductListTag'>{props.children}</button>
        </>
    )
}

export default ProductListTag;