import { useEffect, useState } from "react";

const ProjectList = () => {
  const [projectList, setProjectList] = useState([]);

  const getProjectList = () => {
    const resultList = [
      {
        id: 1,
        title: "제목_001",
        description: "설명_001",
        period: "기간_001",
      },
      {
        id: 2,
        title: "제목_002",
        description: "설명_002",
        period: "기간_002",
      },
      {
        id: 3,
        title: "제목_003",
        description: "설명_003",
        period: "기간_003",
      },
    ];

    setProjectList(resultList);
  };

  useEffect(() => {
    getProjectList();
  }, []);

  return (
    <>
      {projectList.map((project) => (
        <li key={project.id}>
          <div>프로젝트 제목 : {project.title}</div>
          <div>프로젝트 설명 : {project.description}</div>
          <div>프로젝트 기간 : {project.period}</div>
          <br />
        </li>
      ))}
    </>
  );
};

export default ProjectList;
