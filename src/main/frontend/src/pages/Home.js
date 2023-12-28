import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보임</p>
      <Link to="/about">소개</Link>
      <br></br>
      <Link to="/posts">글목록</Link>
    </div>
  );
};

export default Home;
