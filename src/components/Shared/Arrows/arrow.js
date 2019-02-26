import React, { Component } from 'react';
import left from '../../../assets/images/left.png';
import right from '../../../assets/images/right.png';
import styles from './arrow.module.scss';

class arrow extends  Component {
    state = {
        view: 0,
    }

    moveRight = ({ request }) => {
        const { view } = this.state;
        if(view === request.lenght){
            this.setState({
                view: 0,
            })
        } else {
            this.setState({
                view: view + 1 
            })
        }
    };

    moveLeft = ({ request }) => {
        const { view } = this.state;
        if(view === 0){
            this.setState({
                view : request.length - 1,
            })
        } else {
            this.setState({
                view: view - 1, 
            })
        }
    };
    render(){
        return (
            <div className={styles.arrows}>
                <img className={styles.arrow} onClick={this.moveLeft} src={left} alt="arrow left"/>
                <img className={styles.arrow} onClick={this.moveRight} src={right} alt="arrow right"/>
            </div>
        )
    }
}

export default arrow;