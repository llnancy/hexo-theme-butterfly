/**
 * llnancy
 * encryptGalleryGroup and allery
 */

'use strict'

const urlFor = require('hexo-util').url_for.bind(hexo);

function encryptGalleryGroup (args) {
    const name = args[0];
    const desc = args[1];
    const url = urlFor(args[2]);
    const img = urlFor(args[3]);

    return `
  <figure class="gallery-group">
  <img class="gallery-group-img" src='${img}' alt="Group Image Gallery">
  <figcaption>
  <div class="gallery-group-name">${name}</div>
  <p>${desc}</p>
  <a class="gallery-a" data-href='${url}' href="javascript:void(0);"></a>
  </figcaption>
  </figure>
  `;
}

hexo.extend.tag.register('encryptGalleryGroup', encryptGalleryGroup);
