<?php
/*
  Plugin Name: Photo Feed Gallery
  Plugin URI: http://photo-feed-gallery.codenhex.com/
  Description: Gutenberg Photo Feed Gallery the easiest way to add instagram feed without api or access token.
  Version: 1.0.2
  Author: CodenHex
  Author URI: http://codenhex.com

  * Photo Feed Gallery
  * @since Photo Feed Gallery 1.0.0
  * @package photo-feed-gallery
*/

if (! defined('ABSPATH')) {
    exit;
}

define('PHOTO_FEED_GALLERY_URL', plugins_url( '', __FILE__ ));

function insta_feed_gallery_begin()
{
    if (! function_exists('register_block_type')) {
        function insta_feed_gallery_required_gutenberg()
        {
            deactivate_plugins(plugin_basename(__FILE__));
            if (isset($_GET['activate'])) {
                unset($_GET['activate']);
            }
        }
       
        add_action('admin_init', 'insta_feed_gallery_required_gutenberg');
        add_action('admin_notices', 'insta_feed_gallery_required_gutenberg_notice');
    } else {
        function insta_feed_gallery_blocks() {
            wp_enqueue_script('instagram-feed', PHOTO_FEED_GALLERY_URL . '/assets/jquery.instagramFeed.min.js', array('jquery'), false);
            wp_enqueue_script('instagram-feed-run', PHOTO_FEED_GALLERY_URL . '/assets/script.js', array('jquery'), false);
            wp_enqueue_script('instagram-gallery-block-editor', PHOTO_FEED_GALLERY_URL . '/build/index.js', array('jquery', 'wp-blocks', 'wp-element', 'wp-editor', 'wp-i18n'), filemtime( plugin_dir_path( __FILE__ ) . '/build/index.js' ));
        }
        add_action('enqueue_block_editor_assets', 'insta_feed_gallery_blocks');

        function insta_feed_gallery_editor_assets() {
            wp_enqueue_style('instagram-gallery-block-editor-css', PHOTO_FEED_GALLERY_URL . '/build/style.css', array(), filemtime( plugin_dir_path( __FILE__ ) . '/build/style.css' ));
        }
        add_action('admin_enqueue_scripts', 'insta_feed_gallery_editor_assets');

        function insta_feed_gallery_assets() {
            wp_enqueue_style('instagram-gallery-css', PHOTO_FEED_GALLERY_URL . '/build/style.css', array(), filemtime( plugin_dir_path( __FILE__ ) . '/build/style.css' ));
            if(is_singular()){
                global $post;
                if(has_block('block/insta-feed-gallery',$post->ID)){
                    if(!wp_script_is( 'jquery' )){
                        wp_enqueue_script('jquery');
                    }
                    wp_enqueue_script('instagram-feed', PHOTO_FEED_GALLERY_URL . '/assets/jquery.instagramFeed.min.js', array('jquery'), false);
                    wp_enqueue_script('instagram-feed-run', PHOTO_FEED_GALLERY_URL . '/assets/script.js', array('jquery'), false);
                }
             }
        }
        add_action('wp_enqueue_scripts', 'insta_feed_gallery_assets');
    }
}

add_action('plugins_loaded', 'insta_feed_gallery_begin', 20);

function insta_feed_gallery_required_gutenberg_notice() { ?>
    <div class="error"><p><?php esc_html_e('Photo Feed Gallery deactivated! It need WordPress version higher than 5.0.0 or ', 'insta-feed-gallery'); ?> <a href="https://wordpress.org/plugins/gutenberg/"><?php esc_html_e('Gutenberg', 'insta-feed-gallery'); ?></a> <?php esc_html_e(' plugin to run.', 'insta-feed-gallery'); ?></p></div>
<?php }
