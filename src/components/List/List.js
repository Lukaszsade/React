import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
    render() {
        return (
            <main className={styles.component}>


                <section className={styles.component}>
                    <Hero />
                </section>

            </main>
        )
    }
}

export default List;
