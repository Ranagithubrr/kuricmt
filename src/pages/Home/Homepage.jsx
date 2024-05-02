import React, { useEffect, useState } from 'react';
import NavbarLanding from '../../components/Landing/NavbarLanding';
import MainView from '../../components/Landing/MainView';
import Teachers from '../../components/Landing/Teachers';
import Gallery from '../../components/Landing/Gallery';
import AboutUs from '../../components/Landing/AboutUs';
import Notices from '../../components/Landing/Notices';
import Quotes from '../../components/Landing/Quotes';
import Application from '../../components/Landing/Application';
import Footer from '../../components/Landing/Footer';
import axios from 'axios';

const Homepage = () => {
    const [allcontent,setAllContent] = useState([])
    const FetchContents = async () =>{
        const response = await axios.get('http://localhost:4000/content/website-data');
        setAllContent(response.data)
    };
    console.log(allcontent);
    useEffect(()=>{
        FetchContents();
    },[]);
    const adminTeacher = allcontent && allcontent.teachers && allcontent.teachers.find(teacher => teacher.type === "admin");
    const content = allcontent && allcontent.contents;
    console.log(content)
    return (
        <div className='px-8'>
            <NavbarLanding />
            <MainView Admin={adminTeacher} Content={content}/>
            <Teachers Teachers={allcontent.teachers}/>
            <AboutUs />
            <Notices />
            <Gallery />
            <Quotes />
            <Application />
            <Footer />
        </div>
    );
};

export default Homepage;