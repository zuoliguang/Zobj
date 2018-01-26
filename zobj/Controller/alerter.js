$(function(){
	$("#modal-default").iziModal({
        title: "主标题 欢迎使用 iziModal",
        subtitle: "副标题 简介",
        iconClass: 'icon-announcement',
        width: 700,
        padding: 20
    });

    $(document).on('click', '.trigger-default', function (event) {
        event.preventDefault();
        $('#modal-default').iziModal('open');
    });


    $("#modal-iframe").iziModal({
        title: 'iziModal with iframe',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        iconClass: 'icon-settings_system_daydream',
        transitionIn: 'transitionIn',
        transitionOut: 'transitionOut',
        headerColor: '#fff',
        theme: 'light',
        width: 1200,
        overlayClose: true,
        iframe : true
    });


    $(document).on('click', '.trigger-iframe', function (event) {
        event.preventDefault();
        //$('#modal-iframe').trigger('izi.open', this);
        $("#modal-iframe").iziModal('open', event);
    });


    $("#modal-custom").iziModal({
        overlayClose: false,
        width: 600,
        autoOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        onOpened: function() {
            console.log('onOpened');
        },
        onClosed: function() {
            console.log('onClosed');  
        }
    });

    $(document).on('click', '.trigger-custom', function (event) {
        event.preventDefault();
        $('#modal-custom').iziModal('open');
    });

    $("#modal-alert").iziModal({
        title: "Your message has been sent successfully",
        iconClass: 'icon-check',
        headerColor: '#5bbd72',
        width: 600
    });

    $(document).on('click', '.trigger-alert', function (event) {
        event.preventDefault();
        $('#modal-alert').iziModal('open');
    });

    $("#modal-alert2").iziModal({
        title: "Attention",
        subtitle: 'you are being disconnected..',
        iconClass: 'icon-power_settings_new',
        headerColor: '#BD5B5B',
        width: 600
    });

    $(document).on('click', '.trigger-alert2', function (event) {
        event.preventDefault();
        $('#modal-alert2').iziModal('open');
    });

    $("#modal-large").iziModal({
        title: "关于土地资源的文献综述",
        subtitle: "自然科学原理, 自然地理学, 土地资源稀缺耕地与经济建设用地引发艰难博弈.",
        iconClass: 'icon-chat',
        overlayColor: 'rgba(255, 255, 255, 0.4)',
        headerColor: '#334c7b',
        iconColor: '#00ffba',
        width: 700,
        padding: 20
    });

    $(document).on('click', '.trigger-large', function (event) {
        event.preventDefault();
        $('#modal-large').iziModal('open');
    });

    $(document).on('opening', '#modal-iframe', function (e) {
        //console.dir(e);
    });

    $(document).on('opened', '#modal-iframe', function (e) {
        //console.dir(e);
    });

    $(document).on('closing', '#modal-iframe', function (e) {
        //console.dir(e);
    });

    $(document).on('closed', '#modal-iframe', function (e) {
        //console.dir(e);
    });

    $("#modal-custom").on('click', 'header a', function(event) {
        event.preventDefault();
        var index = $(this).index();
        $(this).addClass('active').siblings('a').removeClass('active');
        $(this).parents("div").find("section").eq(index).removeClass('hide').siblings('section').addClass('hide');

        if( $(this).index() === 0 ){
            $("#modal-custom .iziModal-content .icon-close").css('background', '#ddd');
        } else {
            $("#modal-custom .iziModal-content .icon-close").attr('style', '');
        }
    });

    $("#modal-custom").on('click', '.submit', function(event) {
        event.preventDefault();

        var fx = "wobble",  //wobble shake
            $modal = $(this).closest('.iziModal');

        if( !$modal.hasClass(fx) ){
            $modal.addClass(fx);
            setTimeout(function(){
                $modal.removeClass(fx);
            }, 1500);
        }
    });
});