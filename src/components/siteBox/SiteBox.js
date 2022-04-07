import {ConstructorComponent} from "@core/ConstructorComponent";
import {$} from "@core/dom";

export class Sitebox extends ConstructorComponent {
  static className = 'siteBox'

  constructor($root, options) {
    super($root, {
      name: 'SiteBox',
      listeners: [],
      ...options
    })
  }

  toHTML() {
    const $el = $.create('div')
      .id('body').css({
        width: '100%',
        height: '100%'
      })
    this.$root.append($el)

    this.$on('toolbar:btn', data => {
      $el.css({
        backgroundColor: data
      })
    })

    this.$on('toolbar:addText',
      (text, fontCode, fontFamily, color, fontSize, align) => {
      const $text = $.create('div', 'SiteBox__text').text(text)
      $el.append($text)
      const $fontLink = $.create('style')
      $fontLink.append(fontCode)
      $el.append($fontLink)
      $text.css({
        fontSize: fontSize + 'px',
        fontFamily: fontFamily,
        color: color,
        textAlign: align
      })
    })

    return $el
  }
}
