/*
 * created by zhuzhihao on 2017/09/13
 */

import html2canvas from './html2canvas';

export default function html2image(element, options) {
	const h2i = {};
	const h2c = html2canvas(element, options);
	h2i.then = function(callback) {
		h2c.then(function(canvas) {
			const image = new Image();
			image.src = canvas.toDataURL();
			callback(image);
		})
	}
	return h2i;
}