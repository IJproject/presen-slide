import React from "react";

interface Props {
    pageState: number; 
}

export const ShowImages: React.FC<Props> = (props) => {
    if(props.pageState !== 3) {
        return null
    }

    return (
        <>
            登録画像一覧ページ
        </>
    )
}