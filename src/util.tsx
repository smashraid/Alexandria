import * as React from "react";

export const ThemeContext: React.Context<string> = React.createContext("light");

export const UserContext: React.Context<string> = React.createContext("usern@me");

interface HelpStore {
    state: string;
    update: (e: React.MouseEvent<HTMLAnchorElement>, x:string) => void;
}

export const HelpContext: React.Context<HelpStore> = React.createContext(
    {
        state: "test",
        update: (e: React.MouseEvent<HTMLAnchorElement>, x:string) => {
            alert(x);
        }
    } as HelpStore);