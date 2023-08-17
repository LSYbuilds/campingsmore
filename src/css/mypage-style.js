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
        position: relative;
        margin: 0 auto;
        margin-top: 25px;
        width: 150px;
        height: 150px;
        border-radius: 30px;
        background: gainsboro;
        img{
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
          width: 80%;
        }
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
        cursor: pointer;
        li {
          width: 70%;
          padding: 10px 0px;
          text-align: center;
          background: #b2b2b2;
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
    background: #fff;
    overflow: hidden;
    .security_title {
      margin-bottom: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      height: 32px;
      padding: 0px 10px;
      font-size: 23px;
      font-weight: bold;
      .security_btns {
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
        width: auto;
        height: 100%;
        button {
          width: auto;
          height: 100%;
          padding: 0px 30px;
          border-radius: 15px;
          border: none;
          color: #fff;
          background: #999898;
          cursor: pointer;
          &:hover {
            background: #f5f5dc;
            color: #000;
          }
        }
        .edit_all_btn {
          display: ${props => (props.something ? "none" : "block")};
        }
        .edit_submit_btn {
          display: ${props => (!props.something ? "none" : "block")};
        }
        .edit_cancel {
          display: ${props => (!props.something ? "none" : "block")};
        }
      }
    }
    .setting_box {
      margin: 10px 0px;
      width: 100%;
      height: 45px;
      padding: 5px 0px;
      border-bottom: 1px solid #dbdbdb;
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
        .setting_name {
          display: ${props => (props.something ? "none" : "block")};
        }
        span {
          font-size: 17px;
        }
        input {
          display: ${props => (!props.something ? "none" : "block")};
          padding: 0px 20px;
          width: 50%;
          height: 100%;
          border-radius: 15px;
          border: none;
          background: #f0f0f0;
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
    background: #fff;
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
      border-bottom: 1px solid #dbdbdb;
      display: flex;
      justify-content: space-between;
      .setting {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-left: 20px;
        .icon {
          margin-right: 30px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 50px;
          height: 50px;
          font-size: 16px;
        }
        .setting_name {
          display: ${props => (props.something ? "none" : "block")};
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
        display: ${props => (!props.something ? "none" : "block")};
        padding: 0px 20px;
        width: 50%;
        height: 100%;
        border-radius: 15px;
        border: none;
        background: #f0f0f0;
      }
    }
  }
  .withdrawal_account{
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    .withdrawal_btn{
      width: 80px;
      height: 35px;
      border: none;
      background: #999898;
      color:#fff;
      border-radius: 10px;
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
      width: 100%;
      height: 150px;
      border-radius: 15px;
      background-color: #fff;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      .inner {
        position: relative;
        display: flex;
        gap: 15px;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 10px;
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
          justify-content: space-between;
          width: 80%;
          height: 100%;
          font-size: 18px;
          .purchase_infos {
            display: flex;
            flex-direction: column;
            width: 75%;
            height: 100%;
            .purchase_date {
              font-size: 16px;
              color: #9d9d9d;
            }
            .purchase_info {
              width: 100%;
              height: 100%;
              p {
                &:first-of-type {
                  font-size: 25px;
                  font-weight: bold;
                }
                &:last-child {
                  font-size: 18px;
                }
              }
            }
          }
          .purchase_func {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            width: 15%;
            height: 100%;
            button {
              margin: 0 auto;
              width: 100%;
              height: 45px;
              border-radius: 10px;
              border: none;
              background: #f0d7b6;
              font-weight: 500;
              font-family: "NanumSquare";
              cursor: pointer;
              &:hover {
                color: #fff;
                background: #cd853f;
              }
            }
          }
        }
      }
    }
  }
  .empty_img_box {
    margin-left: 50%;
    margin-top: 15%;
    img {
      width: 350px;
      height: 300px;
    }
    p {
      font-size: 25px;
      color: #a9a9a9;
      font-weight: 700;
      margin-top: 20px;
      margin-left: 50px;
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
  .review_empty_img {
    margin-left: 50%;
    margin-top: 15%;
    img {
      width: 250px;
      height: 250px;
    }
    p {
      font-size: 25px;
      color: #a9a9a9;
      font-weight: 700;
      margin-top: 20px;
      margin-left: 50px;
    }
  }
`;

export const WritingWrapper = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin-bottom: 20px;
  }
  .writing_list {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    .write_img {
      margin-left: 50%;
      margin-top: 15%;
      img {
        width: 250px;
        height: 250px;
      }
      p {
        font-size: 25px;
        color: #a9a9a9;
        font-weight: 700;
        margin-top: 20px;
        margin-left: 25px;
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
  }
  .dibs_img {
    margin-left: 50%;
    margin-top: 15%;
    img {
      width: 250px;
      height: 250px;
    }
    p {
      font-size: 25px;
      color: #a9a9a9;
      font-weight: 700;
      margin-top: 20px;
      margin-left: 50px;
    }
  }
`;
