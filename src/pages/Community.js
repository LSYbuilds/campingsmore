import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CommunityWrapper } from "../css/community-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getCommunityCategoryList,
  getCommunityList,
  getCommunityPage,
  searchCommunityData,
} from "../api/communityFetch";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Community = () => {
  const navigate = useNavigate();
  const [communityList, setCommunityList] = useState([]);
  const [comuList, setComuList] = useState([]);
  const [comuPage, setcomuPage] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [boardCategory, setBoardCategory] = useState();

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
    console.log("이게뭥미?", event.target.value);
  };

  const getCommunityData = async () => {
    try {
      const data = await getCommunityList();
      // setCommunityList(data);
      // 게시글 목록
      setComuList(data.list);
      setcomuPage(parseInt(data.maxPage, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const getCommunityDataPage = async _index => {
    try {
      const data = await getCommunityPage(_index);
      setComuList(data.list);
    } catch (err) {
      console.log(err);
    }
  };

  // 반복횟수에 따른 배열생성
  const pagenation = Array.from({ length: comuPage }, (_, index) => index);

  const handleGoToCommunityWrite = () => {
    navigate("/main/communitywrite");
  };

  const handlePage = index => {
    getCommunityDataPage(index);
  };

  const handleSearchKeywordChange = event => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = async event => {
    event.preventDefault();
    if (searchKeyword.trim() === "") {
      return;
    }
    // const result = await searchCommunityData(searchKeyword)
    // if(result) {
    //   setComuList(result.list)
    // }

    try {
      const result = await searchCommunityData(searchKeyword);
      if (result) {
        setComuList(result.list);
        setcomuPage(parseInt(result.maxPage, 10));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  // 최초 목록 호출
  useEffect(() => {
    getCommunityData();
  }, []);

  // 카테고리 목록 호출
  useEffect(() => {
    // getCommunityData();

    const fetchData = async () => {
      try {
        let data;
        if (selectedCategory) {
          data = await getCommunityCategoryList(selectedCategory);
          setComuList(data.list);
        }
        //  else {
        // undefined 출력됨(웹브라우저에서)
        //   data = await getCommunityCategoryList();
        // }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [selectedCategory]);

  const onClickHandleBoard = item => {
    navigate(`/main/communitybulletinboard?iboard=${item}`);
  };

  return (
    <CommunityWrapper>
      <div className="top_community_contents">
        <div className="community_contents_inner">
          <h1>커뮤니티</h1>
          <hr className="community_line" />

          <div className="community_input_area">
            <div action="" className="community_form">
              <select
                className="community_board_menu"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="" disabled>
                  분류
                </option>
                <option value="1">공지</option>
                <option value="2">자유</option>
                <option value="3">중고거래</option>
                <option value="4">질문</option>
                <option value="5">지역</option>
              </select>
              <form className="community_input_from" onSubmit={handleSearch}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="community_icon"
                  onClick={handleSearch}
                />
                <input
                  type="text"
                  className="community_search"
                  placeholder="검색어를 입력하세요"
                  value={searchKeyword}
                  onChange={handleSearchKeywordChange}
                  onKeyPress={handleKeyPress}
                />
              </form>
            </div>
          </div>
          <div className="community_board_list_head_box">
            <div className="community_write_box">
              <button
                className="community_board_regi"
                onClick={handleGoToCommunityWrite}
              >
                게시글 작성
              </button>
            </div>
            <div className="community_board_list_head">
              <ul className="community_board_bod">
                {comuList.map((item, index) => (
                  <li
                    key={index}
                    onClick={e => onClickHandleBoard(item.iboard)}
                  >
                    <div className="list_left">
                      <span className="list_item_cate">
                        <p>
                          {item.icategory === 1
                            ? "공지"
                            : item.icategory === 2
                            ? "자유"
                            : item.icategory === 3
                            ? "중고거래"
                            : item.icategory === 4
                            ? "질문"
                            : item.icategory === 5
                            ? "지역"
                            : item.icategory === 6}
                        </p>
                      </span>
                      <span className="list_item_title">{item.title}</span>
                    </div>
                    <div className="list_right">
                      <span className="list_item_name">{item.name}</span>
                      <span className="list_tiem_date">{item.createdat}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="comu_pagenation">
            {pagenation.map((item, index) => (
              <li key={index} onClick={() => handlePage(index)}>
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CommunityWrapper>
  );
};

export default Community;
