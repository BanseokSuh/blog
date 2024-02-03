import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ markdown }) => {
  return (
    <MarkdownStyle>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkdownStyle>
  );
};

const MarkdownStyle = styled.div`
  font-size: 1rem;
  line-height: 1.6rem;
  white-space: pre-wrap;
`;

export default MarkdownRenderer;
