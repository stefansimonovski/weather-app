import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import { colors } from 'vuetify/lib';

Vue.use(Vuetify, {
  theme:{
    primary: colors.grey.darken2, 
    secondary: colors.lightBlue.accent1,
    accent: colors.lightBlue.accent1
  },
  // iconfont: 'md',
})
