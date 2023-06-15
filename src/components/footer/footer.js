import React from 'react'
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faWhatsapp } from '@fortawesome/fontawesome-free-solid'
import { faTwitter, faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons' 
import { Outlet, Link } from "react-router-dom";
export default function footer() {
    return (
        <section id='footer_parent'>
            <div className='parent_container_footer'>
                <div className='container_parent_table_footer'> 
                <div className='parent-col-bar'>
                    <div className='left-col table'>
                        <p>Bluelearn is one of India's largest student communities that provides a one-stop platform for students to learn new skills, network with peers, and grow as an individual.</p>
                        <div className='social-media-buttons'> 
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                    <div className='centre-col table'>
                        <h3>COMPANY</h3>
                        <ul>
                            <li><Link to="/productpage">Productpage</Link></li>
                            <li><Link to="/aboutus">Contact</Link></li>
                            <li><Link to="/Itemlist">ITEM LIST</Link></li>
                            <li><a href='#'>Terms & Condition </a></li>
                        </ul>
                    </div>
                    <div className='right-col table'>
                        <h3>QUICK LINKS</h3>
                    <ul>
                            <li><a href='#'>Order Track</a></li>
                            <li><a href='#'>Complaint</a></li>
                            <li><a href='#'>Refund & Return</a></li>
                            <li><a href='#'>Customare Care</a></li>
                            <li><a href='#'>Review</a></li>
                        </ul>
                    </div>
                    <div className='button-col table'>
                        <h3>Download The Apps</h3>
                   <div className='Button-parents'>
                    <button>Download On Google Pay</button>
                    <button>Download On Apple Store</button>
                   </div>
                   <p>Are U Hiring? @gmail.com</p>
                    </div>
                </div> 
                <div className='head-col'><h2>Tshirt by nishant</h2></div>
                </div>
            </div>
        </section>
    )
}
