<!-- 页面区  -->
<template>
  <div class="login-container">
    <!--顶部固定nav-->
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />

  <!--输入框 表单-->
    <div class="login-from-wrap">
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          icon-prefix="toutiao-h5"
          label="手机号"
          left-icon="shouji"
          placeholder="请输入手机号"
        />
        <!--嵌入按钮-->
        <van-field
          v-model="user.code"
          clearable
          icon-prefix="toutiao-h5"
          label="验证码"
          left-icon="yanzhengma"
          placeholder="请输入验证码"
        >
          <template #button>
            <van-button class="send-btn" size="mini" round>发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
    </div>

    <!--登录按钮-->
    <div class="login-btn-wrap">
    <van-button
      class="login-btn"
      type="info"
      block
      @click="onLogin">登录</van-button>
    </div>

  </div>
</template>

<!--脚本区-->
<script>

// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { login } from '@/api/user'

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    // 这里存放数据
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  },
  // 方法集合
  methods: {
    // 登录事件
    async onLogin () {
      // 1. 找到数据接口
      // 2. 封装请求方法
      try {
        // 3. 请求调用登录 13011111111  246810
        // debugger
        const res = await login(this.user)
        console.log(res)
        console.log('登陆成功')
      } catch (e) {
        console.log(e)
        console.log('登录失败')
      }
      // 4. 处理响应结果
    }
  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<!--样式引用区-->
<style scoped lang="less">

.login-container {
  .send-btn{
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text{
      font-size: 11px;
      color: #0037e5;
    }
  }

  .login-from-wrap{
    padding-top: 20px;
  }

  .login-btn-wrap{
    padding: 26px 16px ;
    .login-btn{
      background-color: #6db5fd;
      .van-button__text{
        font-size:  15px;
      }
    }
  }
}

</style>
