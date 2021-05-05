import React from 'react';

function Projects(props) {
    return (
        <div className="p_item">
            <div className="portfolio_content">
                <div><img src={props.imgsrc} alt=""/></div>
                <div className="text">
                    <a href={props.link} target="_yogesh"><h4>{props.title}</h4></a>    
                    <div>{props.des}</div>                        
                </div>                               
            </div>                                                
        </div>
    )
}

export default Projects;
