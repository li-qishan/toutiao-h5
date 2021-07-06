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
      <!--
      绑定提交事件
      表单 各字段值 校验成功 通过后自动调用
      -->
      <van-form
        @submit="onLogin"
        @failed="onFailed"
        validate-first
        ref="login-form"
        :show-erroe="false"
        :show-error-message="false">
        <van-field
          v-model="user.mobile"
          icon-prefix="toutiao-h5"
          label="手机号"
          name="mobile"
          left-icon="shouji"
          placeholder="请输入手机号"
          :rules="formRules.mobile"
        />
        <!--嵌入按钮-->
        <van-field
          v-model="user.code"
          clearable
          icon-prefix="toutiao-h5"
          label="验证码"
          left-icon="yanzhengma"
          placeholder="请输入验证码"
          name="code"
          :rules="formRules.authCode"
        >
          <template #button>
            <!--class="send-btn" round-->
            <!--prevent 阻止默认表单提交-->
            <van-button
              size="mini"
              @click.prevent="onSendSms"
              type="primary" >发送验证码</van-button>
          </template>
        </van-field>

        <!--登录按钮-->
        <div class="login-btn-wrap">
          <van-button
            class="login-btn"
            type="info"
            block
           >登录</van-button>
        </div>
      </van-form>
    </div>

  </div>
</template>

<!--脚本区-->
<script>

// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import { login, sendSmsBoot } from '@/api/user'
// 引用 vantage  Tosast组件库
import { Toast } from 'vant'

export default {
// import引入的组件需要注入到对象中才能使用
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    // 这里存放数据
    return {
      user: {
        mobile: '13011111111',
        code: ''
      },
      // 校验规则
      formRules: {
        // 数组存放验证对象
        mobile: [
          { required: true, message: '手机号不能为空!' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' }
        ],
        authCode: [
          { required: true, message: '验证码不能为空!' },
          { pattern: /^\d{6}$/, message: '验证码格式错误！' }

        ]
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
      // 接口提交即开始加载中
      Toast.loading({
        message: '登录中...',
        forbidClick: true, // 禁止背景点击 防止多次提交
        duration: 0
      })
      // 1. 找到数据接口
      // 2. 封装请求方法
      // 3. 请求调用登录 13011111111  246810
      try {
        const res = await login(this.user)
        // 4. 处理响应结果
        console.log(res)
        Toast.success('登陆成功')
      } catch (e) {
        console.log(e)
        Toast.fail('登录失败')
      }
    },
    onFailed (error) {
      console.log('失败', error)
      if (error.errors[0]) {
        this.$toast(
          {
            message: error.errors[0].message,
            position: 'top'
          })
      }
    },
    async onSendSms () {
      try {
        // step1 设置回调函数
        await this.$refs['login-form'].validate('mobile')
        // step2  验证通过请求发送验证码
        const res = await sendSmsBoot({
          mobile: this.user.mobile
        })
        console.log(res)
      } catch (error) {
        this.$toast(
          {
            message: error.message,
            position: 'top'
          })
      }

      // 回调方式写法
      // this.$refs['login-form'].validate('code').then(
      //   data => {
      //     console.log(data)
      //   }
      // )
      // 校验手机验证码
      // 验证通过-> 请求发送验证码-> 用户接收-> 用户输入->请求登录
      // 请求发送验证码 -> 隐藏发送验证码文本-> 显示倒计时
      // 倒计时结束 -> 隐藏倒计时 -> 恢复发送文本
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
