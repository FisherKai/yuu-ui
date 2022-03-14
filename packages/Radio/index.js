// 导入组件，组件必须声明 name
import Radio from './src'
import RadioGroup from './src/radio-group';
import RadioButton from './src/radio-button';
// 为组件提供 install 安装方法，供按需引入
Radio.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}
RadioGroup.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}
RadioButton.install = function (Vue) {
  Vue.component(Radio.name, Radio)
}
// 导出组件
export  { Radio, RadioGroup, RadioButton }
