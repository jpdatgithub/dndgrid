import './Card.scss';
import classNames from 'classnames';
import React from 'react';

export interface ICardProps {
    className?: string,
    children?: any
}

export default function Card(props: ICardProps) {
    const cardClassNames = classNames("default-card-class", props.className);

    return (
        <div className={cardClassNames}>
            {props.children}
        </div>
    );
}