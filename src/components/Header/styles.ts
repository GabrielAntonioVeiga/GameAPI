import styled from 'styled-components'

export const StyledHeader = styled.header`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const InputSearchContainer = styled.div`
  margin-top: 16px;
  margin-left: 20px;

  input {
    width: 216px;
    background: #fff;
    border: none;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`

export const SelectGenreContainer = styled.div`
  margin-top: 16px;
  margin-right: 80px;
  width: 150px;

  select {
    width: 150px;
    height: 52px;
    background: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border: 2px solid transparent;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    transition: border 0.2s ease-in;
    appearance: none;

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
    }
  }
`
