import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Live from '../pages/Live';
import Explore from '../pages/Explore';
import Friends from '../pages/Friends';
import { HeaderOnly } from '../layouts';
import configs from '../configs';
export const publicRouter = [
    { path: configs.routes.root, component: Home },
    { path: configs.routes.following, component: Following },
    { path: configs.routes.profile, component: Profile },
    { path: configs.routes.live, component: Live },
    { path: configs.routes.explore, component: Explore },
    { path: configs.routes.friends, component: Friends },
    { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
];
export const priviteRouter = [];
