import React, { Component } from 'react';
import styles from './Carousel.module.scss';
const images = require.context('../../assets/images', true);

class Carousel extends Component {

    state = {
        position: 0,
    }

    moveRight = () => {
        const { position } = this.state;
        const { items } = this.props;
        if(position === items.length){
            this.setState({
                position: 0,
            })
        } else {
            this.setState({
                position: position + 1, 
            })
        }
    };
    
    moveLeft = () => {
        const { position } = this.state;
        const { items } = this.props;
        if(position === 0){
            this.setState({
                position : items.length - 1,
            })
        } else {
            this.setState({
                position: position - 1, 
            })
        }
    };

    render(){
        const { items, titleCarousel } = this.props;
        const { position } = this.state;
        return (
            <div className={styles.item}>
                <span className={styles.itemTitle}>{titleCarousel}</span>
                <div className={styles.dropDown}>
                    <h1 className={styles.title}>{items[position].title}</h1>
                    <span className={styles.text}>{items[position].product}</span>
                    <div className={styles.arrows}>
                        <span className={styles.arrow} onClick={this.moveLeft} />
                        <span className={styles.arrowRight} onClick={this.moveRight} />
                    </div>
                    <img className={styles.photo} src={images(`./${items[position].url}`)} alt={`${items[position].title} imag`} />
                    <p className={styles.description}>"{items[position].description}"</p>
                </div>
            </div>
        )
    }
}
export default Carousel;