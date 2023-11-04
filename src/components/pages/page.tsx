import React, { useState } from "react";
import { CreateSlide } from "./createSlide";
import { PreviewSlide } from "./previewSlide";
import { ShowImages } from "./showImages";
import { RegisterImages } from "./registerImages";
import { DeleteImages } from "./deleteImages";
import { Guide } from "./guide";

interface Props {
    pageState: number;
}

export const Page: React.FC<Props> = (props) => {

    // const [page, setPage] = useState(0);

    return (
        <>
           <CreateSlide pageState={props.pageState} />
           <PreviewSlide pageState={props.pageState} />
           <ShowImages pageState={props.pageState} />
           <RegisterImages pageState={props.pageState} />
           <DeleteImages pageState={props.pageState} />
           <Guide pageState={props.pageState} />
        </>
    )
}