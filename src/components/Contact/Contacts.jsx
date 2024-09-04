import React from 'react';
import './Contacts.css';
import message from '../../assets/message.png';
import mail from '../../assets/mail.png';
import phone from '../../assets/phone.png';
import location from '../../assets/location.png';
// import whitearrow from '../../assets/whitearrow.png';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "5c838e70-88fc-4052-93a7-2cd879472152");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-col">
                <h3>Send Us a Message <img src={message} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quisquam! Porro quae saepe accusantium fugiat, in sint blanditiis facilis voluptatem at ipsam odit nam sed sequi minima cupiditate corrupti temporibus iure esse tenetur asperiores deserunt ipsum. Laborum, cupiditate officia? Laudantium?</p>
                <ul>
                    <li><img src={mail} alt="" />xxxxxx@gmail.com</li>
                    <li><img src={phone} alt="" />+91-xxxxxxxxxx</li>
                    <li><img src={location} alt="" />x-street, near mall road, Delhi, India</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>YOUR NAME</label>
                    <input type="text" name='name' placeholder='ENTER YOUR NAME' required />
                    <label>PHONE NUMBER</label>
                    <input type="tel" name='phone' placeholder='ENTER YOUR MOBILE NUMBER' required />
                    <textarea name="message" rows="6" placeholder='ENTER YOUR MESSAGE' required></textarea>
                    <button type='submit' className='btn dark-btn'>SUBMIT NOW </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
