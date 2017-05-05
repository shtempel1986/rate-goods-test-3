/**
 * Created by Павел on 07.04.2017.
 */
function checkItemNumber(number, quantity) {
    if (number < 0) return (quantity - 1);
    if (number >= quantity) return 0;
    return number;
}

function setClasses ($items){
    for(let item of $items){
        for (let i =0; i< $items.length; i++)
            $(item).removeClass(`gallery-thumbs__item${i}`)
        $(item).addClass(`gallery-thumbs__item${$(item).attr("data-gallery-item")}`)
    }
}

function changeNumber($items, increment) {
    for(let item of $items){
        let number = parseInt($(item).attr("data-gallery-item"));
        $(item).attr("data-gallery-item", `${checkItemNumber(number+increment, 10)}`);
        console.log($(item), checkItemNumber(number+increment, 10));
    }
}

$(document).ready(() => {
    let $galleryItems = $(".gallery-thumbs__item");

    $(".gallery-thumbs__controls_right").click(()=>{
        let $ninthItem = $(".gallery-thumbs__item9").hide();
        changeNumber($galleryItems, -1);
        setClasses($galleryItems);
        setTimeout(()=>{$ninthItem.show()}, 100);
    });

    $(".gallery-thumbs__controls_left").click(()=>{
        let $zeroItem = $(".gallery-thumbs__item0").hide();
        changeNumber($galleryItems, 1);
        setClasses($galleryItems);
        setTimeout(()=>{$zeroItem.show()}, 100);
    });
});