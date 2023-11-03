import React from "react";

interface Props {
    pageState: number; 
}

export const PreviewSlide: React.FC<Props> = (props) => {
    if(props.pageState !== 1) {
        return null
    }

    return (
        <>
            2
        </>
    )
} 