/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Sectors.css';
import sector1 from '../../assets/ayurveda.png';
import sector2 from '../../assets/yoga1.png';
import sector3 from '../../assets/unani1.png';
import sector4 from '../../assets/siddha1.png';
import sector5 from '../../assets/sowa1.png';
import sector6 from '../../assets/homeopathy1.png';

const Sectors = () => {
  return (
    <div className='sectors' id='sectors'>
        <div className="sector-photos">
            {/* Top Row */}
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={sector1} alt="Ayurveda" />
                </a>
                <div className="desc">
                    <p>Ayurveda is the time tested traditional system of medicine of India. The term 'Ayurveda' meaning 'the knowledge of life comprises of two Sanskrit words viz 'Ayu' meaning 'Life' and 'Veda' meaning 'Knowledge' or 'Science'.</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={sector2} alt="Yoga" />
                </a>
                <div className="desc">
                    <p>The word 'Yoga' comes from the Sanskrit word 'yuj' which means 'to unite or integrate'. Yoga is about the union of a person's own consciousness and the universal consciousness. Naturopathy is a cost-effective drugless, non-invasive therapy involving the use of natural materials for health care and healthy living.</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={sector3} alt="Unani" />
                </a>
                <div className="desc">
                    <p>Unani System of medicine is a comprehensive medical system, which provides preventive, promotive, curative, and rehabilitative health care. The system is holistic in nature and takes into account the whole personality of an individual rather than taking a reductionist approach towards disease.</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={sector4} alt="Siddha" />
                </a>
                <div className="desc">
                    <p>The Siddha system is an ancient system of medicine in India. The word 'Siddha' is derived from the root word "Citti" meaning attainment of perfection, eternal bliss, and accomplishment.</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={sector5} alt="Sowa-Rigpa" />
                </a>
                <div className="desc">
                    <p>Sowa-Rigpa is the traditional medicine of many parts of the Himalayan region used mainly by the Tribal and Bhot people. Sowa-Rigpa(Bodh-Kyi) means 'science of healing' and the practitioners of this medicine are known as Amchi.</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={sector6} alt="Homoeopathy" />
                </a>
                <div className="desc">
                    <p>'Homoeopathy' was introduced as a scientific system of drug therapeutics by a German Physician, Dr. Christian Frederick Samuel Hahnemann in 1805. The principle of Homoeopathy is Similia Similibus Curentur i.e. let likes be treated by likes.</p>
                </div>
            </div>
        </div>
        <button className='btn dark-btn'>See More Here</button>
    </div>
  );
}

export default Sectors;
