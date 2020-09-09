const num = 3

const fn = () => {
  return 1
}

class TopBar {
  constructor (props) {
    this.el = props.el
    this.title = props.title
    this.info = props.info

    this.init()
  }
  init () {
    this.render()
  }
  render () {
    console.log(localStorage.getItem('token'))
    const dom = `
      <div class="zgys-title">${this.title}</div>
    `
    document.getElementById(this.el).innerHTML = dom
  }
}