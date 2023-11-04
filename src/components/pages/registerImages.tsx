import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { MuiFileInput } from 'mui-file-input'
import SendIcon from '@mui/icons-material/Send';

interface Props {
    pageState: number; 
}

export const RegisterImages: React.FC<Props> = (props) => {

    const [title, setTitle] = useState<String>('')
    const [file, setFile] = useState<File | null>(null)

    if(props.pageState !== 4) {
        return null
    }

    const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const changeFile = (selectedFile: File | null) => {
        setFile(selectedFile)
    }

    const registerImage = () => {
        console.log(title, file)
    }

    return (
        <>
            <Box sx={{ overflow: 'auto' }}>
                <Typography sx={{ mb: 3 }}>
                    <TextField id="standard-basic" value={title} onChange={changeTitle} label="タイトル" variant="standard" />
                </Typography>
                <Typography sx={{ my: 3 }}>
                    <MuiFileInput value={file} onChange={changeFile} hideSizeText />
                </Typography>
                <Button onClick={registerImage} variant="contained" startIcon={<SendIcon />}>登録する</Button>
            </Box>
            
        </>
    )
}