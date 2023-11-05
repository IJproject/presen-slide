import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import { Page } from './components/pages/page'
import './css/App.css';

const drawerWidth = 240;

const pageIndex = [
    {
        id: 1,
        name: '作成済みスライド',
        icon: ContentPasteSearchIcon,
    },
    {
        id: 2,
        name: 'スライドを作成する',
        icon: CreateNewFolderIcon,
    },
    {
        id: 3,
        name: '登録済み画像一覧',
        icon: CollectionsIcon,
    },
    {
        id: 4,
        name: '画像を登録する',
        icon: AddPhotoAlternateIcon,
    },
    {
        id: 5,
        name: 'データを全て削除',
        icon: DeleteIcon,
    }
]

const actionIndex = [
    {
        id: 11,
        name: '使い方ガイド',
        icon: ArticleIcon,
    }
]

function App() {

    const [pageState, setPageState] = React.useState(2)

    const changePageState = (id :number) => {
        return () => {
            setPageState(id);
        }
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 800, fontSize: '24px' }}>
                            スライドメーカー　〜Make irreplaceable slides that contain your ambitions〜
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {pageIndex.map((page, index) => (
                                <ListItem key={page.id} disablePadding onClick={changePageState(page.id)}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <page.icon />
                                        </ListItemIcon>
                                        <ListItemText primary={page.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {actionIndex.map((page, index) => (
                                <ListItem key={page.id} disablePadding onClick={changePageState(page.id)}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <page.icon />
                                        </ListItemIcon>
                                        <ListItemText primary={page.name} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Page pageState={pageState} />
                </Box>
            </Box> 
        </>
    );
}

export default App;
