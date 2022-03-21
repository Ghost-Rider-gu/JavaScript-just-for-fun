<template>
    <div class="dashboard">
        <header>
            <div class="logo">Logo</div>
            <div class="slogan">Slogan</div>
        </header>
        <menu type="toolbar">
            <div class="toolbox">Show all</div>
            <div class="toolbox">Statistic</div>
            <div class="toolbox">Other</div>
            <div class="toolbox">Search</div>
        </menu>
        <aside>
            <div class="material-tree">All articles as a tree</div>
        </aside>
        <main>
            <div class="main-area">Showing area</div>
        </main>
        <footer>
            <div class="statusbox">Copyright</div>
            <div class="statusbox">Show stat</div>
            <div class="statusbox">Name of article</div>
        </footer>
    </div>
</template>

<style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        color: white;
        height: 100vh;
        background: rgb(236, 237, 241);
        background: linear-gradient(to right, #606c88, #3f4c6b);
    }

    header,
    menu,
    aside,
    main,
    footer {
        border: skyblue 1px solid;
        padding: 10px;
    }

    .dashboard {
        max-width: 100%;
        margin: 5px, auto;
        padding: 10px;
        display: grid;
        grid-template-areas:
            'header header'
            'menu menu'
            'aside main'
            'footer footer';
        grid-template-columns: 2fr 4fr;
        grid-template-rows: 80px 80px 1fr 80px;
        gap: 5px;
    }

    header {
        grid-area: header;
    }

    menu {
        grid-area: menu;
    }

    aside {
        grid-area: aside;
    }

    main {
        grid-area: main;
    }

    footer {
        grid-area: footer;
    }
</style>
