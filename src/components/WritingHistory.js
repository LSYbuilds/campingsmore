import React from "react";
import { WritingWrapper } from "../css/mypage-style";

const WritingHistory = ({ comulist }) => {
  console.log(comulist[1]);
  return (
    <WritingWrapper>
      <ul className="writing_list">
        <h1>작성글</h1>
        {comulist.length ? (
          <>
            {comulist.map((item, index) => (
              <li key={index}>
                <div className="writing_title">{item.title}</div>
                <div className="writing_text">{item.createdat}</div>
              </li>
            ))}
          </>
        ) : (
          <div className="write_img">
            <img src="../image/write.png" alt="" />
            <p>작성글 내역이없습니다.</p>
          </div>
        )}
      </ul>
    </WritingWrapper>
  );
};

export default WritingHistory;
