import { useEffect, useState } from "react";
import { Content } from "../Introduce";
import styled from "styled-components";

const ExperienceList = () => {
  const [experienceList, setExperienctList] = useState([]);

  const getExperienceList = () => {
    const resultList = [
      {
        id: 1,
        companyName: "로지브라더스", // 좌
        workPeriod: "2021.11. - 현재", // 좌
        role: "CODMOS Backend Developer",
        descriptionArr: [
          "LMS(교육관리시스템) 실시간 알림 시스템 개발",
          "AWS S3 버킷 및 레거시 메타 데이터 최적화",
          "랭킹 시스템 개발",
          "상점 API 및 상품 교환권 발송 시스템 개발",
          "약 1천만 건의 학습 이력 데이터 최적화",
        ],
        skillSetArr: [
          "Node.js",
          "MariaDB",
          "MongoDB",
          "Redis",
          "Docker",
          "AWS EC2",
          "AWS S3",
        ],
      },
      {
        id: 2,
        companyName: "다른_회사",
        workPeriod: "2000.00. - 2020.00.",
        role: "project_02_role",
        descriptionArr: ["hello1", "world", "hello34"],
        skillSetArr: [],
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
        <Container key={experience.id}>
          <CompanyInfo>
            <WorkPeriod>{experience.workPeriod}</WorkPeriod>
          </CompanyInfo>
          <Content>
            <CompanyName>{experience.companyName}</CompanyName>
            <Role>{experience.role}</Role>
            <>
              <Description>
                {experience.descriptionArr.map((description, idx) => (
                  <li key={idx}>{description}</li>
                ))}
                <li>
                  <SkillSet>Skill Set</SkillSet>
                  <SkillSetArr>
                    {experience.skillSetArr.map((skillSet, idx) => (
                      <SkillSetItem key={idx}>{skillSet}</SkillSetItem>
                    ))}
                  </SkillSetArr>
                </li>
              </Description>
            </>
          </Content>
        </Container>
      ))}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e2e2;
`;

const CompanyInfo = styled.div`
  width: 25%;
  font-size: 2rem;
`;

const WorkPeriod = styled.div`
  font-size: 1.5rem;
`;

const CompanyName = styled.div`
  font-size: 2rem;
`;

const Role = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Description = styled.div``;

const SkillSet = styled.div`
  margin-top: 1rem;
`;

const SkillSetArr = styled.div`
  display: flex;
  // margin-left: 1.6rem;
`;

const SkillSetItem = styled.div`
  background-color: grey;
  margin-right: 0.3rem;
  padding: 0 0.2rem;
  border-radius: 10%;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`;

export default ExperienceList;
