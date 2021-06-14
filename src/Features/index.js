import React from 'react'
import { UserContext } from '../App';

import Button from '../components/Button';

import './Features.scss';

const modelOverlays = [
    {
        text: {
            h1: "Model 3",
            h3: `$3,000 ZEV Subsidy now available to residents and businesses in Victoria on eligible Model 3. <a href = "#">Learn More</a>`
        },
        buttons: [
            {
                colour: "gray",
                text: "CUSTOM ORDER"
            },
            {
                colour: "white",
                text: "EXISTING INVENTORY"
            }
        ]
    },
    {
        text: {
            h1: "Solar and Powerwall",
            h3: "Power Everything"
        },
        buttons: [
            {
                colour: "gray",
                text: "LEARN MORE"
            }
        ]
    },
    {
        text: {
            h1: "Model Y"
        },
        buttons: [
            {
                colour: "gray",
                text: "LEARN MORE"
            },
            {
                colour: "white",
                text: "STAY UPDATED"
            }
        ]
    },
    {
        text: {
            h1: "Model S",
            h3: `<a href = "#">Schedule a Touchless Test Drive</a>`
        },
        buttons: [
            {
                colour: "gray",
                text: "CUSTOM ORDER"
            },
            {
                colour: "white",
                text: "EXISTING INVENTORY"
            }
        ]
    },
    {
        text: {
            h1: "Model X",
            h3: `<a href = "#">Schedule a Touchless Test Drive</a>`
        },
        buttons: [
            {
                colour: "gray",
                text: "CUSTOM ORDER"
            },
            {
                colour: "white",
                text: "EXISTING INVENTORY"
            }
        ]
    }
]

export default function Features() {
    const [ state, dispatch ] = React.useContext(UserContext);
    const [ textOpacity, setTextOpacity ] = React.useState(1);
    const [currentNo, setCurrentNo] = React.useState(1);
    const [pos, setPos] = React.useState(0);

    let textStyling = {
        opacity: 1
    }

    const setOverlay = () => {
        let position = (-(document.getElementsByTagName("section")[0].getBoundingClientRect().bottom - window.innerHeight)/window.innerHeight);

        let overlayNo = Math.round(position);
        setCurrentNo(overlayNo);

        document.getElementById("text").innerHTML = `
            <h1>${modelOverlays[overlayNo].text.h1}</h1>
            <h3>${modelOverlays[overlayNo].text.h3 ? modelOverlays[overlayNo].text.h3 : ""}</h3>
        `
        
        // document.getElementById("buttons").innerHTML = ``;

        // modelOverlays[overlayNo].buttons.forEach(button => {
        //     console.log(React.createElement(Button, [button.colour, button.text ]))
        //     // document.getElementById("buttons").innerHTML += `<Button colour = ${button.colour} text = ${button.text}/>`;
        //     // document.getElementById("buttons").innerHTML += `${<Button colour = {button.colour} text = {button.text} />}`;
        //     document.getElementById("buttons"). += React.createElement(Button, [button.colour, button.text ]);
        // })
  
        // <Button colour = ${modelOverlays[overlayNo].buttons.button1.colour} text = ${modelOverlays[overlayNo].buttons.button1.text}/>
        
    }

    function setButtons () {

        // let position = (-(document.getElementsByTagName("section")[0].getBoundingClientRect().bottom - window.innerHeight)/window.innerHeight);

        // let overlayNo = Math.round(position);

        // modelOverlays[overlayNo].buttons.map(button => {

        // })

        return <Button colour = {"gray"} text = {"hi"} />


        
    }

    const checkScrollEvent = (event) => {
        let textOverlay = document.getElementsByClassName("text");
        let buttonsOverlay = document.getElementsByClassName("buttons");
        let position = (-(document.getElementsByTagName("section")[0].getBoundingClientRect().bottom - window.innerHeight)/window.innerHeight);

        setPos(position);

        let fadeOutOpacity = 1;
        setOverlay();

        if (position % 1 <= 0.3 && position % 1 >= 0) {
            fadeOutOpacity = 1 - (position % 1)/0.3;

        } else if (position % 1 <= 1 && position % 1 >= 0.7) {
            fadeOutOpacity = ((position % 1)-0.7)*(10/3);
        } else {
            fadeOutOpacity = 0;
        }
        setTextOpacity(fadeOutOpacity);

        // console.log(pos);
        // window.scrollTo(0,(pos+1)*window.innerHeight);



    }

    React.useEffect(() => {
        window.addEventListener("scroll", checkScrollEvent);

        checkScrollEvent();
    
        return () => {
          window.removeEventListener("scroll", checkScrollEvent);
        };
      }, []);

    return (
        <div class = {`features ${state.blur_active ? "blur" : ""}`}>
            <section />
            <section />
            <section />
            <section />
            <section />

            <div class = "model-overlay" style = {{opacity: textOpacity}}>
                <div class = "text" id = "text">
                </div>
                <div class = "buttons" id = "buttons">
                    {modelOverlays[currentNo].buttons.map(button => {
                        return <Button colour = {button.colour} text = {button.text} />

                    })}
                </div>
            </div>
            
        </div>
    )
}
