import React from 'react';
import SliderContainer from '../../Pages/Slider/SliderContainer';
import TrendingApps from '../../Pages/TrendingApps/TrendingApps';
import ProductivityApps from '../../Pages/ProductivityApps/ProductivityApps';
import HealthCareApps from '../../Pages/HealthApps/HealthCareApps';
import EducationalApps from '../../Pages/EducationalApps/EducationalApps';
import usePageTitle from '../../Pages/PageTitle/PageTitle';
const Home = () => {
    usePageTitle('Home');
    return (
        <div>
            <SliderContainer></SliderContainer>
            <TrendingApps></TrendingApps>
            <ProductivityApps></ProductivityApps>
            <HealthCareApps></HealthCareApps>
            <EducationalApps></EducationalApps>
        </div>
    );
};

export default Home;