$(function(){
    ad();
    modal();
    movieExplorer();
    setInterval(mouseScroll, 1500);
})
function mouseScroll() {
    $("#mouse").animate({
        bottom: "-70"
    }, "swing", function(){
        $("#mouse").animate({
            bottom: "-60"
        });
    })
}
function movieExplorer() {
    $("input[type=image]").click(function(){
        var keyword = $("input[type=text]").val();
        if(!keyword) {
            alert("영화명을 입력하셔야 합니다");
        } else {
            console.log(keyword);
            location.href="https://www.megabox.co.kr/movie?searchText="+keyword;
        }
    });
}
function modal() {
    $(".favorite").click(function(){
        $("#modal").show();
    })
    $("#close_x").click(function(){
        $("#modal").hide();
    })
    $("#close_ok").click(function(){
        $("#modal").hide();
    })
}
function ad() {
    $(".ad_close").click(function(){
        $(".ad").hide();
    })
}