import React from 'react';
import Header from '../Components/Header';
import AddRestaurant from '../Components/AddRestaurant';
import RestaurantList from '../Components/RestaurantList';

const Home = () => {
    return (
        <div>
            <Header />
            <AddRestaurant />
            <RestaurantList />
        </div>
    )
}

export default Home;
