// import { ComponentMeta } from "@storybook/react";
import {  Meta, StoryFn } from "@storybook/react";
import Button from "./Button";
// .story-->main.ts me addon krne hai for viewcode
//if we are using tailwind then just import the index.css file where we have @tailwid something..\

//pehle button ki ek common templete bnate h
// const template:StoryFn<typeof Button>=(args)=><Button{...args}></Button>
const template:StoryFn<typeof Button>=(args)=><Button{...args}></Button>
const ButtonStory = {
    title: 'Customised Button',
    component: Button,
    argTypes:{
        color:{
            options:["blue","red","green"],
            // control:{type:'radio'}
            control:{type:'select'}
        },
        children:{
            control:{type:"text"}
        }
    }
    
  } as Meta<typeof Button>;
export default ButtonStory
export const myPrimaryButon=template.bind({})
myPrimaryButon.args={
    // children:"Primary Button",
    // width:"800px",
    color:"blue"

}
export const mySecondaryButton=template.bind({})
mySecondaryButton.args={
    children:"Primary Button",
    // width:"400px",
    color:"red"

}
// export const myPrimartButton=<Button color="blue">Primary</Button>
// export const secondaryButton=<Button color="red">Secondary</Button>