import styled from "@emotion/styled";

function NumberTable({ children }) {
  const NumberTable = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    width: fit-content;
    margin-bottom: 30px;
  `;
  return <NumberTable>{children}</NumberTable>;
}

export default NumberTable;
