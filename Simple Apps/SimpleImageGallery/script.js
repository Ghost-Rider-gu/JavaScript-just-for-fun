// using my old script (old fashion way)
// maybe I'll rewrite this later

const pict1 = 'https://images.unsplash.com/flagged/photo-1591475791029-f9efe6297456?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const pict2 = 'https://images.unsplash.com/photo-1547013885-8ecbb0f8799a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80';
const pict3 = 'https://images.unsplash.com/photo-1415226194219-638f50c5d25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const pict4 = 'https://images.unsplash.com/photo-1415226161018-3ec581fa733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const pict5 = 'https://images.unsplash.com/photo-1415226481302-c40f24f4d45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const pict6 = 'https://images.unsplash.com/photo-1646324760800-2031a3e13651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80';
const pict7 = 'https://images.unsplash.com/photo-1646343589919-3108514cb1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const pict8 = 'https://images.unsplash.com/photo-1646256863976-1ac7b9ed70f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const pict9 = 'https://images.unsplash.com/photo-1646331091936-2b18deca49f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80';
const pict10 = 'https://images.unsplash.com/photo-1646309692295-44187932d99b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const pict11 = 'https://images.unsplash.com/photo-1646377760324-9b1454fd4759?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
const pict12 = 'https://images.unsplash.com/photo-1646365532028-2c47743d3ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80';
 
const dimension = '3|2';
const totalslots = dimension.split('|')[0] * dimension.split('|')[1];
let galleryarray = new Array();
 
galleryarray[0] = [pict1, 'baby bear', 'Baby bear', pict1];
galleryarray[1] = [pict2, 'polar bear', 'Polar bear', pict2];
galleryarray[2] = [pict3, 'waterfall', 'Waterfall', pict3];
galleryarray[3] = [pict4, 'beauty view', 'Beauty view', pict4];
galleryarray[4] = [pict5, 'canyon', 'Canyon', pict5];
galleryarray[5] = [pict6, 'tower', 'Tower', pict6];
galleryarray[6] = [pict7, 'breakfast', 'Breakfast', pict7];
galleryarray[7] = [pict8, 'bus', 'Bus', pict8];
galleryarray[8] = [pict9, 'lake', 'Lake', pict9];
galleryarray[9] = [pict10, 'shore', 'Shore', pict10];
galleryarray[10] = [pict11, 'cake', 'Cake', pict11];
galleryarray[11] = [pict12, 'polar teddy', 'Polar Teddy', pict12];

function buildimage(i) {
    let tempcontainer = (galleryarray[i][3] != '') ? (`<a href='${galleryarray[i][3]}' target='new'>`) : '';
 
    tempcontainer += `<img src='${galleryarray[i][0]}' border='1' title='${galleryarray[i][1]}'>`;
    tempcontainer = (galleryarray[i][3] != '') ? (tempcontainer + '</a>') : tempcontainer;
    tempcontainer = (galleryarray[i][2] != '') ? (tempcontainer + "<div id='pictDiscript'>" + galleryarray[i][2] + "</div>") : tempcontainer;
 
    return tempcontainer;
}

function jumptopage(page) {
    const startpoint = (page - 1) * totalslots;

    for (i = 0; i < totalslots; i++) {
        document.getElementById(`slide${i}`).innerHTML = (typeof galleryarray[startpoint + i] != 'undefined') ? buildimage(startpoint + i) : '';
    }
}

let curimage = 0; 
for (y = 0; y < dimension.split('|')[1]; y++) {
    for (x = 0; x < dimension.split('|')[0]; x++) {
        if (curimage < galleryarray.length) {
            document.write(`<div class='slideshow' id='slide${curimage}'>${buildimage(curimage)}</div>`);
        }
        curimage++;
    }
    document.write('<br style="clear: left" />');
}

function navBar() {
    for (i = 1; i < Math.ceil(galleryarray.length / totalslots) + 1; i++) {
        document.write(`<a id='navlinks' href='javascript:jumptopage(${i})'>Page ${i}</a>`);
    }
}
