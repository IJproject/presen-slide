import React, { useState } from "react";
import { CreateSlide } from "./createSlide";
import { PreviewSlide } from "./previewSlide";

interface Props {
    pageState: number;
}

export const Page: React.FC<Props> = (props) => {

    // const [page, setPage] = useState(0);

    return (
        <>
           <CreateSlide pageState={props.pageState} />
           <PreviewSlide pageState={props.pageState} />
        </>
    )
}