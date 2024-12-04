import { isCompositeComponent } from 'react-dom/test-utils';
import './footer.css';

const Footer = ( { footerData } ) => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h4>Contact Us</h4>
                    {
                         footerData.contact.map((link, index) => (
                            <p key={index}>{ link.name }: {link.value}</p>
                        ))
                    }
                </div>
                <div className="footer__section">
                    <h4>Follow Us</h4>
                    <p>
                        {
                            footerData.social.map((link, index) => (
                                <a className="footer-socials" key={index} href={link.url}>{link.name}</a>
                            ))
                        }
                    </p>
                </div>
            </div>
            <div className="footer__bottom">
                <p>{ footerData.text }</p>
            </div>
            
        </footer>
    );
}

// export const metadata = {
//     "title": "Footer",
//     "description": "A Footer component providing content and social links",
//     "child": false,
//     "props": [
//         {
//             "name": "footerData",
//             "type": "object",
//             "description": "Data for the footer component",
//         }
//     ],
// }

// export const template = {
//     "type": "footer/footer",
//     "text": "© 2021 Dwarven Law Advocates. All rights reserved.",
//     "contact": [
//         {
//             "name": "Email",
//             "value": "contact@dwarvenlaw.com"
//         },
//         {
//             "name": "Phone",
//             "value": "(123) 456-7890"
//         },
//         {
//             "name": "Address",
//             "value": "123 Dwarven Mine St, Mountain City"
//         }
//         ],
//         "social": [
//         {
//             "name": "Facebook",
//             "url": "https://www.facebook.com"
//         },
//         {
//             "name": "Twitter",
//             "url": "https://www.twitter.com"
//         },
//         {
//             "name": "Instagram",
//             "url": "https://www.instagram.com"
//         }
//     ]
// }


export default Footer;