import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 25px;
  width: 80%;
  justify-content: center;
  padding-top: 50px;
  border-top: 1px solid #ffffff;
`
export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .nextPages {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-bottom: 16px;

    > span {
      color: #ffffff;
      font-size: 32px;
    }
  }

  svg {
    color: #ffffff;
    font-size: 32px;
    cursor: pointer;
  }

  h1 {
    padding: 15px;
    color: #ffffff;
  }
`
