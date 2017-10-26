import React, {Component} from 'react';
import styles from '../style/Footer.css';

class Footer extends Component {
    render() {
        return (
         <footer className='navbar-fixed-bottom'><p>all created by <a href='http://www.linkedin.com/in/sil-k/' target='_blank'><i className='icon-giraffe'></i>SILK</a>|&copy;2017</p></footer>
        );
    }    
}

export default Footer;