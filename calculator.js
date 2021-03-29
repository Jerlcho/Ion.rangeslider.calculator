$(function () {

    //calculator 1 Website Design
    function calcWebsiteDesign() {
        let sum_result = 0;
        let number_of_pages = 1;
        let template_price = 150;

        let template_style_prices = { 0: 150, 1: 250, 2: 350, 3: 400, 4: 500 };

        $("#select_style_slider").ionRangeSlider({
            skin: 'round',
            values: [
                '$150', '$250', '$350', '$400', '$500'
            ],
            from: 1,
            grid: true,

            onStart: function (data) {
                template_price = template_style_prices[data.from];
                $('.price_design_block .price_design .price_design_sum').text(template_style_prices[data.from]);
            },

            onChange: function (data) {

                template_price = template_style_prices[data.from];
                let sum = (number_of_pages * 30) + template_price;
                // $('.price_design_block .price_design .price_design_sum').text(template_style_prices[data.from]);
                $('.price_design_block .price_design .price_design_sum').text(sum);




            },
        });

        $("#range_number_of_pages").ionRangeSlider({
            skin: 'round',
            min: 1,
            max: 25,
            from: 1,
            grid: true,
            grid_num: 5,

            onStart: function (data) {
                number_of_pages = data.from;
                let sum = (number_of_pages * 30) + template_price;
                $('.price_design_block .price_design .price_design_sum').text(sum);
            },

            onChange: function (data) {
                number_of_pages = data.from;
                let sum = (number_of_pages * 30) + template_price;
                $('.price_design_block .price_design .price_design_sum').text(sum);
            },

        });
    }

    calcWebsiteDesign();

    //calculator 2 Website Content
    function calcWebsiteContent() {

        let stock_images = 0;
        let copy_writing = 0;
        let sum_result = 0;
        let logo_design_prices = {0: 0, 1: 275, 2: 650, 3: 1000};
        let logo_design = 0;

        $('#stockImages_price').keyup(function() {
            stock_images = Number($(this).val());
            stock_images *= 10;
            $('.website_content_price_design_sum').text((stock_images + copy_writing) + logo_design);
        })
        $('#copywriting_price').keyup(function() {
            copy_writing = Number($(this).val());
            copy_writing *= 150;
            $('.website_content_price_design_sum').text((stock_images + copy_writing) + logo_design);
        })

        $('#logo_design').ionRangeSlider({
            skin: 'round',
            values: [ 'NO NEED', 'BASIC', 'MEDIUM', 'COMPLEX' ],
            from: 1,
            grid: true,

            onStart: function (data) {
                 logo_design = logo_design_prices[data.from];
                $('.website_content_price_design_sum').text((stock_images + copy_writing) + logo_design);
            },

            onChange: function (data) {
                 logo_design = logo_design_prices[data.from];
                $('.website_content_price_design_sum').text((stock_images + copy_writing) + logo_design);
            }
        });
    }

    calcWebsiteContent();


    //calculator 3 Ecommerce
    function calcEcommerce() {

        let ecommerce_costs = {0: 0, 1: 750, 2: 3500, 3: 7000};
        let e_cost_item = 0;

        $('#ecommerce_calc').ionRangeSlider({
            skin: 'round',
            values: [ 'No Need', '1-10', '11-100', '100+' ],
            from: 1,
            grid: true,

            onStart: function (data) {
                e_cost_item = ecommerce_costs[data.from];

                $('.ecommerce_footer .ecommerce_cost_sum').text(e_cost_item);
            },

            onChange: function (data) {
                e_cost_item = ecommerce_costs[data.from];
                $('.ecommerce_footer .ecommerce_cost_sum').text(e_cost_item);
            }
        });
    }

    calcEcommerce();

    // calculator 4 website add-ons
    function calcWebsiteAddons() {

        let sum_result = 0;

        $('.toggle_lead_generation input').change(function() {
            if($('.toggle_lead_generation div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }

            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_video_galleries input').change(function() {
            if($('.toggle_video_galleries div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_reservations input').change(function() {
            if($('.toggle_reservations div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_social_media input').change(function() {
            if($('.toggle_social_media div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_onsite_search input').change(function() {
            if($('.toggle_onsite_search div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_member_profiles input').change(function() {
            if($('.toggle_member_profiles div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_tracking input').change(function() {
            if($('.toggle_tracking div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_live_chat input').change(function() {
            if($('.toggle_live_chat div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        $('.toggle_blog input').change(function() {
            if($('.toggle_blog div.toggle').hasClass('off')) {
                sum_result -= 50;
            } else {
                sum_result += 50;
            }
            $('.website_addons_const_sum').text(sum_result);
        });

        
    }

    calcWebsiteAddons();


});
