function loadPortfolio(){

    var page = $('#page_layers');

    var popupCanvas = $('#popup_canvas');
    var videoLayers = $('.video_layers');
    var videos = $('.videos');
    var scanVideo = $('#scan_video');
    var pluginVideo = $('#plugin_video');
    var gameVideo = $('#game_video');
    var motionJPG= $('#motion');
    var viewBTN = $('#view_btn');
    var demoBTN = $('#demo_btn');

    var currentChapter = null;

    var currentId ='';
    var scan = [];
    var plugin = [];
    var game = [];
    var web = [];
    var three = [];
    var bowling = [];
    var two = [];
    var cook = [];
    var awesome = [];
    var three_mobile = new Image();

    var step = 0;
    var closeBtn = $('#close_btn');
    var previousBtn = $('#previous_btn');
    var nextBtn = $('#next_btn');

    popupCanvas.css('width',parseInt(page.css('width'))/1.2 + 'px');
    popupCanvas.css('height',parseInt(page.css('width'))/1.7 + 'px');
    videoLayers.css('width',parseInt(page.css('width'))/1.2 + 'px');
    videos.css('width',parseInt(page.css('width'))/1.2 + 'px');
    videos.css('height',parseInt(page.css('width'))/1.7 + 'px');

    var init = function() {
        for (var i = 0; i < 7; i++) {
            scan.push(new Image());
            scan[i].src = 'img/profile/scan/scan' + i + '.png';
        }
        for (var j = 0; j < 6; j++) {
            plugin.push(new Image());
            plugin[j].src = 'img/profile/plugin/plugin' + j + '.png';
        }
        for (var k = 0; k < 10; k++) {
            game.push(new Image());
            game[k].src = 'img/profile/game/game' + k + '.png';
        }
        for (var l = 0; l < 5; l++) {
            web.push(new Image());
            web[l].src = 'img/profile/web/web' + l + '.png';
        }
        for (var m = 0; m < 3; m++) {
            three.push(new Image());
            three[m].src = 'img/profile/three/three' + m + '.png';
        }
        three_mobile.src = 'img/profile/three/three_mobile.png';
        for (var n = 0; n < 8; n++) {
            two.push(new Image());
            two[n].src = 'img/profile/two/two' + n + '.png';
        }
        for (var o = 0; o < 7; o++) {
            bowling.push(new Image());
            bowling[o].src = 'img/profile/bowling/bowling' + o + '.png';
        }
        for (var p = 0; p < 6; p++) {
            cook.push(new Image());
            cook[p].src = 'img/profile/cook/cook' + p + '.png';
        }
        for (var q = 0; q < 4; q++) {
            awesome.push(new Image());
            awesome[q].src = 'img/profile/awesome/awesome' + q + '.png';
        }
        listen();
    };

    var transitions = [
        "blind", "clip","drop","fade","fold","puff","scale","size","slide" ];

    function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    var popCanvas = document.getElementById('popup_canvas');
    var popCtx = popCanvas.getContext('2d');
    popupCanvas.show();
    closeBtn.css('left', popCanvas.offsetLeft + popCanvas.offsetWidth - parseInt(closeBtn.css('width')));
    closeBtn.css('top', popCanvas.offsetTop);
    previousBtn.css('left',popCanvas.offsetLeft - parseInt(previousBtn.css('width')));
    previousBtn.css('top', popCanvas.offsetTop + popCanvas.offsetHeight/2.2);
    nextBtn.css('left',popCanvas.offsetLeft + popCanvas.offsetWidth );
    nextBtn.css('top', popCanvas.offsetTop + popCanvas.offsetHeight/2.2);
    motionJPG.css('width',popCanvas.offsetWidth/3);
    motionJPG.css('height',popCanvas.offsetHeight/3);
    motionJPG.css('top',popCanvas.offsetTop + parseInt(motionJPG.css('height'))/1.5);
    motionJPG.css('left',popCanvas.offsetLeft + parseInt(motionJPG.css('width')));
    viewBTN.css('top',popCanvas.offsetTop - parseInt(viewBTN.css('height'))*1.2);
    viewBTN.css('left',popCanvas.offsetLeft + popCanvas.offsetWidth/2 - parseInt(viewBTN.css('width'))/2);
    demoBTN.css('top',popCanvas.offsetTop - parseInt(demoBTN.css('height'))*1.2);
    demoBTN.css('left',popCanvas.offsetLeft + popCanvas.offsetWidth/2 - parseInt(demoBTN.css('width'))/2);

    popupCanvas.hide();

    function drawCanvas () {

        popupCanvas.show();
        popCtx.clearRect(0,0,popCanvas.width,popCanvas.height);
        closeBtn.show("scale", 500);
        nextBtn.show("scale", 500);
        popCanvas.width = scan[0].width ;
        popCanvas.height = scan[0].height ;

        switch (currentId) {
            case 'scan':
                currentChapter = 'scan';
                demoBTN.hide();
                if(step <= 0){
                    step = 0;
                    demoBTN.show("scale", 300);
                    previousBtn.hide("scale", 500);
                    popCtx.drawImage(scan[step], 0,0,popCanvas.width,popCanvas.height);
                }
                else if(step >= 7){
                    step = 0;
                    drawCanvas();
                }
                else{
                    scanVideo[0].pause();
                    previousBtn.show("scale", 500);
                    videos.hide();
                    popCtx.drawImage(scan[step], 0,0,popCanvas.width,popCanvas.height);
                    popupCanvas.hide();
                    popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                }
                break;
            case 'plugin':
                currentChapter = 'plugin';
                demoBTN.hide();
                if(step <= 0){
                    step = 0;
                    demoBTN.show("scale", 300);
                    previousBtn.hide("scale", 500);
                    popCtx.drawImage(plugin[step], 0,0,popCanvas.width,popCanvas.height);
                }
                else if(step >= 6){
                    step = 0;
                    drawCanvas();
                }
                else{
                    pluginVideo[0].pause();
                    previousBtn.show("scale",500);
                    videos.hide();
                    popCtx.drawImage(plugin[step], 0,0,popCanvas.width,popCanvas.height);
                    popupCanvas.hide();
                    popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                }
                break;
            case 'game':
                currentChapter = 'game';
                demoBTN.hide();
                if(step <= 0){
                    step = 0;
                    demoBTN.show("scale", 300);
                    previousBtn.hide("scale", 500);
                    popCtx.drawImage(game[step], 0,0,popCanvas.width,popCanvas.height);
                }
                else if(step >= 10){
                    step = 0;
                    drawCanvas();
                }
                else{
                    gameVideo[0].pause();
                    previousBtn.show("scale", 500);
                    videos.hide();
                    popCtx.drawImage(game[step], 0,0,popCanvas.width,popCanvas.height);
                    popupCanvas.hide();
                    popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                }
                break;
            case 'web':
                if(step <= 0){
                    step = 0;
                    previousBtn.hide("scale", 500);
                }
                else if(step >= 5){
                    step = 0;
                }
                else{
                    previousBtn.show("scale",500);
                }
                popCtx.drawImage(web[step], 0,0,popCanvas.width,popCanvas.height);
                popupCanvas.hide();
                popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                break;
            case 'three':
                motionJPG.hide();
                viewBTN.hide();
                if(step <= 0){
                    step = 0;
                    previousBtn.hide("scale", 500);
                    if(window.isMobile){
                        popCtx.drawImage(three_mobile, 0,0,popCanvas.width,popCanvas.height);
                    }
                    else{
                        popCtx.drawImage(three[step], 0,0,popCanvas.width,popCanvas.height);
                        viewBTN.show("scale", 300);
                    }
                }else if (step == 2){
                    motionJPG.show("scale", 500);
                    popCtx.drawImage(three[step], 0,0,popCanvas.width,popCanvas.height);
                }
                else if(step >= 3){
                    step = 0;
                    drawCanvas();
                }
                else{
                    previousBtn.show("scale", 500);
                    popCtx.drawImage(three[step], 0,0,popCanvas.width,popCanvas.height);
                }
                popupCanvas.hide();
                popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)],300);
                break;
            case 'two':
                if(step <= 0){
                    step = 0;
                    previousBtn.hide("scale", 500);
                }
                else if(step >= 8){
                    step = 0;
                }
                else{
                    previousBtn.show("scale",500);
                }
                popCtx.drawImage(two[step], 0,0,popCanvas.width,popCanvas.height);
                popupCanvas.hide();
                popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                break;
            case 'bowling':
                if(step <= 0){
                    step = 0;
                    previousBtn.hide("scale", 500);
                }
                else if(step >= 7){
                    step = 0;
                }
                else{
                    previousBtn.show("scale",500);
                }
                popCtx.drawImage(bowling[step], 0,0,popCanvas.width,popCanvas.height);
                popupCanvas.hide();
                popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                break;
            case 'cook':
                if(step <= 0){
                    step = 0;
                    previousBtn.hide("scale", 500);
                }
                else if(step >= 6){
                    step = 0;
                }
                else{
                    previousBtn.show("scale",500);
                }
                popCtx.drawImage(cook[step], 0,0,popCanvas.width,popCanvas.height);
                popupCanvas.hide();
                popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                break;
            case 'awesome':
                if(step <= 0){
                    step = 0;
                    previousBtn.hide("scale", 500);
                }
                else if(step >= 4){
                    step = 0;
                }
                else{
                    previousBtn.show("scale",500);
                }
                popCtx.drawImage(awesome[step], 0,0,popCanvas.width,popCanvas.height);
                popupCanvas.hide();
                popupCanvas.show(transitions[randomFromTo(0, transitions.length - 1)], 300);
                break;
            default:
                break;
        }
    }

    function closeCanvas() {
        $('#detail').hide();
        scanVideo[0].pause();
        pluginVideo[0].pause();
        gameVideo[0].pause();
        motionJPG.hide();
        viewBTN.hide();
        demoBTN.hide();
        videos.hide();
        closeBtn.hide();
        previousBtn.hide();
        nextBtn.hide();
        popupCanvas.hide();
        $('.image').css('opacity','1').on('click', function(e){currentId = e.target.id;imageClicked()});
    }

    function imageClicked() {
        step = 0;
        $('.image').css('opacity','0.5').off();
        drawCanvas();
    }

    function viewGirlModel(){
        if(window.isMobile){
            console.log('Fail to load 3D content on mobile device!')
        }else{
            item = 'girl';
            webGLStart();
            freeCamera = true;
            $('#main_canvas').css('z-index',10);
            window.scrollTo(0,0);
            $('#unlock_camera_btn').val('Go Back');
            $('#camera_control_info').show();
        }
    }
    function viewDemo() {
        videos.show();
        popCtx.clearRect(0, 0, popCanvas.width, popCanvas.height);
        demoBTN.hide();
        switch (currentChapter) {
            case 'scan':
                pluginVideo.hide();
                gameVideo.hide();
                scanVideo[0].currentTime = 0.1;
                scanVideo[0].play();
                break;
            case 'plugin':
                scanVideo.hide();
                gameVideo.hide();
                pluginVideo[0].currentTime = 0.1;
                pluginVideo[0].play();
                break;
            case 'game':
                pluginVideo.hide();
                scanVideo.hide();
                gameVideo[0].currentTime = 0.1;
                gameVideo[0].play();
                break;
        }
    }

    function listen() {
        $('.image').on('click', function(e){currentId = e.target.id;imageClicked();console.log(e.target.id)});
        closeBtn.click(closeCanvas);
        previousBtn.click(function(){step--;drawCanvas()});
        nextBtn.click(function(){step++;drawCanvas()});
        $('.tab').click(closeCanvas);
        viewBTN.click(viewGirlModel);
        demoBTN.click(viewDemo);
    }
    init();
}
$(function() {
    // Portfolio gallery removed — the "Learning Hub" tab now embeds cissy0802.github.io.
    // loadPortfolio() intentionally not called (its DOM/canvas no longer exists).
    if (document.getElementById('popup_canvas')) {
        loadPortfolio();
    }
});


