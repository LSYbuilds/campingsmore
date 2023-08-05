import React, { useState } from "react";
import { MainWarp } from "../css/main-style";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderList from "./OrderList";
import Community from "./Community";
import CommunityWrite from "./CommunityWrite";
import Payment from "./Payment";
import OrderHistory from "./OrderHistory";
import OrderDetail from "./OrderDetail";
import MainContents from "./MainContents";
import { Route, Routes } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";
import ReviewModal from "../components/ReviewModal";
import Basket from "./Basket";
import Mypage from "./Mypage";
import CommunityBulletinBoard from "./CommunityBulletinBoard";

const MainPage = () => {
  return (
    <MainWarp>
      <Header />
      <Routes>
        <Route path="/" element={<MainContents />} />
        <Route path="/orderlist" element={<OrderList />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/communitywrite" element={<CommunityWrite />}></Route>
        <Route
          path="/communitybulletinboard"
          element={<CommunityBulletinBoard />}
        ></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/orderhistory" element={<OrderHistory />}></Route>
        <Route path="/reviewmodal" element={<ReviewModal />}></Route>
        <Route path="/paymentmodal" element={<PaymentModal />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/orderdetail" element={<OrderDetail />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
      <Footer />
    </MainWarp>
  );
};

export default MainPage;
