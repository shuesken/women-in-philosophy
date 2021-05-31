import React from 'react';

export default function({data}) {

    var items = []
    var i = 0
    data?.labels && data.labels.forEach( s =>{
        items.push({'label': s, 'color': data.colors[i]});
        i++;
    })


    return <div className={"chart-legend"} >
        {items.map(function(d, idx){
            return  <div key={idx} className={"item"}>
                <div  className={"color"}  style={{"backgroundColor": d.color}} />
                <div  className={"label"}>{d.label}</div>
            </div>
        })}
    </div>
}




