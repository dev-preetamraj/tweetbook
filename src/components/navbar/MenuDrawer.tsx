import {
    XMarkIcon,
    UserIcon,
    ChartBarSquareIcon,
    InboxIcon,
    UserGroupIcon,
    DocumentTextIcon,
    PhotoIcon,
    FolderIcon,
    Cog8ToothIcon
} from "@heroicons/react/24/outline";
import { FunctionComponent } from "react";
import { Container } from "../ui/Container";
import DrawerMenuAvatar from "./DrawerMenuAvatar";

interface MenuDrawerProps {
    menuBarClicked: boolean
    setMenuBarClicked: (value: boolean) => void;
};

const menuItem = [
    {
        title: 'PERSONAL',
        menu: [
            {
                icon: <UserIcon className="h-6 w-6" />,
                title: 'My Profile'
            },
            {
                icon: <ChartBarSquareIcon className="h-6 w-6" />,
                title: 'My Timeline'
            },
            {
                icon: <InboxIcon className="h-6 w-6" />,
                title: 'My Inbox'
            },
        ]
    },
    {
        title: 'COMMUNITY',
        menu: [
            {
                icon: <UserGroupIcon className="h-6 w-6" />,
                title: 'My Groups'
            },
            {
                icon: <DocumentTextIcon className="h-6 w-6" />,
                title: 'My Pages'
            }
        ]
    },
    {
        title: 'MEDIA',
        menu: [
            {
                icon: <PhotoIcon className="h-6 w-6" />,
                title: 'My Photos'
            },
            {
                icon: <FolderIcon className="h-6 w-6" />,
                title: 'My Documents'
            }
        ]
    },
]

const MenuDrawer: FunctionComponent<MenuDrawerProps> = ({
    menuBarClicked,
    setMenuBarClicked
}) => {
    return (
        <div className={`absolute top-0 left-0 w-full h-screen z-20 bg-inherit bg-gray-100 dark:bg-slate-900 md:hidden ${menuBarClicked ? '' : 'hidden'}`}>
            <div className="border-b dark:border-gray-700">
                <Container>
                    <div className="flex items-center justify-between py-6">
                        <DrawerMenuAvatar />
                        <XMarkIcon className="h-6 w-6 cursor-pointer md:hidden" onClick={() => setMenuBarClicked(false)} />
                    </div>
                </Container>
            </div>
            <Container>
                <div className="flex flex-col space-y-10 py-10">
                    {menuItem.map( item => (
                        <div className="flex flex-col space-y-4" key={item.title}>
                            <h1 className="font-semibold">{item.title}</h1>
                            <div className="flex flex-col space-y-4 px-4">
                                {item.menu.map(subItem => (
                                    <div className="flex items-center space-x-4 cursor-pointer">
                                        {subItem.icon}
                                        <h1>{subItem.title}</h1>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center space-x-4 px-4 absolute bottom-10">
                        <Cog8ToothIcon className="h-6 w-6" />
                        <h1>Account Settings</h1>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MenuDrawer;