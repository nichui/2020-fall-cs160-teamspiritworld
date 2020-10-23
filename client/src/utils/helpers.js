import {Link} from 'react-router-dom';
import React from 'react';
import  '../css/styles.css'

export const RowGenerator = (list, cols) => {

    const rows =[...Array(Math.ceil(list.length / cols))];
    const resourceRows = rows.map(
        (row,i) => list.slice(i*cols, i*cols+cols)
    );
        return resourceRows;
}


export const GenerateRowsWithBlocks = (rows,type) => (
    rows.map((row,i)=> (
        <div className="row" key={i}>
            {
                row.map(resource => (
                   <div key={resource._id} className={`${type} columns article_block`}>
                       {/*<Link to={`/resources/${article._id}`}>*/}
                            <div className="top">
                                 <h3>{resource.name}</h3>
                            </div>
                            <div className="content">
                                <div>{resource.content}</div>
                             
                            </div>
                {/*</Link>*/}
                   </div> 
                ))
            }
        </div>
    ))
)