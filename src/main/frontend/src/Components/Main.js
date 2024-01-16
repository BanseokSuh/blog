import Experience from "./Experience/Experience";
import Introduce from "./Introduce";

const Main = () => {
  return (
    <>
      {/* 소개 영역 */}
      <Introduce />
      <br />

      {/* 경력사항 영역 */}
      <Experience />
    </>
  );
};

export default Main;
