import styled from "@emotion/styled";

function Cell(props) {
  const Button = styled.button`
    font-size: x-large;
    padding: 20px;
    border: none;
    background-color: rgb(110, 133, 235);
    text-align: center;
    ${(props) => {
      if (!props.status) return;
      if (props.status === "active")
        return "background-color: rgb(92, 219, 134)";
      return `background-color: rgb(41, 41, 41);
              color: rgb(124, 120, 120);
              text-decoration: line-through;`;
    }}
  `;

  // console.log(Button);
  return (
    <Button
      className={props.status ? `Cell ${props.status}` : "Cell"}
      status={props.status}
      onClick={props.onCellClick}
      value={props.value}
      id={props.id}
    >
      {props.value}
    </Button>
  );
}

export default Cell;
