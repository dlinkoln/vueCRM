import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min.js";

import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// require('dotenv').config();

firebase.initializeApp({
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: "vmcrm-c21f7.firebaseapp.com",
  databaseURL: "https://vmcrm-c21f7.firebaseio.com",
  projectId: "vmcrm-c21f7",
  storageBucket: "vmcrm-c21f7.appspot.com",
  messagingSenderId: "558767368771",
  appId: "1:558767368771:web:db326f66a7fe41db8f42f6"
});

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
