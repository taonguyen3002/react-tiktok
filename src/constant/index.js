import configs from '../configs';
import {
    IconCompass,
    IconFriendArrow,
    IconFriendGroup,
    IconHome,
    IconRecord,
    iconActivePath,
} from '../component/Icons';
import { FaLanguage, FaRegLightbulb } from 'react-icons/fa6';
import { TbHomeEdit } from 'react-icons/tb';
import { MdFeedback } from 'react-icons/md';
import { CiDark } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { FiLogOut } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

export const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTcyNTg5ODEwMywiZXhwIjoxNzI4NDkwMTAzLCJuYmYiOjE3MjU4OTgxMDMsImp0aSI6Ik9sMXZLZUdiUzF6MWN6RGEiLCJzdWIiOjY5MzgsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.S9RDkfocfkXrL4mIJfKfmjkTYdzr3hK_48FIskbqT38';
export const MenuItemSidebar = [
    {
        id: 1,
        path: configs.routes.root,
        title: 'For You',
        icon: <IconHome />,
        activeIcon: <IconHome d={Object.values(iconActivePath.home)} />,
    },
    {
        id: 2,
        path: configs.routes.explore,
        title: 'Explore',
        icon: <IconCompass />,
        activeIcon: <IconCompass d={Object.values(iconActivePath.compass)} />,
    },
    {
        id: 3,
        path: configs.routes.following,
        title: 'Following',
        icon: <IconFriendArrow />,
        activeIcon: <IconFriendArrow />,
    },
    {
        id: 4,
        path: configs.routes.friends,
        title: 'Friend',
        icon: <IconFriendGroup />,
        activeIcon: <IconFriendGroup d={Object.values(iconActivePath.friendGroup)} />,
    },
    {
        id: 5,
        path: configs.routes.live,
        title: 'Live',
        icon: <IconRecord />,
        activeIcon: <IconRecord d={Object.values(iconActivePath.record)} viewBox="0 0 48 48" pathFill="white" />,
    },
];

export const menuItemHeader = [
    {
        icon: <TbHomeEdit />,
        title: 'Creater tools',
        children: {
            title: 'Creator tool',
            data: [
                {
                    icon: <FaRegLightbulb />,
                    title: 'Live Creator Hub',
                    to: '/creatorlive',
                },
            ],
        },
    },
    {
        icon: <FaLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                    type: 'language',
                },
                {
                    code: 'en',
                    title: 'English',
                    type: 'language',
                },
            ],
        },
    },
    { icon: <MdFeedback />, title: 'Feedback and helps', to: '/feedback' },
    {
        icon: <CiDark />,
        title: 'Dark mode',
        children: {
            title: 'Dark Mode',
            data: [
                {
                    title: 'Use devide thame',
                    code: 'devideThame',
                    type: 'thame',
                },
                {
                    title: 'Light mode',
                    code: 'lightThame',
                    type: 'thame',
                },
                {
                    title: 'Dark mode',
                    code: 'darkThame',
                    type: 'thame',
                },
            ],
        },
    },
];
export const userMenuHeader = [
    {
        icon: <FaRegUser />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <IoSettingsOutline />,
        title: 'Setting',
        to: '/setting',
    },
    ...menuItemHeader,
    {
        icon: <FiLogOut />,
        title: 'Log out',
        separate: true,
    },
];
