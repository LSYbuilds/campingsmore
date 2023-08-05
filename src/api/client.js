import axios from "axios";
import { cookies, getCookie, setCookie } from "./cookie";

export const client = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// Request 처리
axios.interceptors.request.use(
  config => {
    // cookie를 활용 한 경우
    const token = getCookie("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => console.log(error),
);

// 쿠키 set 하기
export const fetchLogin = async (email, pw) => {
  try {
    const res = await client.post(
      `/sign-api/sign-in?id=${email}&password=${pw}`,
      {
        email: email,
        pw: pw,
      },
    );
    console.log(res.data);
    const result = await res.data;
    setCookie("refreshToken", result.refreshToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
    setCookie("accessToken", result.accessToken, {
      path: "/",
      secure: true,
      sameSite: "none",
      httpOnly: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCookie = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

// export const fetchLogout = () => {
//   cookies.remove("token");
// };
