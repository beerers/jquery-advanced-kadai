$(function () {
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  });

  $(".fade").hover(
    function () {
      $(this).stop().fadeTo(300, 0.5); // ホバー時に半透明
    },
    function () {
      $(this).stop().fadeTo(300, 1); // ホバー解除で元の透明度
    }
  );

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#back-Btn").fadeIn(); // スクロール量が100pxを超えたらボタンを表示
    } else {
      $("#back-Btn").fadeOut(); // スクロール量が100px以下なら非表示
    }
  });

  // TOPに戻るボタンをクリックした時
  $("#back-Btn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, "smooth"); // スムーズにトップに戻る
  });

  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault(); // デフォルトの動作を防ぐ
    const target = $($(this).attr("href")); // クリックされたリンクのhrefを取得
    if (target.length) {
      // hrefのlengthを取って、ターゲットがあるかないかの確認。エラー防止
      $("html, body").animate({ scrollTop: target.offset().top }, 500); // 500ミリ秒かけて、ページのスクロール位置を target の位置まで移動させる。アニメーションの時間を1秒に設定
    }
  });

  // フェードイン
  $(window).on("scroll", function () {
    // .eachは複数の要素を順番に処理するための jQuery のループ！
    $(".fade-in-target").each(function () {
      // 現在のスクロール位置
      const scroll = $(window).scrollTop();
      // 画面の高さ
      const windowHeight = $(window).height();
      // 要素の位置（ページの一番上から）
      const offset = $(this).offset().top;

      if (scroll > offset - windowHeight + 100) {
        $(this).addClass("fade-in");
      }
    });
  });
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $(".item img").on("click", function () {
    const newSrc = $(this).attr("src");
    $(".modal-img").attr("src", newSrc);
    // フェードインでモーダルを表示
    $(".modal").fadeIn();
  });
  $(".modal-close").on("click", function () {
    // フェードアウトでモーダルを閉じる
    $(".modal").fadeOut();
  });
});
