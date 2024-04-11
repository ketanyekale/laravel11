/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { CometChatUIKit } from "@cometchat/chat-uikit-vue";
import { UIKitSettingsBuilder } from '@cometchat/uikit-shared';
/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});


import { CometChatConversationsWithMessages } from "@cometchat/chat-uikit-vue";
app.component('cometchat-conversations-with-messages', CometChatConversationsWithMessages);

// import ExampleComponent from './components/ExampleComponent.vue';
// app.component('example-component', ExampleComponent);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */



//create the builder
const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(import.meta.env.VITE_COMETCHAT_APP_ID)
  .setRegion(import.meta.env.VITE_COMETCHAT_REGION)
  .build();

CometChatUIKit.init(UIKitSettings)?.then(()=>{
    CometChatUIKit.getLoggedinUser().then(user => {
        if(!user){
            console.log({CometChatAuthToken})            //Login user
            CometChatUIKit.loginWithAuthToken(CometChatAuthToken).then(user => {
                console.log("Login Successful:", { user });
                //mount your app
                app.mount('#app');
            }).catch(console.log);
        } else {
            //user already logged in
            //mount your app
            app.mount('#app');
        }
    }).catch(console.log);
})

