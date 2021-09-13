const renderer = {
  paragraph(text) {
    text = text.trim();
    let modif = text.match(/^\{+([^\$\n]+?)\}+/);
    let param_class = '';
    let param_id = '';
    if(modif !== null){
      let dat = modif[1].split(' ');
      let cssclass = [];

      for(let i in dat){
        let v = dat[i];
        if(v.indexOf('.') == 0){
          cssclass.push(v.replace('.', ''));
        }
        if(v.indexOf('#') == 0){
          param_id = `id="${v.replace('#','')}"`;
        }
      }
      param_class = `class="${cssclass.join(' ')}"`;
      text = text.replace(modif[0], '');
    }
    return `<p ${param_id} ${param_class}>${text}</p>`;
  },
  link(href, title, text){
    if(title === null){
      title = '';
    }else{
      title = `, ${title}`; 
    }
    return `<a href="${href}">${text}${title}</a>`;
  }
};

// marked.use({
// 	gfm: true,
// 	headerPrefix: 'r:',
// });

marked.use({ renderer });
