import React, {useState, useEffect} from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';
const API = 'http://localhost:3000/initialState'

const App = () => {
const initialState = useInitialState(API);
return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
        <Header/>
        <Search/>
        
        <Categories title="Genin">
            <Carousel>
                {initialState.Genin.map( item =>
                  <CarouselItem key={item.id} {...item}/>
                )}               
            </Carousel>
        </Categories>

        <Categories title="Chunnin">
            <Carousel>
                {initialState.Chunnin.map( item =>
                  <CarouselItem key={item.id} {...item}/>
                )}               
            </Carousel>
        </Categories>

        <Categories title="Joinin">
            <Carousel>
            {initialState.Joinin.map( item =>
                  <CarouselItem key={item.id} {...item}/>
                )} 
            </Carousel>
        </Categories>

        <Categories title="Kage">
            <Carousel>
            {initialState.Kage.map( item =>
                  <CarouselItem key={item.id} {...item}/>
                )} 
            </Carousel>
        </Categories>

        <Categories title="Akatsuki">
            <Carousel>
            {initialState.Akatsuki.map( item =>
                  <CarouselItem key={item.id} {...item}/>
                )} 
            </Carousel>
        </Categories>

        <Footer/>
    </div>
    )
};

export default App;
