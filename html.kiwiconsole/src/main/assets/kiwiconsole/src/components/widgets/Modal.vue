<template>
    <div class="kiwi-modal enableMouse">
        <fd-nav v-on:navClose="show" v-on:navLeftClick="leftClick" ref="fdnav"></fd-nav>
        <ul class="kiwimodal-content ">
            <li v-for="(item,index) in cmds" v-on:click="historySelect(item)">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<style scoped>
.kiwi-modal {
    position: fixed;
    left: 0;
    right: 0;
    height: 100vh;
    bottom: -200vh;
    border-radius: 6px 6px 0 0;
    color: #fefefe;
    background: #FFF;
    -webkit-transition: bottom 0.5s ease 0.1s;
    -moz-transition: bottom 0.5s ease 0.1s;
    transition: bottom 0.5s ease 0.1s;
}

ul {
    overflow-y: auto;
    height: 100%;
}

li {
    line-height: 44px;
    padding: 0 6px;
    color: #000;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
li:active,li::after{
    background: #f3f3f3;
}
li::after{
    content: "";
    display: block;
    height: 1px;
    width: 100%;
}
</style>

<script>
import jQuery from 'jquery'
import Nav from '@/components/widgets/Nav.vue'
const offset = screen.availHeight+1800;
var initialPos = offset;
var toastTask;
(function(){
    jQuery('.kiwi-modal').height(screen.availHeight+'px');
})();

var cmds = (function() {
    var cmds = localStorage.getItem("cmds");
    if (cmds) {
        cmds = JSON.parse(cmds);
    } else {
        cmds = [];
    }
    return cmds;
})();
function saveSmdTolocal(cmds,cmd) {
    if (!/^\s+$/g.test(cmd)) {
        cmds.push(cmd);
        localStorage.setItem("cmds", JSON.stringify(cmds));
    }
}
function toggle() {
    initialPos = initialPos ^ offset;
    if (initialPos == 0) {
        jQuery('body').removeClass('noscroll');
        jQuery('html').removeClass('noscroll');
    } else {
        jQuery('body').addClass('noscroll');
        jQuery('html').addClass('noscroll');
    }
    jQuery('.kiwi-modal').css({
        bottom: initialPos - offset + 'px'
    });
}
export default {
    name: 'kiwi-modal',
    components: { 'fd-nav': Nav },
    data() {
        return {
            cmds: cmds,
            msg: "Empty"
        }
    },
    created: function() {
        // this.$on('navClose', this.show)
    },
    methods: {
        historySelect:function(mCmd){
            this.$emit('cmdSelect', mCmd);
        },
        addCmd: function(mCmd) {
            if (mCmd && mCmd !=this.cmds[this.cmds.length-1]) {
                cmds.push(mCmd);
                saveSmdTolocal(this.cmds,mCmd);
            }
        },
        leftClick:function(){
            this.cmds=cmds=[];
            localStorage.setItem("cmds", "[]");
        },
        show: function(title,leftMenu) {
            if(title) this.$refs.fdnav.setTitle(title);
            if(leftMenu) this.$refs.fdnav.setLeftText(leftMenu);
            toggle();
        }
    }
}
</script>
