class TopBar {
  constructor (props) {
    this.el = props.el
    this.username = props.username || '小诸葛008'

    this.init()
  }
  init () {
    this.render()
  }
  render () {
    const dom = `
      <div class="top-bar">
        <div class="top-container">
          <div class="top-left">
            <div class="left-home">
              <a :href="$link.index" target="_blank">首页</a>
            </div>
            <div class="left-phone ml20">
              联系电话：400-000-000
            </div>
          </div>
          <div class="top-right">
            <div class="right-item">
              <router-link to="/employer/userInfo">${this.username}</router-link>
            </div>
            <div class="right-item">
              <router-link to="/employer">我是雇主<i class="el-icon-arrow-down icon-down"></i></router-link>
              <div class="hover-list">
                <div class="hover-item"><router-link to="/employer/order/demandList">我的发包</router-link></div>
                <div class="hover-item"><a :href="$link.demandPub" target="_blank">发布需求</a></div>
              </div>
            </div>
            <div class="right-item">
              <router-link to="/provider">我是商家<i class="el-icon-arrow-down icon-down"></i></router-link>
              <div class="hover-list">
                <div class="hover-item"><router-link to="/provider/order/orderList">我的订单</router-link></div>
                <div class="hover-item"><router-link to="/provider/order/demandList">我的投标</router-link></div>
                <div class="hover-item"><router-link to="/provider/service/serviceList">服务管理</router-link></div>
              </div>
            </div>
            <div class="right-item" >
              <router-link to="/employer/userAccount/safety">账户设置<i class="el-icon-arrow-down icon-down"></i></router-link>
              <div class="hover-list">
                <div class="hover-item"><router-link to="/employer/userAccount/safety">账号安全</router-link></div>
                <div class="hover-item"><router-link to="/employer/userAccount/bind">账号绑定</router-link></div>
                <div class="hover-item"><router-link to="/employer/userAccount/password">修改密码</router-link></div>
                <div class="hover-item" @click="handleLogout">退出</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    document.getElementById(this.el).innerHTML = dom
  }
}

export default TopBar
// module.exports = TopBar