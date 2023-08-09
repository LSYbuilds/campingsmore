import {
  faCartShopping,
  faMagnifyingGlass,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { postBasket } from "../api/basketFetch";
import { OrderListWrapper } from "../css/orderlist-style";
import { getCookie } from "../api/cookie";

const OrderList = () => {
  const accessToken = getCookie("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(accessToken ? true : false);
  const navigate = useNavigate();
  const [orderlist, setOrderList] = useState([]);
  const [orderListitem, setOrderListItem] = useState([]);
  const [searchText, setSearchText] = useState("");

  // 현재페이지
  const [pageNum, setPageNum] = useState(0);

  const getOrderListCategory = async () => {
    try {
      const res = await axios.get("/api/item/category");
      // console.log(res.data);

      setOrderList(res.data);
      // 전체 리스트
      getOrderListSearch("");
    } catch (err) {
      console.log(err);
    }
  };

  const getOrderListSearch = async text => {
    try {
      const res = await axios.get(`/api/item/search?text=${text}`);
      setOrderListItem(res.data.itemList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrderListCategory();
  }, []);

  const handleSearch = () => {
    getOrderListSearch(searchText);
  };

  const handleSort = sortType => {
    // orderListitem을 정렬하는 로직 추가
    let sortedItems = [...orderListitem];

    switch (sortType) {
      case "LatestOrder":
        sortedItems.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        break;
      case "OldOrder":
        sortedItems.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        break;
      case "HighPrice":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "LowPrice":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setOrderListItem(sortedItems);
  };

  const handleCategoryClick = async categoryId => {
    console.log("handleCategoryClick : ", categoryId);
    try {
      const res = await axios.get(
        `/api/item/search?cate=${categoryId}&page=1&row=15&sort=0`,
      );
      setOrderListItem(res.data.itemList);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCart = iitem => {
    postBasket(iitem);
    if (isLoggedIn) {
      postBasket(iitem);
    } else {
      alert("마");
    }
  };

  const something = iitem => {
    console.log("클릭한 값 인덱스", iitem);
    // getOrderDetailPage(iitem);
    navigate(`/main/orderdetail?iitem=${iitem}`);
    // return <OrderDetail iitem={iitem} />;
  };

  return (
    <OrderListWrapper>
      <div className="orderlist_inner">
        <div className="orderlist_search">
          <input
            type="text"
            placeholder="찾으시는 캠핑음식이 있으신가요?"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button className="search_submit" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className="btn">
          <button onClick={() => handleSort("LatestOrder")}>최신순</button>
          <button onClick={() => handleSort("OldOrder")}>오래된순</button>
          <button onClick={() => handleSort("HighPrice")}>높은가격순</button>
          <button onClick={() => handleSort("LowPrice")}>낮은가격순</button>
        </div>
        <ul className="order_category">
          {orderlist.map((item, index) => (
            <li
              key={index}
              onClick={() => handleCategoryClick(item.iitemCategory)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <ul className="order_item_list">
          {orderListitem.map((item, index) => (
            <li key={index}>
              <div className="img">
                <img src={item.pic} alt="" />
              </div>
              <div className="product_desc">
                <span className="name">{item.name}</span>
                <span className="date">
                  <p className="item_price">{item.price} 원</p>
                  <p className="item_date">{item.createdAt}</p>
                </span>
              </div>
              <div className="content">
                <div className="orderlist_btn">
                  <button
                    className="shopping_basket"
                    onClick={e => handleCart(item.iitem)}
                  >
                    장바구니 담기
                    <FontAwesomeIcon icon={faCartShopping} />
                  </button>
                  <button
                    className="product_details"
                    onClick={e => something(item.iitem)}
                  >
                    <div
                      to={`/main/orderdetail?iitem=${item.iitem}`}
                      className="details_link"
                    >
                      상품상세보기
                      <FontAwesomeIcon icon={faTag} className="tag_icon" />
                    </div>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </OrderListWrapper>
  );
};

export default OrderList;
