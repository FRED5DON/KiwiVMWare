<template>
    <div class="toast">
        <h1>{{msg}}</h1>
    </div>
</template>
<style scoped>
.toast {
    position: fixed;
    bottom: -244px;
    left: 0;
    right: 0;
    line-height: 44px;
    margin: 0 44px;
    padding: 0 10px;
    border-radius: 6px 6px 0 0;
    color: #fefefe;
    background: #b71717;
    box-shadow: 1px 1px 1px 1px #660000, -1px 1px 1px 1px #660000;
    -webkit-transition: bottom 0.5s ease 0.1s;
    -moz-transition: bottom 0.5s ease 0.1s;
    transition: bottom 0.5s ease 0.1s;
}
</style>

<script>
import jQuery from 'jquery'
const offset= -245;
var initialPos = offset;
var toastTask;
function toggle() {
    initialPos = initialPos ^ offset;
    jQuery('.toast').css({
        bottom: initialPos + 'px'
    });
}
export default {
    name: 'toast',
    data() {
        return {
            msg: "Empty"
        }
    }, methods: {
        show: function(text) {
            this.msg = text;
            toggle();
            if (toastTask) {
                clearTimeout(toastTask);
            }
            toastTask = setTimeout(function() {
                toggle();
            }, 2000)
        }
    }
}
</script>
