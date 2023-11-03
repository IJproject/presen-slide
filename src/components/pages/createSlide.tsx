import React from "react";

interface Props {
    pageState: number; 
}

export const CreateSlide: React.FC<Props> = (props) => {
    if(props.pageState !== 2) {
        return null
    }

    return (
        <>
            スライドを作成するページ
        </>
    )
}