
$(function() {
    $(document).ajaxSend(function(evnt, xhr) {
        xhr.startTime = new Date();
    });

    $(document).ajaxSuccess(function(evnt, xhr) {
        xhr.endTime = new Date();
        if (xhr.startTime) {
          xhr.elapsedMs = (xhr.endTime.getTime() - xhr.startTime.getTime());
        } else {
          xhr.elapsedMs = 0;
        }
    });

    // clicking the toggle button toggles the menu
    $("#navmenu-toggle").on("click", function() {
        var $navmenu = $("#navmenu");
        var show = ($navmenu.css("display") == "none");

        $navmenu.show();
        $navmenu.animate({
                "width": (show ? "300" : "0")+"px"
            }, "fast", function() {
                if (!show) {
                    $navmenu.hide();
                }
            });
        $("#maincontent").animate({
                "left": (show ? "310" : "0")+"px"
            }, "fast");
    });
});

// helper to format a number with comma thousand separators.
function formatNumber(n) {
  return (1 * n).toLocaleString({"useGrouping": true});
}

// helper to convert a string to title case.
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}