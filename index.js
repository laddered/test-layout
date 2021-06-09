



// объявление модуля A
// modules.define('A', [], (provide) => { provide(1) });
// объявление модуля B
// modules.define('B', [], (provide) => { setTimeout(() => { provide(2) }, 1000); });
// Полезная логика modules.require(['A', 'B'], (A, B) => { console.log(A + B);
// 1 + 2 = 3 }); // вывод для проверки асинхронности require console.log(4);
// 4








$(document).ready(function() {
    $(document).on("click", ".switchable-tabs li:not(.active)", function() {
        $(this).addClass("active").siblings().removeClass("active").closest(".switchable-content").find(".switchable-tabs-content").removeClass("active").eq($(this).index()).addClass("active");

        $('.sidebar').appendTo(".switchable-tabs-content.active .columns-space");
        $(".switchable-tabs-content").eq($(this).index()-1).find(".sidebar").remove();
    })
})
