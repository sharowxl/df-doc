## 基础样式表

###  样式 css 类
```css
/* background-color */
.df-bg-color {
  background-color: #f0f0f0
}
.df-bg-white {
  background-color: #fff
}
.df-bg-primary {
  background-color: #2d6eeb
}
.df-bg-primary-hover {
  background-color: #427ced
}
.df-bg-primary-active {
  background-color: #2862d3
}
.df-bg-table-head {
  background-color: #f6f8fa
}
.df-bg-table-hover {
  background-color: rgba(75, 137, 255, 0.1)
}
.df-bg-success {
  background-color: #52b521
}
.df-bg-success-hover {
  background-color: #88da57
}
.df-bg-success-active {
  background-color: #6ec03d
}
.df-bg-warning {
  background-color: #fe7c4b
}
.df-bg-warning-hover {
  background-color: #fe895d
}
.df-bg-warning-active {
  background-color: #e56f43
}
.df-bg-danger {
  background-color: #ff4545
}
.df-bg-danger-hover {
  background-color: #ff6a6a
}
.df-bg-danger-active {
  background-color: #ee2e2e
}
.df-bg-info {
  background-color: #909399
}
.df-bg-info-hover {
  background-color: #a6a9ad
}
.df-bg-info-active {
  background-color: #84878d
}

/* df-grey-color */
.df-grey-1 {
  color: #f5f5f5 // 作为全系统的背景色
}
.df-grey-2 {
  color: #e5e6e7 // 用于单选或多选型标签及卡片页签导航等待选标签底色
}
.df-grey-3 {
  color: #dcdfe6 // 用于系统全局分割线，边界等
}
.df-grey-4 {
  color: #dadee6 // 按钮边框/表单边框线
}
.df-grey-5 {
  color: #e6eaf2 // 标签切换浅色背景
}
.df-grey-6 {
  color: #7d8fb3 // 标签切换深色背景
}
.df-grey-7 {
  color: #8590b3 // 一般作为辅助icon/功能icon正常状态使用颜色
}
.df-grey-8 {
  color: #26334d // 主要用于一级操作icon正常状态下的颜色
}

/* df-text-color */
.df-text-color {
  color: #191f25
}
.df-text-white {
  color: #fff
}
.df-text-primary {
  color: #2d6eeb
}
.df-text-primary-hover {
  color: #427ced
}
.df-text-primary-active {
  color: #2862d3
}
.df-text-table {
  color: #191f25
}
.df-text-success {
  color: #52b521
}
.df-text-success-hover {
  color: #88da57
}
.df-text-success-active {
  color: #6ec03d
}
.df-text-warning {
  color: #fe7c4b
}
.df-text-warning-hover {
  color: #fe895d
}
.df-text-warning-active {
  color: #e56f43
}
.df-text-danger {
  color: #ff4545
}
.df-text-danger-hover {
  color: #ff6a6a
}
.df-text-danger-active {
  color: #ee2e2e
}
.df-text-info {
  color: #909399
}
.df-text-info-hover {
  color: #a6a9ad
}
.df-text-info-active {
  color: #84878d
}

/* df-text-font-weight */
.df-font-weight-unset {
  font-weight: unset
}
.df-font-weight-default {
  font-weight: 400
}
.df-font-weight-bold {
  font-weight: bold
}
.df-font-weight-100 {
  font-weight: 100
}
.df-font-weight-200 {
  font-weight: 200
}
.df-font-weight-300 {
  font-weight: 300
}
.df-font-weight-400 {
  font-weight: 400
}
.df-font-weight-500 {
  font-weight: 500
}
.df-font-weight-600 {
  font-weight: 600
}
.df-font-weight-700 {
  font-weight: 700
}
.df-font-weight-800 {
  font-weight: 800
}
.df-font-weight-900 {
  font-weight: 900
}

/* float */
.df-clearfix {
  clear: both
}
.df-fl-left {
  float: left
}
.df-fl-right {
  float: right
}

/* box with width and height */
.df-full-box {
  width: 100%;
  height: 100%
}
.df-full-width {
  width: 100%
}
.df-full-height {
  height: 100%
}
.df-half-width {
  width: 50%
}
.df-half-height {
  height: 50%
}

/* overflow */
.df-ofa {
  overflow: auto
}
.df-ofh {
  overflow: hidden
}
.df-ofs {
  overflow: scroll
}

/* position */
.df-ptr {
  position: relative
}
.df-pta {
  position: absolute
}
.df-ptf {
  position: fixed
}

/* box-sizing */
.df-b-box {
  box-sizing: border-box
}
.df-c-box {
  box-sizing: content-box
}

/* border */
.df-border-a {
  border: 1px solid #e0e0e0
}
.df-border-l {
  border-left: 1px solid #e0e0e0
}
.df-border-r {
  border-right: 1px solid #e0e0e0
}
.df-border-t {
  border-top: 1px solid #e0e0e0
}
.df-border-b {
  border-bottom: 1px solid #e0e0e0
}
.df-dashed-border {
  border-style: dashed
}
.df-dotted-border {
  border-style: dotted
}
.df-double-border {
  border-style: double
}

/* flex */
.df-container {
  display: flex;
  flex-direction: row
}
.df-container-column {
  display: flex;
  flex-direction: column
}
.df-flex-center {
  display: flex;
  justify-content: center;
  align-items: center
}
.df-flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center
}

/* text align */
.df-align-l {
  text-align: left
}
.df-align-c {
  text-align: center
}
.df-align-r {
  text-align: right
}

/* border radius */
/* 4~32 */
.df-round4 {
  border-radius: 4px
}
.df-round8 {
  border-radius: 8px
}
.df-round12 {
  border-radius: 12px
}
.df-round16 {
  border-radius: 16px
}
.df-round20 {
  border-radius: 20px
}
.df-round24 {
  border-radius: 24px
}
.df-round28 {
  border-radius: 28px
}
.df-round32 {
  border-radius: 32px
}
/* 5~15 */
.df-round5 {
  border-radius: 5px
}
.df-round10 {
  border-radius: 10px
}
.df-round15 {
  border-radius: 15px
}

/* margin */
/* 4~32 */
.df-mhw4 {
  margin: 4px
}
.df-mhw8 {
  margin: 8px
}
.df-mhw12 {
  margin: 12px
}
.df-mhw16 {
  margin: 16px
}
.df-mhw20 {
  margin: 20px
}
.df-mhw24 {
  margin: 24px
}
.df-mhw28 {
  margin: 28px
}
.df-mhw32 {
  margin: 32px
}
.df-mh4 {
  margin-top: 4px;
  margin-bottom: 4px
}
.df-mh8 {
  margin-top: 8px;
  margin-bottom: 8px
}
.df-mh12 {
  margin-top: 12px;
  margin-bottom: 12px
}
.df-mh16 {
  margin-top: 16px;
  margin-bottom: 16px
}
.df-mh20 {
  margin-top: 20px;
  margin-bottom: 20px
}
.df-mh24 {
  margin-top: 24px;
  margin-bottom: 24px
}
.df-mh28 {
  margin-top: 28px;
  margin-bottom: 28px
}
.df-mh32 {
  margin-top: 32px;
  margin-bottom: 32px
}
.df-mw4 {
  margin-left: 4px;
  margin-right: 4px
}
.df-mw8 {
  margin-left: 8px;
  margin-right: 8px
}
.df-mw12 {
  margin-left: 12px;
  margin-right: 12px
}
.df-mw16 {
  margin-left: 16px;
  margin-right: 16px
}
.df-mw20 {
  margin-left: 20px;
  margin-right: 20px
}
.df-mw24 {
  margin-left: 24px;
  margin-right: 24px
}
.df-mw28 {
  margin-left: 28px;
  margin-right: 28px
}
.df-mw32 {
  margin-left: 32px;
  margin-right: 32px
}
.df-ml4 {
  margin-left: 4px
}
.df-ml8 {
  margin-left: 8px
}
.df-ml12 {
  margin-left: 12px
}
.df-ml16 {
  margin-left: 16px
}
.df-ml20 {
  margin-left: 20px
}
.df-ml24 {
  margin-left: 24px
}
.df-ml28 {
  margin-left: 28px
}
.df-ml32 {
  margin-left: 32px
}
.df-mr4 {
  margin-right: 4px
}
.df-mr8 {
  margin-right: 8px
}
.df-mr12 {
  margin-right: 12px
}
.df-mr16 {
  margin-right: 16px
}
.df-mr20 {
  margin-right: 20px
}
.df-mr24 {
  margin-right: 24px
}
.df-mr28 {
  margin-right: 28px
}
.df-mr32 {
  margin-right: 32px
}
.df-mt4 {
  margin-top: 4px
}
.df-mt8 {
  margin-top: 8px
}
.df-mt12 {
  margin-top: 12px
}
.df-mt16 {
  margin-top: 16px
}
.df-mt20 {
  margin-top: 20px
}
.df-mt24 {
  margin-top: 24px
}
.df-mt28 {
  margin-top: 28px
}
.df-mt32 {
  margin-top: 32px
}
.df-mb4 {
  margin-bottom: 4px
}
.df-mb8 {
  margin-bottom: 8px
}
.df-mb12 {
  margin-bottom: 12px
}
.df-mb16 {
  margin-bottom: 16px
}
.df-mb20 {
  margin-bottom: 20px
}
.df-mb24 {
  margin-bottom: 24px
}
.df-mb28 {
  margin-bottom: 28px
}
.df-mb32 {
  margin-bottom: 32px
}
/* 5~15 */
.df-mhw5 {
  margin: 5px
}
.df-mhw10 {
  margin: 10px
}
.df-mhw15 {
  margin: 15px
}
.df-mh5 {
  margin-top: 5px;
  margin-bottom: 5px
}
.df-mh10 {
  margin-top: 10px;
  margin-bottom: 10px
}
.df-mh15 {
  margin-top: 15px;
  margin-bottom: 15px
}
.df-mw5 {
  margin-left: 5px;
  margin-right: 5px
}
.df-mw10 {
  margin-left: 10px;
  margin-right: 10px
}
.df-mw15 {
  margin-left: 15px;
  margin-right: 15px
}
.df-ml5 {
  margin-left: 5px
}
.df-ml10 {
  margin-left: 10px
}
.df-ml15 {
  margin-left: 15px
}
.df-mr5 {
  margin-right: 5px
}
.df-mr10 {
  margin-right: 10px
}
.df-mr15 {
  margin-right: 15px
}
.df-mt5 {
  margin-top: 5px
}
.df-mt10 {
  margin-top: 10px
}
.df-mt15 {
  margin-top: 15px
}
.df-mb5 {
  margin-bottom: 5px
}
.df-mb10 {
  margin-bottom: 10px
}
.df-mb15 {
  margin-bottom: 15px
}

/* padding */
/* 4~32 */
.df-phw4 {
  padding: 4px
}
.df-phw8 {
  padding: 8px
}
.df-phw12 {
  padding: 12px
}
.df-phw16 {
  padding: 16px
}
.df-phw20 {
  padding: 20px
}
.df-phw24 {
  padding: 24px
}
.df-phw28 {
  padding: 28px
}
.df-phw32 {
  padding: 32px
}
.df-ph4 {
  padding-top: 4px;
  padding-bottom: 4px
}
.df-ph8 {
  padding-top: 8px;
  padding-bottom: 8px
}
.df-ph12 {
  padding-top: 12px;
  padding-bottom: 12px
}
.df-ph16 {
  padding-top: 16px;
  padding-bottom: 16px
}
.df-ph20 {
  padding-top: 20px;
  padding-bottom: 20px
}
.df-ph24 {
  padding-top: 24px;
  padding-bottom: 24px
}
.df-ph28 {
  padding-top: 28px;
  padding-bottom: 28px
}
.df-ph32 {
  padding-top: 32px;
  padding-bottom: 32px
}
.df-pw4 {
  padding-left: 4px;
  padding-right: 4px
}
.df-pw8 {
  padding-left: 8px;
  padding-right: 8px
}
.df-pw12 {
  padding-left: 12px;
  padding-right: 12px
}
.df-pw16 {
  padding-left: 16px;
  padding-right: 16px
}
.df-pw20 {
  padding-left: 20px;
  padding-right: 20px
}
.df-pw24 {
  padding-left: 24px;
  padding-right: 24px
}
.df-pw28 {
  padding-left: 28px;
  padding-right: 28px
}
.df-pw32 {
  padding-left: 32px;
  padding-right: 32px
}
.df-pl4 {
  padding-left: 4px
}
.df-pl8 {
  padding-left: 8px
}
.df-pl12 {
  padding-left: 12px
}
.df-pl16 {
  padding-left: 16px
}
.df-pl20 {
  padding-left: 20px
}
.df-pl24 {
  padding-left: 24px
}
.df-pl28 {
  padding-left: 28px
}
.df-pl32 {
  padding-left: 32px
}
.df-pr4 {
  padding-right: 4px
}
.df-pr8 {
  padding-right: 8px
}
.df-pr12 {
  padding-right: 12px
}
.df-pr16 {
  padding-right: 16px
}
.df-pr20 {
  padding-right: 20px
}
.df-pr24 {
  padding-right: 24px
}
.df-pr28 {
  padding-right: 28px
}
.df-pr32 {
  padding-right: 32px
}
.df-pt4 {
  padding-top: 4px
}
.df-pt8 {
  padding-top: 8px
}
.df-pt12 {
  padding-top: 12px
}
.df-pt16 {
  padding-top: 16px
}
.df-pt20 {
  padding-top: 20px
}
.df-pt24 {
  padding-top: 24px
}
.df-pt28 {
  padding-top: 28px
}
.df-pt32 {
  padding-top: 32px
}
.df-pb4 {
  padding-bottom: 4px
}
.df-pb8 {
  padding-bottom: 8px
}
.df-pb12 {
  padding-bottom: 12px
}
.df-pb16 {
  padding-bottom: 16px
}
.df-pb20 {
  padding-bottom: 20px
}
.df-pb24 {
  padding-bottom: 24px
}
.df-pb28 {
  padding-bottom: 28px
}
.df-pb32 {
  padding-bottom: 32px
}
/* 5~15 */
.df-phw5 {
  padding: 5px
}
.df-phw10 {
  padding: 10px
}
.df-phw15 {
  padding: 15px
}
.df-ph5 {
  padding-top: 5px;
  padding-bottom: 5px
}
.df-ph10 {
  padding-top: 10px;
  padding-bottom: 10px
}
.df-ph15 {
  padding-top: 15px;
  padding-bottom: 15px
}
.df-pw5 {
  padding-left: 5px;
  padding-right: 5px
}
.df-pw10 {
  padding-left: 10px;
  padding-right: 10px
}
.df-pw15 {
  padding-left: 15px;
  padding-right: 15px
}
.df-pl5 {
  padding-left: 5px
}
.df-pl10 {
  padding-left: 10px
}
.df-pl15 {
  padding-left: 15px
}
.df-pr5 {
  padding-right: 5px
}
.df-pr10 {
  padding-right: 10px
}
.df-pr15 {
  padding-right: 15px
}
.df-pt5 {
  padding-top: 5px
}
.df-pt10 {
  padding-top: 10px
}
.df-pt15 {
  padding-top: 15px
}
.df-pb5 {
  padding-bottom: 5px
}
.df-pb10 {
  padding-bottom: 10px
}
.df-pb15 {
  padding-bottom: 15px
}
```

