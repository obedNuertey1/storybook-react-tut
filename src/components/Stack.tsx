export default function Stack({children, spacing = 2, direction = "row", wrap = false}:StackType){
    const styles = {
        display: 'flex',
        gap: `${spacing * 0.25}rem`,
        flexWrap: wrap ? "wrap": "nowrap",
        flexDirection: direction
    }
    return (
        <>
        {/* @ts-ignore */}
            <div style={styles}>{children}</div>
        </>
    );
}