import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = (markdown) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkdownStyle>
  );
};

const MarkdownStyle = styled.div`
  font-size: 1.5rem;
  line-height: 2.2rem;
`;

export default MarkdownRenderer;
