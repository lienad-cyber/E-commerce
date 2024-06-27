import React, { useRef } from "react";

import PaginationDroite from "../../../Image/Icone/paginationVdroite.png";
import PaginationGauche from "../../../Image/Icone/paginationVgauche.png";

import "../../../CSS/MarketPlaceCard.css"

export function Card({ Image, FirstDescription, SecondDescription, ThirdDescription, Price }) {
    const theScrollImages = useRef()

    const theLeftScroll = () => {
        const scrollAmount = theScrollImages.current.scrollLeft - theScrollImages.current.offsetWidth;
        theScrollImages.current.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    const theRightScroll = () => {
        const scrollAmount = theScrollImages.current.scrollLeft + theScrollImages.current.offsetWidth;
        theScrollImages.current.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    return (
        <div className="Card">
            <div className="PaginationCover">
                <img src={PaginationGauche} alt="PaginationGauche" className="PaginationLeft" onClick={theLeftScroll} />

                <div className="BlackSquare">
                    <div className="d-flex Defilement" ref={theScrollImages}>
                        <img src={Image} className="ThisImage" />
                        <img src={Image} className="ThisImage" />
                        <img src={Image} className="ThisImage" />
                    </div>
                </div>

                <img src={PaginationDroite} alt="PaginationDroite" className="PaginationRight" onClick={theRightScroll} />
            </div>

            <ul className="RingDescription">
                <li>{FirstDescription}</li>
                <li>{SecondDescription}</li>
                <li>{ThirdDescription}</li>
            </ul>

            <Button ThePrice={Price} />
        </div>
    );
}

function Button({ ThePrice }) {
    return (
        <button className="d-flex align-items-center justify-content-center pt-3 AddToPannel"><p className="ThePrice">{ThePrice}</p><p>Ajouter au Panier</p> </button>
    );
}