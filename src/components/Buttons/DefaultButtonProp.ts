import type { ReactElement } from "react";

export interface DefaultButtonProp {
    content?: ReactElement | string;
    height: number;
    width: number;
    onClick?: () => void;
    disabled?: boolean;
}
