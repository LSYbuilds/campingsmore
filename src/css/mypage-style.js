import styled from "@emotion/styled";

export const MypageWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-top: 120px;
  .mypage_inner {
    margin: 0 auto;
    display: flex;
    width: 1300px;
    height: auto;
    .my_menu {
      display: flex;
      flex-direction: column;
      width: 25%;
      background: #fff;
      padding: 20px 20px 200px 20px;
      .my_menu_title {
        font-size: 23px;
        font-weight: bold;
      }
      .profile_img_box {
        margin: 0 auto;
        margin-top: 25px;
        width: 150px;
        height: 150px;
        border-radius: 30px;
        background: gainsboro;
      }
      .profile_info {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        span {
          text-align: center;
          font-size: 16px;
        }
        .profile_name {
          font-size: 18px;
          font-weight: bold;
        }
      }
      .my_menu_list {
        margin: 0 auto;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
        li {
          width: 70%;
          padding: 10px 0px;
          text-align: center;
          background: #999898;
          color: #fff;
          font-size: 17px;
          border-radius: 25px;
        }
      }
    }
    .my_contents {
      width: 75%;
      height: 100%;
      padding: 100px;
    }
  }
`;

export const EditWrapper = styled.div`
  width: 100%;
  height: 100%;
  .security_set {
    margin-bottom: 50px;
    width: 100%;
    height: auto;
    padding: 15px;
    border-radius: 15px;
    background: #d9d9d9;
    overflow: hidden;
    .security_title {
      font-size: 23px;
      font-weight: bold;
    }
    .setting_box {
      margin: 10px 0px;
      width: 100%;
      height: 45px;
      padding: 5px 0px;
      border-bottom: 1px solid #a5a5a5;
      display: flex;
      justify-content: space-between;
      .setting {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        height: 100%;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          font-size: 25px;
        }
        span {
          font-size: 17px;
        }
        input {
          padding: 0px 20px;
          width: 50%;
          height: 100%;
          border-radius: 15px;
          border: none;
        }
      }
      button {
        width: 100px;
        background: #999898;
        border-radius: 25px;
        border: none;
        color: #fff;
      }
    }
  }
  .info_set {
    width: 100%;
    height: auto;
    padding: 15px;
    border-radius: 15px;
    background: #d9d9d9;
    overflow: hidden;
    .info_set_title {
      font-size: 23px;
      font-weight: bold;
    }
    .setting_box {
      margin: 10px 0px;
      width: 100%;
      height: 45px;
      padding: 5px 0px;
      border-bottom: 1px solid #a5a5a5;
      display: flex;
      justify-content: space-between;
      .setting {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        height: 100%;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          font-size: 25px;
        }
        span {
          font-size: 17px;
        }
      }
      button {
        width: 100px;
        background: #999898;
        border-radius: 25px;
        border: none;
        color: #fff;
      }
      input {
        padding: 0px 20px;
        width: 50%;
        height: 100%;
        border-radius: 15px;
        border: none;
      }
    }
  }
`;

export const PurchaseWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin-bottom: 20px;
  }
  /* background: #d9d9d9; */
  .purchase_list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: 100%;
    li {
      position: relative;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      width: 100%;
      height: 150px;
      padding: 10px;
      border-radius: 15px;
      background-color: #fff;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      .purchase_img {
        width: 150px;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .purchase_info_box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 80%;
        height: 100%;
        font-size: 18px;
        .purchase_date {
          font-size: 16px;
          color: #9d9d9d;
        }
        .purchase_info {
          width: 100%;
          height: 100%;
          p {
            &:first-child {
              font-size: 25px;
              font-weight: bold;
            }
            &:last-child {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;

export const ReviewHistoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin-bottom: 20px;
  }
  .review_list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    height: auto;
    li {
      display: flex;
      width: 100%;
      height: 150px;
      gap: 15px;
      padding: 10px;
      border-radius: 15px;
      background-color: #fff;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      .review_img {
        width: 150px;
        height: 100%;
        border-radius: 15px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .review_info_box {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 90%;
        height: 100%;
        .review_grade {
          display: flex;
          gap: 10px;
          align-items: center;
          width: 100%;
          height: 25px;
          .review_grade_star {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 1px;
            p {
              display: flex;
              flex-direction: column;
              justify-content: center;
              img {
                width: 18px;
                height: 18px;
              }
            }
          }
        }
      }
    }
  }
`;

export const WritingWrapper = styled.div`
  width: 100%;
  height: 100%;
  .writing_list {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    li {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 150px;
      gap: 10px;
      padding: 20px;
      border-radius: 15px;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      .writing_title {
        font-size: 18px;
        width: 100%;
        height: 30px;
      }
      .writing_text {
        width: 100%;
        height: 80%;
        overflow: hidden;
      }
    }
  }
`;

export const DibsWrapper = styled.div`
  width: 100%;
  height: 100%;
  .writing_list {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;