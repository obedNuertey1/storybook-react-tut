import Stack from '../components/Stack';

export default {
    title: "Component/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: {
            type: "number",
            defaultValue: 4
        }
    }
};

const Template = ({numberOfChildren, ...args}:any)=>{
    const styles = {
        width: "50px",
        height: "50px",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <>
            <Stack {...args}>
                {
                    [...Array(numberOfChildren).keys()].map((elem, i)=>{
                        return (<div key={i} style={styles}>{elem + 1}</div>)
                    })
                }
            </Stack>
        </>
    );
}

export const Horizontal = Template.bind({});
// @ts-ignore
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false
};

export const Vertical = Template.bind({});
// @ts-ignore
Vertical.args = {
    direction: "column",
    spacing: 2,
}

export const Wrapped = Template.bind({});
// @ts-ignore
Wrapped.args = {
    direction: "row",
    spacing: 2,
    wrap: true
};

export const ZeroSpacing = Template.bind({});
// @ts-ignore
ZeroSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false
};
