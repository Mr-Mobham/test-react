import React, { useState, useEffect, useMemo } from "react"
import {
    Link
  } from "react-router-dom";

  

function Card(props) {
    const items  = props.data;


    return (
    
    <div className='home__content-items'>
            {
            items.map(function(content, index){
                return(
                    <div key={content.id} className='home__content-item'>
                        <div className="home__content--item-card">
                            <img className='home__content--item-img' src={content.avatar_url} />
                            <h3 className='home__content--item-title'>{content.login}</h3>
                        </div>
                        <div className='home__content--item-submit'>
                            <Link to={"/user/" + content.login}>
                                 <button className="home__content--item-btn btn" type="button">More</button>
                            </Link>
                        </div>
                    </div>
                )
            })
            }
    </div>
        )
}

export default React.memo(Card);
