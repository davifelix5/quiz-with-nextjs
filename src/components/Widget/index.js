import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  img {
    width: 100%;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }

  p {
    font-size: 16px;
  }

  a {
    margin-right: 15px;
    font-size: 16px;
    color: white;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  display: flex;
  flex-direction: column;
  p {
    line-height: 1.5;
    font-size: 16px;
  }
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  button {
    margin-top: 10px;
  }
  input {
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    padding: 10px 16px;
    font-size: 14px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
  }
  input:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
  }
`;

Widget.ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 10px 16px;
  width: 100%;
  letter-spacing: 2px;
  font-weight: 550;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled}
  }
`;

Widget.List = styled.ul`
    list-style: none;
    padding: 0;
    li {
      cursor: pointer;
      border-radius: ${({ theme }) => theme.borderRadius};
      background-color: ${({ theme }) => theme.colors.primaryDark};
      & + li {
        margin-top: 8px;
      }

      /* Para os links */
      & a {
        display: block;
        padding: 14px;
      }
      &:hover a {
        text-decoration: underline;
      }
    }

`;

export default Widget;
