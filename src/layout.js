import React from 'react';
import Header from './components/Header';
import Lunbo from './components/Lunbo';
import Footer from './components/Footer';


export default function Layout(props){
    
        return (
            <div className='container-all'>
            <Header />
            <Lunbo />
           {props.children}
            <Footer />
            </div>
            
        )
    
}