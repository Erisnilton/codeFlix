import { createContext } from "react";

export interface DialogSearchContextValues{
    show: () => void;
    hide: () => void;
}

const DialogSearchContext = createContext<DialogSearchContextValues>({
    show: () => {},
    hide: () => {}
});

export default DialogSearchContext;
