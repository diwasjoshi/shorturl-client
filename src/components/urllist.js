import React from "react";
import UrlItem from './urlitems';


const UrlList = (props) => {
    const urlItems = props.urls.map((url, index) => {

        return (
            <UrlItem
                data = {url}
                key={index}
            />
        );
    })
    return (
        <div>
            {urlItems}
        </div>
    );
};

export default UrlList;
