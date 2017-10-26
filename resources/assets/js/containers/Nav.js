import React, { Component } from 'react';
import styles from '../style/Nav.css';

    class Nav extends Component {

      render() {
        return (
            <nav>
                <h2><i className='icon-flight'></i>Zarezerwuj bilet!</h2>
                <form>
                    <label><p>login</p></label>
                    <input type='email'></input>
                    <label><p>hasło</p></label>
                    <input type='password'></input>
                    <input type='submit' value='zaloguj' id='btnLogIn' className='btn btn-success'></input>
                </form>  
             </nav>

        );
      }
        sign() {
            document.getElementById('signDiv').style.marginTop = '30px';
        }
    }

export default Nav;
    