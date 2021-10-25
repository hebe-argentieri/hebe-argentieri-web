#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
reducción de imágenes
CLD='calidad-low'; mkdir -p $CLD; for a in *.jpg;do convert $a -filter Lanczos -resize 1000x1000 -quality 85 "./${CLD}/${a}" ; done
"""

import yaml
from  jinja2 import Environment, FileSystemLoader
from html import unescape
from os.path import basename, dirname
import re
import markdown
from datetime import datetime


def render_template(file_template, data, folder_template='./'):
    env = Environment(loader = FileSystemLoader(folder_template))
    env.filters['dirname'] = dirname
    env.filters['basename'] = basename
    env.filters['markdown'] = markdown.markdown
    tpl = env.get_template(file_template)
    return tpl.render(data)

def render_web():
    dat = yaml.safe_load(open('info.yml', 'r').read())

    artistas_dict = {}
    for x in dat['artistas']:
        artistas_dict[f'{x["nombre"]}-{x["apellido"]}'.lower().replace(' ', '')] = x


    artistas_az = []
    for k in sorted(artistas_dict.keys()):
        v = artistas_dict[k]
        v['id'] = k
        artistas_az.append(v)

    dat['artistas'] = artistas_az

    with open('../digital/index.html', 'wb') as f:
        f.write(render_template('catalogo-template.html', dat).encode('utf-8'))
    print(f'Listo: {datetime.now()} !')

if __name__.strip() == '__main__' :
    render_web()
