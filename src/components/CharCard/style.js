import styled from 'styled-components'

export const Card = styled.li`
  width: 330px;
  height: 372px;
  padding: 15px;
  background-color: ${({ status }) => (status === 'Alive' ? '#269b266b' : '#ff000082')};
  border-radius: 4px;
  color: #ffff;
  position: relative;

  h3 {
    border-radius: 40px;
    margin-bottom: 15px;
    background-color: #ffff;
    text-align: center;
    color: ${({ status }) => (status === 'Alive' ? '#4e7c16' : '#ff0000')};
  }

  .favoriteIcon {
    font-size: 32px;
    position: absolute;
    right: 20px;
    bottom: 20px;
    color: ${({ favorite }) => (favorite ? '#f43f5e' : '#ffffff')};

    > path:nth-child(2) {
      stroke: #000000;
      stroke-width: 1px;
    }
  }

  .Atributes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 330px;
    height: 372px;
    gap: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #00000095;
    border-radius: 5px;
    border: 2px solid #000000;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;

      svg {
        font-size: 40px;
        cursor: pointer;
        color: ${({ favorite }) => (favorite ? '#f43f5e' : '#ffffff')};

        :hover {
          color: #f43f5e;
        }

        > path:nth-child(2) {
          stroke: #000000;
          stroke-width: 1px;
        }
      }

      h4 {
        color: green;
        background-color: #ffff;
        padding: 5px;
        border-radius: 4px;

        span {
          color: #000000;
          fill: red;
        }
      }
    }
  }
`
