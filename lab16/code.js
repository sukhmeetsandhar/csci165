setup = function() {
t = 0;
jQuery("#outteroverout").mouseover(function() {
jQuery("#outerTextoverout").text("mouse over");
t = t + 1;
jQuery("#outerCounterOver").text(t + " overs");
});
z = 0;
jQuery("#outteroverout").mouseout(function() {
jQuery("#outerTextoverout").text("mouse out");
z = z + 1;
jQuery("#outerCounterOut").text(z + " outs");
});
a = 0;
jQuery("#inneroverout").mouseover(function() {
jQuery("#innerTextoverout").text("mouse over");
a = a + 1;
jQuery("#innerCounterOver").text(a + " overs");
});
i = 0;
jQuery("#inneroverout").mouseout(function() {
jQuery("#innerTextoverout").text("mouse out");
i = i + 1;
jQuery("#innerCounterOut").text(i + " outs");
});
d = 0;
jQuery("#outerenterleave").mouseenter(function() {
jQuery("#outerTextenterleave").text("mouse enter");
d = d + 1;
jQuery("#outerCounterEnter").text(d + " enters");
});
n = 0;
jQuery("#outerenterleave").mouseleave(function() {
jQuery("#outerTextenterleave").text("mouse leave");
n = n + 1;
jQuery("#outerCounterLeave").text(n + " leaves");
});
c = 0;
jQuery("#innerenterleave").mouseenter(function() {
jQuery("#innerTextenterleave").text("mouse enter");
c= c + 1;
jQuery("#innerCounterEnter").text(c + " enters");
});
y = 0;
jQuery("#innerenterleave").mouseleave(function() {
jQuery("#innerTextenterleave").text("mouse leave");
y = y + 1;
jQuery("#innerCounterLeave").text(y + " leaves");
});
}
jQuery(document).ready(setup)

