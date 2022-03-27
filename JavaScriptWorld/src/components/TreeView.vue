<template>    
    <!-- Default makes items selectable (one at a time) -->
    <vue3-tree-vue :items="items" 
                   :isCheckable="false"
                   :hideGuideLines="false">
      <!-- Applying some simple styling to tree-items -->
       <template v-slot:item-prepend-icon="treeViewItem" >
              <img src="./assets/folder.svg"
                   alt="folder"
                   v-if="treeViewItem.type === 'folder'"
                   height="20" width="20" />
       </template>
    </vue3-tree-vue>
</template>
