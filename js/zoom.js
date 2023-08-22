"use strict";

let viewportWidth = jQuery(window).outerWidth();
console.log(viewportWidth);
if (window.matchMedia("(min-width: 1445px)").matches) {
  let zoom = viewportWidth / 1440;
  jQuery(".zoom-container").css("zoom", zoom);
}
// else {
// 	let zoom = viewportWidth / 320;
//     jQuery('.zoom-container').css('zoom', zoom);
// }

jQuery(window).on("resize", function () {
  let viewportWidth = jQuery(window).outerWidth();
  if (window.matchMedia("(min-width: 1442px)").matches) {
    let zoom = viewportWidth / 1440;
    jQuery(".zoom-container").css("zoom", zoom);
  }
  // 	else {
  // 		let zoom = viewportWidth / 320;
  //     	jQuery('body').css('zoom', zoom);
  // 	}
});
