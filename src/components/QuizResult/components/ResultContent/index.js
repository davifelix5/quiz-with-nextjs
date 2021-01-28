import styled from 'styled-components';

import Widget from '../../../Widget';

const ResultContent = styled(Widget.Content)`
    h1 {
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 20px
    }
    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        margin-bottom: 8px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: bold;
        align-self: center;
        padding: 10px;
    }
    a:hover {
        text-decoration: underline;
    }
`;

ResultContent.List = styled.ul`
    list-style: none;
    max-height: 350px;
    overflow-y: scroll;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 5px;
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
            span.medal {
                display: block;
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
            &:first-child {
                flex-direction: row;
            }
            span {
                font-size: 12px;
            }
        }
        display: flex;
        justify-content: space-between;
        border-radius: ${({ theme }) => theme.borderRadius};
        background-color: ${({ theme }) => theme.colors.primaryDark};
        padding: 5px 10px;
        &.highlight {
            background-color: ${({ theme }) => theme.colors.primary};
            p span.medal {
                border: 3px solid ${({ theme }) => theme.colors.contrastText};
            }
        }
        & + li {
            margin-top: 10px;
        }
    }

`;

export default ResultContent;
