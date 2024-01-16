// import styled from "styled-components";

import { useEffect, useState } from "react";

const ExperienceList = () => {
  const [experienceList, setExperienctList] = useState([]);

  const getExperienceList = () => {
    /**
      <h1>경력 컴포넌트</h1>
      <h1>프로젝트 이름:</h1>
      <h1>프로젝트 기간:</h1>
      <h1>프로젝트 설명:</h1>
      <h1>프로젝트 역할:</h1>
     */
    const resultList = [
      {
        id: 1,
        title: "project_01_title",
        period: "project_01_period",
        description: "project_01_description",
        role: "project_01_role",
      },
      {
        id: 2,
        title: "project_02_title",
        period: "project_02_period",
        description: "project_02_description",
        role: "project_02_role",
      },
      {
        id: 3,
        title: "project_03_title",
        period: "project_03_period",
        description: "project_03_description",
        role: "project_03_role",
      },
      {
        id: 4,
        title: "project_04_title",
        period: "project_04_period",
        description: "project_04_description",
        role: "project_04_role",
      },
      {
        id: 5,
        title: "project_05_title",
        period: "project_05_period",
        description: "project_05_description",
        role: "project_05_role",
      },
    ];

    setExperienctList(resultList);
  };

  useEffect(() => {
    getExperienceList();
  }, []);

  return (
    <>
      {experienceList.map((experience) => (
        <li key={experience.id}>
          <div>{experience.title}</div>
          <div>{experience.period}</div>
          <div>{experience.description}</div>
          <div>{experience.role}</div>
          <br />
        </li>
      ))}
    </>
  );
};

export default ExperienceList;
