export interface CardProps {
    title: string;
    text: string;
    link: string;
}
export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}
export interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
}
export interface HeroProps {
    title: string;
    image: string;
}
export interface Item {
    title: string;
    description: string;
}
export interface LayoutProps {
    children: React.ReactNode;
    background: string;
}
export interface PanelItem {
    title: string;
    description: string;
    image: string;
}
export interface TrustBarProps {
    images: string[];
}
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}
