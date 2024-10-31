(function($){
    'use strict';
    $.ch_instagram_photos = function(el){
        var base = this;
        base.$el = $(el);
        base.el = el;

        base.$el.data("ch_instagram_photos", base);

        base.init = function(){
            $(el).each(function(){
                $.instagramFeed({
                    'username': $(this).data('username'),
                    'container': $(this),
                    'display_profile': $(this).data('displayprofile'),
                    'display_biography': false,
                    'items': $(this).data('items'),
                    'items_per_row': $(this).data('itemsrow'),
                    'margin': 0,
                    'styling': false
                });
            });
        };

        base.init();
    };   
    
    $.fn.ch_instagram_photos = function(){
        return this.each(function(){
            (new $.ch_instagram_photos(this));
        });
    };
})(jQuery);

jQuery(window).on('load', function(){
    'use strict';
    jQuery('.ch-instagram-gallery').ch_instagram_photos();
});