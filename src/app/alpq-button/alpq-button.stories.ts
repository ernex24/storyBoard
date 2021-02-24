import { CommonModule } from '@angular/common';
import { Meta } from '@storybook/angular/types-6-0';
import { Story } from '@storybook/angular/types-6-0';
import { AlpqButtonComponent } from "./alpq-button.component";

export default {
  title: 'Components/ Alpiq Button',
  component: AlpqButtonComponent,
} as Meta;

const Template: Story<AlpqButtonComponent> = (args: AlpqButtonComponent) => ({
  component: AlpqButtonComponent,
  props: args
});

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
    label: 'Button',
    size: 'medium',
  }

  export const PrimaryIcon = Template.bind({})
  PrimaryIcon.args = {
    type: 'primary',
    label: 'Button',
    size: 'medium',
    icon: true,
    iconType:"gg-software-download"
  }

  export const PrimarySmall = Template.bind({})
  PrimarySmall.args = {
    type: 'primary',
    label: 'Button',
    size: 'small',
  }

  export const PrimaryIconSmall = Template.bind({})
  PrimaryIconSmall.args = {
    type: 'primary',
    label: 'Button',
    size: 'small',
    icon: true,
    iconType:"gg-software-download"
  }

  export const PrimaryLarge = Template.bind({})
  PrimaryLarge.args = {
    type: 'primary',
    label: 'Button',
    size: 'large',
  }

  export const PrimaryIconLarge = Template.bind({})
  PrimaryIconLarge.args = {
    type: 'primary',
    label: 'Button',
    size: 'large',
    icon: true,
    iconType:"gg-software-download",
  }

  export const PrimaryLoader = Template.bind({})
  PrimaryLoader.args = {
    type: 'primary',
    label: 'Button',
    size: 'medium',
    icon: false,
    loading: true
  }

  


  export const Secondary = Template.bind({})
  Secondary.args = {
    type: 'secondary',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const SecondaryIcon = Template.bind({})
  SecondaryIcon.args = {
    type: 'secondary',
    label: 'Button',
    size: 'medium',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const SecondarySmall = Template.bind({})
  SecondarySmall.args = {
    type: 'secondary',
    label: 'Button',
    size: 'small',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const SecondaryIconSmall = Template.bind({})
  SecondaryIconSmall.args = {
    type: 'secondary',
    label: 'Button',
    size: 'small',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const SecondaryLarge = Template.bind({})
  SecondaryLarge.args = {
    type: 'secondary',
    label: 'Button',
    size: 'large',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const SecondaryIconLarge = Template.bind({})
  SecondaryIconLarge.args = {
    type: 'secondary',
    label: 'Button',
    size: 'large',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const SecondaryLoader = Template.bind({})
  SecondaryLoader.args = {
    type: 'secondary',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: true
  }






  export const Warning = Template.bind({})
  Warning.args = {
    type: 'warning',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const WarningIcon = Template.bind({})
  WarningIcon.args = {
    type: 'warning',
    label: 'Button',
    size: 'medium',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const WarningSmall = Template.bind({})
  WarningSmall.args = {
    type: 'warning',
    label: 'Button',
    size: 'small',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const WarningIconSmall = Template.bind({})
  WarningIconSmall.args = {
    type: 'warning',
    label: 'Button',
    size: 'small',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const WarningLarge = Template.bind({})
  WarningLarge.args = {
    type: 'warning',
    label: 'Button',
    size: 'large',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const WarningIconLarge = Template.bind({})
  WarningIconLarge.args = {
    type: 'warning',
    label: 'Button',
    size: 'large',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const WarningLoader = Template.bind({})
  WarningLoader.args = {
    type: 'warning',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: true
  }

  





  export const Danger = Template.bind({})
  Danger.args = {
    type: 'danger',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const DangerIcon = Template.bind({})
  DangerIcon.args = {
    type: 'danger',
    label: 'Button',
    size: 'medium',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const DangerSmall = Template.bind({})
  DangerSmall.args = {
    type: 'danger',
    label: 'Button',
    size: 'small',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const DangerIconSmall = Template.bind({})
  DangerIconSmall.args = {
    type: 'danger',
    label: 'Button',
    size: 'small',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const DangerLarge = Template.bind({})
  DangerLarge.args = {
    type: 'danger',
    label: 'Button',
    size: 'large',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const DangerIconLarge = Template.bind({})
  DangerIconLarge.args = {
    type: 'danger',
    label: 'Button',
    size: 'large',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const DangerLoader = Template.bind({})
  DangerLoader.args = {
    type: 'danger',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: true
  }









  export const Success = Template.bind({})
  Success.args = {
    type: 'success',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const SuccessIcon = Template.bind({})
  SuccessIcon.args = {
    type: 'success',
    label: 'Button',
    size: 'medium',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const SuccessSmall = Template.bind({})
  SuccessSmall.args = {
    type: 'success',
    label: 'Button',
    size: 'small',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const SuccessIconSmall = Template.bind({})
  SuccessIconSmall.args = {
    type: 'success',
    label: 'Button',
    size: 'small',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const SuccessLarge = Template.bind({})
  SuccessLarge.args = {
    type: 'success',
    label: 'Button',
    size: 'large',
    icon: false,
    iconType:"gg-software-download",
    loading: false
  }

  export const SuccessIconLarge = Template.bind({})
  SuccessIconLarge.args = {
    type: 'success',
    label: 'Button',
    size: 'large',
    icon: true,
    iconType:"gg-software-download",
    loading: false
  }

  export const SuccessLoader = Template.bind({})
  SuccessLoader.args = {
    type: 'success',
    label: 'Button',
    size: 'medium',
    icon: false,
    iconType:"gg-software-download",
    loading: true
  }


