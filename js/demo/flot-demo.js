//Flot Pie Chart
$(function() {

    var data = [{
        label: "Openstack: 0",
        data: 1,
				color: '#a94442'
    }, {
        label: "DAQ 2: 1",
        data: 3,
				color: '#3c763d'
    }, {
        label: "Maintenance: 2",
        data: 9,
				color: '#333'
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
    });

});