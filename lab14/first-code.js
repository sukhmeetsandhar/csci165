add = function() {
result = parseInt(jQuery('#operand_1').html()) + parseInt(jQuery('#operand_2').html());
jQuery('#result').html(result);
}
setup = function() {
jQuery('#add_button').click(add)
}
jQuery(document).ready(setup)


sub = function() {
result = parseInt(jQuery('#operand_1').html()) - parseInt(jQuery('#operand_2').html());
jQuery('#result').html(result);
}
setup = function() {
jQuery('#sub_button').click(sub)
}
jQuery(document).ready(setup)


mul = function() {
result = parseInt(jQuery('#operand_1').html()) * parseInt(jQuery('#operand_2').html());
jQuery('#result').html(result);
}
setup = function() {
jQuery('#mul_button').click(mul)
}
jQuery(document).ready(setup)


div = function() {
result = parseInt(jQuery('#operand_1').html()) / parseInt(jQuery('#operand_2').html());
jQuery('#result').html(result);
}
setup = function() {
jQuery('#div_button').click(div)
}
jQuery(document).ready(setup)