import React, { useEffect, useState } from 'react'
import "./brand-logo-card.scss"
import {Link} from "react-router-dom";

const BrandLogoCard = ({key, linkPath, img, linkName}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 200);

        return () => clearTimeout(timeout);
    }, []);

  return (
    <Link to={linkPath} key={key}  className='brand-logo-card'>
        <div className="white-color-overlay"></div>
        <div className="blue-color-overlay"></div>
        <img src={img} alt="verizon-logo" />
        <Link className="link-name">{linkName}</Link>
    </Link>
  )
}

export default BrandLogoCard