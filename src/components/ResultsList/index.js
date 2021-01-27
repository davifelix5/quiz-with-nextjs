import styled from 'styled-components';

const ResultsList = styled.ul`
    list-style: none;
    max-height: 350px;
    overflow-y: scroll;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 5px 10px 5px 5px;
    margin-bottom: 25px;
    ::-webkit-scrollbar {
        all: unset;
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.primaryDark};
        border-radius: ${({ theme }) => theme.borderRadius};
    }
    ::-webkit-scrollbar-thumb {
        all: unset;
        background: ${({ theme }) => theme.colors.primary};
        border-radius: ${({ theme }) => theme.borderRadius};
    }
    li {
        p {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:first-child {
                flex-direction: row;
            }
            span {
                font-size: 12px;
            }
            div {
                font-weight: bolder;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                padding: 5px;
                background-color: ${({ theme }) => theme.colors.primary};
                margin-right: 10px;
            }
        }
        display: flex;
        justify-content: space-between;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.colors.primaryDark};
        padding: 5px 10px;
        &.highlight {
            background-color: ${({ theme }) => theme.colors.primary};
            p div {
                border: 3px solid ${({ theme }) => theme.colors.textContrast};
            }
        }
        & + li {
            margin-top: 10px;
        }
    }

`;

export default ResultsList;
