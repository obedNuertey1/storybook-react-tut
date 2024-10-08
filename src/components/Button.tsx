function Button({label, backgroundColor = "red", size = "md", handleClick}:ButtonType){
    let scale = 1;
    if(size === "sm") scale = 0.75
    if(size === "lg") scale = 1.5

    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: 'none',
    };

    return (
        <button onClick={handleClick} style={style}>
            {label}
        </button>
    );
}

export default Button;