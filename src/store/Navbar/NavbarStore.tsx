import { useStore } from ".."

export const useNavbarStore = () => {
    const [{navbarStore}, setState] = useStore();

    const changeTitleNavbar = (title: string) => {
        console.log('ini perubahan title ', title);
        setState("navbarStore", { title_navbar: title});
    }

    return [
        navbarStore,
        {
            changeTitleNavbar
        }
   ]
}