import React from 'react';
import {Button, Image, Layout, Typography} from "antd";
import FizzWebsiteRoutes from "../routing/FizzWebsiteRoutes";
import {FacebookOutlined, InstagramOutlined, MailOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Footer} from "antd/es/layout/layout";
import {useNavigate} from "react-router-dom";

const {Content, Header} = Layout;
const {Title} = Typography;
const AppLayout = ({}) => {
    const navigate = useNavigate();
    const navigateInNewTab = (url) => {
        window.open(url, '_blank').focus();
    }

    const populateEmail = () => {
        window.location.href = `mailto:fizzthebandofficial@gmail.com?subject=Hi FIZZ!`
    }

    return (
        <Layout className={`home-page-background`} style={{minHeight: '100vh'}}>
            <Header className={'app-header'}>
                <div className={'flex-row full-width'}>
                    <div className={'button-container'}>
                        <Button
                            onClick={() => navigate('/about-us')}
                            ghost>
                            About Us
                        </Button>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            onClick={() => navigate('/upcoming-shows')}
                            ghost>
                            Upcoming Shows
                        </Button>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            onClick={() => navigate('/videos')}
                            ghost>
                            Videos
                        </Button>
                    </div>
                    <div className={'button-container'}>
                        <Button
                            onClick={() => navigate('/merch')}
                            ghost>
                            Merch
                        </Button>
                    </div>
                </div>
            </Header>
            <Content className={'app-content'}>
                <div className={'full-width'} style={{minHeight: 360}}>
                    <div className={'flex-row full-width'}>
                        <Image
                            className={'clickable'}
                            onClick={() => navigate('/')}
                            height={'200px'}
                            width={'100px'}
                            preview={false}
                            src={'https://audio.fizztheband.com/images/fizz-website/fizz-website-logo.png'}
                        />
                    </div>
                    <FizzWebsiteRoutes/>
                </div>
            </Content>
            <Footer className={'app-footer'}>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => populateEmail()}
                        icon={<MailOutlined/>}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab(`https://www.youtube.com/channel/UCCYlcZuQdCE2gD3k9jsTRJw`)}
                        icon={<YoutubeOutlined/>}
                    >
                    </Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.instagram.com/fizz.band/')}
                        icon={<InstagramOutlined/>}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.tiktok.com/@fizz.band')}
                        icon={<Image preview={false} width={24} src={'./static/tiktok-logo.svg'}/>}
                    ></Button>
                </div>
                <div className={'button-container'}>
                    <Button
                        ghost
                        size={'large'}
                        onClick={() => navigateInNewTab('https://www.facebook.com/Fizzthebandofficial')}
                        icon={<FacebookOutlined/>}
                    ></Button>
                </div>
            </Footer>
        </Layout>
    )
};

export default AppLayout;