#!/usr/bin/python
# -*- coding:utf-8 -*-


from bs4 import BeautifulSoup
import yaml


ar_html = '../index.html'
ar_cfg = '../cfg/general.yml'

def content(d, c):
	d.clear()
	d.append(c)

with open(ar_cfg, 'r') as f:
	cfg = yaml.safe_load(f)


with open(ar_html, 'r') as f:
	dom = BeautifulSoup(f.read(), 'html5lib')

	content(dom.select_one('#title'), cfg['title'])
	content(dom.select_one('#subtitle'), cfg['subtitle']['es'])

	dom.select_one('meta[name=description]')['content'] = cfg['meta_description']
	dom.select_one('link[rel=canonical]')['href'] = cfg['url']
	dom.select_one('link[rel=image_src]')['href'] = cfg['logo_share']
	dom.select_one('html')['lang'] = 'es-ES'


with open(ar_html, 'w') as f:
    f.write(dom.__repr__())
