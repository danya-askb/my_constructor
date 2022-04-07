import './scss/index.scss'
import {SiteConstructor} from '@/components/constructor/Constructor'
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Sitebox} from "@/components/siteBox/SiteBox";

const constructor = new SiteConstructor('#app', {
  components: [Toolbar, Sitebox]
})

constructor.render()
