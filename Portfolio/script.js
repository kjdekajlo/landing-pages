$(document).ready(function () {

    $("button#reload").click(function () {
        window.location.reload(1);
    });

    const pageWidth = $("body").width();
    if (pageWidth < 800) {
        $("#hamburger").click(function () {
            $("#sidenav").animate({
                width: 'toggle'
            }, 350);
        });

        $("#cancel").click(function () {
            $("#sidenav").animate({
                width: 'toggle'
            }, 350);
        });

    }

    $(function () {
        count = 0;
        var title = ["student", "developer", "gamer", "translator", "human"];
        setInterval(function () {
          count++;
          $("#title").fadeOut(600, function () {
            $(this).text(title[count % title.length]).fadeIn(600);
          });
        }, 2000);
      });
});