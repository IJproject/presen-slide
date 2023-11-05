import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    pageState: number; 
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const CreateSlide: React.FC<Props> = (props) => {

    const [title, setTitle] = useState<String>('')
    // const [file, setFile] = useState<String>('')

    if(props.pageState !== 2) {
        return null
    }

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    // const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if(event.target.files) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             setFile(event.target.result); // 読み込んだ画像のデータURLをステートにセット
    //         };
    //         reader.readAsDataURL(event.target.files[0]); // ファイルをデータURLとして読み込む
    //     }
    // }

    const registerImage = () => {
        // console.log(title, file)
    }

    return (
        <>
            <Box sx={{ overflow: 'auto' }}>
                <Typography sx={{ mb: 3 }}>
                    <TextField id="standard-basic" value={title} onChange={changeTitle} label="スライドタイトル" variant="standard" sx={{ width: '500px' }} />
                </Typography>
                <Typography sx={{ my: 3 }}>
                    <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                        Upload file
                        {/* <VisuallyHiddenInput type="file" multiple onChange={changeFile} /> */}
                    </Button>
                </Typography>
                {/* <Typography sx={{ mb: 3 }}>
                    <div>
                        <div>
                            <img src={file} alt="スライド画像" />
                        </div>
                        <div></div>
                    </div>
                </Typography> */}
                <Button onClick={registerImage} variant="contained" startIcon={<SendIcon />}>登録する</Button>
            </Box>
        </>
    )
}