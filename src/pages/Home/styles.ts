import styled from "styled-components";

import {darken} from "polished";

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    li{
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 20px;
        background: #FFF;
        border-radius: 4px;

        img{
            align-self: center;
            max-width: 250px;
        }

        >strong{
            font-size: 16px;
            color: #333;
            margin-top: 5px;
            line-height: 20px;
        }

        >span{
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button{
            background: #7159c1;
            color: #FFF;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            transition: background 0.2s;

            &:hover{
                background: ${darken(0.03, "#7159c1")};
            }

            display: flex;
            align-items: center;

            div{
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);

                svg{
                    margin-right: 5px;
                }
            }

            >span{
                font-weight: bold;
                text-align: center;
                flex: 1;
            }
        }
    }
`;