const Template = {};

Template.pages = `
<ul>
[[ _.each(items, function(v){ ]]
  <li><a class="page" href="#p:[[= v ]]">[[= title_pages(v) ]]</a></li>
[[ }); ]]
<li class="break_mobile">&nbsp;</li>
[[ _.each(contacts, function(v){ ]]
  <li><a class="contact" href="[[= v.url ]]" title="[[= v.name]]" target="_blank">
    <img src="[[= v.icon + no_cache() ]]">
  </a></li>
[[ }); ]]
</ul>`;

Template.series = `
<ul>[[ _.each(items, function(v){ ]]
  <li><a href="#s:[[= v ]]">[[= title_series(v) ]]</a></li>
[[ }); ]]</ul>`;

Template.events = `
<ul>[[ _.each(items, function(v){ ]]
  <li><a href="#e:[[= v ]]">[[= title_events(v) ]]</a></li>
[[ }); ]]</ul>`;

Template.rrss = `
<ul>[[ _.each(items, function(v){ ]]
  <li><a href="[[= G.cfg[v].url ]]" target="_blank" title="[[= G.cfg[v].name ]]"><img alt="[[= G.cfg[v].name ]]" src="[[= G.cfg[v].icon ]]"></a></li>
[[ }); ]]</ul>`;

Template.series_gallery_item = `
<section class="gallery">
  <h2>[[= v['title-'+G.lang] ]]</h2>
  <div class="description">[[= marked(v['description-'+G.lang]) ]]</div>
  <ul class="mini">
    <script name="data" type="text/json">[[= JSON.stringify(v) ]]</script>
    [[ _.each(v['images'], function(w, i){
          w['_title'] = w['tex-'+G.lang] || '';
          if( i < G.cfg.gallery.mini_max ){
      ]]
      <li class="itm">
        <img src="[[= w.img ]]" title="[[= w._title ]]">
      </li>
    [[ } }) ]]
    [[ if( v.images.length > G.cfg.gallery.mini_max ){ ]]
      <li class="itm more">[[= v['images'].length - G.cfg.gallery.mini_max ]]</li>
    [[ } ]]
  </ul>
</section>`;

Template.gallery_panel = `
<div id="gallery_panel">
  <div class="cnt">
    <nav>
      <button name="prev"></button>
      <i name="position">[[= i + 1 ]][[= G.cfg.gallery.position_sep]][[= d.images.length ]]</i>
      <button name="next"></button>
      <strong>[[= d['title-'+G.lang] ]]</strong>
      <button name="close"></button>
    </nav>
    <div class="image" data-index="[[= i ]]">
      <p>[[= d.images[i]['tex-'+G.lang] || '' ]]</p>
      <img src="[[= d.images[i].img ]]">
    </div>
  </div>
</div>`;


Template.events_item = `
<section class="event">
  <script name="data" type="text/json">[[= JSON.stringify(v) ]]</script>
  <div class="image"><img src="/img/events/[[= v['images'][0] + no_cache() ]]"></div>
  <div class="text">
    <h2>[[= v['title'] ]]</h2>
    <div class="link">
      <b class="btn more">+</b>
      <i class="date">[[= v['date'] ]]</i>
    </div>
  </div>
</section>`;

Template.events_grp_item = `
<section class="event">
  <script name="data" type="text/json">[[= JSON.stringify(v) ]]</script>
  <div class="btn more"><b>+</b> [[= v['title'] ]]</div>
</section>`;

Template.events_panel = `
<div id="events_panel">
  <div class="cnt">
    <nav>
      <b class="type">EVENTO:  [[= v['type'] ]]</b>
      <strong class="date">[[= v['date'] ]]</strong>
      <button name="close"></button>
    </nav>
    <div class="text">
      <h2>[[= v['title'] ]]</h2>
      <div>
	    <div class="details">[[= v['text'] || '' ]]</div>
	    <br>
      </div>
    </div>
    <div class="links">
      <strong>Enlaces</strong>
      <ul>
	[[ for(var link of v.urls) {]]
	<li><a href="[[= link[3] ]]" target="_blank"><img src="/img/icon/[[= link[0] ]].png" alt="[[= link[1] ]]">[[= link[2] ]]</a></li>
	[[ } ]]
      </ul>
    </div>
    <div class="images">
      [[ for(var img of v.images ){ ]]
      <img src="/img/events/[[= img + no_cache() ]]">
      [[ } ]]
    </div>
  </div>
</div>`;


Template.html_slide = `
<div id="[[= id ]]" class="slide">
  <div class="image">
    <img class="back" src="[[= images[0] ]]">
    <img class="front" src="/img/empty.svg">
  </div>
  <ul></ul>
</div>`;


Template.classes_item = `
<section class="classes">
  <script name="data" type="text/json">[[= JSON.stringify(v) ]]</script>
  <div class="img mobile image"><img src="/img/classes/[[= v['img_ini'] + no_cache() ]]"></div>
  <div class="text">
    <p class="title">[[= v['title'] ]]</p>
    <p class="shortxt">[[= v['shortxt'] ]]</p>
  </div>
  <div class="">
    [[ if(v.description.length > 0){ ]]
       <div class="right"><b class="btn more">[[= G.cfg.texts.show_details[G.lang] ]]</b></div>
    [[ } ]]
  </div>
</section>`;

Template.classes_grp_item = `
<section class="classes">
  <script name="data" type="text/json">[[= JSON.stringify(v) ]]</script>
  <div class="btn more"><b>+</b> [[= v['title'] ]]</div>
</section>`;

Template.classes_panel = `
<div id="classes_panel">
  <div class="cnt">
    <nav>
      <span class="upper c-white">[[= G.cfg.texts.classes[G.lang] ]]<span> &nbsp;
      <button name="close"></button>
    </nav>
    <div class="text">
      <h2>[[= v['title'] ]]</h2>
      <div>
	    <div class="details">[[= v['description'] || '' ]]</div>
        [[ if(v['finalized'] !== true){ ]]
           <div class="registration">
             <span>[[= G.cfg.registration.classes[G.lang] ]]</span>
             <a href="[[= G.cfg.registration.protocol ]][[= G.cfg.registration.url ]]" target="_blank">[[= G.cfg.registration.url ]]</a>
             &nbsp;,&nbsp;
             <a href="[[= G.cfg.whatsapp.url ]]" target="_blank">WA: [[= G.cfg.whatsapp.name ]]</a> .
           </div>
        [[ } ]]
	    <br>
      </div>
      <div class="images">
        [[ for(var img of v.images ){ ]]
        <img src="/img/classes/[[= img + no_cache() ]]">
        [[ } ]]
      </div>
    </div>
  </div>
</div>`;
