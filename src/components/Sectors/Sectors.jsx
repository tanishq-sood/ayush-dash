import React from 'react';
import './Sectors.css';

const Sectors = () => {
  return (
    <div className='sectors' id='sectors'>
        <div className="sector-photos">
            {/* Top Row */}
            <div className="photo-container" >
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={'/assets/ayurveda.png'} alt="Ayurveda" />
                </a>
                <div className="desc">
                    <p>{"Ayurveda is the time tested traditional system of medicine of India. The term 'Ayurveda' meaning 'the knowledge of life comprises of two Sanskrit words viz 'Ayu' meaning 'Life' and 'Veda' meaning 'Knowledge' or 'Science'."}</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={'/assets/yoga1.png'} alt="Yoga" />
                </a>
                <div className="desc">
                    <p>{"The word 'Yoga' comes from the Sanskrit word 'yuj' which means 'to unite or integrate'. Yoga is about the union of a person's own consciousness and the universal consciousness. Naturopathy is a cost-effective drugless, non-invasive therapy involving the use of natural materials for health care and healthy living."}</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={'/assets/unani1.png'} alt="Unani" />
                </a>
                <div className="desc">
                    <p>Unani System of medicine is a comprehensive medical system, which provides preventive, promotive, curative, and rehabilitative health care. The system is holistic in nature and takes into account the whole personality of an individual rather than taking a reductionist approach towards disease.</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={'/assets/siddha1.png'} alt="Siddha" />
                </a>
                <div className="desc">
                    <p>{"The Siddha system is an ancient system of medicine in India. The word 'Siddha' is derived from the root word \"Citti\" meaning attainment of perfection, eternal bliss, and accomplishment."}</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={'/assets/sowa1.png'} alt="Sowa-Rigpa" />
                </a>
                <div className="desc">
                    <p>{"Sowa-Rigpa is the traditional medicine of many parts of the Himalayan region used mainly by the Tribal and Bhot people. Sowa-Rigpa(Bodh-Kyi) means 'science of healing' and the practitioners of this medicine are known as Amchi."}</p>
                </div>
            </div>
            <div className="photo-container">
                <a href="https://ayush.gov.in/" target="_blank" rel="noopener noreferrer">
                    <img src={'/assets/homeopathy1.png'} alt="Homoeopathy" />
                </a>
                <div className="desc">
                    <p>{"'Homoeopathy' was introduced as a scientific system of drug therapeutics by a German Physician, Dr. Christian Frederick Samuel Hahnemann in 1805. The principle of Homoeopathy is Similia Similibus Curentur i.e. let likes be treated by likes."}</p>
                </div>
            </div>
        </div>
        <button className='btn dark-btn'>See More Here</button>
    </div>
  );
}

export default Sectors;
