<template>
  <div class="kiwiconsole">
    <pre id="commands" v-html="vueData.records.join('')"></pre>
    <div class="loading" v-show="uioptions.cmdIsBlocked">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <form id="sender" style="display: table;">
      <div>[root&nbsp;</div>
      <div id="currentDirName" v-html="vueData.currentDirName"></div>
      <div id="command" contenteditable="true" v-on:keydown.13.prevent="send" v-html="vueData.command"></div>
    </form>

    <div class="widget" v-on:touchmove.prevent="dragWidget($event)">
      <div class="widget-launcher" v-on:click="showHistory">
        history
      </div>
    </div>
    <fd-modal ref="modal" v-on:cmdSelect="cmdSelect"></fd-modal>
    <fd-toast ref="toast"></fd-toast>
  </div>
</template>
<style>
html,body,.kiwiconsole{
  background: #000;
}
.kiwiconsole {
  padding: 1em !important;
}

.widget {
  position: fixed;
  left: -64px;
  top: 80vh;
}

.widget-launcher {
  background: whitesmoke;
  width: 80px;
  border-radius: 4px;
  text-align: center;
  line-height: 32px;
}

form {
  width: 100%;
  display: flex;
}

form * {
  display: inline;
  background: transparent;
}

#command {
  border-width: 0;
  outline: 0;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 40px !important;
  line-height: 1.2em;
  min-height: 1.2em;
  padding: 0 4px;
}
pre,
textarea {
  color: #f3f3f3!important;
  white-space: pre-wrap;
  word-wrap: break-word;
}

code,
form div {
  color: #42b983;
}

code::before,
form div:first-child::before {
  content: "→";
  width: 12px;
  color: #9f4;
}

.loading {
  display: block;
  text-align: center;
  height: 20px;
  margin: 0 auto;
}

.loading span {
  display: inline-block;
  line-height: 4px;
  height: 4px;
  width: 4px;
  margin-right: 4px;
  animation: loading 1.24s ease infinite;
  -webkit-animation: loading 1.24s ease infinite;
  -moz-animation: loading 1.24s ease infinite;
  animation-play-state: running;
  background: #42b983;
}

.loading span:nth-child(1) {
  animation-delay: 0.12s;
  animation-delay: 0.12s;
  -webkit-animation-delay: 0.12s;
  -moz-animation-delay: 0.12s;
}

.loading span:nth-child(2) {
  animation-delay: 0.24s;
  -webkit-animation-delay: 0.24s;
  -moz-animation-delay: 0.24s;
}

.loading span:nth-child(3) {
  animation-delay: 0.36s;
  -webkit-animation-delay: 0.36s;
  -moz-animation-delay: 0.36s;
}

.loading span:nth-child(4) {
  animation-delay: 0.48s;
  -webkit-animation-delay: 0.48s;
  -moz-animation-delay: 0.48s;
}

.loading span:nth-child(5) {
  animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
}

