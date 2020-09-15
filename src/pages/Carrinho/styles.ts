import styled from "styled-components";

import {darken} from "polished";

export const Container = styled.div`
    background: #FFF;
    padding: 30px;
    border-radius: 4px;

    footer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;

        button{
            background: #7159c1;
            color: #FFF;
            border: 0;
            padding: 12px 20px;
            border-radius: 4px;
            font-weight: bold;
            text-transform: uppercase;

            &:hover{
                background: ${darken(0.03, "#7159c1")}
            }
        }

        div{
            display: flex;
            align-items: baseline;

            span{
                color: #999;
                font-weight: bold;
                text-transform: uppercase;
            }

            strong{
                font-size: 28px;
                margin-left: 5px;
            }
        }
    }
`;

export const TableProduct = styled.table`
    width: 100%;

    thead th{
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td{
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img{
        height: 100px;
    }

    strong{
        color: #333;
        display: block;
    }

    span{
        font-weight: bold;
        font-size: 18px;
        display: block;
        margin-top: 5px;
    }

    div{
        display: flex;
        align-items: center;

        input{
            width: 50px;
            border: 1px solid #ddd;
            padding: 6px;
            border-radius: 4px;
        }
    }

    button{
        background: none;
        border: 0;
        padding: 6px;
    }
`;