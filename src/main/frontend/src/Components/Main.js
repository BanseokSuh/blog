import Experience from "./Experience/Experience";
import Brief from "./Brief";
import Introduce from "./Introduce";

const Main = () => {
  return (
    <>
      {/* 간략한 정보 영역 */}
      <Brief />
      {/* 소개 영역 */}
      <Introduce />
      {/* 경력사항 영역 */}
      <Experience />
    </>
  );
};

export default Main;
