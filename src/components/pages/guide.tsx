import React from "react";
import Box from '@mui/material/Box';
import Divider from "@mui/material/Divider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
    pageState: number; 
}

interface CardProps {
    title: string;
    content: string[];
}

const Introduction = () => (
    <>
        <Typography sx={{ ml: 2 }}>
            スライドメーカーへようこそ！<br></br>
            このアプリケーションでは、プレゼンで使え”そう”なスライドを作ることができます。そうです、使えるわけではありません。<br></br>
            あくまでスライドを作るだけでございますので、その点を理解した上でのご使用お願いします。
        </Typography>
        <Typography sx={{ mt: 1, ml: 2, fontSize: '18px' }}>
            究極の時間の浪費をお楽しみください。
        </Typography>
    </>
)

const cardContent :CardProps[] = [
    {
        title: '作成済みスライドページ',
        content: ['sy', 'su'],
    },
    {
        title: 'スライド作成ページ',
        content: ['sycs', 'sucsa'],
    },
    {
        title: '登録済み画像一覧ページ',
        content: ['sycs', 'sucsa'],
    },
    {
        title: '画像を登録するページ',
        content: ['sycs', 'sucsa'],
    },
    {
        title: 'データ削除ページ',
        content: ['sycs', 'sucsa'],
    },
]

const GuideCard = (props: CardProps) => (
    <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {props.title}
            </Typography>
            {props.content.map((text) => (
                <Typography color="text.secondary">{text}</Typography>
            ))}
        </CardContent>
    </Card>
)

export const Guide: React.FC<Props> = (props) => {
    if(props.pageState !== 11) {
        return null
    }

    return (
        <>
            <Box sx={{ overflow: 'auto' }}>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>使い方ガイド</Typography>
                <Divider sx={{ mt: 2, mb: 3 }} />
                <Introduction />
                <Divider sx={{ my: 3 }} />
                {cardContent.map((content, index) => (
                    <GuideCard { ...content } />
                ))}
            </Box>
        </>
    )
}