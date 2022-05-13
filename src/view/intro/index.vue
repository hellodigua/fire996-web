<template>
  <div class="intro">
    <div class="banner">
      <div class="banner-wrapper wrapper">
        <p class="logo-text">#CODE996</p>
        <p class="p2">
          code996 是一个命令行脚本，它可以计算 git 项目的 commit 时间分布规律，进而推导出这个项目的工作强度。
        </p>
        <span class="btn" @click="previewDemo">查看示例结果</span>
      </div>
    </div>
    <div class="main wrapper">
      <div class="item">
        <div class="left">
          <div class="icon-mark">?</div>
        </div>
        <article class="markdown-body">
          <div class="p1">用途</div>
          <ul>
            <li>分析 git 项目的 commit 提交时间规律</li>
            <li>入职新公司后了解项目是否存在996迹象</li>
            <li>在上班的摸鱼时光找点乐子</li>
            <!-- <li class="todo">判断一个项目中到底谁是卷王</li> -->
          </ul>
        </article>
      </div>
      <div class="item">
        <div class="left">
          <div class="icon-mark">></div>
        </div>
        <article class="markdown-body">
          <div class="p1">如何使用</div>
          <ul>
            <li></li>
            <li>在项目的根目录，执行以下脚本</li>
            <pre>/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/npm/code996@latest/bin/code996.sh)"</pre>
            <li>如果以上方法都不管用，也可以下载该脚本后，直接在git仓库执行</li>
            <pre>
https://cdn.jsdelivr.net/npm/code996@latest/bin/code996.sh
</pre
            >
          </ul>
        </article>
      </div>
      <div class="item">
        <div class="left">
          <div class="icon-mark">#</div>
        </div>
        <article class="markdown-body">
          <div class="p1">它怎样工作</div>
          <p>1. 使用 git-log 对你的项目进行查询，得到以小时汇总和以天汇总的commit统计结果</p>
          <p>2. 将本地脚本得到的查询结果转为 URL 参数，并打开 URL 到网页</p>
          <p>3. 从 URL 拿到数据，并使用一些规则处理，并将结果可视化展现</p>
        </article>
      </div>
      <div class="item">
        <div class="left">
          <div class="icon-mark">@</div>
        </div>
        <article class="markdown-body">
          <div class="p1">它安全吗</div>
          <p>1. 脚本端和 Web 端均不会发起任何接口请求以收集数据</p>
          <p>2. 除分析的起始时间、commit结果等通用数据外，URL 本身不泄露项目名等任何关键信息</p>
          <p>
            3. 所有代码均已开源到
            <a href="https://github.com/hellodigua/code996" target="_blank">github</a>
            ，接受社区监督
          </p>
          <p>
            4. 也可以查看
            <a href="https://github.com/hellodigua/code996" target="_blank">README</a>
            了解更多有关问题
          </p>
        </article>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { router } from '../../router'
import Footer from '../../public/components/Footer.vue'

const previewDemo = () => {
  router.push({
    name: 'result',
    query: {
      time: '2021-01-01_2022-01-01',
      hour: '5_08,19_09,44_10,51_11,7_13,63_14,71_15,49_16,75_17,34_18,15_19,4_20,1_21,1_22',
      week: '50_1,119_2,108_3,96_4,65_5,1_6',
    },
  })
}
</script>
<style lang="scss" scoped></style>
