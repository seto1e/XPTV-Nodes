async function home(filter) {
  const res = await req("https://www.nbyy.cc/");
  const html = res.body;
  const list = [];
  const pattern = /<a href="([^"]+)"[^>]>\s<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    list.push({
      name: match[3],
      pic: match[2].startsWith("http") ? match[2] : "https://www.nbyy.cc" + match[2],
      url: match[1].startsWith("http") ? match[1] : "https://www.nbyy.cc" + match[1]
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
  const pattern = /<a href="([^"]+)"[^>]>\s<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    list.push({
      name: match[3],
      pic: match[2].startsWith("http") ? match[2] : "https://www.nbyy.cc" + match[2],
      url: match[1].startsWith("http") ? match[1] : "https://www.nbyy.cc" + match[1]
    });
  }
  return JSON.stringify({
    page: pg,
    pagecount: 999,
    list
  });
}
