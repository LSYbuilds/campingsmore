import axios from "axios";

const getbestitem = async () => {
  try {
    const res = await axios.get("/api/item/bestitem");
    const result = res.data;
    console.log("getbestitem 요청완료");
    console.log(result);
    console.log("뭐 안되냐");
  } catch (err) {
    console.log(err);
  }
  return [];
};

export { getbestitem };