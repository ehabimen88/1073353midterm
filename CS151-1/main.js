$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());

        var foodImage = ["https://tw.savorjapan.com/gg/content_image/t0039_002_20180115022046.jpg"
                    , "https://tokyo-kitchen.icook.network/uploads/recipe/cover/156685/96a7420fa7879c00.jpg"
                    , "https://rs.joo.com.tw/website/uploads_product/website_771/P0077100065111_1_243124.jpg?_43177"
                    ];

        $("img").attr("src", foodImage[randomChildNumber])
    });
});