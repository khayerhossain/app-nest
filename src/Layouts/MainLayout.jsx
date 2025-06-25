import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-[calc(100vh-200px)]'>
            <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;