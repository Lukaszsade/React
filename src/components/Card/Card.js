import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        return (
            <div className={styles.component}>{this.props.title}</div>
        )

    }
}

export default Card;