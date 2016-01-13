$(document).ready(function()
{
	var canvas = d3.select("#map").call(drag),
	    context = canvas.node().getContext("2d");

	var w = 960,
	    h = 500,
	    lon = -122.41948,
	    lat = 37.76487;

	var project = d3.geo.mercator()
	    .scale(1 / (2 * Math.PI))
	    .translate([.5, .5]);

	var view = pixymaps.view()
	    .size([w, h])
	    .center(project([lon, lat]))
	    .zoom(12);

	var image = pixymaps.image()
	    .view(view)
	    .url(pixymaps.url("http://{S}tile.cloudmade.com"
	    + "/1a1b06b230af4efdbb989ea99e9841af" // http://cloudmade.com/register
	    + "/999/256/{Z}/{X}/{Y}.png")
	    .hosts(["a.", "b.", "c.", ""]))
	    .render(canvas.node());

function drag(selection) {
  var p0;

  selection
      .on("mousedown", mousedown);

  d3.select(window)
      .on("mousemove", mousemove)
      .on("mouseup", mouseup);

  function mousedown() {
    p0 = [d3.event.pageX, d3.event.pageY];
    d3.event.preventDefault();
  }

  function mousemove() {
    if (p0) {
      var p1 = [d3.event.pageX, d3.event.pageY];
      view.panBy([p1[0] - p0[0], p1[1] - p0[1]]);
      image.render(canvas.node());
      p0 = p1;
      d3.event.preventDefault();
    }
  }

  function mouseup() {
    if (p0) {
      p0 = null;
      d3.event.preventDefault();
    }
  }
}

});
