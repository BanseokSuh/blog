import styled from "styled-components";

import ExperienceList from "./ExperienceList";

const Experience = () => {
  return (
    <>
      <Title>Experience</Title>
      <ExperienceList />
    </>
  );
};

const Title = styled.div`
  width: 100%;
  padding: 1.5rem;
  font-size: 2.5rem;
`;

export default Experience;
