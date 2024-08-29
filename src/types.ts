type ButtonType = {
    label?: string;
    backgroundColor?: string | "red";
    size?: "md"|"lg"|"sm";
    handleClick?: ()=>void;
}

type StackType = {
    spacing?: number;
    wrap?: boolean;
    direction?: "row"|"column";
    children?: any;
}