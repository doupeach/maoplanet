import ProductListTag from "./ProductListTag";
import '../Styles/ProductDetails.scss'
import '../Styles/ProductList.scss'
import '../Styles/ProductListTag.scss'
import{FaRegHeart} from 'react-icons/fa'
import ProductCard from "./ProductCard";
import ProductListTitle from "./ProductListTitle";



const ProductDetails = () => {
return (
    <>
    <div className="productList-container">
    <div className="productTags">
        <ProductListTag >貓貓美食</ProductListTag>
        <ProductListTag >貓貓玩具</ProductListTag>
        <ProductListTag >貓貓廁所</ProductListTag>
        <ProductListTag >貓貓保健</ProductListTag>
        <ProductListTag >貓貓出遊</ProductListTag>
    </div>
    <div className="addToCartContainer">
      <div className="fourPics">
          <div id="pic1"></div>
          <div id="pic2"></div>
          <div id="pic3"></div>
          <div id="pic4"></div>
      </div>
      <div className="bigPic"></div>
      <div className="textAndBtnArea">
          <div className="productTitle">Vetreska 未卡 ｜起司貓抓板</div>
          <div className="promo">
            <p>至09/10 00:00截止 全店，奴你99！全館滿額現折
全店，訂單滿NT$ 999免運費</p>
          </div>
          <div className="productTitle">NT$ 390</div>
          <button className="productTag">起司貓抓板</button>
          <label>數量</label>
          <div className="numberSelect">
              <a>-</a>
              <a className="selectedNumber">1</a>
              <a>+</a>
          </div>
          <a className="toCart">加入購物車</a>
          <a className="toList"><FaRegHeart/> 加入追蹤清單</a>
      </div>
    </div>
    <div className="toggleTitleContainer">
        <a className="toggleTitle">商品描述</a>
        <a className="toggleTitle">送貨及付款方式</a>
    </div>
    <div className="detailsTextContainer">
        <div className="descriptionWrap">
            <div>
            <div className="des-pay-bigTitle">芝士起司，就是力量！</div>
            <div className="des-pay-bigText">
                ● 多孔造型 可玩可睡 可容納七公斤內貓咪<br></br>
                ● 超可愛外觀 裝點樸實無華的生活<br></br>
                ● 自帶貓窩的優質貓抓板<br></br>
                ● 優質選材 耐抓耐磨<br></br>
            </div> 
            </div>
            <div>
            <div className="des-pay-title">尺寸</div>
            <div className="des-pay-text">53x40x29.5cm</div>
            <div className="des-pay-title">重量</div>
            <div className="des-pay-text">0.65kg</div>
            <div className="des-pay-title">材質</div>
            <div className="des-pay-text">瓦愣紙、玉米澱粉膠</div>
            </div>
        </div>
        <div className="payAndShipWrap">
            <div>
                <div className="des-pay-bigTitle">送貨方式</div>
                <div className="des-pay-bigText">
                宅配<br></br>
                門市取貨 ( 取貨點 : 台中水湳店)<br></br>
                即時付款 ( 僅提供現場客人使用)
                </div>
            </div>
        
            <div >
                <div className="des-pay-bigTitle">付款方式</div>
                <div className="des-pay-bigText">
                    信用卡<br></br>
                    LINE Pay<br></br>
                    ATM<br></br>
                    即時付款
                </div>
            </div>
        </div>
    </div>

    <div className="productBigPics">
        <div id="bigPic1" className="bigPic"></div>
        <div id="bigPic2" className="bigPic"></div>
        <div id="bigPic3" className="bigPic"></div>
        <div id="bigPic4" className="bigPic"></div>
        <div id="bigPic5" className="bigPic"></div>

    </div>
    </div>
    </>
    )
}

export default ProductDetails;