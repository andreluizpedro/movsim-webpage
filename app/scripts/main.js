/* Author:
 Ralph Germ
 */

 var MovSim = MovSim || {};

 (function ($, ms) {
    "use strict";

    ms.init = function () {
        // var menuStructure = {
        //  About: {'title': 'about', 'url': 'about', selector: 'aboutsel' },
        //  Models: {'title': 'models', 'url': 'models', selector: 'modelsel' },
        //  Games: {'title': 'games', 'url': 'games', selector: 'gamessel' }
        //  ;

        // util.loadTemplate('navigation', $('#header'), function () {
        //     $('#nav a ').click(function (e) {
        //         e.preventDefault();
        //         console.log('click on a tag');
        //         var hrf = $(this).attr('href').replace('#', '');
        //         console.log('href: ', hrf);
        //         var selected = menuStructure[hrf].url;
        //         console.log('selected ', selected);
        //         UTIL.loadTemplate(selected, $('#content'));
        //     });
        // });
        //

// load first page
util.loadTemplate('contentMain', $('#main'));
util.loadTemplate('sidebar', $('#sidebar'));

addNavBarListeners();


function addNavBarListeners() {


    function bindListenerToMenuItem(id, template1, template2) {
        $(id).bind('click', function () {
            $('.nav li').each(function (index, value) {
                $(value).removeClass('active');
            });
            $(this).addClass('active');

            util.loadTemplate(template1, $('#main'));
            util.loadTemplate(template2, $('#sidebar'));
        });

    }
    
    bindListenerToMenuItem('#aboutsel', 'contentAbout', 'sidebarAbout');
    bindListenerToMenuItem('#homesel', 'contentMain', 'sidebar');
    bindListenerToMenuItem('#examplessel', 'contentExamples', 'sidebarExamples');

}
        // util.loadTemplate('footer', $('#footer'), function () {
        //     $('#footer a ').click(function (e) {
        //         e.preventDefault();
        //         var hrf = $(this).attr('href').replace('#', '');
        //         var selected = menuStructure[hrf].url;
        //         util.loadTemplate(selected, $('#content'));
        //     });
        // });
};
return ms;

}(window.jQuery, MovSim));
