<template>
    <vue3-tree-vue :items="articles"
                   :isCheckable="false"
                   :hideGuideLines="false">
      <template v-slot:item-prepend-icon="treeViewItem">
              <img src="../assets/images/categoryIcon.ico" 
                  v-if="treeViewItem.type === 'category'"
                  height="20" width="20">

              <img src="../assets/images/unreadArticleIcon.ico"
                  v-if="treeViewItem.type === 'unreadItem'"
                  height="20" width="20">

              <img src="../assets/images/readArticleIcon.ico"
                  v-if="treeViewItem.type === 'readItem'"
                  height="20" width="20">

              <img src="../assets/images/favoriteIcon.ico"
                  v-if="treeViewItem.type === 'favorite'"
                  height="20" width="20">  

              <span>&nbsp;&nbsp;</span>
          </template>
    </vue3-tree-vue>
</template>

<script>
import Vue3TreeVue from 'vue3-tree-vue';

export default {
    components: {
        Vue3TreeVue
    },
    computed: {
        articles() {
            return this.$store.getters['articles/articles'];
        }
    }
}
</script>

<style>
.selected-tree-item {
    background: rgba(235, 106, 59, 0.795);
    color: white;
}

ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    display: inline-block;
}

li {
    border-radius: 4px;
}

li.drag-over {
    background-color: rgba(22, 22, 22, 0.068);
}

.tree-view-item {
    margin: 0.1em;
    padding: 0.35em;
}

.chevron-right {
    color: gray;
}

.hide-chevron {
    visibility: collapse;
}

.icon-area {
    width: 22px;
    margin-right: 0.4em;
}

.horizontal-dashes {
    width: 1em;
    border-top: 1px dashed rgb(192, 192, 192);
}

.node-name {
    cursor: pointer;
    margin-left: 5px;
}

.d-flex {
    display: flex;
}

.align-items-center {
    align-items: center;
}

.node-child {
    margin-left: 37px !important;
    border-left: 1px dashed rgb(192, 192, 192);
    display: block;
}

.hide {
    display: none;
}

.hide-guidelines {
    border-left: none !important;
}

.chevron-right {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 22px;
    height: 22px;
    border: 2px solid transparent;
    border-radius: 100px;
    transition: .2s;
}

.pointer {
    cursor: pointer;
}

.chevron-right.rotate-90::after { 
    transform: rotateZ(45deg);
}

.chevron-right::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 7px;
    height: 7px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    transform: rotate(-45deg);
    right: 6px;
    top: 5px
}
</style>
