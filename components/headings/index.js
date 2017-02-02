import React from 'react';
import { blue, purple } from '../colors';

export const H1 = (props, variant) => {
    return(
        <h1>
            {props.children}
            <style>
                {`
                    h1{
                        font-size: 2em;
                        color: ${blue};
                    }
                    @media (min-width: 768px) {
                        h1{
                            font-size: 2.5em;
                        }
                    }
                    @media (min-width: 992px) {
                        h1{
                            font-size: 3em;
                        }
                    }
                `}
            </style>
        </h1>
    );
    
};

export const H2 = (props, variant) => {
    return(
        <h2>
            {props.children}
            <style>
                {`
                    h2{
                        font-size: 1.625em;
                    }
                    @media (min-width: 768px) {
                        h2{
                            font-size: 2em;
                        }
                    }
                    @media (min-width: 992px) {
                        h2{
                            font-size: 2.25em;
                        }
                    }
                `}
            </style>
        </h2>
    );
};

export const H3 = (props, variant) => {
    return(
        <h3>
            {props.children}
            <style>
                {`
                    h3{
                        font-size: 1.375em;
                    }
                    @media (min-width: 768px) {
                        h3{
                            font-size: 1.5em;
                        }
                    }
                    @media (min-width: 992px) {
                        h3{
                            font-size: 1.75em;
                        }
                    }
                `}
            </style>
        </h3>
    )
};

export const H4 = (props, variant) => {
    return(
        <h4>
            {props.children}
            <style>
            {`h4{
                font-size: 1.125em;
            }`}
            </style>
        </h4>
    );
};
