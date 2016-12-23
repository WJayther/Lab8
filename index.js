$(function() {
    $('.plot').click(function () {
        var x = parseFloat($('.from').val());
        const xend = parseFloat($('.to').val());
        var i = x;
        var step = 0.2;
        const func = ($('.func').val());
        var valpairs = [x, eval(func)];
        
        for (x; i < xend; i += parseFloat(step)) {
            x = x + step;
            valpairs.push([x, eval(func)]);
        }
        $.plot($('.graph'), [{label: func, data: valpairs}], {});
    });
});
