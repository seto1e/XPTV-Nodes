// 名稱：csp_nbyy
// 用途：XPTV 節點 - 低端影視風格解析

async function home(filter) {
  const res = await req("https://www.nbyy.cc/");
  const html = res.body;
  const list = [];
  const pattern = /<a href="(\/detail\/[^"]+)"[^>]>[\s\S]?<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    list.push({
      name: match[3], // 影片名稱
      pic: "https://www.nbyy.cc" + match[2], // 圖片完整網址
      url: "https://www.nbyy.cc" + match[1] // 詳細頁連結
    });
  }
  return JSON.stringify({
    class: [
      { type_name: "電影", type_id: "dianying" },
      { type_name: "電視劇", type_id: "dianshiju" },
      { type_name: "綜藝", type_id: "zongyi" },
      { type_name: "動漫", type_id: "dongman" }
    ],
    list
  });
}

async function category(tid, pg, filter, extend) {
  const res = await req(https://www.nbyy.cc/${tid}/page/${pg}.html);
  const html = res.body;
  const list = [];
  const pattern = /<a href="(\/detail\/[^"]+)"[^>]>[\s\S]?<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    list.push({
      name: match[3],
      pic: "https://www.nbyy.cc" + match[2],
      url: "https://www.nbyy.cc" + match[1]
    });
  }
  return JSON.stringify({ page: pg, pagecount: 999, list });
}

async function detail(url) {
  return JSON.stringify({
    name: "前往官網觀看",
    type: "無法解析播放連結",
    pic: "",
    content: url,
    vod_play_from: "官網",
    vod_play_url: "點此觀看$" + url
  });
}

async function search(wd, quick) {
  return JSON.stringify({ list: [] }); // 尚未支持搜尋
}