document.addEventListener('DOMContentLoaded', function() {
    var ids = ['svgDashboard', 'svgHome', 'svgProfile', 'svgMessages', 'svgHistory', 'svgTasks', 'svgCommunities', 'svgSettings', 'svgSupport','svgPrivacy'];
    ids.forEach(function(id) {
        var svgObject = document.getElementById(id);
        svgObject.addEventListener('load', function() {
            var svgDoc = svgObject.contentDocument;
            var svgItems = svgDoc.getElementsByTagName('path');
            Array.from(svgItems).forEach(function(item) {
                item.setAttribute('fill', 'white'); // Set fill color to white for each path
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var ids = ['svgBell'];
    ids.forEach(function(id) {
        var svgObject = document.getElementById(id);
        svgObject.addEventListener('load', function() {
            var svgDoc = svgObject.contentDocument;
            var svgItems = svgDoc.getElementsByTagName('path');
            Array.from(svgItems).forEach(function(item) {
                item.setAttribute('fill', 'white'); 
                item.setAttribute('stroke', 'black'); 
            });
        });
    });
});