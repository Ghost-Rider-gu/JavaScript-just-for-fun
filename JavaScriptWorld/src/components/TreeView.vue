<template>
    <vue3-tree-vue :items="$store.state.articles" 
                   :isCheckable="false"
                   :hideGuideLines="false">
      <template v-slot:item-prepend-icon="treeViewItem" >
              <img src="../assets/images/algorithms.png" alt="algorithms" 
                  v-if="treeViewItem.type === 'algorithms'"
                  height="20" width="20">

              <img src="../assets/images/item.png"
                  v-if="treeViewItem.type === 'item'"
                  height="20" width="20">

              <img src="./assets/excel.svg"
                  v-if="treeViewItem.type === '.excel'"
                  height="20" width="20">

                  
              <img src="./assets/playlist.svg"
                  v-if="treeViewItem.type === '.playlist'"
                  height="20" width="20">

              <img src="./assets/email.png"
                  v-if="treeViewItem.type === 'emails'"
                  height="20" width="20">
          </template>
          <template v-slot:item-prepend>
            <div style="background: blue; height: 18px; width: 18px; margin-right: 0.2em" ></div>
          </template>
    </vue3-tree-vue>
</template>

<script>
import Vue3TreeVue from 'vue3-tree-vue';

export default {
    components: {
        Vue3TreeVue
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
