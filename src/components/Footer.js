import React from "react"
import { footerdata } from './Webdata';

export const Footer = () => {
    return(
        <div className="Footer">
         {
            footerdata.map((item,index) => {
                return(
                    <>
                    <div className='links'>
                        <h3>{item.title}</h3>
                        <div className='linka'>
                            { 
                            item.link.map((item,index) =>{
                                return(
                                    <>
                                     <a href='#'>
                                        {item.text}
                                     </a>
                                    </>
                                )}) }
                        </div >
                        </div>
                        </>    
                )})}
        </div>
        
    )}
export default Footer;