@keyframes loading {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes loading {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes loading {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<script>
import Modal from '@/components/widgets/Modal.vue'
import Toast from '@/components/widgets/Toast.vue'
import jQuery from 'jquery'
import URLTools from 'urltools'
import KiwiConstants from 'kiwi'

var currentVueComponent;
var vueData = {
  currentDirName: '/]#&nbsp;',
  command: '',
  records: []
}
var urlTool = new URLTools();
var veid, api_key, command;
var uioptions = {
  cmdIsBlocked: false
}
//stack源有效文件夹路径 stackpre即将切换的文件夹路径
var tempCd, stack = [], stackpre = [];
veid = urlTool.getQueryString('veid')
api_key = urlTool.getQueryString('api_key')
var cdirs;
function sendCMD(cmd) {
  command = cmd;
  if (!command || uioptions.cmdIsBlocked) { return; }
  currentVueComponent.$refs.modal.addCmd(cmd);
  var rawDir = stack.join('/');
  var rootS = `/${rawDir}`
  rootS = rootS.replace(/\/+/g, '/')
  var shmd = `<code>[root&nbsp;${rootS}]# ${command}</code><br>`;
  vueData.records.push(shmd)
  // jQuery('#commands').append(shmd);
  jQuery('#command').html('');
  // vueData.command='';
  var cddir;
  //供实际操作的cd 命令 stack&stackpre
  cdirs = stack.concat([]);
  if (/^\s*?cd\s+/g.test(command)) {
    tempCd = command.replace(/^\s*?cd\s+/g, '')
    if (tempCd.length == 0) {
      currentVueComponent.$refs.toast.show("Plez Check UR Command!");
      return;
    }
    stackpre = tempCd.split('/');
    if (stackpre[0] != '/') {
      stackpre.reverse();
      while (stackpre.length > 0) {
        var cd_dir = stackpre.pop();
        if (cd_dir == '..') {
          cdirs.pop();
          continue;
        }
        cdirs.push(cd_dir)
      }
    }
    command = '';
  }
  cddir = 'cd /' + cdirs.join('/') + ";";
  cddir = cddir.replace(/\/+/g, '/')
  var cd_url = `${KiwiConstants.URL_HOST}\
${KiwiConstants.API.SHELL_CMD_CHDIR}?
veid=${veid}&api_key=${api_key}&currentDir=%2F&newDir=` + cdirs.join('/')
  var url = `${KiwiConstants.URL_HOST}\
${KiwiConstants.API.SHELL_CMD_BASE}?
veid=${veid}&api_key=${api_key}&command=${cddir}${command}`;
  if (veid && api_key) {
    uioptions.cmdIsBlocked = true;
    var isError = void 0;
    if (tempCd && cdirs.length > 0) {
      jQuery.ajax({
        url: cd_url,
        async: false,
        method: 'GET',
        success: function(message, e, xhr) {
          if (tempCd) {
            stack = [].concat(cdirs);
            tempCd = void 0;
            var rawCd = '/' + stack.join('/');
            rawCd = rawCd.replace(/\/+/g, '/')
            vueData.currentDirName = `${rawCd}]#&nbsp;`;
          }
          var response = JSON.parse(xhr.responseText);
          if ((isError = response.error) != 0) {
            vueData.records.push('<span class="error">' + response.message + '</span><br/>');
          }
        },
        failure: function(message, e, xhr) {
          isError = 1;
          var response = JSON.parse(xhr.responseText);
          vueData.records.push('<span class="error">' + response.message + '</span><br/>');
        }
      })
    }
    if (isError) {
      uioptions.cmdIsBlocked = false;
      return;
    }
    if (command == '') {
      uioptions.cmdIsBlocked = false;
      return;
    }
    jQuery.ajax({
      url: url,
      async: true,
      timeout: 60000,
      method: 'GET',
      success: function(message, e, xhr) {
        var response = JSON.parse(xhr.responseText);
        if (response.error == 0) {
          if (tempCd) {
            stack = [].concat(cdirs);
            tempCd = void 0;
          }
          var rawCd = '/' + stack.join('/');
          rawCd = rawCd.replace(/\/+/g, '/')
          vueData.currentDirName = `${rawCd}]#&nbsp;`;
          // jQuery('#currentDirName').html(`${rawCd}]#&nbsp;`);
        }
        vueData.records.push(html_encode(response.message));
        setTimeout(
          function() {
            // if (document.body.scrollHeightt - screen.availHeight > 0) {
            document.body.scrollTop = document.body.scrollHeight - screen.availHeight;
            // }
          },
          100);
        uioptions.cmdIsBlocked = false;
      },
      failure: function(message, e, xhr) {
        var response = JSON.parse(xhr.responseText);
        vueData.records.push('<span class="error">' + response.message + '</span><br/>');
        uioptions.cmdIsBlocked = false;
      }
    });

  } else {

  }
}

function html_encode(str) {
  var s = "";
  if (str.length == 0) return "";
  s = str.replace(/&/g, "&gt;");
  s = s.replace(/</g, "&lt;");
  s = s.replace(/>/g, "&gt;");
  s = s.replace(/ /g, "&nbsp;");
  s = s.replace(/\'/g, "&#39;");
  s = s.replace(/\"/g, "&quot;");
  s = s.replace(/\n/g, "<br>");
  return s;
}

const OFFSET = - 64
const MARGIN = 16
export default {
  name: 'kiwiconsole',
  components: { 'fd-toast': Toast, 'fd-modal': Modal },
  data() {
    return {
      vueData: vueData,
      uioptions: uioptions
    }
  },
  created() {
    currentVueComponent = this;
  },
  methods: {
    send: function(event) {
      sendCMD(event.target.innerText)
    },
    cmdSelect: function(cmd) {
      currentVueComponent.$refs.modal.show();
      vueData.command = cmd;
      jQuery('#command').focus();
    },
    showHistory: function() {
      currentVueComponent.$refs.modal.show("Command Records", "Clear");
    },
    dragWidget: function(event) {
      var widget = document.querySelector('.widget')
      var x = event.touches[0].clientX
      var y = event.touches[0].clientY
      x = x < OFFSET ? OFFSET : x
      y = y < OFFSET ? OFFSET : y
      x = x + MARGIN < screen.availWidth ? x : screen.availWidth - MARGIN
      y = y + MARGIN < screen.availHeight ? y : screen.availHeight - MARGIN
      widget.style.left = x + 'px'
      widget.style.top = y + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

