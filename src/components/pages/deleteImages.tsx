import React from "react";

interface Props {
    pageState: number; 
}

export const DeleteImages: React.FC<Props> = (props) => {
    if(props.pageState !== 5) {
        return null
    }

    return (
        <>
            画像削除ページ
        </>
    )
}