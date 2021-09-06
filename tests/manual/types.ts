import Taggd from '../../dist/index'

Taggd.DEFAULT_OPTIONS

Taggd.Tag.createFromObject

const image = document.getElementById('image') as HTMLImageElement

const taggd = new Taggd(image, {}, [])

const tag = new Taggd.Tag({ x: 100, y: 100 })

taggd.on('taggd.editor.add', (taggd, position) => {
  console.log(taggd.enableEditorMode, position.x)
})

taggd.off('taggd.editor.add', (taggd) => {
  console.log(taggd)
})

taggd.once('taggd.editor.add', (taggd) => {
  console.log(taggd)
})

taggd.setOptions({
  addEvent: 'click',
})

taggd.addTag(tag)

taggd.getTag(1)

taggd.deleteTag(1)

taggd.setTags([tag])

taggd.addTags([tag])

taggd.getTags()

taggd.deleteTags()

taggd.map((value, index) => {
  console.log(value.enableEditorMode, index)
})

taggd.destroy()

taggd.enableEditorMode()

taggd.disableEditorMode()

tag.on('taggd.tag.delete', (taggd, tag) => {
  console.log(taggd, tag)
})

tag.off('taggd.tag.delete', (taggd, tag) => {
  console.log(taggd, tag)
})

tag.once('taggd.tag.delete', (taggd, tag) => {
  console.log(taggd.enableEditorMode, tag.enableEditorMode)
})

tag.isHidden()

tag.show().hide()

tag.setText('hhhhhhhhh')

tag.setText(() => 'hhhhhhhhh')

tag.setPosition(100, 100)

tag.setButtonAttributes({
  data: '11',
})

tag.setPopupAttributes({
  data: '11',
})

tag.enableEditorMode()

tag.disableEditorMode()

const data = tag.toJSON()
data.text
data.position
data.popupAttributes
data.buttonAttributes
