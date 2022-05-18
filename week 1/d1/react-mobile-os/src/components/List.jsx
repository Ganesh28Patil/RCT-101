import React from "react";

const List = ({brand}) =>{
    return(
        <>        
        <div className="ListTxt txt">
            <li>{brand}</li>
        </div>
        
        </>
    )
}

const List2 = ({company}) =>{
    if(company === "Samsung" || company === "HTC"){
        return(
            <>        
            <div className="ListTxt txt sqr">
                <li>{company}</li>
            </div>
            
            </>
        )
    }else if(company === "Apple"){
        return(
            <>        
            <div className="ListTxt txt circle">
                <li>{company}</li>
            </div>
            
            </>
        )
    }else{
        return(
            <>        
            <div className="ListTxt txt">
                <li>{company}</li>
            </div>
            
            </>
        )
    }   
}
export default List;
export {List2};
