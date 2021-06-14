import React from 'react'

import './Footer.scss';

export default function Footer() {
    const [opacity, setOpacity] = React.useState(1);

    const checkScrollEvent = () => {
        if (Array.from(document.getElementsByTagName("section")).slice(-1)[0].getBoundingClientRect().top >= window.innerHeight/2) {
            setOpacity(0);
        } else {
            setOpacity(1);
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", checkScrollEvent);

        checkScrollEvent();
    
        return () => {
          window.removeEventListener("scroll", checkScrollEvent);
        };
      }, []);

    return (
        <ul class = "footer" style = {{opacity}}>
            <li><a href = "#">Tesla C 2021</a></li>
            <li><a href = "#">Privacy & Legal</a></li>
            <li><a href = "#">Recall Info</a></li>
            <li><a href = "#">Contact</a></li>
            <li><a href = "#">Careers</a></li>
            <li><a href = "#">Get Newsletter</a></li>
            <li><a href = "#">News</a></li>
            <li><a href = "#">Location</a></li>
        </ul>
    )
}
