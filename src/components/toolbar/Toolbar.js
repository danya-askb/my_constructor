import {ConstructorComponent} from "@core/ConstructorComponent";
import {$} from "@core/dom";

export class Toolbar extends ConstructorComponent {
  static className = 'toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options
    })
  }

  toHTML() {
    return `
        <input type="text" placeholder="Цвет фона" id="changeBodyColor">
        <button id="submit">Подтвердить</button>
        <br>
        <input type="text" placeholder="Введите текст" id="text">
        <input type="text" placeholder="Добавить код нового шрифта"
         id="fontCode">
        <input type="text" placeholder="Семейство шрифта" id="fontFamily"> 
        <input type="text" placeholder="Цвет текста" id="colorText">
        <input type="text" placeholder="Размер шрифта" id="fontSize">
        <input type="text" placeholder="Куда выровнять?" id="align">
        <button id="addText">Добавить текст</button>
        
    `
  }

  onClick(event) {
    const btn = $('#submit').$el
    const addText = $('#addText').$el

    if (event.target === btn) {
      const colorValue = $('#changeBodyColor').value
      this.$emit('toolbar:btn', colorValue)
    }

    if (event.target === addText) {
      const textValue = $('#text').value
      const fontCode = $('#fontCode').value
      const fontFamily = $('#fontFamily').value
      const colorText = $('#colorText').value
      const fontSize = $('#fontSize').value
      const align = $('#align').value
      this.emitter.emit('toolbar:addText', textValue, fontCode,
        fontFamily, colorText, fontSize, align)
    }
  }
}
