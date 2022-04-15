import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  //parse: 글자를 쪼개서 분석
  //url.parse(req.url, true).query = url로 들어온 것중에 query만 뽑아서 query에 담아라.
  const query = url.parse(req.url, true).query;

  const num1 = parseInt(query.num1);
  const num2 = parseInt(query.num2);

  res.writeHead(200, { "Content-Type": "text/thml" });

  //`${}`: 안의 값을 연산후 문자열로 바꿈
  res.end(`${num1 + num2}`);
});
server.listen(8000, () => {
  console.log("Server Start http://localhost:8000");
});