###  样式颜色 js 版本
```js
export default {
  /* background_color */
  df_bg_color: '#f0f0f0',
  df_bg_white: '#fff',
  df_bg_table_head: '#f6f8fa',
  df_bg_table_hover: 'rgba(75, 137, 255, 0.1)',
  df_bg_primary: '#2d6eeb',
  df_bg_primary_hover: '#427ced',
  df_bg_primary_active: '#2862d3',
  df_bg_success: '#52b521',
  df_bg_success_hover: '#88da57',
  df_bg_success_active: '#6ec03d',
  df_bg_warning: '#fe7c4b',
  df_bg_warning_hover: '#fe895d',
  df_bg_warning_active: '#e56f43',
  df_bg_danger: '#ff4545',
  df_bg_danger_hover: '#ff6a6a',
  df_bg_danger_active: '#ee2e2e',
  df_bg_info: '#909399',
  df_bg_info_hover: '#a6a9ad',
  df_bg_info_active: '#84878d',

  /* df_grey_color */
  df_grey_1: '#f5f5f5', // 作为全系统的背景色
  df_grey_2: '#e5e6e7', // 用于单选或多选型标签及卡片页签导航等待选标签底色
  df_grey_3: '#dcdfe6', // 用于系统全局分割线，边界等
  df_grey_4: '#dadee6', // 按钮边框/表单边框线
  df_grey_5: '#e6eaf2', // 标签切换浅色背景
  df_grey_6: '#7d8fb3', // 标签切换深色背景
  df_grey_7: '#8590b3', // 一般作为辅助icon/功能icon正常状态使用颜色
  df_grey_8: '#26334d', // 主要用于一级操作icon正常状态下的颜色

  /* df_text_color */
  df_text_color: '#191f25',
  df_text_white: '#fff',
  df_text_table: '#191f25',
  df_text_primary: '#2d6eeb',
  df_text_primary_hover: '#427ced',
  df_text_primary_active: '#2862d3',
  df_text_success: '#52b521',
  df_text_success_hover: '#88da57',
  df_text_success_active: '#6ec03d',
  df_text_warning: '#fe7c4b',
  df_text_warning_hover: '#fe895d',
  df_text_warning_active: '#e56f43',
  df_text_danger: '#ff4545',
  df_text_danger_hover: '#ff6a6a',
  df_text_danger_active: '#ee2e2e',
  df_text_info: '#909399',
  df_text_info_hover: '#a6a9ad',
  df_text_info_active: '#84878d'
}
```