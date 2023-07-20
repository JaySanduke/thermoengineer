import { usePathname } from 'next/navigation';

export default function usePathHook() {

    const pathname = usePathname();

    if(pathname === "/"){
        return "home";
    }
    else {
        let path = pathname.split("/");
        return path[1];
    }
}
