import React from 'react';
import Header from "../../components/Header/Header";
import untitled from "../../assets/images/Untitled_Artwork.png";
import mq from "../../assets/images/mq-black.png";
import alltogether from "../../assets/images/all-together.png";
import happygirl from "../../assets/images/happy-girl.png";
import confetti from "../../assets/images/confetti-kids.png";
import shiko from "../../assets/images/Untitled_Artwork2.png";
import element1 from "../../assets/images/element1.png";
import element2 from "../../assets/images/element2.png";
import element3 from "../../assets/images/element3.png";
import background from "../../assets/images/background1.png";
import programet from "../../assets/images/programet.png";
import twothree from "../../assets/images/2-3.png";
import threefour from "../../assets/images/3-4.png";
import fourfive from "../../assets/images/4-5.png";
import ninetwo from "../../assets/images/9mo-2.png";
import sherbimet from "../../assets/images/sherbimet.png";
import littlekid from "../../assets/images/littlekid.png";
import watermelon from "../../assets/images/watermelon.png";
import bampow from "../../assets/images/bampow.png";
import apple from "../../assets/images/apple.png";
import vlerat from "../../assets/images/vlerat-tona.png";
import blue from "../../assets/images/blue.png";
import purple from "../../assets/images/purple.png";
import yellow from "../../assets/images/yellow.png";
import bluetriangle from "../../assets/images/footer-bg.png";
import heart1 from "../../assets/images/heart1.png";

const Home = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <img style={{position: 'absolute', zIndex: '-9999', width: 1700}} src={background}/>
            <Header/>
            <img style={{width: 800, paddingTop: 100}} src={mq}/>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-around', paddingBottom: 200}}>
                <div><img style={{width: 360, paddingBottom: 0}} src={element1}/></div>
                <div><img style={{width: 410, paddingTop: 300}} src={element2}/></div>
                <div><img style={{width: 360, paddingTop: 245}} src={element3}/></div>
            </div>
            <img src={programet}/>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '80%', paddingTop: 80}}>
                <img style={{width: 200}} src={ninetwo}/>
                <img style={{width: 200}} src={twothree}/>
                <img style={{width: 200}} src={threefour}/>
                <img style={{width: 200}} src={fourfive}/>
            </div>
            <img style={{width: 300, paddingTop: 160, paddingBottom: 80}}src={sherbimet}/>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style={{width: 293}} src={littlekid}/>
                    <h3 style={{color: '#FDBC38'}}>Aktivitete argëtuese</h3>
                    <p style={{fontSize: '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style={{width: 300}} src={bampow}/>
                    <h3 style={{color: '#FDBC38'}}>Aktivitete edukative</h3>
                    <p style={{fontSize: '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <img style={{width: 300}} src={apple}/>
                    <h3 style={{color: '#FDBC38'}}>Ushqime të shëndetshme</h3>
                    <p style={{fontSize: '16px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                </div>
            </div>
            <img style={{width: 300, paddingTop: 100, paddingBottom: 80}} src={vlerat}/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <img src={blue}/>
                <img src={purple}/>
                <img src={yellow}/>
            </div>
            <div style={{width: '100%'}}>
            <img style={{width: '100%', position: 'absolute'}} src={bluetriangle}/>
                <p>asd</p>
            </div>

        </div>
    )
}

export default Home;