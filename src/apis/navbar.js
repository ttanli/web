import { axios, BASE_URL } from "./index";

async function search(keyword) {
  let url = BASE_URL + "/search";
  try {
    let resp = await axios.request({
      url: url,
      method: "get",
      params: {
        keyword: keyword,
      },
    });
    return resp;
  } catch (error) {
    return error.response;
  }
}

export { search };
