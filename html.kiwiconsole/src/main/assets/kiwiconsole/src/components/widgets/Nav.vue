<template>
    <div class="kiwi-nav">
        <span v-on:click.prevent="leftClick">{{leftText}}</span>
        <h1>{{title}}</h1>
        <span v-on:click.prevent="close">{{rightText}}</span>
    </div>
</template>
<style scoped>
.kiwi-nav {
    line-height: 44px;
    margin: 0;
    color: #fefefe;
    background: #b71717;
    box-shadow: 1px 1px 1px 1px #dad4d4, -1px 1px 1px 1px #dad4d4;
    -webkit-box-shadow: 1px 1px 1px 1px #dad4d4, -1px 1px 1px 1px #dad4d4;
    display: flex;
}

.kiwi-nav>* {
    display: inline-block;
    padding-left: 6px;
    padding-right: 6px;
    text-align: center;
}

.kiwi-nav>span {
    min-width: 44px;
    max-width: 88px;
    height: 44px;
    overflow: hidden;
}

.kiwi-nav h1 {
    flex: 1;
    -ms-flex: 1;
}
</style>

<script>
import jQuery from 'jquery'
const offset = -screen.availHeight;
var initialPos = offset;
var toastTask;

export default {
    name: 'kiwi-nav',
    data() {
        return {
            leftText: "",
            title: "Empty",
            rightText: "Close",
        }
    }, methods: {
        setLeftText: function(text) {
            this.leftText = text;
        },
        setTitle: function(text) {
            this.title = text;
        },
        setRightText: function(text) {
            this.rightText = text;
        },
        toggle: function() {
            toggle();
            if (toastTask) {
                clearTimeout(toastTask);
            }
            toastTask = setTimeout(function() {
                toggle();
            }, 2000)
        },
        close: function(text) {
            this.$emit('navClose', '');
        },
        leftClick: function(text) {
            this.$emit('navLeftClick', '');
        }
    }
}
</script>
