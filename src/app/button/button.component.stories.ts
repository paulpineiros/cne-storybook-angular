import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from "./button.component";

const meta: Meta<ButtonComponent> = {
    title: 'Button',
    component: ButtonComponent,
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        label:'Button',
        type: 'primary'
    }
};

export const Secondary: Story = {
    args: {
        label:'Button',
        type: 'secondary'
    }
}

export const Tertiary: Story = {
    args: {
        label:'Button',
        type: 'tertiary'
    }
}
/*import { StoryObj, Meta } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

export default {
    title: "Components/Button",
    component: ButtonComponent,
    args:{
        label: "Button"
    }
} as Meta

const Template: StorybookConfig<ButtonComponent> = (args: ButtonComponent) => ({
    props: args,
});

export const Primary = Template.bind({})*/