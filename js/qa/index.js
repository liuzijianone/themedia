Vue.component("app-header", {
  props: ['app', 'user'],
  template: `
    <div class="header">
      <div class="inner">
        <div class="logo">
          <a href="./" class="logo-link" title="知否">
            <img v-bind:src="app.logo"/>
          </a>
        </div>
        <div class="search">
          <form action="./search" method="get">
            <input placeholder="搜索你感兴趣的问题">
            <a href="javascript:void(0);" class="ask" title="提问">提问</a>
          </form>
        </div>
        <div class="nav">
          <a href="" class="selected" title="首页">首页</a>
          <a href="" title="消息">消息</a>
          <a href="" v-bind:title="user.name"><img v-bind:src="user.avatar_url" class="avatar"/></a>
        </div>
      </div>
    </div>
  `
});

Vue.component("question-card", {
  props: ['question'],
  template: `
    <div class="question-card">
      <div class="question-title">
        <h2><a v-bind:href="'./question.html?qid=' + question.id">{{ question.title }}</a></h2>
        <div class="question-info">
          <span>{{question.answer_num}}回答</span>
          <span class="question-collect-num">{{question.collect_num}}人收藏</span>
        </div>
      </div>
      <div class="answers">
        <div v-if="question.answer.pictures.length > 0" class="answer-pic">
          <img v-bind:src="question.answer.pictures[0]">
        </div>
        <div class="answer-author">
          <a>
            <img v-bind:src="question.answer.author.avatar_url">{{question.answer.author.name}}
          </a>
          &nbsp;|&nbsp;
          <span>{{question.answer.author.desc}}</span>
        </div>
        <div class="answer-abstract">
          <a href="">{{question.answer.abstract}}...<span class="answer-content-whole">正文</span></a>
        </div>
        <div class="answer-ops">
          <a href="javascript:" class="op-like">
            <i></i>
            <span class="like-num">{{question.answer.like_num}}</span>
            <span>赞</span>
          </a>
          <a href="javascript:" class="op-unlike">
            <i></i>
            <span class="unlike-num">{{question.answer.unlike_num}}</span>
            <span>踩</span>
          </a>
          <a href="javascript:" class="op-comment">
            <i></i>
            <span class="comment-num">{{question.answer.comment_num}}</span>
            <span>评论</span>
          </a>
          <a href="javascript:" class="op-share">
            <i></i>
            <span class="share-num">{{question.answer.share_num}}</span>
            <span>分享</span>
          </a>
        </div>
      </div>
    </div>
  `
});

Vue.component("hot-question-item", {
  props: ['question'],
  template: `
    <div class="hot-question-item">
      <div class="question-title">
        <h2><a v-bind:href="'./question.html?qid=' + question.id">{{ question.title }}</a></h2>
      </div>
      <div class="answers">
        <div class="answer-author">
          <a>
            <img v-bind:src="question.answer.author.avatar_url">{{question.answer.author.name}}
          </a>
          &nbsp;|&nbsp;
          <span>{{question.answer.author.desc}}</span>
        </div>
        <div v-if="question.answer.pictures.length > 0" class="answer-pic">
          <img v-bind:src="question.answer.pictures[0]">
        </div>
        <div class="answer-abstract">
          <a href="">{{question.answer.abstract}}...<span class="answer-content-whole">正文</span></a>
        </div>
      </div>
    </div>
  `
});

Vue.component("user-card", {
  props: ['user'],
  template: `
    <div class="card user-card">
      <div>
        <a v-bind:href="'./user.html?uid=' + user.id">
          <img v-bind:src="user.avatar_url" class="avatar">
          <span class="username">{{user.name}}</span>
        </a>
      </div>
      <div>
        <ul>
          <li><a>我的回答{{user.num_answer}}</a></li>
          <li><a>我的收藏{{user.num_collect}}</a></li>
          <li><a>我的邀约{{user.num_invite}}</a></li>
          <li><a>我的关注{{user.num_follow}}</a></li>
          <li><a>我的粉丝{{user.num_fans}}</a></li>
        </ul>
      </div>
    </div>
  `
})

Vue.component("creator-card", {
  props: ['user'],
  template: `
    <div class="card creator-card">
      <div>
        <a v-bind:href="'./user.html?uid=' + user.id">创作者中心</a>
      </div>
      <div>
        <a>
          <span>昨日回答阅读数</span><span>{{user.num_read}}</span>
        </a>
        <a>
          <span>昨日回答赞同数</span><span>{{user.num_agree}}</span>
        </a>
      </div>
    </div>
  `
})

Vue.component("hot-qa", {
  props: ["hot_questions"],
  template: `
    <div class="hot-qa">
      <h4><span>热门推荐</span><a href="more">更多<i></i></a></h4>
      <hot-question-item v-for="question in hot_questions" v-bind:question="question"></hot-question-item>
    </div>
  `
})
Vue.component("copyright-card", {
  
})

questionList = []
for(var i=1; i< 15; i++) {
  questionList.push({
    id: 3242424, 
    title: "为什么特朗普要退出美日安保条约，遭到日本民众一致反对？",
    answer_num: 45,
    collect_num: 58,
    answer:{
      author:{name: "季冬", avatar_url: "", desc: "东南大学计算机专业研究生"}, 
      abstract: "特朗普在要去日本参加G20峰会前，放出话想退出“美日安保条约”，可是没看到日本民众反对，日本政府怕美国退出是真的。为什么？特朗普认为美日安保条约对美国不公平：在日本受到攻击时，条约",
      pictures: ["http://n.sinaimg.cn/finance/crawl/595/w550h845/20190629/ad6c-hyzpvis2535634.jpg"],
      like_num: 2000,
      unlike_num: null,
      comment_num: 343,
      share_num: null
    }})
}

hot_questions = []
for(var i=1; i< 5; i++) {
  hot_questions.push({
    id: 3242424, 
    title: "为什么特朗普要退出美日安保条约，遭到日本民众一致反对？",
    answer_num: 45,
    collect_num: 58,
    answer:{
      author:{name: "季冬", avatar_url: "", desc: "东南大学计算机专业研究生"}, 
      abstract: "特朗普在要去日本参加G20峰会前，放出话想退出“美日安保条约”，可是没看到日本民众反对，日本政府怕美国退出是真的。为什么？特朗普认为美日安保条约对美国不公平：在日本受到攻击时，条约",
      pictures: ["http://n.sinaimg.cn/finance/crawl/595/w550h845/20190629/ad6c-hyzpvis2535634.jpg"],
      like_num: 2000,
      unlike_num: null,
      comment_num: 343,
      share_num: null
    }})
}

new Vue({
  el: "#app",
  data: {
    questionList: questionList,
    hot_questions: hot_questions,
    app: {
      title: '首页 - 知否', logo: 'https://s3.pstatp.com/toutiao/resource/wenda/wenda_web/static/style/image/logo_5df43ca.png'
    },
    user: {
      id: 1233342442,
      name: "季冬", 
      avatar_url: "http://p9-tt.byteimg.com/large/pgc-image/3e675927d59a4257967100ac34df2a3f",
      num_answer: 10,
      num_collect: 100,
      num_follow: 45,
      num_fans: 300,
      num_invite: 12,
      num_read: 1000,
      num_agree: 300
    }
  }
});
