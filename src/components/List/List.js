import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        src: PropTypes.string,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }

    render() {
        return (
            <main className={styles.component}>
                <section className={styles.component}>
                    <Hero titleText={this.props.title} src={this.props.src} />
                    <div className={styles.description}>
                        {this.props.children}
                    </div>
                    <div className={styles.columns}>
                        <Column title={'Animals'} />
                        <Column title={'Plants'} />
                        <Column title={'Minerals'} />
                    </div>
                </section>
            </main>
        )
    }
}

export default List;
