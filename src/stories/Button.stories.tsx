import Button from '../components/Button';

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {handleClick: {action: "handleClick"}}
};

const Template = (args: ButtonType) => <Button {...args} />

export const Red = Template.bind({});
// @ts-ignore
Red.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "md"
};

export const Green = Template.bind({});
// @ts-ignore
Green.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "md"
};

export const Small = Template.bind({});
// @ts-ignore
Small.args = {
    label: "Press Me",
    size: "sm"
}

export const LongLabel = Template.bind({});
// @ts-ignore
LongLabel.args = {
    label: "This is a long label ........ dklskjfjoij doifosidof",
    size: "md"
}